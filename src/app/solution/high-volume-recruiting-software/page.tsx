"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Play, Star, Users, Briefcase, UserCheck, ShieldCheck, LayoutDashboard, Clock, Smartphone, Bell, Share2, Layers, Zap, PenTool, BarChart3, Lock, Globe, LayoutGrid, Plus, Sparkles, Monitor, Headphones, CreditCard, ChevronRight } from "lucide-react";
import TruffleCTASection from "@/components/TruffleCTASection";
import LogoCloud from "@/components/LogoCloud";
import { motion } from "framer-motion";
import styles from "@/app/page.module.css";

export default function HighVolumeHiringPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#060212", color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

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
              HIGH-VOLUME HIRING SOFTWARE
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
            High volume hiring software that doesn&apos;t bury your team
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
            Truffle replaces first-round phone screens with async video interviews, talent assessments, AI summaries, and match scores so you get to the right conversations faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "56px" }}
          >
            <button style={{ background: "#fff", color: "#05010d", border: "none", padding: "16px 36px", borderRadius: "14px", fontSize: "1.05rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
              Start free trial
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
                      <h3 style={{ fontSize: "24px", fontWeight: 600 }}>Jasmine Torres <span style={{ fontSize: "12px", background: "rgba(138, 92, 246, 0.2)", color: "#d8b4fe", padding: "4px 10px", borderRadius: "6px" }}>FOR REVIEW</span></h3>
                      <p style={{ color: "rgba(255,255,255,0.4)", marginTop: "8px" }}>Applied 12 days ago • <span style={{ color: "#10b981" }}>74% Match</span></p>
                   </div>
                   <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
                      <div style={{ padding: "20px", borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                         <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>Work Scenarios</span>
                         <div style={{ fontSize: "20px", fontWeight: 600, marginTop: "8px" }}>54% Match</div>
                      </div>
                      <div style={{ padding: "20px", borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                         <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)" }}>Environment Fit</span>
                         <div style={{ fontSize: "20px", fontWeight: 600, marginTop: "8px" }}>High Signal</div>
                      </div>
                   </div>
                   <div style={{ padding: "24px", borderRadius: "18px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
                         <div style={{ width: "32px", height: "32px", background: "#8b5cf6", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}><Play size={16} fill="white" /></div>
                         <span style={{ fontWeight: 700 }}>Candidate shorts</span>
                      </div>
                      <div style={{ display: "flex", gap: "24px" }}>
                         <div style={{ flex: 1, borderRadius: "12px", overflow: "hidden", aspectRatio: "16/10" }}>
                            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                         </div>
                         <div style={{ flex: 1, color: "rgba(255,255,255,0.6)", fontSize: "14px" }}>
                            <div style={{ color: "#a78bfa", fontWeight: 600, marginBottom: "8px" }}>0:00 Customer Orientation</div>
                            <p>I&apos;ve been working the front desk at my aunt&apos;s dental office for about two years...</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

        <LogoCloud title="High-volume hiring software loved by 100s of great companies" />


    
      <section style={{ padding: "140px 24px" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.04)", borderRadius: "32px", padding: "14px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                  <div style={{ borderRadius: "22px", overflow: "hidden", aspectRatio: "16/10", background: "#111", position: "relative" }}>
                     <img src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=1000&q=80" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7 }} />
                     <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(12px)", border: "2px solid rgba(255,255,255,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}><Play fill="white" size={28} /></div>
                     </div>
                  </div>
               </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", marginBottom: "24px", display: "block" }}>STOP PHONE-SCREENING EVERYONE</span>
               <h2 style={{ fontSize: "3rem", fontWeight: 600, marginBottom: "28px" }}>Replace first-round calls with async video interviews</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "40px", fontSize: "1.1rem" }}>Phone screens are calendar Tetris with no upside. You spend 30 minutes scheduling, 20 minutes talking, and 10 minutes documenting — for someone you knew wasn&apos;t right 5 minutes in.</p>
               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["Send one link — candidates interview on their schedule", "AI summaries and match scores for every completed interview", "Candidate Shorts: ~30-second highlight reels with reasoning for each clip", "Full recordings and transcripts always available"].map((bullet, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                       <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={12} color="#10b981" /></div>
                       <span style={{ color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

     
      <section style={{ padding: "140px 24px", background: "linear-gradient(to bottom, transparent, rgba(138, 92, 246, 0.05))" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", marginBottom: "24px", display: "block" }}>BUILT FOR VOLUME, NOT JUST VOLUME PRICING</span>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "28px", lineHeight: 1.1 }}>Review 100 candidates in the time it takes to phone-screen 1</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "40px" }}>
                  When you&apos;re hiring for roles that attract hundreds of applicants, the bottleneck isn&apos;t sourcing — it&apos;s screening. Truffle&apos;s AI transcribes every response, generates summaries, produces match scores with reasoning, and sorts candidates so the most aligned rise to the top.
               </p>
               <button style={{ background: "#060212", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px 28px", borderRadius: "10px", fontSize: "1rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
                  Start free trial <ArrowRight size={18} style={{ transform: "rotate(-45deg)" }} />
               </button>
               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["Candidates sorted by match score to help you prioritize review", "Scores include reasoning so you can see exactly why", "Qualification questions surface must-haves before the full interview", "No one is automatically rejected; you review and decide"].map((bullet, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                       <Check size={18} color="rgba(255,255,255,0.6)" />
                       <span style={{ color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "32px", padding: "40px", border: "1px solid rgba(255, 255, 255, 0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                     {[
                        { name: "Mateo Rodríguez", email: "mateo@email.com", score: 85, color: "#10b981", tag: "Bilingual support, hit 99% SLA" },
                        { name: "Jamie Park", email: "jamie.park@email.com", score: 71, color: "#f59e0b", tag: "Quick learner; clear KPI wins" },
                        { name: "Corey Morgan", email: "cmorgan@email.com", score: 56, color: "#ef4444", tag: "Customer-first mindset; lacks metrics" }
                     ].map((c, i) => (
                        <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "16px", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                           <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: c.color, opacity: 0.8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 700 }}>{c.name.split(' ').map(n=>n[0]).join('')}</div>
                              <div>
                                 <div style={{ fontWeight: 600 }}>{c.name}</div>
                                 <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{c.email}</div>
                                 <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginTop: "4px" }}>{c.tag}</div>
                              </div>
                           </div>
                           <div style={{ textAlign: "right" }}>
                              <div style={{ fontSize: "20px", fontWeight: 700, color: c.color }}>{c.score}%</div>
                              <div style={{ width: "60px", height: "4px", background: "rgba(255,255,255,0.1)", borderRadius: "2px", marginTop: "4px" }}>
                                 <div style={{ width: `${c.score}%`, height: "100%", background: c.color, borderRadius: "2px" }}></div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      <section style={{ padding: "140px 24px" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "32px", padding: "60px", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "center" }}>
                  <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "24px", color: "#fff", width: "100%", maxWidth: "320px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                        <span style={{ fontWeight: 700 }}>Review status</span>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "rgba(255, 255, 255, 0.5)" }}>
                           Auto nudge <div style={{ width: "32px", height: "18px", background: "#3b82f6", borderRadius: "10px", padding: "2px", display: "flex", justifyContent: "flex-end" }}><div style={{ width: "14px", height: "14px", background: "#fff", borderRadius: "50%" }}></div></div>
                        </div>
                     </div>
                     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {[
                           { name: "Alex", status: "Done", icon: <Check size={14} color="#10b981" />, bg: "rgba(16, 185, 129, 0.1)", color: "#10b981" },
                           { name: "Jordan", status: "Nudged", icon: <Bell size={14} color="#3b82f6" />, bg: "rgba(59, 130, 246, 0.1)", color: "#3b82f6" },
                           { name: "Sam", status: "Pending", icon: <Clock size={14} color="rgba(255, 255, 255, 0.4)" />, bg: "rgba(255, 255, 255, 0.05)", color: "rgba(255, 255, 255, 0.4)" }
                        ].map((u, i) => (
                           <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                 <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.1)" }}></div>
                                 <span style={{ fontWeight: 600 }}>{u.name}</span>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: "4px", padding: "4px 8px", borderRadius: "6px", background: u.bg, color: u.color, fontSize: "11px", fontWeight: 700 }}>{u.icon} {u.status}</div>
                           </div>
                        ))}
                     </div>
                     <div style={{ marginTop: "20px", fontSize: "11px", color: "rgba(255, 255, 255, 0.4)" }}>1 of 3 reviews complete</div>
                  </div>
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", marginBottom: "24px", display: "block" }}>COMPLETION IS A SIGNAL</span>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "28px", lineHeight: 1.1 }}>The candidates who finish are already more engaged than most</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "40px" }}>
                  Here&apos;s something nobody talks about in high-volume hiring: half your applicants aren&apos;t serious. They applied to 40 jobs in an afternoon. A 10-minute async interview is a natural filter — candidates who take the time to record thoughtful answers are already showing more intent than a one-click application ever could.
               </p>
               <button style={{ background: "#060212", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px 28px", borderRadius: "10px", fontSize: "1rem", fontWeight: 600, marginBottom: "40px" }}>Start free trial</button>
               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["Mobile-friendly — candidates record from any device, no downloads", "Automatic reminders at 24 and 72 hours keep completion rates high", "Branded experience with your logo, colors, and welcome message"].map((bullet, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                       <Check size={18} color="rgba(255,255,255,0.6)" />
                       <span style={{ color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

     
      <section style={{ padding: "140px 24px", background: "linear-gradient(to top, transparent, rgba(138, 92, 246, 0.05))" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.6)", letterSpacing: "0.15em", marginBottom: "24px", display: "block" }}>YOUR WHOLE TEAM ON THE SAME PAGE</span>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "28px", lineHeight: 1.1 }}>Collaborate on candidates without the forwarding chain</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "40px" }}>
                  High-volume hiring usually means multiple people reviewing, multiple opinions flying around Slack, and no single place where everyone&apos;s feedback lives. Truffle keeps every candidate, every evaluation, and every team member&apos;s notes in one place.
               </p>
               <button style={{ background: "#060212", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px 28px", borderRadius: "10px", fontSize: "1rem", fontWeight: 600, marginBottom: "40px" }}>Start free trial</button>
               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["Team ratings, notes, and structured feedback per candidate", "Shareable candidate links with optional password protection", "Role-based access: Owner, Admin, Member, Reviewer, Viewer", "Zapier + API integrations with your existing tools"].map((bullet, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                       <Check size={18} color="rgba(255,255,255,0.6)" />
                       <span style={{ color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "32px", padding: "40px", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "center" }}>
                  <div style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "16px", padding: "24px", color: "#fff", width: "100%", maxWidth: "400px", boxShadow: "0 20px 40px rgba(0,0,0,0.5)" }}>
                     <div style={{ display: "flex", gap: "8px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "16px", marginBottom: "20px" }}>
                        <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)", padding: "6px 12px", borderRadius: "6px" }}>Simple</div>
                        <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)", padding: "6px 12px", borderRadius: "6px" }}>By question</div>
                        <div style={{ fontSize: "12px", color: "#fff", background: "rgba(59, 130, 246, 0.2)", padding: "6px 12px", borderRadius: "6px", fontWeight: 600 }}>Scorecard</div>
                     </div>
                     <div style={{ fontWeight: 700, marginBottom: "20px" }}>Scorecard</div>
                     <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        {["Communication Skills", "Problem Solving", "Leadership Potential", "Cultural Fit"].map((skill, i) => (
                           <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.7)" }}>{skill}</span>
                              <div style={{ display: "flex", gap: "2px" }}>
                                 {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill={s <= (4-i%2) ? "rgba(255, 255, 255, 0.1)" : "none"} color="rgba(255, 255, 255, 0.1)" />)}
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

   
      <section style={{ padding: "140px 24px" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "64px" }}>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "16px" }}>High volume hiring tools with modern guardrails</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
                  Truffle handles the tedious parts of high-volume screening — transcription, summarization, reminders, and prioritization. It keeps humans in charge of every decision that matters.
               </p>
            </motion.div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
               {[
                  { title: "Personality assessment", desc: "Based on validated Big Five research (IPIP). Surfaces personality tendencies across key traits.", icon: <UserCheck size={24} /> },
                  { title: "Situational judgement test", desc: "Real workplace scenarios tailored to your role. See how candidates approach messy situations.", icon: <PenTool size={24} /> },
                  { title: "Environment fit assessment", desc: "Surfaces alignment between candidate preferences and your actual work environment.", icon: <ShieldCheck size={24} /> },
                  { title: "AI-assisted setup", desc: "Describe the role. AI suggests assessments based on your job. You review, edit, and decide.", icon: <Zap size={24} /> },
                  { title: "Transparent results", desc: "Every result includes alignment summaries with clear reasoning. Gaps become interview starters.", icon: <BarChart3 size={24} /> },
                  { title: "Works on mobile", desc: "Candidates complete assessments from any device, on their own time. Most finish in under 12 minutes.", icon: <Smartphone size={24} /> }
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

      <BrokenAssessmentSection />
      <TruffleCTASection />
      <Footer />
    </main>
  );
}


function BrokenAssessmentSection() {
  return (
    <section style={{ width: "100%", background: "#060212", padding: "100px 24px", display: "flex", justifyContent: "center" }}>
      <div style={{ maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "center" }}>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
    
          <div style={{ padding: "4px 16px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "99px", marginBottom: "32px", display: "inline-block" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", color: "rgba(255, 255, 255, 0.7)", textTransform: "uppercase" }}>
              CANDIDATE SCREENING FOR THE AGE OF AI
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", fontWeight: 500, color: "#fff", lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}>
            Resumes are generic. Profiles are fake. Videos are real.
          </h2>

          <p style={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.6, marginBottom: "40px", maxWidth: "600px" }}>
            Stop trying to guess potential from a one-page PDF. Truffle lets candidates showcase their personality and drive through async video, giving you the context you need to hire with confidence.
          </p>

         
          <div style={{ position: "relative", display: "inline-block" }}>
        
            <div style={{ position: "absolute", top: "10px", left: "-5%", right: "-5%", bottom: "-10px", background: "linear-gradient(90deg, #38bdf8, #818cf8, #e879f9)", filter: "blur(15px)", opacity: 0.5, zIndex: 0, borderRadius: "20px" }} />
            
            <button
              style={{
                position: "relative",
                zIndex: 1,
                background: "#fff",
                color: "#060212",
                border: "none",
                padding: "14px 28px",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                transition: "all 0.2s ease",
              }}
            >
              Start free trial
              <ArrowRight size={18} style={{ transform: "rotate(-45deg)" }} />
            </button>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div style={{ position: "relative", width: "100%", height: "650px", borderRadius: "32px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
          {/* Abstract background */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)", zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, opacity: 0.4, background: "radial-gradient(circle at 80% 20%, #f43f5e 0%, transparent 40%), radial-gradient(circle at 20% 80%, #fb923c 0%, transparent 40%), radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 60%)", filter: "blur(40px)", zIndex: 0 }} />
          
          {/* Floating Device UI */}
          <div style={{ position: "relative", zIndex: 1, width: "340px", background: "rgba(6, 2, 18, 0.7)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "20px", display: "flex", flexDirection: "column", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
            
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "center", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "16px", marginBottom: "16px" }}>
               <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                 <div style={{ color: "#38bdf8" }}>
                   <Zap size={20} />
                 </div>
                 <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fff", letterSpacing: "1px" }}>CANDIDATE INTERVIEW</span>
               </div>
            </div>

         
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff" }}>Question 1 of 3</div>
              <div style={{ display: "flex", gap: "12px", color: "rgba(255,255,255,0.6)", fontSize: "0.75rem" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12}/> 2 minutes max</span>
              </div>
            </div>

            <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.5, marginBottom: "20px", fontWeight: 500 }}>
              Tell me about your most successful project and the impact it had.
            </p>

           
            <div style={{ position: "relative", width: "100%", height: "300px", borderRadius: "12px", overflow: "hidden", marginBottom: "20px", background: "#000" }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Candidate recording" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }} />
              
            
              <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", padding: "4px 12px", borderRadius: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444", boxShadow: "0 0 8px #ef4444" }} />
                <span style={{ fontSize: "0.75rem", color: "white", fontWeight: 500 }}>Recording • 0:42</span>
              </div>

            
              <div style={{ position: "absolute", bottom: "16px", left: "0", right: "0", display: "flex", justifyContent: "center" }}>
                <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", padding: "8px 20px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, color: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: "6px" }}>
                  Stop Recording
                </div>
              </div>
            </div>

            <button style={{ width: "100%", background: "#38bdf8", color: "#060212", border: "none", padding: "14px", borderRadius: "8px", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: "4px" }}>
              Next Question <ChevronRight size={18} />
            </button>

           
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "16px" }}>
               <span style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.4, maxWidth: "180px" }}>Want to pick up on another device or need to get to a quiet space?</span>
               <span style={{ fontSize: "0.8rem", color: "#38bdf8", fontWeight: 600, cursor: "pointer" }}>Finish later</span>
            </div>

          </div>

        
          <div style={{ position: "absolute", bottom: "20px", right: "20px", width: "32px", height: "32px", background: "rgba(0,0,0,0.5)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.1)" }}>
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M14 9.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-1.5 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M14 3.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-1.5 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M10 14.5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5s1.5-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5z"/><path d="M10 20.5c0 .83-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5s1.5-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5z"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
}
