"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { InterviewQuestion, generateInterviewQuestions } from "@/data/question-bank";
import { SpeakingMetrics } from "@/utils/speechMetrics";

export interface InterviewSession {
  roleTitle: string;
  domain: string;
  experienceLevel: string;
  questions: InterviewQuestion[];
  currentQuestionIndex: number;
  answers: Record<string, string>; // questionId -> answer text
  timeSpent: Record<string, number>; // questionId -> seconds spent
  speakingMetrics: Record<string, SpeakingMetrics>; // questionId -> speaking metrics (WPM, fillers, duration)
  isCompleted: boolean;
  submittedAt: string | null;
}

interface InterviewContextType {
  session: InterviewSession;
  startSession: (roleTitle: string, domain: string, experienceLevel: string, customQuestions?: InterviewQuestion[]) => void;
  saveAnswer: (questionId: string, answerText: string, secondsSpent: number, metrics?: SpeakingMetrics) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  submitForEvaluation: () => void;
  resetSession: () => void;
}

const STORAGE_KEY = "interview_ai_active_session";

const defaultQuestions = generateInterviewQuestions("Software Engineer", "frontend", "intermediate");

const initialSessionState: InterviewSession = {
  roleTitle: "Software Engineer",
  domain: "Frontend Development",
  experienceLevel: "Intermediate",
  questions: defaultQuestions,
  currentQuestionIndex: 0,
  answers: {},
  timeSpent: {},
  speakingMetrics: {},
  isCompleted: false,
  submittedAt: null,
};

const InterviewContext = createContext<InterviewContextType | undefined>(undefined);

export const InterviewProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<InterviewSession>(initialSessionState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          setSession({
            ...initialSessionState,
            ...parsed,
            speakingMetrics: parsed.speakingMetrics || {},
          });
        }
      }
    } catch (e) {
      console.warn("Failed to parse saved interview session", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save state to localStorage whenever session updates
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
      } catch (e) {
        console.warn("Failed to persist interview session", e);
      }
    }
  }, [session, isLoaded]);

  const startSession = (
    roleTitle: string,
    domain: string,
    experienceLevel: string,
    customQuestions?: InterviewQuestion[]
  ) => {
    const questionsToUse =
      customQuestions && customQuestions.length > 0
        ? customQuestions
        : generateInterviewQuestions(roleTitle, domain, experienceLevel as any);

    const newSession: InterviewSession = {
      roleTitle,
      domain,
      experienceLevel,
      questions: questionsToUse,
      currentQuestionIndex: 0,
      answers: {},
      timeSpent: {},
      speakingMetrics: {},
      isCompleted: false,
      submittedAt: null,
    };

    setSession(newSession);
  };

  const saveAnswer = (
    questionId: string,
    answerText: string,
    secondsSpent: number,
    metrics?: SpeakingMetrics
  ) => {
    setSession((prev) => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionId]: answerText,
      },
      timeSpent: {
        ...prev.timeSpent,
        [questionId]: (prev.timeSpent[questionId] || 0) + secondsSpent,
      },
      speakingMetrics: {
        ...prev.speakingMetrics,
        ...(metrics ? { [questionId]: metrics } : {}),
      },
    }));
  };

  const nextQuestion = () => {
    setSession((prev) => {
      if (prev.currentQuestionIndex < prev.questions.length - 1) {
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
        };
      }
      return prev;
    });
  };

  const previousQuestion = () => {
    setSession((prev) => {
      if (prev.currentQuestionIndex > 0) {
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex - 1,
        };
      }
      return prev;
    });
  };

  const goToQuestion = (index: number) => {
    setSession((prev) => {
      if (index >= 0 && index < prev.questions.length) {
        return {
          ...prev,
          currentQuestionIndex: index,
        };
      }
      return prev;
    });
  };

  const submitForEvaluation = () => {
    setSession((prev) => ({
      ...prev,
      isCompleted: true,
      submittedAt: new Date().toISOString(),
    }));
  };

  const resetSession = () => {
    const resetState: InterviewSession = {
      ...initialSessionState,
      questions: generateInterviewQuestions("Software Engineer", "frontend", "intermediate"),
      speakingMetrics: {},
    };
    setSession(resetState);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn("Failed to clear localStorage session", e);
    }
  };

  return (
    <InterviewContext.Provider
      value={{
        session,
        startSession,
        saveAnswer,
        nextQuestion,
        previousQuestion,
        goToQuestion,
        submitForEvaluation,
        resetSession,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterview = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error("useInterview must be used within an InterviewProvider");
  }
  return context;
};
