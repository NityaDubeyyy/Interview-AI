"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./cockpit.module.css";
import { useInterview } from "@/context/InterviewContext";
import CameraPreview from "@/components/CameraPreview";
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
  Briefcase
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

  // Sync answer text whenever question index changes or session loads
  useEffect(() => {
    if (currentQ) {
      setCurrentAnswerText(answers[currentQ.id] || "");
      setTimeLeft(QUESTION_TIME_LIMIT);
      setIsTimerPaused(false);
      setShowHints(false);
    }
  }, [currentQuestionIndex, currentQ?.id]);

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

  // Auto-save answer to context as user types
  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setCurrentAnswerText(text);
    if (currentQ) {
      saveAnswer(currentQ.id, text, 0);
    }
  };

  // Save answer and move to next question
  const handleNext = () => {
    if (currentQ) {
      const timeSpentOnThis = QUESTION_TIME_LIMIT - timeLeft;
      saveAnswer(currentQ.id, currentAnswerText, timeSpentOnThis);
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
    if (currentQ) {
      const timeSpentOnThis = QUESTION_TIME_LIMIT - timeLeft;
      saveAnswer(currentQ.id, currentAnswerText, timeSpentOnThis);
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

  // Word count & char count calculations
  const wordCount = currentAnswerText.trim() ? currentAnswerText.trim().split(/\s+/).length : 0;
  const charCount = currentAnswerText.length;

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
          <div className={styles.sessionTag}>{roleTitle} • {domain}</div>
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

          {/* CANDIDATE ANSWER INPUT CARD */}
          <div className={styles.answerCard}>
            <div className={styles.answerHeader}>
              <div className={styles.answerTitle}>Your Response / Notes</div>
              <div className={styles.counterBadge}>
                {wordCount} Words | {charCount} Characters
              </div>
            </div>

            <textarea
              className={styles.answerTextarea}
              placeholder="Type your structured response here... (Press Ctrl + Enter to advance)"
              value={currentAnswerText}
              onChange={handleAnswerChange}
              onKeyDown={handleKeyDown}
              autoFocus
            />

            <div className={styles.answerFooter}>
              <span>Answers are automatically saved to your interview context</span>
              <span>Shortcut: <kbd style={{ background: "rgba(255,255,255,0.1)", padding: "2px 6px", borderRadius: "4px" }}>Ctrl + Enter</kbd></span>
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
                return (
                  <div
                    key={q.id}
                    className={`${styles.stepItem} ${isCurrent ? styles.stepItemActive : ""} ${
                      isAnswered && !isCurrent ? styles.stepItemDone : ""
                    }`}
                    onClick={() => goToQuestion(idx)}
                  >
                    <span>
                      Q{idx + 1}. {q.category}
                    </span>
                    {isAnswered ? (
                      <CheckCircle2 size={16} color="#34d399" />
                    ) : isCurrent ? (
                      <span style={{ fontSize: "0.7rem", color: "#c084fc", fontWeight: 800 }}>ACTIVE</span>
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
              Your current answers have been saved to your session context. You can return to resume anytime.
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

      {/* SUBMISSION EVALUATION MODAL */}
      {(showEvaluationModal || isCompleted) && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem auto",
                boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)",
              }}
            >
              <Award size={36} color="white" />
            </div>

            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              Interview Session Submitted!
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginBottom: "2rem" }}>
              Congratulations! Your responses for <strong>{roleTitle}</strong> ({domain}) have been recorded and saved.
            </p>

            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "1.25rem",
                marginBottom: "2rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1rem",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#34d399" }}>
                  {Object.keys(answers).length} / {questions.length}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Questions Answered</div>
              </div>
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#a78bfa" }}>
                  {Object.values(answers).reduce((acc, text) => acc + (text.trim() ? text.trim().split(/\s+/).length : 0), 0)}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Total Words Typed</div>
              </div>
              <div>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#60a5fa" }}>
                  100%
                </div>
                <div style={{ fontSize: "0.75rem", color: "#64748b" }}>Completion Score</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
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
                <FileCheck size={16} /> View Practice Arena
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
