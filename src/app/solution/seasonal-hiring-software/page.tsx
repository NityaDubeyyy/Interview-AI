"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogoCloud from "@/components/LogoCloud";
import { motion } from "framer-motion";
import { ArrowRight, Check, Play, Star, Zap, Smartphone, UserCheck, ShieldCheck, Users, Info, LayoutGrid, Layers, Sparkles, Cpu, Share2, Plus, ChevronLeft, ChevronRight, Bell, Clock, MoreHorizontal, MessageSquare, Filter, List, Search, LayoutDashboard, Globe } from "lucide-react";
import styles from "@/app/page.module.css";

export default function SeasonalHiringPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#060212", color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* 1. Hero Section */}
      <section style={{ position: "relative", width: "100%", paddingTop: "180px", paddingBottom: "100px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "100%", height: "100%", zIndex: 0 }}>
          <div style={{ position: "absolute", top: "-10%", left: "10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
          <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", padding: "0 24px", width: "100%" }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={{ padding: "8px 16px", background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "100px", display: "inline-flex", alignItems: "center", marginBottom: "32px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255, 255, 255, 0.7)", textTransform: "uppercase" }}>SEASONAL HIRING SOFTWARE</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 600, lineHeight: 1.05, marginBottom: "28px", letterSpacing: "-0.04em", maxWidth: "950px", margin: "0 auto 28px" }}>
            Seasonal hiring software that fills roles before the rush hits
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontSize: "1.25rem", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.65)", maxWidth: "750px", margin: "0 auto 52px" }}>
            Truffle replaces first-round calls with async video interviews, AI summaries, and match scores so your team can screen dozens of candidates a day without losing their minds.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "40px" }}>
            <button style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "16px 36px", borderRadius: "14px", fontSize: "1.05rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", background: "linear-gradient(180deg, #0f172a 0%, #060212 100%)" }}>
              Start free trial <ArrowRight size={20} style={{ transform: "rotate(-45deg)" }} />
            </button>
            <button style={{ background: "rgba(255, 255, 255, 0.03)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "16px 36px", borderRadius: "14px", fontSize: "1.05rem", fontWeight: 600, cursor: "pointer" }}>
              Book Demo
            </button>
          </motion.div>

          {/* Social Proof (Faces Effect) */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }} 
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {[15, 22, 31, 44].map((id, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.2, zIndex: 10, marginRight: "4px" }}
                  style={{ 
                    width: "36px", 
                    height: "36px", 
                    borderRadius: "50%", 
                    border: "2.5px solid #060212", 
                    background: "#1a1a1a", 
                    marginLeft: i === 0 ? 0 : "-14px", 
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "margin 0.2s ease"
                  }}
                >
                  <img src={`https://i.pravatar.cc/100?img=${id}`} alt="User" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </motion.div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={15} fill="#FFD700" color="#FFD700" />)}
              </div>
              <div style={{ display: "flex", gap: "6px", fontSize: "15px", fontWeight: 700 }}>
                <span style={{ color: "#fff" }}>4.9/5</span>
                <span style={{ color: "rgba(255, 255, 255, 0.5)", fontWeight: 500 }}>71+ Reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Dashboard/Review Mockup (Image 2) */}
      <section style={{ padding: "0 24px 120px", display: "flex", justifyContent: "center" }}>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} style={{ maxWidth: "1250px", width: "100%", background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "24px", overflow: "hidden", display: "flex", flexDirection: "column", height: "850px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
          {/* Dashboard Header */}
          <div style={{ padding: "12px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: "32px", alignItems: "center", background: "rgba(255,255,255,0.01)" }}>
             <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff", cursor: "pointer", borderBottom: "2px solid #fff", padding: "8px 0" }}>Candidates</div>
             <div style={{ fontSize: "13px", fontWeight: 500, color: "rgba(255,255,255,0.4)", cursor: "pointer", padding: "8px 0" }}>Settings</div>
          </div>

          <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
             {/* Left Column */}
             <div style={{ width: "240px", borderRight: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.01)" }}>
                <div style={{ padding: "16px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", gap: "10px" }}>
                   <div style={{ fontSize: "11px", fontWeight: 700, color: "#3b82f6", background: "rgba(59, 130, 246, 0.1)", padding: "4px 8px", borderRadius: "20px", display: "flex", alignItems: "center", gap: "4px" }}>
                      <Info size={12} /> For Review 6
                   </div>
                   <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                      <List size={14} color="rgba(255,255,255,0.4)" />
                      <Filter size={14} color="rgba(255,255,255,0.4)" />
                   </div>
                </div>
                <div style={{ padding: "16px" }}>
                   {[
                      { name: "Emily Vargas", score: 93, active: false },
                      { name: "Jasmine Torres", score: 74, active: true }
                   ].map((c, i) => (
                      <div key={i} style={{ padding: "12px", background: c.active ? "rgba(59, 130, 246, 0.1)" : "transparent", borderRadius: "12px", marginBottom: "8px", borderLeft: c.active ? "3px solid #3b82f6" : "3px solid transparent" }}>
                         <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                            <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: i === 0 ? "#475569" : "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700 }}>{c.name.split(' ').map(n=>n[0]).join('')}</div>
                            <div style={{ fontSize: "12px", fontWeight: 600 }}>{c.name}</div>
                         </div>
                         <div style={{ height: "4px", width: "100%", background: "rgba(255,255,255,0.05)", borderRadius: "2px" }}>
                            <div style={{ width: `${c.score}%`, height: "100%", background: "#10b981", borderRadius: "2px" }}></div>
                         </div>
                         <div style={{ textAlign: "right", marginTop: "4px", fontSize: "10px", color: "#10b981", fontWeight: 700 }}>{c.score}%</div>
                      </div>
                   ))}
                </div>
             </div>

             {/* Right Content Area */}
             <div style={{ flex: 1, padding: "32px", overflowY: "auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "32px" }}>
                   <div>
                      <h2 style={{ fontSize: "24px", fontWeight: 600 }}>Jasmine Torres <span style={{ fontSize: "11px", background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", padding: "4px 10px", borderRadius: "20px", fontWeight: 700, marginLeft: "12px" }}>FOR REVIEW</span></h2>
                      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>Applied 12 days ago • <span style={{ color: "#3b82f6", fontWeight: 700 }}>74% Match</span></p>
                   </div>
                   <div style={{ display: "flex", gap: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.4)" }}><ChevronLeft size={20} /> <span style={{ fontSize: "12px" }}>2 of 2</span> <ChevronRight size={20} /></div>
                   </div>
                </div>

                {/* Score Cards Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
                   <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: "24px", height: "24px", background: "#3b82f6", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}><LayoutGrid size={14} /></div>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>Work Scenarios</span>
                         </div>
                         <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>64%</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}><div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }}></div><span style={{ fontSize: "11px", fontWeight: 700, color: "#f59e0b" }}>MIXED ALIGNMENT</span></div>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>2 gaps in people • 1 gap in judgment • 1 gap in pressure</p>
                   </div>
                   <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "20px" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: "24px", height: "24px", background: "#3b82f6", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}><Layers size={14} /></div>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>Environment Fit</span>
                         </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}><div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }}></div><span style={{ fontSize: "11px", fontWeight: 700, color: "#f59e0b" }}>MIXED ALIGNMENT</span></div>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>Gaps in pace • structure • feedback</p>
                   </div>
                </div>

                {/* Personality Section */}
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "20px", marginBottom: "24px" }}>
                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                         <div style={{ width: "24px", height: "24px", background: "#3b82f6", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}><UserCheck size={14} /></div>
                         <span style={{ fontSize: "14px", fontWeight: 600 }}>Personality</span>
                      </div>
                      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>2 of 4 prioritized traits aligned</span>
                   </div>
                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}><div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3b82f6" }}></div><span style={{ fontSize: "11px", fontWeight: 700, color: "#3b82f6" }}>GOOD ALIGNMENT</span></div>
                   <div style={{ display: "flex", gap: "16px" }}>
                      {["Agreeableness", "Conscientiousness", "Emotional stability", "Extraversion", "Openness"].map((t, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: i === 4 ? "rgba(255,255,255,0.2)" : (i === 1 ? "#f59e0b" : "#10b981") }}>
                           {i === 1 ? <div style={{width:8, height:8, border:"1px solid #f59e0b", borderRadius:"50%"}}></div> : (i === 4 ? <div style={{width:10, height:1, background:"rgba(255,255,255,0.2)"}}></div> : <Check size={12} />)} {t}
                        </div>
                      ))}
                   </div>
                </div>

                {/* Candidate Shorts */}
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "24px", marginBottom: "100px" }}>
                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                         <div style={{ width: "24px", height: "24px", background: "#3b82f6", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}><Sparkles size={14} /></div>
                         <span style={{ fontSize: "14px", fontWeight: 600 }}>Candidate shorts</span>
                      </div>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", cursor: "pointer" }}>Hide transcript</span>
                   </div>
                   <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "24px" }}>
                      <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", background: "#000", aspectRatio: "16/9" }}>
                         <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                         <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center" }}><Play size={24} fill="#fff" /></div>
                         </div>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                         <div style={{ background: "rgba(255,255,255,0.03)", padding: "12px", borderRadius: "10px", borderLeft: "4px solid #3b82f6" }}>
                            <div style={{ fontSize: "10px", color: "#3b82f6", fontWeight: 700, marginBottom: "4px" }}>0:00 Customer Orientation</div>
                            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>I&apos;ve been working the front desk at my aunt&apos;s dental office for about two years, and the thing I love most is when a nervous patient walks in and I can just, like, talk them down a little? You learn to read people fast...</p>
                         </div>
                         <div style={{ background: "rgba(255,255,255,0.03)", padding: "12px", borderRadius: "10px" }}>
                            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 700, marginBottom: "4px" }}>0:22 Adaptability</div>
                            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", lineHeight: 1.4 }}>We had a day where the scheduling system crashed and I had to check everyone in on paper and then re-enter it all after. It was hectic but honestly kind of fun?</p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Footer Controls */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 32px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(6, 2, 18, 0.95)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                   <div style={{ display: "flex", gap: "12px" }}>
                      <button style={{ padding: "8px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", fontSize: "12px" }}>Notes</button>
                      <button style={{ padding: "8px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", fontSize: "12px" }}>Full Profile</button>
                   </div>
                   <div style={{ display: "flex", gap: "10px" }}>
                      <button style={{ padding: "10px 24px", background: "#10b981", color: "#fff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: 700 }}>Advance</button>
                      <button style={{ padding: "10px 24px", background: "#f59e0b", color: "#fff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: 700 }}>Hold</button>
                      <button style={{ padding: "10px 24px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", borderRadius: "8px", fontSize: "12px", fontWeight: 700 }}>Reject</button>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Logo Pulse Section (Infinite Marquee) */}
      <LogoCloud title="Seasonal hiring software loved by 100s of great companies" />


      {/* 4. Setup Section (Image 4) */}
      <section style={{ width: "100%", background: "#060212", padding: "140px 24px", color: "#fff", display: "flex", justifyContent: "center" }}>
        <div style={{ maxWidth: "1200px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "100px", alignItems: "center" }}>
           {/* Left: Mockup */}
           <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: "rgba(255, 255, 255, 0.02)", borderRadius: "32px", padding: "40px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
              <div style={{ background: "#0c0e14", borderRadius: "20px", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "32px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
                 <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "24px" }}>Create interview</h3>
                 <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                    <div style={{ display: "flex", gap: "16px" }}>
                       <div style={{ width: "24px", height: "24px", background: "#3b82f6", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700 }}>1</div>
                       <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "12px", color: "#fff" }}>Paste job description</div>
                          <div style={{ background: "rgba(255,255,255,0.05)", height: "12px", borderRadius: "6px", width: "100%", marginBottom: "8px" }}></div>
                          <div style={{ background: "rgba(255,255,255,0.05)", height: "12px", borderRadius: "6px", width: "80%" }}></div>
                       </div>
                    </div>
                    <div style={{ display: "flex", gap: "16px" }}>
                       <div style={{ width: "24px", height: "24px", background: "#3b82f6", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700 }}>2</div>
                       <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "12px", color: "#fff" }}>Select or create questions</div>
                          <div style={{ display: "flex", gap: "12px" }}>
                             <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                                {["Tell us about a time you...", "How would you handle...", "What's your approach to..."].map((q, i) => (
                                  <div key={i} style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)", padding: "8px", borderRadius: "6px" }}>{q}</div>
                                ))}
                             </div>
                             <div style={{ width: "140px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "12px" }}>
                                <div style={{ fontSize: "9px", color: "#3b82f6", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px", marginBottom: "8px" }}><Sparkles size={8}/> Generating custom scoring</div>
                                {[1,2,3].map(i => <div key={i} style={{ height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "3px", marginBottom: "6px", width: i === 3 ? "60%" : "100%" }}></div>)}
                             </div>
                          </div>
                       </div>
                    </div>
                    <div style={{ display: "flex", gap: "16px" }}>
                       <div style={{ width: "24px", height: "24px", background: "#3b82f6", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700 }}>3</div>
                       <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "12px", color: "#fff" }}>Complete intake and customize branding</div>
                          <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "12px", borderRadius: "10px", display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                             <div><div style={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}>Personalize Truffle&apos;s AI for your position</div><div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)" }}>Answer two quick questions to improve match accuracy</div></div>
                             <Cpu size={16} color="rgba(255,255,255,0.2)" />
                          </div>
                          <div style={{ border: "1px solid rgba(255,255,255,0.08)", padding: "12px", borderRadius: "10px", display: "flex", justifyContent: "space-between" }}>
                             <div><div style={{ fontSize: "11px", fontWeight: 700, color: "#fff" }}>Customize brand experience</div><div style={{ fontSize: "9px", color: "rgba(255,255,255,0.3)" }}>Add your logo, colors, and messaging</div></div>
                             <Sparkles size={16} color="#3b82f6" />
                          </div>
                       </div>
                    </div>
                 </div>
                 <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
                    <div style={{ fontSize: "12px", fontWeight: 700, marginBottom: "16px", color: "#fff" }}>Congratulations - your interview is ready to share!</div>
                    <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", padding: "12px", fontSize: "10px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: "8px" }}>
                       <Share2 size={12} color="#3b82f6" /> https://app.hiretruffle.com/j/senior-developer-123
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Right: Content */}
           <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ display: "inline-block", background: "rgba(255,255,255,0.04)", borderRadius: "100px", padding: "6px 16px", marginBottom: "24px" }}>
                 <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255, 255, 255, 0.6)", letterSpacing: "1px" }}>LIVE IN 10 MINUTES — NOT NEXT QUARTER</span>
              </div>
              <h2 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px", color: "#fff" }}>Set up your first interview before lunch</h2>
              <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.6, marginBottom: "40px" }}>You can go from &quot;we need 20 people by October&quot; to &quot;candidates are recording answers&quot; in the same afternoon.</p>
              
              <div style={{ position: "relative", marginBottom: "60px", display: "inline-block" }}>
                 <div style={{ position: "absolute", inset: "-4px", background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)", filter: "blur(12px)", opacity: 0.3, borderRadius: "100px" }}></div>
                 <button style={{ position: "relative", background: "#fff", color: "#0f172a", border: "none", padding: "16px 36px", borderRadius: "100px", fontSize: "16px", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
                    Start free trial <ArrowRight size={18} style={{ transform: "rotate(-45deg)" }} />
                 </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px", color: "rgba(255, 255, 255, 0.8)" }}>
                 {[
                    "Edit questions, set scoring criteria, add your branding.",
                    "AI helps you generate questions and rubrics",
                    "Invite candidates via a unique link, email, or integrations"
                 ].map((feature, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center", borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)", paddingTop: i === 0 ? 0 : "32px" }}>
                       <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={14} color="#10b981" /></div>
                       <span style={{ fontSize: "16px", fontWeight: 600 }}>{feature}</span>
                    </div>
                 ))}
              </div>
           </motion.div>
        </div>
      </section>

      {/* 5. Review Efficiency Section (Image 1) */}
      <section style={{ padding: "140px 24px", background: "linear-gradient(to bottom, transparent, rgba(138, 92, 246, 0.05))" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <div style={{ display: "inline-block", background: "#f1f5f9", borderRadius: "100px", padding: "6px 16px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(15, 23, 42, 0.6)", letterSpacing: "1px" }}>SCREEN AT THE SPEED YOUR DEADLINE DEMANDS</span>
               </div>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "28px", lineHeight: 1.1, color: "#fff" }}>Review 100 candidates in the time it takes to phone-screen 1</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "40px" }}>
                  Applications pour in. Your team can&apos;t phone-screen everyone. Truffle&apos;s AI transcribes every response, generates summaries, produces match scores with reasoning, and sorts candidates so the most aligned rise to the top.
               </p>
               <button style={{ background: "#060212", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px 28px", borderRadius: "10px", fontSize: "1rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
                  Start free trial <ArrowRight size={18} style={{ transform: "rotate(-45deg)" }} />
               </button>
               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["Custom Match % based on your criteria", "AI explains why each score makes sense", "Transparent rubrics attached to every question"].map((bullet, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center", paddingTop: i === 0 ? 0 : "20px", borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}>
                       <Check size={18} color="rgba(255,255,255,0.6)" />
                       <span style={{ color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "32px", padding: "60px", border: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", justifyContent: "center" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%", maxWidth: "400px" }}>
                     {[
                        { name: "Mateo Rodríguez", email: "mateo@email.com", score: 85, color: "#10b981", tag: "Bilingual support, hit 99 % SLA and upsold renewals." },
                        { name: "Jamie Park", email: "jamie.park@email.com", score: 71, color: "#f59e0b", tag: "Quick learner; clear KPI wins, lighter on de-escalation." },
                        { name: "Corey Morgan", email: "cmorgan@email.com", score: 56, color: "#ef4444", tag: "Customer-first mindset; answers generic, lacks metrics." }
                     ].map((c, i) => (
                        <div key={i} style={{ background: "rgba(255, 255, 255, 0.04)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "16px", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}>
                           <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: c.color === "#10b981" ? "#818cf8" : (c.color === "#f59e0b" ? "#f87171" : "#10b981"), opacity: 0.8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", fontWeight: 700, color: "#fff" }}>{c.name.split(' ').map(n=>n[0]).join('')}</div>
                              <div>
                                 <div style={{ fontWeight: 600 }}>{c.name}</div>
                                 <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{c.email}</div>
                                 <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>{c.tag}</div>
                              </div>
                           </div>
                           <div style={{ textAlign: "right" }}>
                              <div style={{ fontSize: "20px", fontWeight: 700, color: c.color }}>{c.score}%</div>
                              <div style={{ width: "60px", height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", marginTop: "4px" }}>
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

      {/* 6. Async Interviews Section (Image 2) */}
      <section style={{ padding: "140px 24px" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.02)", borderRadius: "32px", padding: "40px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", aspectRatio: "16/9", background: "#000" }}>
                     <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                     <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(0,0,0,0.6)", color: "#fff", padding: "4px 8px", borderRadius: "6px", fontSize: "11px" }}>0:45</div>
                     <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(255,255,255,0.3)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center" }}><Play size={24} fill="#fff" /></div>
                     </div>
                  </div>
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div style={{ display: "inline-block", background: "#f1f5f9", borderRadius: "100px", padding: "6px 16px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(15, 23, 42, 0.6)", letterSpacing: "1px" }}>CANDIDATES APPLY AT MIDNIGHT. THAT&apos;S FINE.</span>
               </div>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "28px", lineHeight: 1.1, color: "#fff" }}>Async interviews that work around everyone&apos;s schedule</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "40px" }}>
                  Truffle lets candidates record answers from their phone whenever works for them — 6am, midnight, Sunday morning. And with automatic reminders at 24 and 72 hours, the ones who forget get a nudge back.
               </p>
               <button style={{ background: "#060212", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px 28px", borderRadius: "10px", fontSize: "1rem", fontWeight: 600, marginBottom: "40px" }}>Start free trial</button>
               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["Assign teammates by roles or interviews", "Built-in scorecards", "Instant visibility into who's a yes, who's a maybe, and why"].map((bullet, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center", paddingTop: i === 0 ? 0 : "24px", borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}>
                       <Check size={18} color="rgba(255,255,255,0.6)" />
                       <span style={{ color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>

      {/* 7. Expectation Alignment Section (Image 3) */}
      <section style={{ padding: "140px 24px", background: "linear-gradient(to top, transparent, rgba(138, 92, 246, 0.05))" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
               <div style={{ display: "inline-block", background: "#f1f5f9", borderRadius: "100px", padding: "6px 16px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(15, 23, 42, 0.6)", letterSpacing: "1px" }}>SET EXPECTATIONS BEFORE DAY ONE</span>
               </div>
               <h2 style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "28px", lineHeight: 1.1, color: "#fff" }}>Reduce early no-shows with better expectation alignment</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "40px" }}>
                  Truffle&apos;s environment fit assessment surfaces alignment between what candidates want and what the role actually looks like — schedule realities, pace, physical demands, team dynamics. It&apos;s based on realistic job preview principles: set accurate expectations early and you get fewer surprises later.
               </p>
               <button style={{ background: "#060212", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", padding: "14px 28px", borderRadius: "10px", fontSize: "1rem", fontWeight: 600, marginBottom: "40px" }}>Start free trial</button>
               <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {["No device or browser restrictions with Truffle", "Candidates don't need to download an app or register", "99.99% uptime SLA"].map((bullet, i) => (
                    <div key={i} style={{ display: "flex", gap: "16px", alignItems: "center", borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)", paddingTop: i === 0 ? 0 : "24px" }}>
                       <Check size={18} color="rgba(255,255,255,0.6)" />
                       <span style={{ color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                    </div>
                  ))}
               </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
               <div style={{ background: "rgba(255, 255, 255, 0.02)", borderRadius: "32px", padding: "60px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div style={{ background: "#0c0e14", borderRadius: "16px", padding: "24px", color: "#fff", width: "100%", maxWidth: "450px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                     <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "16px" }}>
                        <ChevronLeft size={16} color="rgba(255, 255, 255, 0.3)" />
                        <div style={{ flex: 1 }}>
                           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              <span style={{ fontWeight: 700, fontSize: "14px", color: "#fff" }}>Pace & Urgency</span>
                              <span style={{ fontSize: "10px", color: "#3b82f6", background: "rgba(59, 130, 246, 0.1)", padding: "2px 8px", borderRadius: "10px" }}>Fast-paced, juggling priorities</span>
                           </div>
                           <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.4)", marginTop: "2px" }}>I feel energized when things are busy and I&apos;m juggling multiple priorities</div>
                        </div>
                     </div>
                     <div style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.3)", textTransform: "uppercase", fontWeight: 700, marginBottom: "16px" }}>Question 1 of 6</div>
                     <div style={{ fontWeight: 700, fontSize: "14px", marginBottom: "20px", color: "#fff" }}>Which better describes this role?</div>
                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        <div style={{ border: "2px solid #3b82f6", borderRadius: "8px", padding: "16px", background: "rgba(59, 130, 246, 0.05)", position: "relative" }}>
                           <div style={{ position: "absolute", top: "12px", left: "12px", width: "16px", height: "16px", borderRadius: "50%", border: "2px solid #3b82f6", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#3b82f6" }}></div></div>
                           <div style={{ marginLeft: "28px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                                 <span style={{ fontSize: "11px", fontWeight: 700, color: "#3b82f6" }}>Option A</span>
                                 <span style={{ fontSize: "9px", color: "#fff", background: "#3b82f6", padding: "1px 6px", borderRadius: "4px" }}>AI suggested</span>
                              </div>
                              <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.4 }}>I feel energized when things are busy and I&apos;m juggling multiple priorities</div>
                           </div>
                        </div>
                        <div style={{ border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "8px", padding: "16px", background: "rgba(255, 255, 255, 0.02)" }}>
                           <div style={{ display: "flex", gap: "12px" }}>
                              <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "1px solid rgba(255, 255, 255, 0.2)" }}></div>
                              <div>
                                 <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255, 255, 255, 0.4)", marginBottom: "4px" }}>Option B</div>
                                 <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.4)", lineHeight: 1.4 }}>I do my best work when I can give my full attention to one thing at a time</div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                        <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.3)", display: "flex", alignItems: "center", gap: "4px" }}><Share2 size={12} /> Swap question</div>
                        <div style={{ fontSize: "11px", color: "rgba(255, 255, 255, 0.3)", display: "flex", alignItems: "center", gap: "4px" }}><Plus size={12} /> Remove</div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 8. Modern Guardrails Grid (Image 4) */}
      <section style={{ padding: "140px 24px" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: "3.5rem", fontWeight: 600, marginBottom: "64px", color: "#fff" }}>
               Seasonal hiring tools with modern guardrails
            </motion.h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px" }}>
               {[
                  { title: "Candidate management", desc: "Bulk candidate management with multi-select, status changes (advance, reject, on hold), notes, ratings, and more.", icon: <LayoutDashboard size={24} /> },
                  { title: "Customize Truffle's AI", desc: "Capture your unique company attributes for matching including culture, values, and success factors that calibrate AI scoring.", icon: <Layers size={24} /> },
                  { title: "Qualification checks", desc: "Automatically screen your candidates against minimum role requirements such as availability and qualifications.", icon: <Search size={24} /> },
                  { title: "Works on mobile", desc: "Responsive design optimized for candidates to complete applications and video recordings from any device.", icon: <Smartphone size={24} /> },
                  { title: "Automate communications", desc: "Email notifications for key events including candidate invitations, reminders and other notifications.", icon: <MessageSquare size={24} /> },
                  { title: "Magic Review", desc: "Easily move between candidates and review key details before deciding whether to dive in further.", icon: <Zap size={24} /> }
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

      {/* 9. AI Resistance Section (Image 1) */}
      <section style={{ padding: "140px 24px", background: "#060212", color: "#fff" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <div style={{ display: "inline-block", background: "rgba(255,255,255,0.04)", borderRadius: "100px", padding: "6px 16px", marginBottom: "24px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255, 255, 255, 0.6)", letterSpacing: "1px" }}>CANDIDATE SCREENING FOR THE AGE OF AI</span>
               </div>
               <h2 style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)", fontWeight: 600, marginBottom: "28px", lineHeight: 1.1, color: "#fff" }}>Traditional assessments are broken. AI can fake them in seconds.</h2>
               <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "40px" }}>
                  Getting polished take-home responses that don&apos;t match interview performance? With Truffle&apos;s talent assessment software, you finally see the real candidate with no scripts and no AI assistance.
               </p>
               <button style={{ background: "#fff", color: "#060212", border: "none", padding: "16px 36px", borderRadius: "12px", fontSize: "1rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
                  Start free trial <ArrowRight size={18} style={{ transform: "rotate(-45deg)" }} />
               </button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ position: "relative" }}>
               <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #f87171 0%, #3b82f6 100%)", opacity: 0.1, filter: "blur(60px)", borderRadius: "50%" }}></div>
               <div style={{ position: "relative", zIndex: 1, background: "rgba(255, 255, 255, 0.03)", border: "12px solid #1a1c22", borderRadius: "40px", width: "320px", height: "640px", margin: "0 auto", overflow: "hidden", display: "flex", flexDirection: "column", boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)" }}>
                  <div style={{ padding: "32px 24px 16px" }}>
                     <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}><Sparkles size={24} color="#3b82f6" /></div>
                     <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px", color: "#fff" }}>Question 1 of 5</div>
                     <div style={{ display: "flex", gap: "12px", fontSize: "10px", color: "rgba(255,255,255,0.4)", marginBottom: "12px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={10} /> 2 minutes max</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Plus size={10} style={{ transform: "rotate(45deg)" }} /> 2 retakes available</span>
                     </div>
                     <p style={{ fontSize: "12px", fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>Tell me about a time you dealt with a difficult customer. How did you handle the situation?</p>
                  </div>
                  
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.02)", position: "relative", margin: "0 16px", borderRadius: "16px", overflow: "hidden" }}>
                     <img src="https://images.unsplash.com/photo-1573496359142-f8d87734a5a2?auto=format&fit=crop&q=80&w=600" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                     <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", alignItems: "center", gap: "8px", background: "rgba(0,0,0,0.5)", padding: "4px 8px", borderRadius: "4px", color: "#fff", fontSize: "10px" }}>
                        <div style={{ width: "6px", height: "6px", background: "#ef4444", borderRadius: "50%" }}></div> Recording • 1:15
                     </div>
                     <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)" }}>
                        <button style={{ background: "#fff", color: "#111", border: "none", padding: "8px 16px", borderRadius: "100px", fontSize: "11px", fontWeight: 700 }}>Stop Recording</button>
                     </div>
                  </div>
                  
                  <div style={{ padding: "16px 24px 32px" }}>
                     <button style={{ width: "100%", background: "#3b82f6", color: "#fff", border: "none", padding: "12px", borderRadius: "8px", fontWeight: 700, fontSize: "13px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "16px" }}>Next Question <ChevronRight size={16} /></button>
                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", maxWidth: "1200px" }}>Want to pick up on another device or need to get to a quiet space?</span>
                        <span style={{ fontSize: "10px", color: "#3b82f6", fontWeight: 700, cursor: "pointer" }}>Finish later</span>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 10. Recruiter Transformation Section (Reduced Height) */}
      <section style={{ padding: "80px 24px", background: "#060212" }}>
         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 2fr", gap: "20px", alignItems: "stretch", minHeight: "450px" }}>
            {/* Left Content Card */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "32px", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
               <h2 style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 600, color: "#fff", lineHeight: 1.1, marginBottom: "24px", maxWidth: "350px" }}>Truffle is candidate screening software built for the AI-age</h2>
               <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.5, marginBottom: "32px", maxWidth: "340px" }}>
                  Stop spending all your time on applicant screening. Start making faster, more confident hiring decisions with structured data — not gut feel.
               </p>
               <button style={{ background: "#fff", color: "#060212", border: "none", padding: "14px 32px", borderRadius: "12px", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer" }}>Start free trial</button>
            </motion.div>

            {/* Right Visualization Card (Slider Style) */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ position: "relative", borderRadius: "32px", overflow: "hidden", display: "flex", gap: "4px", minHeight: "450px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
               {/* Before Side */}
               <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
                  <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.5) contrast(1.1)" }} />
                  <div style={{ position: "absolute", top: "180px", left: "20px", background: "#ef4444", color: "#fff", padding: "4px 10px", borderRadius: "100px", fontSize: "10px", fontWeight: 700 }}>249 Applications</div>
                  <div style={{ position: "absolute", top: "140px", right: "20px", background: "#f59e0b", color: "#fff", padding: "4px 10px", borderRadius: "100px", fontSize: "10px", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}><Clock size={10} /> 4+ Hours to review</div>
                  <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", color: "#fff", padding: "4px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: 700 }}>Before</div>
                  
                  {/* Floating Video Icons */}
                  <div style={{ position: "absolute", top: "25%", left: "10%", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(5px)", padding: "8px", borderRadius: "8px" }}><Play size={14} fill="#fff" color="#fff" /></div>
                  <div style={{ position: "absolute", top: "45%", right: "15%", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(5px)", padding: "8px", borderRadius: "8px" }}><Play size={14} fill="#fff" color="#fff" /></div>
               </div>

               {/* After Side */}
               <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.8)" }} />
                  <div style={{ position: "absolute", top: "24px", right: "24px", background: "#1a1c22", padding: "12px", borderRadius: "12px", boxShadow: "0 15px 30px rgba(0,0,0,0.5)", width: "160px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                     <div style={{ fontSize: "10px", fontWeight: 800, color: "rgba(255,255,255,0.4)", marginBottom: "10px", letterSpacing: "0.05em" }}>Top Candidates</div>
                     {[
                        { name: "Mateo Rodriguez", score: 95, color: "#10b981", bg: "#8b5cf6" },
                        { name: "Jamie Park", score: 87, color: "#10b981", bg: "#f87171" },
                        { name: "Corey Morgan", score: 71, color: "#f59e0b", bg: "#10b981" }
                     ].map((c, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                           <div style={{ width: "18px", height: "18px", borderRadius: "4px", background: c.bg, color: "#fff", fontSize: "6px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{c.name.split(' ').map(n=>n[0]).join('')}</div>
                           <div style={{ flex: 1, fontSize: "9px", fontWeight: 700, color: "#fff" }}>{c.name}</div>
                           <div style={{ fontSize: "8px", fontWeight: 800, color: c.color }}>{c.score}%</div>
                        </div>
                     ))}
                  </div>
                  <div style={{ position: "absolute", bottom: "20px", right: "20px", background: "#3b82f6", color: "#fff", padding: "4px 12px", borderRadius: "100px", fontSize: "11px", fontWeight: 700 }}>After</div>
               </div>

               {/* Slider Handle Mockup */}
               <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "rgba(255, 255, 255, 0.3)", transform: "translateX(-50%)", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "32px", height: "32px", background: "#fff", borderRadius: "50%", boxShadow: "0 4px 12px rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                     <div style={{ display: "flex", gap: "2px" }}>
                        <div style={{ width: "2px", height: "12px", background: "#000", borderRadius: "1px" }}></div>
                        <div style={{ width: "2px", height: "12px", background: "#000", borderRadius: "1px" }}></div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.8; }
          100% { transform: scale(0.95); opacity: 0.5; }
        }
      ` }} />
    </main>
  );
}
