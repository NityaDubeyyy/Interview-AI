"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./cockpit.module.css";
import { useInterview } from "@/context/InterviewContext";
import CameraPreview from "@/components/CameraPreview";
import {
  calculateSpeakingMetrics,
  aggregateInterviewMetrics,
  formatDuration,
  formatDurationHuman,
  SpeakingMetrics,
} from "@/utils/speechMetrics";
import {
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Send,
  RotateCcw,
  Bot,
  FileCheck,
  AlertTriangle,
  Award,
  Layers,
  Briefcase,
  Mic,
  MicOff,
  Activity,
  Gauge,
  Copy,
  Check,
  Info,
  Volume2,
} from "lucide-react";

const QUESTION_TIME_LIMIT = 90; // 90 seconds per question

export default function InterviewCockpitPage() {
  const router = useRouter();
  const {
    session,
    saveAnswer,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    submitForEvaluation,
    resetSession,
  } = useInterview();

  const {
    roleTitle,
    domain,
    experienceLevel,
    questions,
    currentQuestionIndex,
    answers,
    timeSpent,
    speakingMetrics,
    isCompleted,
  } = session;

  const currentQ = questions[currentQuestionIndex] || questions[0];

  // Local state for candidate answer & timer
  const [currentAnswerText, setCurrentAnswerText] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(QUESTION_TIME_LIMIT);
  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);
  const [showHints, setShowHints] = useState<boolean>(false);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const [showEvaluationModal, setShowEvaluationModal] = useState<boolean>(false);

  // Camera preview toggle state
  const [isCamOn, setIsCamOn] = useState<boolean>(true);
  const [isMicOn, setIsMicOn] = useState<boolean>(true);

  // Speech-to-Text (Web Speech API) States
  const [isSpeechSupported, setIsSpeechSupported] = useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordingDuration, setRecordingDuration] = useState<number>(0);
  const [interimTranscript, setInterimTranscript] = useState<string>("");
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [copiedReport, setCopiedReport] = useState<boolean>(false);

  const recognitionRef = useRef<any>(null);
  const isRecordingRef = useRef<boolean>(false);
  const recordingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check browser support for SpeechRecognition on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const supported = Boolean(
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      );
      setIsSpeechSupported(supported);
    }
  }, []);

  // Sync answer text & question state whenever question index changes
  useEffect(() => {
    if (currentQ) {
      // Stop active recording if moving between questions
      stopVoiceRecording();
      setCurrentAnswerText(answers[currentQ.id] || "");
      setTimeLeft(QUESTION_TIME_LIMIT);
      setRecordingDuration(0);
      setInterimTranscript("");
      setSpeechError(null);
      setIsTimerPaused(false);
      setShowHints(false);
    }
  }, [currentQuestionIndex, currentQ?.id]);

  // Clean up recognition and recording timers on unmount
  useEffect(() => {
    return () => {
      stopVoiceRecording();
    };
  }, []);

  // Live 90s Countdown Timer Effect
  useEffect(() => {
    if (isCompleted || showEvaluationModal || isTimerPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex, isCompleted, showEvaluationModal, isTimerPaused]);

  // Recording timer effect (tracks speech duration when mic is active)
  useEffect(() => {
    if (isRecording) {
      recordingTimerRef.current = setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
        recordingTimerRef.current = null;
      }
    }
    return () => {
      if (recordingTimerRef.current) {
        clearInterval(recordingTimerRef.current);
      }
    };
  }, [isRecording]);

  // Start voice recognition
  const startVoiceRecording = () => {
    setSpeechError(null);
    if (typeof window === "undefined") return;

    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSpeechSupported(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsRecording(true);
        isRecordingRef.current = true;
      };

      recognition.onresult = (event: any) => {
        let interim = "";
        let finalTrans = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const item = event.results[i];
          const transcriptPiece = item[0]?.transcript || "";
          if (item.isFinal) {
            finalTrans += transcriptPiece + " ";
          } else {
            interim += transcriptPiece;
          }
        }

        if (finalTrans) {
          setCurrentAnswerText((prev) => {
            const trimmedPrev = prev.trim();
            const trimmedFinal = finalTrans.trim();
            const combined = trimmedPrev ? `${trimmedPrev} ${trimmedFinal}` : trimmedFinal;
            // Also persist intermediate answer to context
            if (currentQ) {
              const spent = Math.max(1, QUESTION_TIME_LIMIT - timeLeft);
              const metrics = calculateSpeakingMetrics(combined, spent);
              saveAnswer(currentQ.id, combined, 0, metrics);
            }
            return combined;
          });
        }

        setInterimTranscript(interim);
      };

      recognition.onerror = (event: any) => {
        console.warn("SpeechRecognition error:", event.error);
        if (event.error === "not-allowed" || event.error === "service-not-allowed") {
          setSpeechError(
            "Microphone permission was denied. Please allow microphone access or type your answer directly."
          );
          stopVoiceRecording();
        } else if (event.error === "no-speech") {
          // Keep listening or let silence pass
        } else {
          setSpeechError(`Speech recognition notice: ${event.error}. You can continue typing.`);
        }
      };

      recognition.onend = () => {
        // If still flagged as recording, restart to keep continuous transcription active
        if (isRecordingRef.current) {
          try {
            recognition.start();
          } catch (e) {
            setIsRecording(false);
            isRecordingRef.current = false;
          }
        } else {
          setIsRecording(false);
          setInterimTranscript("");
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error("Failed to start SpeechRecognition", err);
      setSpeechError("Could not initialize microphone. Please type your response directly.");
      setIsRecording(false);
      isRecordingRef.current = false;
    }
  };

  // Stop voice recognition
  const stopVoiceRecording = () => {
    isRecordingRef.current = false;
    setIsRecording(false);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
      recognitionRef.current = null;
    }
    // Append any final trailing interim transcript if present
    if (interimTranscript.trim()) {
      setCurrentAnswerText((prev) => {
        const trimmedPrev = prev.trim();
        const combined = trimmedPrev ? `${trimmedPrev} ${interimTranscript.trim()}` : interimTranscript.trim();
        return combined;
      });
      setInterimTranscript("");
    }
  };

  // Toggle voice recognition
  const handleToggleVoice = () => {
    if (!isSpeechSupported) return;
    if (isRecording) {
      stopVoiceRecording();
    } else {
      startVoiceRecording();
    }
  };

  // Auto-save answer to context as candidate edits transcript or types
  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setCurrentAnswerText(text);
    if (currentQ) {
      const activeSeconds = Math.max(1, QUESTION_TIME_LIMIT - timeLeft);
      const metrics = calculateSpeakingMetrics(text, activeSeconds);
      saveAnswer(currentQ.id, text, 0, metrics);
    }
  };

  // Save answer and move to next question
  const handleNext = () => {
    stopVoiceRecording();
    if (currentQ) {
      const timeSpentOnThis = QUESTION_TIME_LIMIT - timeLeft;
      const durationToUse = Math.max(1, recordingDuration > 0 ? recordingDuration : timeSpentOnThis);
      const metrics = calculateSpeakingMetrics(currentAnswerText, durationToUse);
      saveAnswer(currentQ.id, currentAnswerText, timeSpentOnThis, metrics);
    }

    if (currentQuestionIndex < questions.length - 1) {
      nextQuestion();
    } else {
      // Final Question -> Open Evaluation Modal & Submit
      submitForEvaluation();
      setShowEvaluationModal(true);
    }
  };

  // Move to previous question
  const handlePrev = () => {
    stopVoiceRecording();
    if (currentQ) {
      const timeSpentOnThis = QUESTION_TIME_LIMIT - timeLeft;
      const durationToUse = Math.max(1, recordingDuration > 0 ? recordingDuration : timeSpentOnThis);
      const metrics = calculateSpeakingMetrics(currentAnswerText, durationToUse);
      saveAnswer(currentQ.id, currentAnswerText, timeSpentOnThis, metrics);
    }
    previousQuestion();
  };

  // Keyboard shortcut Ctrl+Enter / Cmd+Enter to advance
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  // Timer style helper
  const getTimerStyle = () => {
    if (timeLeft <= 15) return styles.timerCritical;
    if (timeLeft <= 30) return styles.timerWarning;
    return styles.timerNormal;
  };

  // Active duration for live metrics computation
  const activeDuration = Math.max(
    1,
    recordingDuration > 0 ? recordingDuration : QUESTION_TIME_LIMIT - timeLeft
  );

  // Live speaking metrics computed from current transcript
  const liveMetrics = useMemo(() => {
    return calculateSpeakingMetrics(currentAnswerText, activeDuration);
  }, [currentAnswerText, activeDuration]);

  // Aggregated metrics for results dashboard
  const aggregateResults = useMemo(() => {
    return aggregateInterviewMetrics(speakingMetrics, answers, timeSpent);
  }, [speakingMetrics, answers, timeSpent]);

  // Copy full interview transcript and metrics report to clipboard
  const handleCopyReport = () => {
    const lines: string[] = [
      `=== INTERVIEW AI PERFORMANCE & SPEAKING METRICS REPORT ===`,
      `Role: ${roleTitle} (${domain}) - Level: ${experienceLevel}`,
      `Completed: ${new Date().toLocaleString()}`,
      `Average Speaking Pace: ${aggregateResults.avgWpm} WPM (${aggregateResults.paceLabel})`,
      `Total Filler Words: ${aggregateResults.totalFillers} (um: ${aggregateResults.combinedFillers.um}, uh: ${aggregateResults.combinedFillers.uh}, like: ${aggregateResults.combinedFillers.like}, you know: ${aggregateResults.combinedFillers.youKnow})`,
      `Total Speaking Duration: ${formatDurationHuman(aggregateResults.totalDuration)}`,
      `Total Words: ${aggregateResults.totalWords}`,
      ``,
      `--- DETAILED QUESTION BREAKDOWN ---`,
    ];

    questions.forEach((q, idx) => {
      const ans = answers[q.id] || "(No answer recorded)";
      const m = speakingMetrics[q.id] || calculateSpeakingMetrics(ans, timeSpent[q.id] || 30);
      lines.push(`\nQ${idx + 1} [${q.category}]: ${q.question}`);
      lines.push(`Duration: ${formatDuration(m.durationSeconds)} | WPM: ${m.wpm} | Fillers: ${m.fillerCount}`);
      lines.push(`Transcript:\n${ans}\n`);
    });

    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopiedReport(true);
      setTimeout(() => setCopiedReport(false), 2500);
    });
  };

  // Helper to highlight filler words (um, uh, like, you know) in transcripts
  const renderHighlightedTranscript = (text: string) => {
    if (!text || !text.trim()) {
      return (
        <span style={{ color: "#64748b", fontStyle: "italic" }}>
          No response was recorded for this question.
        </span>
      );
    }

    const regex = /\b(um|uh|like|you\s+know)\b/gi;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(
        <span key={match.index} className={styles.highlightedFillerWord}>
          {match[0]}
        </span>
      );
      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return <>{parts}</>;
  };

  return (
    <main className={styles.cockpitWrapper}>
      {/* TOP COCKPIT NAVIGATION BAR */}
      <header className={styles.cockpitNavbar}>
        <div className={styles.navBrand}>
          <div className={styles.brandLogo}>
            <div
              style={{
                width: "22px",
                height: "22px",
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                transform: "rotate(45deg)",
                borderRadius: "4px",
              }}
            />
            <span>Interview AI</span>
          </div>
          <div className={styles.sessionTag}>
            {roleTitle} • {domain}
          </div>
        </div>

        <div className={styles.headerCenter}>
          {/* COUNTDOWN TIMER BADGE */}
          <div className={`${styles.timerBadge} ${getTimerStyle()}`}>
            <Clock size={18} />
            <span>{timeLeft > 0 ? `${timeLeft}s` : "0s (Time Limit Reached)"}</span>
          </div>
        </div>

        <div>
          <button
            type="button"
            className={styles.exitBtn}
            onClick={() => setShowExitModal(true)}
          >
            Exit Cockpit
          </button>
        </div>
      </header>

      {/* MAIN COCKPIT BODY */}
      <div className={styles.mainContainer}>
        {/* LEFT SECTION: QUESTION & ANSWER TEXTAREA */}
        <section className={styles.questionSection}>
          {/* Step Progress Bar */}
          <div className={styles.progressTracker}>
            <span className={styles.progressText}>
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <div className={styles.progressBarBg}>
              <div
                className={styles.progressBarFill}
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            <span style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
              {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete
            </span>
          </div>

          {/* QUESTION PROMPT CARD */}
          <div className={styles.questionCard}>
            <div className={styles.qHeader}>
              <span className={styles.categoryTag}>{currentQ.category}</span>
              <span style={{ fontSize: "0.85rem", color: "#a78bfa", fontWeight: 600 }}>
                Suggested Time: ~{currentQ.suggestedDurationMins} Mins
              </span>
            </div>

            <h2 className={styles.qPrompt}>{currentQ.question}</h2>

            <button
              type="button"
              className={styles.hintsToggle}
              onClick={() => setShowHints(!showHints)}
            >
              <HelpCircle size={16} />
              {showHints ? "Hide Guidance Hints" : "View Response Focus Hints"}
              {showHints ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {showHints && (
              <div className={styles.hintsBox}>
                <strong style={{ color: "#c084fc", display: "block", marginBottom: "0.4rem" }}>
                  Key Points to Cover:
                </strong>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", lineHeight: "1.5" }}>
                  {currentQ.keyPoints.map((kp, idx) => (
                    <li key={idx}>{kp}</li>
                  ))}
                </ul>
                <div style={{ marginTop: "0.5rem", fontStyle: "italic", color: "#cbd5e1" }}>
                  Hint: {currentQ.sampleHint}
                </div>
              </div>
            )}
          </div>

          {/* CANDIDATE ANSWER & SPEECH RECOGNITION CARD */}
          <div className={styles.answerCard}>
            <div className={styles.answerHeader}>
              <div className={styles.answerTitleGroup}>
                <div className={styles.answerTitle}>Your Response / Live Transcript</div>
                {isRecording && (
                  <div className={styles.recordingTimerBadge}>
                    <span className={styles.recDot} />
                    <span>REC {formatDuration(recordingDuration)}</span>
                  </div>
                )}
              </div>

              {/* VOICE CONTROLS & MIC BUTTON */}
              <div className={styles.voiceControlBar}>
                {isRecording && (
                  <div className={styles.soundWave} title="Audio active">
                    <span className={styles.soundBar} />
                    <span className={styles.soundBar} />
                    <span className={styles.soundBar} />
                    <span className={styles.soundBar} />
                    <span className={styles.soundBar} />
                  </div>
                )}

                <button
                  type="button"
                  className={`${styles.micBtn} ${
                    isRecording ? styles.micBtnRecording : ""
                  } ${!isSpeechSupported ? styles.micBtnDisabled : ""}`}
                  onClick={handleToggleVoice}
                  disabled={!isSpeechSupported}
                  title={
                    !isSpeechSupported
                      ? "Speech Recognition is not supported in this browser. Use text input."
                      : isRecording
                      ? "Click to stop recording"
                      : "Click to start voice answer (Speech-to-Text)"
                  }
                >
                  {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
                  <span>{isRecording ? "Stop Recording" : "Voice Answer"}</span>
                </button>
              </div>
            </div>

            {/* BROWSER FALLBACK NOTICE (If Web Speech API not supported) */}
            {!isSpeechSupported && (
              <div className={styles.speechFallbackNotice}>
                <Info size={18} style={{ flexShrink: 0 }} />
                <span>
                  <strong>Text Mode Fallback:</strong> Voice recognition (Web Speech API) is not supported in this browser (Chrome, Edge, or Safari recommended). You can type and edit your answer directly in the text area below.
                </span>
              </div>
            )}

            {/* ERROR BANNER */}
            {speechError && (
              <div className={styles.speechFallbackNotice} style={{ background: "rgba(239, 68, 68, 0.12)", borderColor: "rgba(239, 68, 68, 0.35)", color: "#fca5a5" }}>
                <AlertTriangle size={18} style={{ flexShrink: 0 }} />
                <span>{speechError}</span>
              </div>
            )}

            {/* LIVE STREAMING INTERIM TRANSCRIPT */}
            {interimTranscript && (
              <div className={styles.interimTranscriptStream}>
                <Activity size={16} className={styles.recDot} />
                <span style={{ fontStyle: "italic" }}>
                  &ldquo;{interimTranscript}&rdquo;
                </span>
              </div>
            )}

            {/* LIVE SPEAKING METRICS BAR */}
            <div className={styles.liveMetricsBar}>
              {/* Words Per Minute (WPM) */}
              <div className={styles.metricPill} title="Speaking pace in Words Per Minute">
                <Gauge size={14} color="#a78bfa" />
                <span>Pace:</span>
                <span
                  className={`${styles.metricValueHighlight} ${
                    liveMetrics.paceCategory === "optimal"
                      ? styles.metricStatusOptimal
                      : liveMetrics.paceCategory === "slow" || liveMetrics.paceCategory === "fast"
                      ? styles.metricStatusWarning
                      : ""
                  }`}
                >
                  {liveMetrics.wpm > 0 ? `${liveMetrics.wpm} WPM` : "— WPM"}
                </span>
              </div>

              {/* Filler Words Metric */}
              <div className={styles.metricPill} title="Monitored filler words (um, uh, like, you know)">
                <Volume2 size={14} color="#fbbf24" />
                <span>Fillers:</span>
                <span
                  className={`${styles.metricValueHighlight} ${
                    liveMetrics.fillerCount === 0
                      ? styles.metricStatusOptimal
                      : liveMetrics.fillerCount <= 3
                      ? styles.metricStatusWarning
                      : styles.metricStatusAlert
                  }`}
                >
                  {liveMetrics.fillerCount} detected
                </span>
                {liveMetrics.fillerCount > 0 && (
                  <div className={styles.fillersChipList}>
                    {liveMetrics.fillerBreakdown.um > 0 && (
                      <span className={styles.fillerChip}>um: {liveMetrics.fillerBreakdown.um}</span>
                    )}
                    {liveMetrics.fillerBreakdown.uh > 0 && (
                      <span className={styles.fillerChip}>uh: {liveMetrics.fillerBreakdown.uh}</span>
                    )}
                    {liveMetrics.fillerBreakdown.like > 0 && (
                      <span className={styles.fillerChip}>like: {liveMetrics.fillerBreakdown.like}</span>
                    )}
                    {liveMetrics.fillerBreakdown.youKnow > 0 && (
                      <span className={styles.fillerChip}>you know: {liveMetrics.fillerBreakdown.youKnow}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Answer Duration */}
              <div className={styles.metricPill} title="Duration spent speaking or answering">
                <Clock size={14} color="#60a5fa" />
                <span>Duration:</span>
                <span className={styles.metricValueHighlight} style={{ color: "#60a5fa" }}>
                  {formatDuration(activeDuration)}
                </span>
              </div>

              {/* Word Count */}
              <div className={styles.metricPill} style={{ marginLeft: "auto" }}>
                <span>{liveMetrics.wordCount} Words</span>
              </div>
            </div>

            {/* EDITABLE TRANSCRIPT TEXTAREA (User can edit live transcript before submitting) */}
            <textarea
              className={styles.answerTextarea}
              placeholder="Click 'Voice Answer' to dictate with your microphone, or type your response directly here. You can freely edit this transcript before submitting..."
              value={currentAnswerText}
              onChange={handleAnswerChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />

            <div className={styles.answerFooter}>
              <span>
                💡 Speak naturally or type. Transcripts and speaking metrics are computed live and can be edited anytime before submitting.
              </span>
              <span>
                Shortcut:{" "}
                <kbd
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  Ctrl + Enter
                </kbd>
              </span>
            </div>
          </div>
        </section>

        {/* RIGHT SECTION: LIVE CAMERA PREVIEW & NAVIGATION SIDEBAR */}
        <aside className={styles.sidebarSection}>
          {/* CAMERA PREVIEW FEED */}
          <CameraPreview
            isCamOn={isCamOn}
            isMicOn={isMicOn}
            onToggleCam={() => setIsCamOn(!isCamOn)}
            onToggleMic={() => setIsMicOn(!isMicOn)}
          />

          {/* QUESTIONS LIST NAVIGATION PANEL */}
          <div className={styles.stepsPanel}>
            <div className={styles.panelTitle}>Questions Overview</div>
            <div className={styles.stepsList}>
              {questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = Boolean(answers[q.id] && answers[q.id].trim().length > 0);
                const qMetric = speakingMetrics[q.id];

                return (
                  <div
                    key={q.id}
                    className={`${styles.stepItem} ${isCurrent ? styles.stepItemActive : ""} ${
                      isAnswered && !isCurrent ? styles.stepItemDone : ""
                    }`}
                    onClick={() => goToQuestion(idx)}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <span>
                        Q{idx + 1}. {q.category}
                      </span>
                      {qMetric && isAnswered && (
                        <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>
                          {qMetric.wpm > 0 ? `${qMetric.wpm} WPM` : `${qMetric.wordCount} words`} • {qMetric.fillerCount} fillers
                        </span>
                      )}
                    </div>
                    {isAnswered ? (
                      <CheckCircle2 size={16} color="#34d399" />
                    ) : isCurrent ? (
                      <span style={{ fontSize: "0.7rem", color: "#c084fc", fontWeight: 800 }}>
                        ACTIVE
                      </span>
                    ) : (
                      <span style={{ fontSize: "0.75rem", color: "#64748b" }}>Pending</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div className={styles.actionGroup}>
            <button
              type="button"
              className={styles.btnBack}
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
            >
              <ArrowLeft size={18} /> Prev
            </button>

            {currentQuestionIndex < questions.length - 1 ? (
              <button type="button" className={styles.btnNext} onClick={handleNext}>
                Next Question <ArrowRight size={18} />
              </button>
            ) : (
              <button type="button" className={styles.btnSubmit} onClick={handleNext}>
                Submit Evaluation <Send size={18} />
              </button>
            )}
          </div>
        </aside>
      </div>

      {/* EXIT CONFIRMATION MODAL */}
      {showExitModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <AlertTriangle size={48} color="#fbbf24" style={{ marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              Exit Interview Cockpit?
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginBottom: "1.75rem" }}>
              Your current transcripts and speaking metrics have been saved to your session context. You can return to resume anytime.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <button
                type="button"
                className={styles.btnBack}
                onClick={() => setShowExitModal(false)}
              >
                Resume Interview
              </button>
              <button
                type="button"
                className={styles.btnSubmit}
                onClick={() => router.push("/role-setup")}
              >
                Exit to Role Setup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* COMPREHENSIVE RESULTS & SPEAKING METRICS DASHBOARD */}
      {(showEvaluationModal || isCompleted) && (
        <div className={styles.modalOverlay}>
          <div className={styles.resultsDashboardModal}>
            {/* DASHBOARD HEADER */}
            <div className={styles.dashboardHeader}>
              <div className={styles.dashboardHeaderLeft}>
                <div className={styles.awardIconWrap}>
                  <Award size={32} color="white" />
                </div>
                <div>
                  <h2 className={styles.dashboardTitle}>Interview Performance Dashboard</h2>
                  <p className={styles.dashboardSubtitle}>
                    Role: <strong style={{ color: "#e2e8f0" }}>{roleTitle}</strong> • {domain} ({experienceLevel})
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                  type="button"
                  className={styles.btnBack}
                  onClick={handleCopyReport}
                  style={{ padding: "0.6rem 1rem", fontSize: "0.85rem" }}
                  title="Copy full transcripts and metrics to clipboard"
                >
                  {copiedReport ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                  <span>{copiedReport ? "Copied Report!" : "Copy Report"}</span>
                </button>
              </div>
            </div>

            {/* DASHBOARD SCROLLABLE BODY */}
            <div className={styles.dashboardBody}>
              {/* 4 SPEAKING METRICS SUMMARY CARDS */}
              <div className={styles.metricsSummaryGrid}>
                {/* 1. Words Per Minute (WPM) */}
                <div
                  className={`${styles.metricCard} ${
                    aggregateResults.paceCategory === "optimal" ? styles.metricCardOptimal : ""
                  }`}
                >
                  <div className={styles.metricCardHeader}>
                    <span>Average Speaking Pace</span>
                    <Gauge size={18} color="#a78bfa" />
                  </div>
                  <div className={styles.metricCardValue} style={{ color: "#a78bfa" }}>
                    {aggregateResults.avgWpm} <span style={{ fontSize: "1rem", fontWeight: 600 }}>WPM</span>
                  </div>
                  <div className={styles.metricCardSub}>
                    <Activity size={14} color="#34d399" />
                    <span>{aggregateResults.paceLabel}</span>
                  </div>
                </div>

                {/* 2. Filler-Word Count */}
                <div
                  className={`${styles.metricCard} ${
                    aggregateResults.totalFillers <= 3
                      ? styles.metricCardOptimal
                      : styles.metricCardWarning
                  }`}
                >
                  <div className={styles.metricCardHeader}>
                    <span>Filler Words Detected</span>
                    <Volume2 size={18} color="#fbbf24" />
                  </div>
                  <div className={styles.metricCardValue} style={{ color: "#fbbf24" }}>
                    {aggregateResults.totalFillers}
                  </div>
                  <div className={styles.metricCardSub}>
                    <span>{aggregateResults.overallFillerRate}% filler density rate</span>
                  </div>
                </div>

                {/* 3. Total Answer Duration */}
                <div className={styles.metricCard}>
                  <div className={styles.metricCardHeader}>
                    <span>Total Answer Duration</span>
                    <Clock size={18} color="#60a5fa" />
                  </div>
                  <div className={styles.metricCardValue} style={{ color: "#60a5fa" }}>
                    {formatDuration(aggregateResults.totalDuration)}
                  </div>
                  <div className={styles.metricCardSub}>
                    <span>Across {questions.length} interview questions</span>
                  </div>
                </div>

                {/* 4. Total Words Spoken */}
                <div className={styles.metricCard}>
                  <div className={styles.metricCardHeader}>
                    <span>Total Words</span>
                    <FileCheck size={18} color="#34d399" />
                  </div>
                  <div className={styles.metricCardValue} style={{ color: "#34d399" }}>
                    {aggregateResults.totalWords}
                  </div>
                  <div className={styles.metricCardSub}>
                    <span>100% completion verified</span>
                  </div>
                </div>
              </div>

              {/* MONITORED FILLER WORDS BREAKDOWN BAR */}
              <div className={styles.fillerBreakdownPanel}>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fef3c7" }}>
                    Monitored Filler Words Breakdown
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#cbd5e1" }}>
                    Real-time speech-to-text detection for common hesitation patterns:
                  </div>
                </div>

                <div className={styles.fillerTagsGroup}>
                  <span className={styles.fillerMetricTag}>
                    &ldquo;um&rdquo;: {aggregateResults.combinedFillers.um}
                  </span>
                  <span className={styles.fillerMetricTag}>
                    &ldquo;uh&rdquo;: {aggregateResults.combinedFillers.uh}
                  </span>
                  <span className={styles.fillerMetricTag}>
                    &ldquo;like&rdquo;: {aggregateResults.combinedFillers.like}
                  </span>
                  <span className={styles.fillerMetricTag}>
                    &ldquo;you know&rdquo;: {aggregateResults.combinedFillers.youKnow}
                  </span>
                </div>
              </div>

              {/* PER-QUESTION DETAILED TRANSCRIPT & METRICS BREAKDOWN */}
              <div>
                <h3 className={styles.sectionTitle}>
                  <Layers size={20} color="#a78bfa" />
                  Question-by-Question Transcript & Performance Analysis
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#94a3b8", margin: "0.25rem 0 1.25rem 0" }}>
                  Review your answers with detected filler words highlighted, individual WPM speaking pace, and response duration:
                </p>

                <div className={styles.questionBreakdownList}>
                  {questions.map((q, idx) => {
                    const ans = answers[q.id] || "";
                    const m =
                      speakingMetrics[q.id] ||
                      calculateSpeakingMetrics(ans, timeSpent[q.id] || 30);

                    return (
                      <div key={q.id} className={styles.questionReportCard}>
                        <div className={styles.reportCardTop}>
                          <div>
                            <span className={styles.categoryTag}>{q.category}</span>
                            <h4 className={styles.reportQPrompt}>
                              Q{idx + 1}. {q.question}
                            </h4>
                          </div>

                          <div className={styles.reportMetricsRow}>
                            <div className={styles.reportPill}>
                              <Clock size={13} color="#60a5fa" />
                              <span>{formatDuration(m.durationSeconds)}</span>
                            </div>
                            <div className={styles.reportPill}>
                              <Gauge size={13} color="#a78bfa" />
                              <span>{m.wpm > 0 ? `${m.wpm} WPM` : "— WPM"}</span>
                            </div>
                            <div
                              className={styles.reportPill}
                              style={{
                                color: m.fillerCount > 0 ? "#fbbf24" : "#34d399",
                                borderColor:
                                  m.fillerCount > 0
                                    ? "rgba(245, 158, 11, 0.4)"
                                    : "rgba(16, 185, 129, 0.4)",
                              }}
                            >
                              <Volume2 size={13} />
                              <span>{m.fillerCount} Fillers</span>
                            </div>
                            <div className={styles.reportPill}>
                              <span>{m.wordCount} Words</span>
                            </div>
                          </div>
                        </div>

                        {/* TRANSCRIPT WITH FILLER HIGHLIGHTING */}
                        <div>
                          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#94a3b8", marginBottom: "0.4rem" }}>
                            Candidate Transcript / Response:
                          </div>
                          <div className={styles.transcriptContainer}>
                            {renderHighlightedTranscript(ans)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* DASHBOARD FOOTER ACTIONS */}
            <div className={styles.dashboardFooter}>
              <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
                Session completed • Ready for AI scoring and self-reflection
              </span>

              <div style={{ display: "flex", gap: "1rem" }}>
                <button
                  type="button"
                  className={styles.btnBack}
                  onClick={() => {
                    setShowEvaluationModal(false);
                    resetSession();
                    router.push("/role-setup");
                  }}
                >
                  <RotateCcw size={16} /> New Session Setup
                </button>

                <button
                  type="button"
                  className={styles.btnSubmit}
                  onClick={() => {
                    setShowEvaluationModal(false);
                    router.push("/practice-interview");
                  }}
                >
                  <FileCheck size={16} /> Return to Practice Arena
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
