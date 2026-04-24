"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqData = {
  product: [
    { q: "What is candidate screening software?", a: "Candidate screening software automates the early stages of hiring by evaluating applicants before live interviews. Instead of manually reviewing hundreds of resumes or scheduling dozens of phone screens, screening tools use a combination of video interviews, skills assessments, resume parsing, AI-generated summaries, and structured scoring to surface the best candidates faster." },
    { q: "What screening methods does Interview AI support?", a: "Interview AI supports four core screening methods: one-way video interviews, automated resume screening, structured talent assessments (Personality, Situational Judgment, and Environment Fit), and text-based qualification checks. You can use any combination of these methods for each role." },
    { q: "How does candidate screening software improve quality of hire?", a: "Screening software improves quality of hire by replacing unstructured evaluation with consistent, criteria-based assessment. Every candidate is measured against the same scoring rubric, reducing variability. Structured assessments surface alignment signals that resumes and phone screens miss entirely." },
    { q: "What's the difference between an ATS and candidate screening software?", a: "An applicant tracking system manages job postings and candidate pipelines. Candidate screening software focuses specifically on the evaluation layer — giving your team structured, comparable information before you invest time in live conversations." },
    { q: "Is Interview AI biased?", a: "Interview AI analyzes only transcripts of candidate responses. Demographic data isn't requested or used in scoring. Every match score includes transparent reasoning so your team can review and validate the AI's analysis, reducing unconscious bias." },
    { q: "How does Interview AI integrate with my applicant tracking system?", a: "Interview AI offers native integrations with Ashby, Breezy HR, and Indeed, with additional platforms available through Zapier's 7,000+ app library. Assessment results, match scores, and candidate data sync directly to your ATS candidate portal." },
    { q: "Does candidate screening software replace recruiters?", a: "No. Candidate screening software frees recruiters to do higher-value work. Instead of spending 75% of their time on manual tasks, recruiters can focus on sourcing, relationship-building, and closing." },
    { q: "Can Interview AI handle high-volume hiring?", a: "Yes. Interview AI is purpose-built for teams that need to screen large numbers of applicants efficiently. One recruiter using Interview AI can screen 5x more candidates compared to traditional methods." },
    { q: "Can I customize the candidate experience with my branding?", a: "Yes. Every candidate-facing screen can carry your logo, brand colors, and custom messaging, ensuring brand consistency throughout the screening process." },
    { q: "What types of companies use Interview AI?", a: "Interview AI is built for mid-market businesses — typically companies with 100 to 1000 employees. Common industries include healthcare, hospitality, retail, staffing, and technology." }
  ],
  support: [
    { q: "Do you offer onboarding or training?", a: "Yes. We're happy to walk you and your team through the platform on a live call. Interview AI is straightforward enough that most teams are self-sufficient after a few minutes." },
    { q: "What kind of support do you offer?", a: "Direct access to our team via email, phone, and live chat. We're a founder-led company, so you're often talking directly to the people who built the product." },
    { q: "How does Interview AI handle candidate data and compliance?", a: "All candidate information is stored in centralized profiles. Downloadable transcripts and exportable records support compliance reviews and data retention requirements." },
    { q: "How long does setup take?", a: "Most teams are live in under 15 minutes. Paste your job description, accept or customize AI-suggested questions, add your branding, and share the link." }
  ],
  pricing: [
    { q: "What does Interview AI cost?", a: "Interview AI starts at $99/month. No per-seat pricing, so your whole hiring team gets access. No long-term contracts required — start monthly and upgrade to annual when you've proven value." },
    { q: "Can I cancel anytime?", a: "On a monthly plan, yes — cancel anytime with no fees or penalties. We recommend starting monthly to prove the value first." },
    { q: "How does pricing compare to competitors?", a: "Most enterprise platforms charge thousands per year. Interview AI starts at $99/month because we built it for growing teams, not Fortune 500 procurement cycles." },
    { q: "Is there a free trial?", a: "Yes. Every Interview AI account starts with a free trial — no credit card required. You can create a position and run five candidates for free." },
    { q: "Do you offer custom pricing for larger teams?", a: "Yes. If you have lots of open positions or high interview volumes, we'll build a custom plan that fits your needs." }
  ]
};

function FAQAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", marginBottom: "8px" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "24px 0",
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          textAlign: "left"
        }}
      >
        <span style={{ fontSize: "1.1rem", fontWeight: 500, color: isOpen ? "#fff" : "rgba(255,255,255,0.8)" }}>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Plus size={16} color="rgba(255,255,255,0.4)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingBottom: "24px", fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, maxWidth: "700px" }}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("product");

  return (
    <section style={{ padding: "100px 24px", background: "#060212" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "100px", marginBottom: "20px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>FAQ</span>
          </div>
          <h2 style={{ fontSize: "3rem", fontWeight: 600, lineHeight: 1.2, marginBottom: "20px" }}>
            Tired of resumes that all look the same? <br/>We solve your screening problem
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)" }}>AI helps you prioritize candidates based on your criteria</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "12px", background: "rgba(255,255,255,0.04)", padding: "6px", borderRadius: "16px", marginBottom: "40px" }}>
            {["product", "support", "pricing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "12px 28px",
                  borderRadius: "12px",
                  border: "none",
                  background: activeTab === tab ? "#fff" : "transparent",
                  color: activeTab === tab ? "#000" : "rgba(255,255,255,0.4)",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "capitalize"
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ width: "100%", maxWidth: "800px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {faqData[activeTab as keyof typeof faqData].map((item, idx) => (
                  <FAQAccordion key={idx} question={item.q} answer={item.a} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
