export interface Feature {
  name: string;
  truffle: boolean;
  competitor: boolean;
  highlight?: boolean;
}

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatarBg: string;
}

export interface PricingFeature {
  title: string;
  desc: string;
}

export interface ComparisonData {
  slug: string;
  competitorName: string;
  competitorDisplayName: string;
  logoType: 'text' | 'svg' | 'styled-div';
  logoContent: string;
  logoStyle?: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  dashboardTooltips: {
    top: string;
    right: string;
    bottom: string;
  };
  gradientColors: string;
  features: Feature[];
  deepDiveCards: {
    iconEmoji: string;
    title: string;
    desc: string;
  }[];
  testimonials: Testimonial[];
  pricingFeatures: PricingFeature[];
}

export const comparisons: Record<string, ComparisonData> = {
  "truffle-vs-willo": {
    slug: "truffle-vs-willo",
    competitorName: "willo",
    competitorDisplayName: "Willo",
    logoType: "styled-div",
    logoContent: "w",
    logoStyle: "color: #8b5cf6; font-size: 32px; font-family: cursive; font-weight: bold; line-height: 1; padding: 0 4px",
    badge: "Willo Alternative",
    heroTitle: "The Willo<br />alternative that doesn't<br />start at $249",
    heroSubtitle: "Same one-way video interviews. Built-in AI analysis. Highlight<br />reels that cut review time by 80%. All at a fraction of the price.",
    dashboardTooltips: {
      top: "AI summaries Willo charges extra for",
      right: "Willo just shows completions, Truffle shows fit",
      bottom: "30 seconds vs watching full Willo recordings"
    },
    gradientColors: "linear-gradient(135deg, #a7f3d0 0%, #38bdf8 50%, #818cf8 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "Willo gives you a folder of videos to watch. Truffle watches them alongside you, analyzes communication skills, and surfaces the best candidates instantly." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-spark-hire": {
    slug: "truffle-vs-spark-hire",
    competitorName: "spark-hire",
    competitorDisplayName: "Spark Hire",
    logoType: "svg",
    logoContent: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    logoStyle: "color: #f97316",
    badge: "Spark Hire Alternative",
    heroTitle: "Spark Hire does async.<br />Truffle does async<br />with a brain.",
    heroSubtitle: "Both do async. Truffle adds AI-ranked shortlists so you<br />review smarter, not longer.",
    dashboardTooltips: {
      top: "AI analysis Spark Hire lacks",
      right: "Spark Hire shows completions, Truffle shows fit",
      bottom: "30 seconds vs watching full Spark Hire recordings"
    },
    gradientColors: "linear-gradient(135deg, #fed7aa 0%, #fdba74 50%, #fb923c 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "Spark Hire does async. Truffle does async with a brain." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-hireflix": {
    slug: "truffle-vs-hireflix",
    competitorName: "hireflix",
    competitorDisplayName: "Hireflix",
    logoType: "styled-div",
    logoContent: "H",
    logoStyle: "background: #ec4899; color: white; padding: 4px 8px; border-radius: 6px; font-weight: bold; font-size: 18px; line-height: 1",
    badge: "Hireflix Alternative",
    heroTitle: "Hireflix is built for<br />Europe.<br />Truffle is built for you.",
    heroSubtitle: "Hireflix is built for Europe. Truffle is built for<br />teams who want AI-powered screening anywhere.",
    dashboardTooltips: {
      top: "AI analysis Hireflix lacks",
      right: "Hireflix shows completions, Truffle shows fit",
      bottom: "30 seconds vs watching full Hireflix recordings"
    },
    gradientColors: "linear-gradient(135deg, #fbcfe8 0%, #f9a8d4 50%, #f472b6 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "Hireflix is built for Europe. Truffle is built for teams who want AI-powered screening anywhere." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-hirevue": {
    slug: "truffle-vs-hirevue",
    competitorName: "hirevue",
    competitorDisplayName: "HireVue",
    logoType: "styled-div",
    logoContent: "h✦",
    logoStyle: "display: flex; align-items: center",
    badge: "HireVue Alternative",
    heroTitle: "Enterprise power<br />without the enterprise<br />rollout",
    heroSubtitle: "Same one-way video interviews. Built-in AI analysis. Highlight<br />reels that cut review time by 80%. Set up in minutes, not months.",
    dashboardTooltips: {
      top: "Set up in minutes, not months like HireVue",
      right: "Enterprise features at startup pricing",
      bottom: "No implementation fees or sales calls"
    },
    gradientColors: "linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 50%, #d8b4fe 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "HireVue requires enterprise rollout. Truffle gives you enterprise power with instant setup." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-vidcruiter": {
    slug: "truffle-vs-vidcruiter",
    competitorName: "vidcruiter",
    competitorDisplayName: "VidCruiter",
    logoType: "styled-div",
    logoContent: "Vid",
    logoStyle: "background: #16a34a; color: white; padding: 4px 6px; border-radius: 6px; font-weight: bold; font-size: 18px; line-height: 1",
    badge: "VidCruiter Alternative",
    heroTitle: "Skip the sales calls<br />and implementation fees",
    heroSubtitle: "Same AI screening. Fraction of the friction. Get set up in<br />minutes, not months. No implementation fees.",
    dashboardTooltips: {
      top: "No implementation fees like VidCruiter",
      right: "Same AI screening, fraction of the friction",
      bottom: "Skip the sales calls"
    },
    gradientColors: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #86efac 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "VidCruiter requires sales calls and implementation. Truffle gives you the same AI screening with instant setup." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-jobma": {
    slug: "truffle-vs-jobma",
    competitorName: "jobma",
    competitorDisplayName: "Jobma",
    logoType: "styled-div",
    logoContent: "▶",
    logoStyle: "color: #84cc16; border: 3px solid #84cc16; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px",
    badge: "Jobma Alternative",
    heroTitle: "The Jobma alternative<br />that connects the dots",
    heroSubtitle: "Jobma offers video + assessments. Truffle's AI analysis<br />connects the dots between them for smarter hiring.",
    dashboardTooltips: {
      top: "AI connects the dots between video and assessments",
      right: "Jobma shows data, Truffle shows insights",
      bottom: "30 seconds vs watching full Jobma recordings"
    },
    gradientColors: "linear-gradient(135deg, #ecfccb 0%, #d9f99d 50%, #bef264 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "Jobma offers video + assessments. Truffle's AI analysis connects the dots between them for smarter hiring." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-testgorilla": {
    slug: "truffle-vs-testgorilla",
    competitorName: "testgorilla",
    competitorDisplayName: "TestGorilla",
    logoType: "svg",
    logoContent: "M12 2a9 9 0 0 0-9 9c0 3.39 1.88 6.34 4.67 7.9A4.5 4.5 0 0 1 12 16a4.5 4.5 0 0 1 4.33 2.9C19.12 17.34 21 14.39 21 11a9 9 0 0 0-9-9z",
    logoStyle: "color: #d946ef",
    badge: "TestGorilla Alternative",
    heroTitle: "Tests measure skills.<br />Truffle reveals the whole<br />candidate",
    heroSubtitle: "TestGorilla measures technical skills. Truffle reveals<br />communication, thinking, and fit. The complete picture.",
    dashboardTooltips: {
      top: "TestGorilla measures skills, Truffle reveals the whole candidate",
      right: "Communication, thinking, and fit analysis",
      bottom: "The complete picture, not just test scores"
    },
    gradientColors: "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: false },
      { name: "Custom Questions & Branding", truffle: true, competitor: false },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "TestGorilla measures skills. Truffle reveals the whole candidate—communication, thinking, and fit." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-myinterview": {
    slug: "truffle-vs-myinterview",
    competitorName: "myinterview",
    competitorDisplayName: "myInterview",
    logoType: "svg",
    logoContent: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
    logoStyle: "color: #ef4444",
    badge: "myInterview Alternative",
    heroTitle: "myInterview is building<br />an AI assistant.<br />Truffle built a hiring brain.",
    heroSubtitle: "myInterview is building an AI assistant. Truffle built a hiring<br />brain to help make the right choice.",
    dashboardTooltips: {
      top: "Truffle built a hiring brain, not just an assistant",
      right: "Help make the right choice, not just answer questions",
      bottom: "AI-powered decision support"
    },
    gradientColors: "linear-gradient(135deg, #fee2e2 0%, #fecdd3 50%, #fca5a5 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "myInterview is building an AI assistant. Truffle built a hiring brain to help make the right choice." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-indeed": {
    slug: "truffle-vs-indeed",
    competitorName: "indeed",
    competitorDisplayName: "Indeed",
    logoType: "styled-div",
    logoContent: "i",
    logoStyle: "color: #2563eb; font-size: 36px; font-weight: bold; font-style: italic; line-height: 1",
    badge: "Indeed Alternative",
    heroTitle: "\"Good enough\" video<br />is just video.<br />Truffle adds the brain.",
    heroSubtitle: "Indeed offers video interviews. Truffle adds the brain—and<br />works across your entire stack.",
    dashboardTooltips: {
      top: "Truffle adds the brain to video interviews",
      right: "Works across your entire stack",
      bottom: "AI-powered insights, not just recordings"
    },
    gradientColors: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: false },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "Indeed offers video interviews. Truffle adds the brain—and works across your entire stack." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-workable": {
    slug: "truffle-vs-workable",
    competitorName: "workable",
    competitorDisplayName: "Workable",
    logoType: "styled-div",
    logoContent: "w",
    logoStyle: "color: #059669; font-size: 32px; font-family: serif; font-weight: bold; line-height: 1",
    badge: "Workable Alternative",
    heroTitle: "Built-in screening is<br />convenient.<br />Specialized is transformative.",
    heroSubtitle: "Workable offers built-in screening. Truffle offers specialized<br />screening that transforms your hiring process.",
    dashboardTooltips: {
      top: "Specialized screening, not just built-in",
      right: "Transformative vs convenient",
      bottom: "AI-powered decision support"
    },
    gradientColors: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 50%, #6ee7b7 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: false },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "Workable offers built-in screening. Truffle offers specialized screening that transforms your hiring process." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-screeninghive": {
    slug: "truffle-vs-screeninghive",
    competitorName: "screeninghive",
    competitorDisplayName: "ScreeningHive",
    logoType: "svg",
    logoContent: "M12 2l8.66 5v10L12 22l-8.66-5V7z",
    logoStyle: "color: #22c55e",
    badge: "ScreeningHive Alternative",
    heroTitle: "You like one-way<br />interviews.<br />We make them smarter.",
    heroSubtitle: "You like one-way interviews, but want a faster way to<br />review and shortlist. Truffle delivers.",
    dashboardTooltips: {
      top: "Faster way to review and shortlist",
      right: "One-way interviews made smarter",
      bottom: "AI-powered rankings for faster decisions"
    },
    gradientColors: "linear-gradient(135deg, #dcfce7 0%, #bbf7d0 50%, #86efac 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: true },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "You like one-way interviews, but want a faster way to review and shortlist. Truffle delivers." },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
  "truffle-vs-vervoe": {
    slug: "truffle-vs-vervoe",
    competitorName: "vervoe",
    competitorDisplayName: "Vervoe",
    logoType: "styled-div",
    logoContent: "V",
    logoStyle: "background: #1d4ed8; color: white; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 20px; line-height: 1",
    badge: "Vervoe Alternative",
    heroTitle: "Do you need a skills<br />test library, or do you<br />need to hire faster?",
    heroSubtitle: "Do you need a skills test library, or do you need a faster<br />way to screen communication and fit?",
    dashboardTooltips: {
      top: "Faster way to screen communication and fit",
      right: "Skills test library vs hiring faster",
      bottom: "AI-powered communication and fit analysis"
    },
    gradientColors: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)",
    features: [
      { name: "Asynchronous Video Interviews", truffle: true, competitor: false },
      { name: "Custom Questions & Branding", truffle: true, competitor: true },
      { name: "ATS Integrations", truffle: true, competitor: true },
      { name: "AI-Powered Candidate Ranking", truffle: true, competitor: false, highlight: true },
      { name: "Automated Communication Analysis", truffle: true, competitor: false, highlight: true },
      { name: "Smart Shortlisting", truffle: true, competitor: false, highlight: true },
      { name: "Fraud & Deepfake Detection", truffle: true, competitor: false, highlight: true },
    ],
    deepDiveCards: [
      { iconEmoji: "🧠", title: "Intelligence, not just inbox", desc: "Do you need a skills test library, or do you need a faster way to screen communication and fit?" },
      { iconEmoji: "⏱️", title: "Cut screening time by 80%", desc: "Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster." },
      { iconEmoji: "🛡️", title: "Advanced Fraud Detection", desc: "With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks." },
    ],
    testimonials: [
      { name: "Shannon Rechter", title: "HR Generalist", company: "Waldron Private Wealth", quote: "Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit.", avatarBg: "#e2e8f0" },
      { name: "Laura Williams", title: "Founder & CEO", company: "InSync Media", quote: "As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours.", avatarBg: "#dcfce3" },
      { name: "Maggie Rivers", title: "Sales Recruiter", company: "Classic Country Land", quote: "We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us.", avatarBg: "#ffedd5" },
      { name: "Aldila Nimas", title: "Education Recruiter", company: "Pribadi School", quote: "Not only has Truffle reduced the time it takes us to hire, their team has been great to work with.", avatarBg: "#fee2e2" },
    ],
    pricingFeatures: [
      { title: "AI Summaries & Match Scores", desc: "Every candidate response is summarized with a match score and reasoning so you can prioritize your review." },
      { title: "Async Video Interviews & Candidate Shorts", desc: "Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available." },
      { title: "Skills & Fit Assessments", desc: "Surface how candidates approach real situations and whether their work preferences align with your environment." },
      { title: "Unlimited users & team collaboration", desc: "Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place." },
    ],
  },
};

export function getComparisonBySlug(slug: string): ComparisonData | undefined {
  return comparisons[slug];
}

export function getAllComparisons(): ComparisonData[] {
  return Object.values(comparisons);
}
