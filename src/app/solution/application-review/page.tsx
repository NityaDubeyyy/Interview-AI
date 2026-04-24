"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, PlayCircle, Eye, Users, Zap, Search, Fingerprint, CalendarClock, ChevronRight, Check, Bot, Target, BrainCircuit, Activity, Sparkles, Sliders, Clock, GitMerge } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  })
};

export default function ApplicationReviewPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#060212", color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* BACKGROUND SWOOP LINES OVERLAY */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "120vh", overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        {/* Fake SVG lines to simulate the curved background */}
        <svg width="100%" height="100%" preserveAspectRatio="none" style={{ opacity: 0.15 }}>
          <path d="M-100,500 C200,500 400,200 500,0" stroke="#047857" strokeWidth="1" fill="none" />
          <path d="M-100,520 C220,520 420,220 520,0" stroke="#047857" strokeWidth="1" fill="none" />
          <path d="M-100,540 C240,540 440,240 540,0" stroke="#047857" strokeWidth="1" fill="none" />
          <path d="M-100,560 C260,560 460,260 560,0" stroke="#047857" strokeWidth="1" fill="none" />
          
          <path d="M1100,500 C800,500 600,200 500,0" stroke="#047857" strokeWidth="1" fill="none" transform="translate(400,0)" />
          <path d="M1100,520 C780,520 580,220 480,0" stroke="#047857" strokeWidth="1" fill="none" transform="translate(400,0)" />
          <path d="M1100,540 C760,540 560,240 460,0" stroke="#047857" strokeWidth="1" fill="none" transform="translate(400,0)" />
          <path d="M1100,560 C740,560 540,260 440,0" stroke="#047857" strokeWidth="1" fill="none" transform="translate(400,0)" />
        </svg>
      </div>

      {/* HERO SECTION */}
      <section style={{ position: "relative", paddingTop: "140px", paddingBottom: "100px", zIndex: 10 }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
            style={{ display: "inline-flex", alignItems: "center", background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "6px 20px", borderRadius: "99px", marginBottom: "3rem", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" }}
          >
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "white" }}>
              First 500 candidates reviewed for free
            </span>
          </motion.div>

          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
            style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)", fontWeight: 400, color: "#fff", lineHeight: 1.1, marginBottom: "1.5rem", letterSpacing: "-0.03em" }}
          >
            The most powerful agent <br />
            <span style={{ fontWeight: 600 }}>for inbound recruiting.</span>
          </motion.h1>

          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
            style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.65)", maxWidth: "750px", margin: "0 auto 2.5rem", lineHeight: 1.6, fontWeight: 400 }}
          >
            Manual application review doesn&apos;t scale. Candidates feel it. 
            Recruiters burn out. With Metaview, reclaim time and focus 
            on the right candidates first with AI-native application review.
          </motion.p>

          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}
          >
            <button style={{ padding: "0.85rem 2.5rem", fontSize: "1rem", borderRadius: "99px", background: "rgba(255, 255, 255, 0.05)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)", fontWeight: 600, boxShadow: "0 4px 14px rgba(0,0,0,0.05)", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              Start for free
            </button>
            <button style={{ background: "#fff", color: "#062319", padding: "0.85rem 2.5rem", fontSize: "1rem", borderRadius: "99px", fontWeight: 600, border: "none", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 4px 14px rgba(255, 255, 255, 0.1)" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
              Book a demo
            </button>
          </motion.div>

          {/* SPREADSHEET MOCKUP GRAPHIC */}
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
            style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto", marginTop: "2rem" }}
          >
            <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "16px", padding: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", border: "1px solid rgba(255, 255, 255, 0.08)", position: "relative", zIndex: 2 }}>
              {/* TOP BAR / TABS */}
              <div style={{ display: "flex", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", paddingBottom: "12px", marginBottom: "16px", gap: "24px" }}>
                <span style={{ fontWeight: 600, color: "#fff", borderBottom: "2px solid #fff", paddingBottom: "12px", marginBottom: "-13px" }}>In review <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 400, marginLeft: "4px" }}>40</span></span>
                <span style={{ fontWeight: 500, color: "rgba(255, 255, 255, 0.5)" }}>Progressed <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 400, marginLeft: "4px" }}>22</span></span>
                <span style={{ fontWeight: 500, color: "rgba(255, 255, 255, 0.5)" }}>Rejected <span style={{ color: "rgba(255, 255, 255, 0.4)", fontWeight: 400, marginLeft: "4px" }}>652</span></span>
              </div>
              
              {/* TABLE HEADER */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 2fr 1fr 1fr", gap: "12px", fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.4)", fontWeight: 500, paddingBottom: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div>ICP Fit</div>
                <div>Applicant</div>
                <div>Profiles</div>
                <div>Job title</div>
                <div>Company</div>
                <div>0 → 1 startup exp</div>
              </div>

              {/* FLOATING HOVER CARD FOR CANDIDATE 1 */}
              <div style={{ position: "absolute", top: "110px", left: "-20px", right: "-20px", background: "#0c0e14", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", padding: "16px", zIndex: 10, border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 2fr 1fr 1fr", gap: "12px", fontSize: "0.9rem", alignItems: "center", marginBottom: "16px" }}>
                  <div><span style={{ background: "rgba(16, 185, 129, 0.2)", color: "#10b981", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600 }}>👍 Great</span></div>
                  <div style={{ color: "#fff", fontWeight: 500 }}>Fatima Hussain</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.4)" }}>in P</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.4)" }}>Backend developer</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.4)" }}>Clay</div>
                  <div style={{ color: "#10b981", fontWeight: 500 }}>✓ Yes</div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "16px" }}>
                  <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.85rem", margin: 0, maxWidth: "600px" }}>
                    Strong technical match: 7+ years of Python experience, plus AI/ML integration experience at Clay. 
                    Overall, meets both technical and growth-stage environment requirements.
                  </p>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button style={{ padding: "6px 16px", borderRadius: "99px", background: "transparent", border: "1px solid rgba(255, 255, 255, 0.15)", color: "#fff", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>Reject</button>
                    <button style={{ padding: "6px 16px", borderRadius: "99px", background: "#059669", border: "none", color: "white", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>Progress candidate</button>
                  </div>
                </div>
              </div>

              {/* TABLE ROWS */}
              {[
                { fit: "Great", name: "Sophia Castro", title: "Software engineer", company: "Anthropic", bg: "rgba(16, 185, 129, 0.15)", color: "#10b981", exp: "no" },
                { fit: "Great", name: "Ava Patel", title: "Senior backend developer", company: "Synthesia", bg: "rgba(16, 185, 129, 0.15)", color: "#10b981", exp: "yes" },
                { fit: "Good", name: "Olivia Chen", title: "Platform engineer", company: "Slack", bg: "rgba(16, 185, 129, 0.1)", color: "#10b981", exp: "yes" },
                { fit: "Good", name: "Ethan Zhang", title: "ML engineer", company: "Lovable", bg: "rgba(16, 185, 129, 0.1)", color: "#10b981", exp: "no" },
                { fit: "Okay", name: "Mark Davis", title: "Senior software architect", company: "Intercom", bg: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", exp: "no" },
              ].map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr 2fr 1fr 1fr", gap: "12px", fontSize: "0.9rem", alignItems: "center", padding: "16px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                  <div><span style={{ background: row.bg, color: row.color, padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: 600 }}>{row.fit === 'Great' ? '👍' : row.fit === 'Good' ? '👍' : '➖'} {row.fit}</span></div>
                  <div style={{ color: "#fff" }}>{row.name}</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.4)", display: "flex", gap: "4px" }}><span style={{background: "rgba(255, 255, 255, 0.05)", padding: "2px 6px", borderRadius: "4px", fontSize: "0.7rem"}}>A</span></div>
                  <div style={{ color: "rgba(255, 255, 255, 0.5)" }}>{row.title}</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.5)" }}>{row.company}</div>
                  <div style={{ color: row.exp === 'yes' ? "#10b981" : "rgba(255, 255, 255, 0.4)" }}>{row.exp === 'yes' ? '✓ Yes' : '✕ No'}</div>
                </div>
              ))}
            </div>

            {/* FLOATING CHAT BUBBLE ABOVE */}
            <div style={{ position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)", background: "#1a1c22", borderRadius: "16px", padding: "16px 20px", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", zIndex: 20, width: "max-content", border: "1px solid rgba(255, 255, 255, 0.08)", textAlign: "left", minWidth: "350px" }}>
              <p style={{ margin: "0 0 12px 0", color: "#fff", fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.5 }}>
                We&apos;re looking for Product Engineers with 0 → 1 <br/>
                startup background, and strong Python proficiency.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255, 255, 255, 0.04)", padding: "6px 12px", borderRadius: "99px" }}>
                   <div style={{ width: "16px", height: "16px", background: "linear-gradient(135deg, #34D399 0%, #3B82F6 100%)", borderRadius: "50%" }}></div>
                   <span style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.4)", fontWeight: 500 }}>ICP updating</span>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.08)", width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255, 255, 255, 0.6)" }}>
                   <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INBOUND FUNNEL ROW SECTION */}
      <section style={{ padding: "80px 0 0 0", zIndex: 10, background: "#060212" }}>
        <div className="container" style={{ maxWidth: "1000px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ flex: 1 }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 600, color: "#fff", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
              The inbound funnel is the least efficient.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6 }}>
              Fight fire with fire and find the best<br/>
              candidates, no matter the numbers.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ flex: 1 }}>
            <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.4)", background: "#1a1c22", aspectRatio: "16/9", display: "flex", alignItems: "flex-end", padding: "20px" }}>
              {/* Fake Video Preview */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.2, backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }}></div>
              <div style={{ position: "relative", zIndex: 2, color: "white" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 600, fontSize: "1.1rem", marginBottom: "4px" }}>
                  <PlayCircle size={24} fill="white" color="#1E293B" /> Play
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>How we solved reviewing candidates at scale</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* METRICS HEADER */}
      <section style={{ padding: "120px 0 60px 0", textAlign: "center", zIndex: 10, background: "#060212" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ fontSize: "3rem", fontWeight: 400, color: "#fff", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            AI scales consistency & <span style={{ fontWeight: 600 }}>capacity.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto" }}>
            Reviewing hundreds of applications daily isn&apos;t sustainable and it leads to burnout, missed talent, and a weaker candidate experience. Metaview&apos;s AI is your perfect partner to actually make the inbound funnel work with a system that scales to your standards.
          </motion.p>
        </div>
      </section>

      {/* THREE CARDS / METRICS ROW */}
      <section style={{ padding: "0 0 120px 0", zIndex: 10, background: "#060212" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div style={{ display: "flex", gap: "0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            
            {/* Card 1 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} style={{ flex: 1, padding: "40px", borderRight: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 400, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                100% of candidates<br/>get reviewed.
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6, marginBottom: "3rem" }}>
                AI reviews every applicant so no one falls through the cracks or gets ghosted in the process.
              </p>
              <div style={{ marginTop: "auto", background: "rgba(255, 255, 255, 0.03)", borderRadius: "16px 16px 0 0", padding: "24px 24px 0", boxShadow: "0 -4px 20px rgba(0,0,0,0.3)", height: "200px", border: "1px solid rgba(255, 255, 255, 0.08)", borderBottom: "none" }}>
                 <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.4)", fontSize: "0.85rem", fontWeight: 500, marginBottom: "16px" }}>
                   <Eye size={16} /> Application Review / Engineer
                 </div>
                 <div style={{ border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.5)", width: "max-content", background: "rgba(255, 255, 255, 0.02)" }}>
                   <span>Un-reviewed candidates</span> <span style={{ fontWeight: 600, color: "#fff" }}>0</span> <ChevronRight size={14}/>
                 </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} style={{ flex: 1, padding: "40px", borderRight: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 400, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                10x recruiter<br/>capacity.
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6, marginBottom: "3rem" }}>
                AI handles the inbound volume, expanding your team&apos;s capacity without additional headcount.
              </p>
              <div style={{ marginTop: "auto", background: "rgba(255, 255, 255, 0.03)", borderRadius: "24px", padding: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", border: "1px solid rgba(255, 255, 255, 0.08)", position: "relative", zIndex: 2, textAlign: "center" }}>
                 <div style={{ width: "64px", height: "64px", background: "rgba(255, 255, 255, 0.04)", borderRadius: "16px", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <Bot size={32} color="rgba(255, 255, 255, 0.3)" />
                 </div>
                 <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>
                   Reviewed <span style={{ color: "#fff", fontWeight: 700 }}>866</span> candidates
                 </div>
              </div>
              <div style={{ height: "100px", marginTop: "10px", width: "100%", overflow: "hidden", position: "relative" }}>
                 {/* Fake flowing lines */}
                 <div style={{ width: "100%", height: "100%", background: "radial-gradient(ellipse at bottom, transparent 30%, rgba(52, 211, 153, 0.1) 100%)" }}></div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 400, color: "#fff", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                92% reduced<br/>screening time.
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6, marginBottom: "3rem" }}>
                AI evaluates applications, flagging irrelevant and low-fit profiles so you can focus on the 8% that are right for you.
              </p>
              <div style={{ marginTop: "auto", position: "relative" }}>
                 
                 <div style={{ background: "#1a1c22", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "8px", width: "max-content", marginLeft: "auto", marginRight: "20px", boxShadow: "0 4px 12px rgba(0,0,0,0.4)", marginBottom: "-20px", position: "relative", zIndex: 1 }}>
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255, 255, 255, 0.4)", textAlign: "center", marginBottom: "8px" }}>ICP Fit ⌄</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                      {[1,2,3,4].map(idx => (
                         <div key={idx} style={{ background: "rgba(16, 185, 129, 0.2)", color: "#10b981", padding: "2px 12px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 600, textAlign: "center" }}>👍 Great</div>
                      ))}
                    </div>
                 </div>

                 <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "16px", padding: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)", border: "1px solid rgba(255, 255, 255, 0.08)", position: "relative", zIndex: 2 }}>
                    <p style={{ fontSize: "0.85rem", color: "#fff", fontWeight: 500, margin: "0 0 16px 0" }}>
                      <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>12 out of 302 candidates meet your criteria for</span> <span style={{ color: "#10b981" }}>great.</span>
                    </p>
                    <button style={{ width: "100%", padding: "8px", borderRadius: "99px", background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#fff", fontSize: "0.85rem", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: "center", gap: "4px" }}>
                       Get in touch <ChevronRight size={14} />
                    </button>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONTINUOUS CALIBRATION INTRO */}
      <section style={{ padding: "80px 0 0 0", zIndex: 10, background: "#060212" }}>
        <div className="container" style={{ maxWidth: "1200px", display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "flex-start" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 500, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              An AI coworker that<br/>
              <span style={{ fontWeight: 600 }}>continuously learns<br/>and calibrates.</span>
            </h2>
          </div>
          <div style={{ flex: "1 1 400px" }}>
            <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6 }}>
              Application Review is built with AI-native architecture for continuous
              learning & calibration. You have complete visibility and control over how
              the AI evaluates profiles so the best candidates get automatically routed to you.
            </p>
          </div>
        </div>
      </section>

      {/* THREE STEPS (MOCKUPS + TEXT) */}
      <section style={{ padding: "80px 0 120px 0", zIndex: 10, background: "#060212" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          {/* STEP 1 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: "2rem", alignItems: "center", minHeight: "350px", position: "relative" }}>
             {/* Left Card: Set Context */}
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "24px", padding: "30px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 600, fontSize: "1rem", marginBottom: "8px" }}>
                  <Fingerprint size={18} color="rgba(255, 255, 255, 0.3)" /> Set context
                </div>
                <p style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "0.85rem", marginBottom: "20px", maxWidth: "80%" }}>
                  Review and edit the generated candidate profile before starting your review.
                </p>
                <div style={{ display: "flex", gap: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", marginBottom: "20px" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff", borderBottom: "2px solid #fff", paddingBottom: "12px", marginBottom: "-1px" }}>Ideal Candidate Profile</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "rgba(255, 255, 255, 0.4)", paddingBottom: "12px" }}>Upload Context</div>
                </div>
                <div style={{ background: "rgba(255, 255, 255, 0.02)", borderRadius: "12px", padding: "16px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                   <div style={{ fontFamily: "monospace", fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", fontWeight: 600, marginBottom: "12px" }}>Tailor your ideal candidate profile</div>
                   <div style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.3)", lineHeight: 1.6 }}>
                     A Product Engineer who sits at the <span style={{ color: "#fff", fontWeight: 600 }}>intersection of software engineering and product thinking.</span> This role requires someone who can build and ship features end-to-end...
                   </div>
                </div>
             </motion.div>

             {/* Center Line + Bubble */}
             <div style={{ position: "relative", height: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ position: "absolute", top: "0", bottom: "-40px", left: "50%", transform: "translateX(-50%)", width: "1px", background: "#D1FAE5" }}></div>
                <div style={{ width: "36px", height: "36px", background: "#060212", border: "1px solid #34D399", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 600, color: "#34D399", zIndex: 2, marginTop: "auto", marginBottom: "auto" }}>
                  1
                </div>
             </div>

             {/* Right Text */}
             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ paddingLeft: "2rem" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 500, color: "#fff", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                  Align on the Ideal Candidate<br/>Profile.
                </h3>
                <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6 }}>
                  Tell us what great looks like. Define your criteria once and Metaview instantly understands what to look for — then refines as you feedback.
                </p>
             </motion.div>
          </div>

          {/* STEP 2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: "2rem", alignItems: "center", minHeight: "350px", position: "relative", marginTop: "40px" }}>
             {/* Left Card: Small Table */}
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "24px", padding: "30px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                <div style={{ display: "flex", justifyContent: "flex-end", color: "rgba(255, 255, 255, 0.5)", fontWeight: 500, fontSize: "0.85rem", marginBottom: "20px", gap: "8px" }}>
                  <Users size={16} /> Application Review
                </div>
                {/* Table Header */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr 1fr", gap: "12px", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.3)", fontWeight: 600, paddingBottom: "12px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div>Company</div><div>Job title</div><div>Applicant</div><div>ICP Fit ⌄</div>
                </div>
                {/* Table Rows */}
                {[
                  {co: "Clay", title: "Backend developer", name: "Fatima Hussain", fit: "Great", bg: "rgba(16, 185, 129, 0.2)", color: "#10b981" },
                  {co: "Anthropic", title: "Software engineer", name: "Sophia Castro", fit: "Great", bg: "rgba(16, 185, 129, 0.2)", color: "#10b981" },
                  {co: "Synthesia", title: "Senior backend developer", name: "Ava Patel", fit: "Great", bg: "rgba(16, 185, 129, 0.2)", color: "#10b981" },
                  {co: "Slack", title: "Platform engineer", name: "Olivia Chen", fit: "Good", bg: "rgba(16, 185, 129, 0.15)", color: "#10b981" },
                ].map((r,i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 2fr 1fr", gap: "12px", fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.5)", padding: "12px 0", borderBottom: "1px solid rgba(255, 255, 255, 0.05)", alignItems: "center" }}>
                    <div style={{ color: "rgba(255, 255, 255, 0.2)" }}>{r.co}</div>
                    <div>{r.title}</div>
                    <div style={{ color: "#fff", fontWeight: 500 }}>{r.name}</div>
                    <div><span style={{ background: r.bg, color: r.color, padding: "2px 8px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: 600 }}>👍 {r.fit}</span></div>
                  </div>
                ))}
             </motion.div>

             {/* Center Line + Bubble */}
             <div style={{ position: "relative", height: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ position: "absolute", top: "-40px", bottom: "-40px", left: "50%", transform: "translateX(-50%)", width: "1px", background: "#D1FAE5" }}></div>
                <div style={{ width: "36px", height: "36px", background: "#060212", border: "1px solid #34D399", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 600, color: "#34D399", zIndex: 2, marginTop: "auto", marginBottom: "auto" }}>
                  2
                </div>
             </div>

             {/* Right Text */}
             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ paddingLeft: "2rem" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 500, color: "#fff", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                  AI helps with evaluating.
                </h3>
                <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6 }}>
                  Metaview evaluates your entire pipeline against your ICP in minutes.
                </p>
             </motion.div>
          </div>

          {/* STEP 3 */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 1fr", gap: "2rem", alignItems: "center", minHeight: "350px", position: "relative", marginTop: "40px" }}>
             {/* Left Card: Decide Avatars */}
             <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "24px", padding: "50px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", border: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px", background: "rgba(255, 255, 255, 0.02)", padding: "12px 30px", borderRadius: "99px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                   <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#1a1c22", border: "2px solid rgba(255,255,255,0.1)", zIndex: 1, marginRight: "-15px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "rgba(255, 255, 255, 0.3)", overflow: "hidden" }}><img src="https://i.pravatar.cc/100?img=1" alt="u1" style={{width: "100%", height: "100%", objectFit: "cover"}}/></div>
                   <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#2d3039", border: "4px solid rgba(255,255,255,0.1)", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", color: "white", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.5)" }}><img src="https://i.pravatar.cc/150?img=11" alt="u2" style={{width: "100%", height: "100%", objectFit: "cover"}}/></div>
                   <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#1a1c22", border: "2px solid rgba(255,255,255,0.1)", zIndex: 1, marginLeft: "-15px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", color: "rgba(255, 255, 255, 0.3)", overflow: "hidden" }}><img src="https://i.pravatar.cc/100?img=5" alt="u3" style={{width: "100%", height: "100%", objectFit: "cover"}}/></div>
                </div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.5)", marginBottom: "16px", fontWeight: 500 }}>Your input is needed</div>
                <button style={{ padding: "12px 32px", background: "#059669", color: "white", fontWeight: 600, fontSize: "0.95rem", borderRadius: "99px", border: "none" }}>Progress candidate</button>
             </motion.div>

             {/* Center Line + Bubble */}
             <div style={{ position: "relative", height: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ position: "absolute", top: "-40px", bottom: "50%", left: "50%", transform: "translateX(-50%)", width: "1px", background: "#D1FAE5" }}></div>
                <div style={{ width: "36px", height: "36px", background: "#060212", border: "1px solid #34D399", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", fontWeight: 600, color: "#34D399", zIndex: 2, marginTop: "auto", marginBottom: "auto" }}>
                  3
                </div>
             </div>

             {/* Right Text */}
             <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ paddingLeft: "2rem" }}>
                <h3 style={{ fontSize: "2rem", fontWeight: 500, color: "#fff", letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                  Humans always decide.
                </h3>
                <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6 }}>
                  AI informs. You decide. Metaview shows you the why behind every evaluation so your team can move fast with full confidence. And we never auto-reject.
                </p>
             </motion.div>
          </div>

        </div>
      </section>

      {/* DARK MODE SPECIALTY AGENTS */}
      <section style={{ background: "#02120A", padding: "120px 0 60px 0", color: "white" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 500, color: "white", lineHeight: 1.2, maxWidth: "800px", margin: "0 auto", letterSpacing: "-0.02em" }}>
              One platform of specialist AI agents for compounding intelligence and efficiency.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "24px", overflow: "hidden", background: "rgba(255,255,255,0.02)" }}>
            
            {/* Column 1 */}
            <div style={{ padding: "40px 30px", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                <div style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={16} color="#A7F3D0" /></div>
                <div style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Target size={16} color="#A7F3D0" /></div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "40px" }}>Plan & align</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Talent mapping", "Intake call", "Ideal Candidate Profile", "Automatic job posts"].map((item, i) => (
                  <li key={i} style={{ fontSize: "0.95rem", color: "#94A3B8", display: "flex", alignItems: "center", gap: "8px" }}><Check size={14} color="#CBD5E1" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Column 2 (Active/Highlighted) */}
            <div style={{ padding: "40px 30px", background: "#052E1D", borderRight: "1px solid rgba(255,255,255,0.05)", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "#34D399" }}></div>
              <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                <div style={{ width: "32px", height: "32px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Users size={16} color="#052E1D" /></div>
                <div style={{ width: "32px", height: "32px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Search size={16} color="#052E1D" /></div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "40px", color: "white" }}>Source & sift</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px", marginTop: "116px" }}>
                {["Inbound application", "Outbound sourcing"].map((item, i) => (
                  <li key={i} style={{ fontSize: "0.95rem", color: "white", display: "flex", alignItems: "center", gap: "8px" }}><Check size={14} color="#A7F3D0" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div style={{ padding: "40px 30px", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                <div style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><PlayCircle size={16} color="#A7F3D0" /></div>
                <div style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><BrainCircuit size={16} color="#A7F3D0" /></div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "40px" }}>Interview & decide</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px", marginTop: "80px" }}>
                {["Automatic feedback notes", "Job-specific templates", "AI-suggested snippets"].map((item, i) => (
                  <li key={i} style={{ fontSize: "0.95rem", color: "#94A3B8", display: "flex", alignItems: "center", gap: "8px" }}><Check size={14} color="#CBD5E1" /> {item}</li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div style={{ padding: "40px 30px" }}>
              <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
                <div style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Activity size={16} color="#A7F3D0" /></div>
                <div style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><Bot size={16} color="#A7F3D0" /></div>
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "40px" }}>Improve & optimize</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px", marginTop: "44px" }}>
                {["Limitless reporting & AI-insights", "Live compensation intelligence"].map((item, i) => (
                  <li key={i} style={{ fontSize: "0.95rem", color: "#94A3B8", display: "flex", alignItems: "center", gap: "8px", lineHeight: 1.4 }}><Check size={14} color="#CBD5E1" style={{ flexShrink: 0 }} /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EVERYTHING YOU NEED CORE GRID */}
      <section style={{ background: "#02120A", padding: "60px 0 120px 0", color: "white" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.5rem)", fontWeight: 500, color: "white", marginBottom: "80px", letterSpacing: "-0.02em", maxWidth: "600px", lineHeight: 1.2 }}>
            Everything you need to focus<br/>on the right candidates first.
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            
            {/* ROW 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                   <Activity size={20} color="#D1FAE5" />
                   <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Real-time evaluation</h3>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "1rem", lineHeight: 1.6, maxWidth: "480px" }}>
                  Every applicant is instantly categorized into ICP Fit buckets so your strongest candidates surface first, and the list re-evaluates every time you make updates to your ICP.
                </p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                   <Sparkles size={20} color="#D1FAE5" />
                   <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>AI native</h3>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "1rem", lineHeight: 1.6, maxWidth: "480px" }}>
                  Built from the ground up on AI, from auto-generating your ICP off the job post to evaluating every profile against custom criteria — not a filter bolted onto a legacy ATS.
                </p>
              </div>
            </div>

            {/* ROW 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                   <Sliders size={20} color="#D1FAE5" />
                   <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Self-calibration</h3>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "1rem", lineHeight: 1.6, maxWidth: "480px" }}>
                  As you progress and reject candidates, the system learns from your decisions and suggests ICP refinements, so screening quality improves with every review cycle.
                </p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                   <Target size={20} color="#D1FAE5" />
                   <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Control & visibility</h3>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "1rem", lineHeight: 1.6, maxWidth: "480px" }}>
                  See the reasoning behind every evaluation, edit your ICP manually, create custom AI columns, and choose exactly who has access.
                </p>
              </div>
            </div>

            {/* ROW 3 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                   <Clock size={20} color="#D1FAE5" />
                   <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>24/7 review</h3>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "1rem", lineHeight: 1.6, maxWidth: "480px" }}>
                  Applications are reviewed and evaluated the moment they land, day or night, ensuring strong candidates never wait in a queue.
                </p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                   <GitMerge size={20} color="#D1FAE5" />
                   <h3 style={{ fontSize: "1.25rem", fontWeight: 500 }}>Embedded workflow</h3>
                </div>
                <p style={{ color: "#9CA3AF", fontSize: "1rem", lineHeight: 1.6, maxWidth: "480px" }}>
                  Our AI agents operate collectively across the entire hiring process, sharing context and compounding intelligence within your ATS.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS & CTA */}
      <section style={{ background: "#02120A", padding: "0 0 120px 0", color: "white" }}>
         <div className="container" style={{ maxWidth: "1200px" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "120px" }}>
               {/* Left Quote */}
               <div style={{ borderRight: "1px solid rgba(255,255,255,0.08)", paddingRight: "4rem", display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
                  <p style={{ color: "#9CA3AF", fontSize: "1.15rem", lineHeight: 1.6, marginBottom: "2.5rem", maxWidth: "500px" }}>
                     "I was using another screening tool and stopped pretty quickly — it was dense and inflexible. Metaview's Application Review was the opposite. I picked it up fast, the accuracy was spot on, and it kept getting sharper as I gave it feedback. It's a no-brainer."
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", justifyContent: "flex-end" }}>
                     <img src="https://i.pravatar.cc/100?img=11" alt="Amandeep" style={{ width: "44px", height: "44px", borderRadius: "8px", objectFit: "cover" }} />
                     <div style={{ textAlign: "left" }}>
                        <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "white", marginBottom: "4px" }}>Amandeep Shergill</div>
                        <div style={{ fontSize: "0.75rem", color: "#6B7280", letterSpacing: "0.5px", textTransform: "uppercase" }}>Director of TA · Automattic</div>
                     </div>
                  </div>
               </div>
               
               {/* Right Quote */}
               <div style={{ paddingLeft: "0", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
                  <p style={{ color: "#9CA3AF", fontSize: "1.15rem", lineHeight: 1.6, marginBottom: "2.5rem", maxWidth: "500px" }}>
                     "We tested Metaview against another tool and the difference was clear. It goes way beyond keyword matching — the ICP fit explanation, the red flags, and the reasoning behind each evaluation are real differentiators."
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                     <img src="https://i.pravatar.cc/100?img=12" alt="Dan" style={{ width: "44px", height: "44px", borderRadius: "8px", objectFit: "cover" }} />
                     <div style={{ textAlign: "left" }}>
                        <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "white", marginBottom: "4px" }}>Dan Andres</div>
                        <div style={{ fontSize: "0.75rem", color: "#6B7280", letterSpacing: "0.5px", textTransform: "uppercase" }}>Talent Attraction Partner · Jobber</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* FINAL CTA */}
            <div style={{ textAlign: "center", paddingBottom: "60px" }}>
              <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "white", letterSpacing: "-0.03em", marginBottom: "3rem", lineHeight: 1.1 }}>
                <span style={{ color: "rgba(255,255,255,0.7)" }}>Reclaim time and focus on the</span><br/>
                right candidates first.
              </h2>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button style={{ padding: "0.85rem 2.5rem", fontSize: "1rem", borderRadius: "99px", background: "white", color: "#1E293B", border: "1px solid rgba(0,0,0,0.05)", fontWeight: 600, boxShadow: "0 4px 14px rgba(0,0,0,0.05)", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"} onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                  Start for free
                </button>
                <button style={{ background: "rgba(255,255,255,0.1)", color: "white", padding: "0.85rem 2.5rem", fontSize: "1rem", borderRadius: "99px", fontWeight: 600, border: "none", cursor: "pointer", transition: "all 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.15)"} onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  Book a demo
                </button>
              </div>
            </div>

         </div>
      </section>

      {/* ADDITIONAL SPACING TO ALLOW SCROLL PAST */}
      <section style={{ height: "40px", background: "#02120A" }}></section>

      <Footer />
    </main>
  );
}
