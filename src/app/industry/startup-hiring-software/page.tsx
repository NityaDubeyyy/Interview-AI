"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import LogoCloud from "@/components/LogoCloud";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, Plus, 
} from "lucide-react";

export default function StartupHiringPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "feature1",
      navLabel: "Resume screening",
      title: "Get to signal before the interview starts",
      description: "The tech resume is broken. Half your applicants used AI to write theirs, and they all list the same frameworks in the same order. Truffle surfaces experience highlights and alignment signals for every candidate — so your team can quickly see who's worth a closer look.",
      bullets: [
        "Surface candidates with relevant technical experience, frameworks, and domain knowledge",
        "Flag key qualifications like certifications, availability, and location match",
        "Every candidate stays visible — nothing gets auto-rejected"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6992fffaa5c997ed8052cfce_Untitled%20design%20(1).png",
      imageAlt: "Tech resume analysis interface"
    },
    {
      id: "feature2",
      navLabel: "Async video interviews",
      title: "Replace the scheduling nightmare with a single link",
      description: "You're not short on applicants anymore — you're short on time to evaluate them. Phone screening 200 people isn't a strategy, it's a death march. Send one link. Candidates record answers when it works for them. Your team reviews when they're ready.",
      bullets: [
        "Candidates complete interviews from any device, anytime",
        "Average completion takes under 15 minutes",
        "Completion itself is signal — if they'll spend 10 minutes, they're serious"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985b7ebb2e4b058976aec54_async%20video%20interviews.svg",
      imageAlt: "Async video interview platform"
    },
    {
      id: "feature3",
      navLabel: "Talent assessments",
      title: "Find out how candidates actually solve problems before the first round",
      description: "When every resume looks the same, you need a different signal. Truffle's assessments surface alignment between candidates and your team's approach — so your technical interviews focus on people whose problem-solving style actually fits how you build.",
      bullets: [
        "Situational judgment scenarios based on real situations",
        "Environment fit assessment to align expectations before day one",
        "No trick questions — candidates respond honestly, you see the alignment"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985ba56d27c7b40226aaf91_assessments.svg",
      imageAlt: "Technical problem solving scorecard"
    },
    {
      id: "feature4",
      navLabel: "AI review tools",
      title: "Review 100 candidates in the time it used to take to phone screen 1",
      description: "Truffle's AI summarizes every interview, scores alignment with your role, and pulls key moments into a 30-second Candidate Short. You get the signal fast — then decide who's worth a real conversation.",
      bullets: [
        "AI summaries of every candidate response",
        "Match scores with reasoning — see exactly why each score was given",
        "Candidate Shorts highlight key moments — full interviews always available"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985b91d7f2f0007067a4be1_ai%20review.svg",
      imageAlt: "AI review interface"
    }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = features.findIndex(f => f.id === entry.target.id);
            if (index !== -1) setActiveFeature(index);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    features.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <main style={{ background: "#060212", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* 1. Hero Section */}
      <section style={{ padding: "180px 24px 100px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", opacity: 0.1, zIndex: 0 }}>
          <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "80%", background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", filter: "blur(120px)" }} />
        </div>
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(255, 255, 255, 0.05)", padding: "8px 16px", borderRadius: "100px", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "32px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255, 255, 255, 0.6)" }}>startup hiring software</span>
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.04em" }}>
            Screen thousands of applicants without burying your team
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255, 255, 255, 0.6)", maxWidth: "800px", margin: "0 auto 48px", lineHeight: 1.6 }}>
            Every tech role now gets hundreds of applications — half of them AI-polished and impossible to tell apart on paper. Truffle gives you async interviews, AI summaries, and match scores so you find the real signal in the noise.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button style={{ background: "#fff", color: "#000", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
              Start free trial <ArrowRight size={20} />
            </button>
            <button style={{ background: "rgba(255, 255, 255, 0.05)", color: "#fff", padding: "16px 32px", borderRadius: "12px", fontWeight: 600, border: "1px solid rgba(255, 255, 255, 0.1)", cursor: "pointer" }}>
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* 2. Benefits Cards */}
      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { label: "Resume screening (coming soon)", sub: "Surface qualified candidates before interviews even start" },
            { label: "Async video interviews", sub: "Candidates respond on their time — no scheduling required" },
            { label: "Talent assessments", sub: "See how candidates align with your role and environment" },
            { label: "AI Summaries & Match Scores", sub: "Review candidates in minutes, not hours" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, background: "rgba(255, 255, 255, 0.05)" }}
              style={{ padding: "24px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)", cursor: "pointer" }}
            >
              <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>{card.label}</div>
              <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.4)", lineHeight: 1.4 }}>{card.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <div style={{ marginTop: '2rem', paddingBottom: '2rem', position: 'relative', zIndex: 10 }}>
        <LogoCloud title="Join thousands of forward-thinking recruitment teams" />
      </div>

      <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.05)", margin: "40px 0" }} />

      {/* 3. Detailed Features Section with Tabs */}
      <section id="features" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "250px 1fr", gap: "80px" }}>
          {/* Side Nav */}
          <div style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "12px", height: "fit-content" }}>
            {features.map((f, i) => (
              <button 
                key={f.id}
                onClick={() => document.getElementById(f.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                style={{ 
                  textAlign: "left",
                  padding: "16px 20px", 
                  borderRadius: "12px", 
                  cursor: "pointer", 
                  color: activeFeature === i ? "#a78bfa" : "rgba(255, 255, 255, 0.4)",
                  background: activeFeature === i ? "rgba(139, 92, 246, 0.1)" : "transparent",
                  fontWeight: 600,
                  border: "none",
                  transition: "all 0.2s"
                }}
              >
                {f.navLabel}
              </button>
            ))}
          </div>

          {/* Feature Display */}
          <div style={{ display: "flex", flexDirection: "column", gap: "150px" }}>
            {features.map((f, i) => (
              <div key={f.id} id={f.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", scrollMarginTop: "150px" }}>
                <div>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "24px", lineHeight: 1.2 }}>
                    {f.title}
                  </h2>
                  <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.6, marginBottom: "32px" }}>
                    {f.description}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {f.bullets.map((bullet, idx) => (
                      <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Check size={12} color="#10b981" />
                        </div>
                        <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.5 }}>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderRadius: "24px", overflow: "hidden", background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)", padding: "24px" }}>
                  <img src={f.image} alt={f.imageAlt} style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Metrics Section */}
      <section style={{ padding: "100px 24px", background: "rgba(255, 255, 255, 0.02)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(139, 92, 246, 0.1)", padding: "4px 12px", borderRadius: "100px", marginBottom: "24px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "#8B5CF6" }}>get started today</span>
            </div>
            <h2 style={{ fontSize: "3rem", fontWeight: 600, lineHeight: 1.1, marginBottom: "40px" }}>Switching takes 10 minutes. No IT tickets. No onboarding calls.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "8px" }}>10 min</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.4)" }}>The time it takes to launch</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "8px" }}>0</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.4)" }}>The amount of time wasted</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "8px" }}>+2.1x</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.4)" }}>Faster time-to-hire on average</div>
              </div>
            </div>
          </div>
          <div>
            <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0d0c_metrics.avif" alt="Metrics" style={{ width: "100%", borderRadius: "24px", filter: "invert(42%) sepia(34%) saturate(2256%) hue-rotate(228deg) brightness(101%) contrast(95%)" }} />
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <FAQSection />

      {/* 6. Traditional Assessments Banner */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
            borderRadius: "40px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "80px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center"
          }}>
            <div>
              <div style={{ display: "inline-block", background: "rgba(139, 92, 246, 0.1)", padding: "4px 12px", borderRadius: "100px", marginBottom: "24px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#8B5CF6", textTransform: "uppercase" }}>candidate screening for the age of ai</span>
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "24px", lineHeight: 1.2 }}>
                Traditional assessments are broken. AI can fake them in seconds.
              </h2>
              <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "32px" }}>
                Getting polished take-home responses that don't match interview performance? With Truffle's talent assessment software, you finally see the real candidate with no scripts and no AI assistance.
              </p>
              <button style={{ background: "#fff", color: "#000", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, border: "none" }}>
                Start free trial
              </button>
            </div>
            <div>
              <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985bb617119879180082645_cta%20.svg" alt="Banner" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
