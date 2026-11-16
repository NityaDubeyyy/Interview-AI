"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./role-setup.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useInterview } from "@/context/InterviewContext";
import {
  DOMAINS,
  EXPERIENCE_LEVELS,
  generateInterviewQuestions,
  InterviewQuestion,
  DomainOption
} from "@/data/question-bank";
import {
  Briefcase,
  Layers,
  Terminal,
  BarChart,
  Code,
  Network,
  Cpu,
  Brain,
  Shield,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Copy,
  Check,
  Play,
  RotateCcw,
  Clock,
  Target,
  FileCheck
} from "lucide-react";

export default function RoleSetupPage() {
  const router = useRouter();
  const { startSession } = useInterview();

  // Form State
  const [roleTitle, setRoleTitle] = useState<string>("Software Engineer");
  const [selectedDomain, setSelectedDomain] = useState<string>("frontend");
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced'>("intermediate");

  // Flow State
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<string>("Analyzing role configuration...");
  const [questions, setQuestions] = useState<InterviewQuestion[] | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState<boolean>(false);

  // Quick preset role options
  const currentDomainObj = DOMAINS.find((d) => d.id === selectedDomain) || DOMAINS[0];

  const handlePresetRole = (role: string) => {
    setRoleTitle(role);
  };

  const handleDomainSelect = (domain: DomainOption) => {
    setSelectedDomain(domain.id);
    // Auto preset first popular role if user hasn't typed custom
    if (domain.popularRoles.length > 0) {
      setRoleTitle(domain.popularRoles[0]);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setLoadingStep("Analyzing role configuration & requirements...");

    setTimeout(() => {
      setLoadingStep("Querying question bank for domain & level context...");
    }, 600);

    setTimeout(() => {
      setLoadingStep("Synthesizing 5-8 targeted interview questions...");
    }, 1200);

    setTimeout(() => {
      const generated = generateInterviewQuestions(
        roleTitle || currentDomainObj.popularRoles[0],
        selectedDomain,
        selectedLevel
      );
      setQuestions(generated);
      setIsGenerating(false);
    }, 1800);
  };

  const handleReset = () => {
    setQuestions(null);
  };

  const handleCopyQuestions = () => {
    if (!questions) return;
    const text = questions
      .map(
        (q, idx) =>
          `Q${idx + 1} [${q.category} - ${q.suggestedDurationMins}m]: ${q.question}\nKey Points: ${q.keyPoints.join(", ")}\n`
      )
      .join("\n");

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderDomainIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers size={22} />;
      case "Terminal":
        return <Terminal size={22} />;
      case "BarChart":
        return <BarChart size={22} />;
      case "Code":
        return <Code size={22} />;
      case "Network":
        return <Network size={22} />;
      case "Cpu":
        return <Cpu size={22} />;
      case "Brain":
        return <Brain size={22} />;
      case "Shield":
        return <Shield size={22} />;
      default:
        return <Code size={22} />;
    }
  };

  return (
    <main className={styles.pageWrapper}>
      <Navbar />

      <div className={styles.container}>
        {/* HEADER */}
        <header className={styles.header}>
          <div className={styles.badge}>
            <Sparkles size={14} /> AI Interview Setup Engine
          </div>
          <h1 className={styles.title}>Target Role & Interview Setup</h1>
          <p className={styles.subtitle}>
            Select your target job title, technical domain, and experience level to generate a customized set of 5 to 8 relevant interview questions.
          </p>
        </header>

        {/* SETUP FORM VIEW */}
        {!isGenerating && !questions && (
          <div className={styles.setupCard}>
            {/* STEP 1: JOB TITLE & ROLE */}
            <div className={styles.sectionGroup}>
              <div className={styles.sectionHeader}>
                <div className={styles.stepNumber}>1</div>
                <h2 className={styles.sectionTitle}>Target Job Title / Role</h2>
                <span className={styles.sectionDesc}>Custom title or select a preset</span>
              </div>

              <div className={styles.roleInputWrapper}>
                <Briefcase size={20} className={styles.roleInputIcon} />
                <input
                  type="text"
                  className={styles.roleInput}
                  placeholder="e.g. Senior Frontend Architect, React Engineer..."
                  value={roleTitle}
                  onChange={(e) => setRoleTitle(e.target.value)}
                />
              </div>

              <div className={styles.presetChips}>
                <span style={{ fontSize: "0.8rem", color: "#64748b", alignSelf: "center", marginRight: "0.25rem" }}>
                  Presets:
                </span>
                {currentDomainObj.popularRoles.map((role) => (
                  <button
                    key={role}
                    type="button"
                    className={`${styles.chip} ${roleTitle === role ? styles.chipActive : ""}`}
                    onClick={() => handlePresetRole(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: DOMAIN SELECTION */}
            <div className={styles.sectionGroup}>
              <div className={styles.sectionHeader}>
                <div className={styles.stepNumber}>2</div>
                <h2 className={styles.sectionTitle}>Choose Domain</h2>
                <span className={styles.sectionDesc}>Focus area for technical questions</span>
              </div>

              <div className={styles.domainGrid}>
                {DOMAINS.map((domain) => {
                  const isActive = selectedDomain === domain.id;
                  return (
                    <div
                      key={domain.id}
                      className={`${styles.domainCard} ${isActive ? styles.domainCardActive : ""}`}
                      onClick={() => handleDomainSelect(domain)}
                    >
                      <div className={styles.domainHeader}>
                        <div className={styles.domainIconBox}>{renderDomainIcon(domain.iconName)}</div>
                        {isActive && <CheckCircle2 size={20} color="#8b5cf6" />}
                      </div>
                      <div className={styles.domainTitle}>{domain.name}</div>
                      <div className={styles.domainDesc}>{domain.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: EXPERIENCE LEVEL */}
            <div className={styles.sectionGroup}>
              <div className={styles.sectionHeader}>
                <div className={styles.stepNumber}>3</div>
                <h2 className={styles.sectionTitle}>Experience Level</h2>
                <span className={styles.sectionDesc}>Calibrates difficulty & expectations</span>
              </div>

              <div className={styles.levelGrid}>
                {EXPERIENCE_LEVELS.map((level) => {
                  const isActive = selectedLevel === level.id;
                  return (
                    <div
                      key={level.id}
                      className={`${styles.levelCard} ${isActive ? styles.levelCardActive : ""}`}
                      onClick={() => setSelectedLevel(level.id)}
                    >
                      <div className={styles.levelBadge} style={{ backgroundColor: level.badgeColor }}>
                        {level.experienceRange}
                      </div>
                      <div className={styles.levelTitle}>{level.name}</div>
                      <div className={styles.levelDesc}>{level.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button type="button" className={styles.submitBtn} onClick={handleGenerate}>
              <Sparkles size={20} /> Generate Interview Questions <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* LOADING STATE */}
        {isGenerating && (
          <div className={styles.loadingBox}>
            <div className={styles.spinner} />
            <div className={styles.loadingText}>{loadingStep}</div>
            <div className={styles.loadingSubtext}>
              Building tailored questions for <strong>{roleTitle || "Target Role"}</strong> ({selectedLevel.toUpperCase()} level)
            </div>
          </div>
        )}

        {/* GENERATED QUESTIONS RESULT SCREEN */}
        {!isGenerating && questions && (
          <div>
            <div className={styles.resultsHeader}>
              <div>
                <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>
                  Generated Interview Question Set
                </h2>
                <div className={styles.resultsMeta}>
                  <div className={styles.summaryPill}>
                    <Target size={15} color="#a78bfa" />
                    <strong>Role:</strong> {roleTitle || currentDomainObj.popularRoles[0]}
                  </div>
                  <div className={styles.summaryPill}>
                    <Layers size={15} color="#a78bfa" />
                    <strong>Domain:</strong> {currentDomainObj.name}
                  </div>
                  <div className={styles.summaryPill}>
                    <Clock size={15} color="#a78bfa" />
                    <strong>Level:</strong> {selectedLevel.toUpperCase()}
                  </div>
                  <div className={styles.summaryPill}>
                    <FileCheck size={15} color="#10b981" />
                    <strong>Count:</strong> {questions.length} Questions
                  </div>
                </div>
              </div>

              <div className={styles.resultsActions}>
                <button type="button" className={styles.btnSecondary} onClick={handleCopyQuestions}>
                  {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  {copied ? "Copied!" : "Copy All"}
                </button>
                <button type="button" className={styles.btnSecondary} onClick={handleGenerate}>
                  <RefreshCw size={16} /> Regenerate
                </button>
                <button type="button" className={styles.btnSecondary} onClick={handleReset}>
                  <RotateCcw size={16} /> Modify Setup
                </button>
              </div>
            </div>

            {/* QUESTIONS LIST */}
            <div className={styles.questionsGrid}>
              {questions.map((q, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={q.id} className={styles.questionCard}>
                    <div className={styles.qTopRow}>
                      <span className={styles.qNumberBadge}>Question {idx + 1} of {questions.length}</span>
                      <div className={styles.qTags}>
                        <span className={styles.catBadge}>{q.category}</span>
                        <span className={styles.durationBadge}>~{q.suggestedDurationMins} Mins</span>
                      </div>
                    </div>

                    <div className={styles.qText}>{q.question}</div>

                    <button
                      type="button"
                      className={styles.expandToggle}
                      onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    >
                      {isExpanded ? (
                        <>
                          Hide Key Points & Evaluation Hints <ChevronUp size={16} />
                        </>
                      ) : (
                        <>
                          View Key Points & Hints <ChevronDown size={16} />
                        </>
                      )}
                    </button>

                    {isExpanded && (
                      <div className={styles.qDetails}>
                        <div className={styles.detailTitle}>Key Expected Evaluation Criteria:</div>
                        <ul className={styles.pointsList}>
                          {q.keyPoints.map((point, pIdx) => (
                            <li key={pIdx}>{point}</li>
                          ))}
                        </ul>

                        <div className={styles.detailTitle}>Suggested Answer Focus / Hint:</div>
                        <div className={styles.hintBox}>{q.sampleHint}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* BOTTOM ACTION BAR */}
            <div className={styles.bottomBar}>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "white" }}>Ready to launch your interview?</div>
                <div style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
                  Start an interactive voice & camera simulation with these {questions.length} questions.
                </div>
              </div>

              <button
                type="button"
                className={styles.launchBtn}
                onClick={() => {
                  if (questions) {
                    startSession(
                      roleTitle || currentDomainObj.popularRoles[0],
                      currentDomainObj.name,
                      selectedLevel,
                      questions
                    );
                    router.push("/interview-cockpit");
                  }
                }}
              >
                <Play size={18} /> Launch Interview Cockpit
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
