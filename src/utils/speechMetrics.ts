/**
 * Utility functions for voice answers and speaking metrics computation:
 * - Words per minute (WPM)
 * - Filler word counting and breakdown (um, uh, like, you know, etc.)
 * - Answer duration formatting
 * - Speech pace evaluation
 */

export interface FillerBreakdown {
  um: number;
  uh: number;
  like: number;
  youKnow: number;
  [key: string]: number;
}

export interface SpeakingMetrics {
  durationSeconds: number;
  wordCount: number;
  wpm: number;
  fillerCount: number;
  fillerBreakdown: FillerBreakdown;
  paceCategory: "slow" | "optimal" | "fast" | "inactive";
  paceLabel: string;
  fillerRatePercent: number;
}

/**
 * Normalizes text and counts word tokens
 */
export function countWords(text: string): number {
  if (!text || !text.trim()) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Formats duration in seconds to mm:ss or human-readable format
 */
export function formatDuration(seconds: number): string {
  const safeSeconds = Math.max(0, Math.round(seconds));
  const mins = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function formatDurationHuman(seconds: number): string {
  const safeSeconds = Math.max(0, Math.round(seconds));
  const mins = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  if (mins === 0) return `${secs}s`;
  return `${mins}m ${secs}s`;
}

/**
 * Counts occurrences of a regex in a string
 */
function countRegexMatches(text: string, regex: RegExp): number {
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

/**
 * Calculates speaking metrics for a given transcript and answer duration
 */
export function calculateSpeakingMetrics(text: string, durationSeconds: number): SpeakingMetrics {
  const safeDuration = Math.max(0, durationSeconds);
  const wordCount = countWords(text);

  // Compute filler words (focus on um, uh, like, you know)
  // Using word boundary \b to avoid false positives (e.g. "umbrella", "alike")
  const umCount = countRegexMatches(text, /\bum\b/gi);
  const uhCount = countRegexMatches(text, /\buh\b/gi);
  const likeCount = countRegexMatches(text, /\blike\b/gi);
  const youKnowCount = countRegexMatches(text, /\byou\s+know\b/gi);

  const fillerBreakdown: FillerBreakdown = {
    um: umCount,
    uh: uhCount,
    like: likeCount,
    youKnow: youKnowCount,
  };

  const fillerCount = umCount + uhCount + likeCount + youKnowCount;

  // Words per minute (WPM)
  // Standard speech is typically 120-160 WPM
  let wpm = 0;
  if (safeDuration > 0 && wordCount > 0) {
    const minutes = safeDuration / 60;
    wpm = Math.round(wordCount / minutes);
  }

  // Pace categorization
  let paceCategory: SpeakingMetrics["paceCategory"] = "inactive";
  let paceLabel = "No Speech";

  if (wordCount > 0 && safeDuration > 0) {
    if (wpm < 110) {
      paceCategory = "slow";
      paceLabel = "Deliberate / Slow (< 110 WPM)";
    } else if (wpm <= 160) {
      paceCategory = "optimal";
      paceLabel = "Optimal Conversational Pace (110–160 WPM)";
    } else {
      paceCategory = "fast";
      paceLabel = "Rapid / Fast (> 160 WPM)";
    }
  }

  const fillerRatePercent = wordCount > 0 ? Math.round((fillerCount / wordCount) * 1000) / 10 : 0;

  return {
    durationSeconds: safeDuration,
    wordCount,
    wpm,
    fillerCount,
    fillerBreakdown,
    paceCategory,
    paceLabel,
    fillerRatePercent,
  };
}

/**
 * Aggregates metrics across multiple questions
 */
export function aggregateInterviewMetrics(
  metricsRecord: Record<string, SpeakingMetrics>,
  fallbackAnswers?: Record<string, string>,
  fallbackTimeSpent?: Record<string, number>
) {
  let totalDuration = 0;
  let totalWords = 0;
  let totalFillers = 0;
  const combinedFillers: FillerBreakdown = {
    um: 0,
    uh: 0,
    like: 0,
    youKnow: 0,
  };

  const questionIds = new Set([
    ...Object.keys(metricsRecord || {}),
    ...Object.keys(fallbackAnswers || {}),
  ]);

  questionIds.forEach((qId) => {
    let m = metricsRecord?.[qId];
    if (!m && fallbackAnswers?.[qId]) {
      const duration = fallbackTimeSpent?.[qId] || 30;
      m = calculateSpeakingMetrics(fallbackAnswers[qId], duration);
    }

    if (m) {
      totalDuration += m.durationSeconds;
      totalWords += m.wordCount;
      totalFillers += m.fillerCount;
      combinedFillers.um += m.fillerBreakdown.um || 0;
      combinedFillers.uh += m.fillerBreakdown.uh || 0;
      combinedFillers.like += m.fillerBreakdown.like || 0;
      combinedFillers.youKnow += m.fillerBreakdown.youKnow || 0;
    }
  });

  const avgWpm = totalDuration > 0 && totalWords > 0 ? Math.round(totalWords / (totalDuration / 60)) : 0;

  let paceCategory: SpeakingMetrics["paceCategory"] = "inactive";
  let paceLabel = "No Speech";

  if (totalWords > 0 && totalDuration > 0) {
    if (avgWpm < 110) {
      paceCategory = "slow";
      paceLabel = "Deliberate / Slow Pace";
    } else if (avgWpm <= 160) {
      paceCategory = "optimal";
      paceLabel = "Ideal Conversational Pace (110–160 WPM)";
    } else {
      paceCategory = "fast";
      paceLabel = "Rapid Pace";
    }
  }

  const overallFillerRate = totalWords > 0 ? Math.round((totalFillers / totalWords) * 1000) / 10 : 0;

  return {
    totalDuration,
    totalWords,
    avgWpm,
    totalFillers,
    combinedFillers,
    paceCategory,
    paceLabel,
    overallFillerRate,
  };
}
