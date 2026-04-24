"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Play, Star, Users, Briefcase, UserCheck, ShieldCheck, LayoutDashboard, Clock, Smartphone, Bell, Share2, Layers, Zap, PenTool, BarChart3, Lock, Globe, LayoutGrid, Plus, Sparkles, Monitor, Headphones, CreditCard } from "lucide-react";
import TruffleCTASection from "@/components/TruffleCTASection";
import FAQSection from "@/components/FAQSection";
import LogoCloud from "@/components/LogoCloud";
import { motion } from "framer-motion";
import styles from "@/app/page.module.css";

export default function CampusHiringPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#060212", color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "180px",
          paddingBottom: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "100%", height: "100%", zIndex: 0 }}>
            <div style={{ position: "absolute", top: "-10%", left: "10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
            <div style={{ position: "absolute", top: "20%", right: "10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
            <div style={{ position: "absolute", bottom: "10%", left: "30%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", padding: "0 24px", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: "8px 16px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "100px",
              display: "inline-flex",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255, 255, 255, 0.7)", textTransform: "uppercase" }}>
              EARLY CAREER & CAMPUS HIRING
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(3rem, 6vw, 5rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              marginBottom: "28px",
              letterSpacing: "-0.04em",
              maxWidth: "950px",
              margin: "0 auto 28px",
            }}
          >
            The modern standard for early career hiring
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "750px",
              margin: "0 auto 52px",
            }}
          >
            Scale your campus recruiting without adding headcount. Truffle provides a mobile-first, AI-powered screening experience that Gen Z candidates actually enjoy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "56px" }}
          >
            <button style={{ background: "#fff", color: "#05010d", border: "none", padding: "16px 36px", borderRadius: "14px", fontSize: "1.05rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
              Get started for free
              <ArrowRight size={20} style={{ transform: "rotate(-45deg)" }} />
            </button>
            <button style={{ background: "rgba(255, 255, 255, 0.06)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.15)", padding: "16px 36px", borderRadius: "14px", fontSize: "1.05rem", fontWeight: 600, cursor: "pointer" }}>
              Book Demo
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
            <div style={{ display: "flex" }}>
              {[15, 22, 31, 44].map((id, i) => (
                <div key={i} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "2.5px solid #060212", background: "#1a1a1a", marginLeft: i === 0 ? 0 : "-14px", overflow: "hidden" }}>
                  <img src={`https://i.pravatar.cc/100?img=${id}`} alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={15} fill="#FFD700" color="#FFD700" />)}
              </div>
              <span style={{ fontSize: "15px", fontWeight: 700 }}>4.9/5</span>
              <span style={{ fontSize: "15px", color: "rgba(255, 255, 255, 0.5)" }}>71+ Reviews</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Visualization */}
      <section style={{ padding: "0 24px 120px", display: "flex", justifyContent: "center" }}>
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           style={{ maxWidth: "1150px", width: "100%", background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)", borderRadius: "28px", padding: "1px" }}
        >
          <div style={{ background: "#0c081d", borderRadius: "27px", overflow: "hidden", display: "flex", flexDirection: "column", height: "720px" }}>
             <div style={{ padding: "18px 28px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "28px" }}>
                   <div style={{ fontSize: "14px", fontWeight: 700, color: "#8a5cf6" }}>Candidates</div>
                   <div style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255,255,255,0.4)" }}>Settings</div>
                </div>
                <LayoutDashboard size={16} color="rgba(255,255,255,0.4)" />
             </div>
             
             <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
                <div style={{ width: "260px", borderRight: "1px solid rgba(255,255,255,0.08)", padding: "20px" }}>
                   <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {["For Review 6", "Reviewed 3", "Incomplete 3", "All Candidates 12"].map((label, i) => (
                        <div key={i} style={{ padding: "10px 14px", borderRadius: "10px", background: i === 0 ? "rgba(138, 92, 246, 0.1)" : "transparent", color: i === 0 ? "#a78bfa" : "rgba(255,255,255,0.5)", fontSize: "14px", fontWeight: 600 }}>{label}</div>
                      ))}
                   </div>
                </div>
                <div style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
                   <div style={{ marginBottom: "32px" }}>
                      <h3 style={{ fontSize: "24px", fontWeight: 600 }}>Alex Chen <span style={{ fontSize: "12px", background: "rgba(138, 92, 246, 0.2)", color: "#d8b4fe", padding: "4px 10px", borderRadius: "6px" }}>NEW GRADUATE</span></h3>
                      <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>Applied from Stanford University • <span style={{ color: "#10b981" }}>92% Potential Match</span></p>
                   </div>
                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                      <div style={{ padding: "20px", borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                         <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>Problem Solving</span>
                         <div style={{ fontSize: "20px", fontWeight: 600, marginTop: "8px" }}>88% Percentile</div>
                      </div>
                      <div style={{ padding: "20px", borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                         <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>Career Motivation</span>
                         <div style={{ fontSize: "20px", fontWeight: 600, marginTop: "8px" }}>High Signal</div>
                      </div>
                   </div>
                   <div style={{ padding: "24px", borderRadius: "18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
                         <div style={{ width: "32px", height: "32px", background: "#8b5cf6", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}><Play size={16} fill="white" /></div>
                         <span style={{ fontWeight: 700 }}>Async interview responses</span>
                      </div>
                      <div style={{ display: "flex", gap: "24px" }}>
                         <div style={{ flex: 1, borderRadius: "12px", overflow: "hidden", aspectRatio: "16/10" }}>
                            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                         </div>
                         <div style={{ flex: 1, color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                            <div style={{ color: "#a78bfa", fontWeight: 600, marginBottom: "8px" }}>0:00 Project Leadership</div>
                            <p>For my senior capstone, I led a team of four to build a decentralized voting app. The biggest challenge was...</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* LOGO CLOUD SECTION */}
      <LogoCloud 
        title="Trusted by top university recruiting teams" 
        logos={[
          { icon: <Layers size={22} />, label: "Acme Univ" },
          { icon: <Globe size={22} />, label: "Global Edu" },
          { icon: <Zap size={22} />, label: "TechInst" },
          { icon: <LayoutGrid size={22} />, label: "Beacon" },
          { icon: <ShieldCheck size={22} />, label: "SafeStudy" },
          { icon: <Users size={22} />, label: "CampusConnect" },
          { icon: <Clock size={22} />, label: "GradHire" },
          { icon: <Star size={22} />, label: "Future" },
          { icon: <Plus size={22} />, label: "Talent" },
          { icon: <Sparkles size={22} />, label: "Spark" },
        ]}
      />


      {/* Feature Section: Gen Z Experience */}
      <section style={{ padding: "140px 24px" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.04)", borderRadius: "32px", padding: "14px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <div style={{ borderRadius: "22px", overflow: "hidden", aspectRatio: "16/10", background: "#111", position: "relative" }}>
                     <img src="https://images.unsplash.com/photo-1523240715181-310f9d7a57a8?w=1000&q=80" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
                     <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(12px)", border: "2px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}><Play fill="white" size={28} /></div>
                     </div>
                  </div>
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", marginBottom: "24px", display: "block" }}>A CANDIDATE EXPERIENCE THEY ACTUALLY ENJOY</span>
               <h2 style={{ fontSize: "3rem", fontWeight: 600, marginBottom: "28px" }}>Mobile-first interviews for the mobile-first generation</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "40px", fontSize: "1.1rem" }}>Campus candidates apply on the go. Truffle lets them interview from their dorm between classes, with no downloads or complex logins required. It&apos;s the fastest way from application to offer.</p>
               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["100% web-based: no apps to download or software to install", "Branded student welcome page with video greetings from your team", "Async flexibility allows students to interview when they are ready", "Instant confirmation and clear next steps keep engagement high"].map((bullet, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                       <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={12} color="#10b981" /></div>
                       <span style={{ color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* Review Section */}
      <section style={{ padding: "140px 24px", background: "linear-gradient(to bottom, transparent, rgba(138, 92, 246, 0.05))" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", marginBottom: "24px", display: "block" }}>IDENTIFY POTENTIAL, NOT JUST EXPERIENCE</span>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "28px", lineHeight: 1.1 }}>Screen thousands of students without missing a diamond</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "40px" }}>
                  University recruiting is about future potential. Truffle&apos;s AI helps you look past empty resumes by summarizing candidate soft skills, leadership signals, and problem-solving abilities directly from their video responses.
               </p>
               <button style={{ background: "#060212", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px 28px", borderRadius: "10px", fontSize: "1rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
                  Start free trial <ArrowRight size={18} style={{ transform: "rotate(-45deg)" }} />
               </button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "32px", padding: "40px", border: "1px solid rgba(255, 255, 255, 0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                     {[
                        { name: "Jordan Smith", school: "Univ of Michigan", score: 94, color: "#10b981", tag: "Strong leadership signals; 3 internships" },
                        { name: "Sarah Lee", school: "MIT", score: 88, color: "#10b981", tag: "Exceptional problem solving; project lead" },
                        { name: "Kevin Vang", school: "UT Austin", score: 72, color: "#f59e0b", tag: "Highly motivated; active campus leader" }
                     ].map((c, i) => (
                        <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                           <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: c.color, opacity: 0.8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 700 }}>{c.name.split(' ').map(n=>n[0]).join('')}</div>
                              <div>
                                 <div style={{ fontWeight: 600 }}>{c.name}</div>
                                 <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{c.school}</div>
                                 <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>{c.tag}</div>
                              </div>
                           </div>
                           <div style={{ textAlign: "right" }}>
                              <div style={{ fontSize: "20px", fontWeight: 700, color: c.color }}>{c.score}%</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Tools with Guardrails */}
      <section style={{ padding: "140px 24px" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "64px" }}>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "16px" }}>Campus-ready tools for modern recruiting</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                  Streamline university hiring while maintaining the human touch. Our tools are designed to help students tell their story.
               </p>
            </motion.div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
               {[
                  { title: "Cognitive Potential", desc: "Surface problem-solving ability and learning agility—crucial for new grads.", icon: <UserCheck size={24} /> },
                  { title: "Campus Culture Fit", desc: "See how students align with your team values and work environment.", icon: <ShieldCheck size={24} /> },
                  { title: "Standardized Rubrics", desc: "Ensure every student is evaluated on the same criteria for fair hiring.", icon: <PenTool size={24} /> },
                  { title: "Bulk Scheduling", desc: "Move from async review to live final-round interviews in seconds.", icon: <Zap size={24} /> },
                  { title: "Mobile Verification", desc: "Secure, device-verified interviews to prevent AI cheating and scripts.", icon: <Smartphone size={24} /> },
                  { title: "Team Evaluation", desc: "Collect ratings and notes from managers in one centralized scorecard.", icon: <Users size={24} /> }
               ].map((tool, i) => (
                  <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }} 
                     whileInView={{ opacity: 1, y: 0 }} 
                     viewport={{ once: true }} 
                     transition={{ delay: i * 0.1 }}
                     style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "20px", padding: "32px", display: "flex", gap: "20px" }}
                  >
                     <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {tool.icon}
                     </div>
                     <div>
                        <h4 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "12px" }}>{tool.title}</h4>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", lineHeight: 1.6 }}>{tool.desc}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>


      <FAQSection />
      <BrokenAssessmentSection />
      <TruffleCTASection />
      <Footer />
    </main>
  );
}


// Broken Assessment Section
function BrokenAssessmentSection() {
  return (
    <section style={{ width: "100%", background: "#060212", padding: "100px 24px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <div style={{ padding: "4px 16px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "99px", marginBottom: "32px" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255, 255, 255, 0.7)", textTransform: "uppercase" }}>RECRUITING FOR GEN Z</span>
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 500, color: "#fff", lineHeight: 1.1, marginBottom: "24px" }}>Resumes are generic. Profiles are fake. Videos are real.</h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.6, marginBottom: "40px" }}>Stop trying to guess potential from a one-page PDF. Truffle lets students showcase their personality and drive through async video, giving you the context you need to hire with confidence.</p>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: "-5px", background: "linear-gradient(90deg, #38bdf8, #818cf8, #e879f9)", filter: "blur(15px)", opacity: 0.5, borderRadius: "20px" }} />
            <button style={{ position: "relative", zIndex: 1, background: "#fff", color: "#060212", border: "none", padding: "14px 28px", borderRadius: "12px", fontSize: "1rem", fontWeight: 600 }}>Start free trial</button>
          </div>
        </div>
        <div style={{ position: "relative", width: "100%", height: "650px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)" }} />
          <div style={{ position: "relative", zIndex: 1, width: "340px", background: "rgba(6, 2, 18, 0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "20px" }}>
             <div style={{ textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px", marginBottom: "16px", fontWeight: 700 }}>STUDENT INTERVIEW</div>
              <div style={{ borderRadius: "12px", overflow: "hidden", height: "280px", marginBottom: "20px", background: "#000" }}>
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
              </div>
             <button style={{ width: "100%", background: "#38bdf8", color: "#060212", border: "none", padding: "14px", borderRadius: "8px", fontWeight: 700 }}>Submit Interview</button>
          </div>
        </div>
      </div>
    </section>
  );
}
