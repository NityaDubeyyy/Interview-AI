"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, XCircle } from "lucide-react";

export default function ScreensCandidatesSection() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "100px 24px", color: "#111", fontFamily: "'Geist', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ 
            fontSize: "11px", 
            fontWeight: "600", 
            letterSpacing: "1px", 
            textTransform: "uppercase", 
            background: "#f8f9fa", 
            border: "1px solid #eaeaea", 
            padding: "8px 16px", 
            borderRadius: "100px", 
            color: "#888", 
            marginBottom: "24px", 
            display: "inline-block",
            fontFamily: "monospace"
          }}>
            CANDIDATE & APPLICANT SCREENING SOFTWARE BUILT TO MAKE HIRING SIMPLER
          </div>
          <h2 style={{ fontSize: "3.5rem", fontWeight: "400", marginBottom: "16px", color: "#111", lineHeight: "1.1" }}>
            How Truffle screens applicants
          </h2>
          <p style={{ fontSize: "18px", color: "#444", lineHeight: "1.5", maxWidth: "600px", margin: "0 auto" }}>
            Resume screens and phone calls are so 2008. <br />
            Meet the tools that screen every applicant for you.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "32px" 
        }}>
          
          {/* Column 1: Video Interviews */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Image Card */}
            <div style={{ 
              backgroundColor: "#f7f7f8", 
              borderRadius: "24px", 
              height: "320px", 
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              position: "relative"
            }}>
              <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" 
                  alt="Video Interview"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                   <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}>
                     <Play fill="white" color="white" size={20} style={{ marginLeft: "4px" }} />
                   </div>
                </div>
                <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(0,0,0,0.5)", color: "white", fontSize: "10px", padding: "4px 8px", borderRadius: "100px", backdropFilter: "blur(4px)" }}>
                  2:45
                </div>
                <div style={{ position: "absolute", bottom: "0", left: "0", width: "80%", height: "4px", background: "#3b82f6" }}></div>
                <div style={{ position: "absolute", bottom: "0", left: "80%", width: "20%", height: "4px", background: "rgba(255,255,255,0.3)" }}></div>
              </div>
            </div>
            
            {/* Text Content */}
            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "12px", color: "#111" }}>
              One-way video and audio interviews
            </h3>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "16px", flex: 1 }}>
              Truffle's async video interviews transcribe, summarize, and score everyone automatically. Watch 90-second Candidate Shorts instead of sitting through hour-long phone screens.
            </p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", color: "#111", textDecoration: "none" }}>
              Learn more <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Column 2: Talent Assessments */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* Image Card - Assessment UI */}
            <div style={{ 
              backgroundColor: "#f7f7f8", 
              borderRadius: "24px", 
              height: "320px", 
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              position: "relative"
            }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", width: "100%", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid #eaeaea" }}>
                <div style={{ fontSize: "10px", fontWeight: "600", color: "#888", letterSpacing: "1px", marginBottom: "16px" }}>QUESTION 1 OF 6</div>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "#111", marginBottom: "20px" }}>Which better describes this role?</div>
                
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                   <div style={{ flex: 1, border: "2px solid #3b82f6", borderRadius: "12px", padding: "16px", backgroundColor: "#f0f7ff", position: "relative" }}>
                     <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                       <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#3b82f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "white" }}></div>
                       </div>
                       <span style={{ fontSize: "12px", fontWeight: "600", color: "#3b82f6" }}>Option A</span>
                       <span style={{ fontSize: "10px", color: "#3b82f6", background: "white", padding: "2px 6px", borderRadius: "100px", border: "1px solid #bfdbfe" }}>At supported</span>
                     </div>
                     <div style={{ fontSize: "13px", color: "#1e3a8a", lineHeight: "1.4" }}>
                       I feel energized when things are busy and I'm juggling multiple priorities
                     </div>
                   </div>

                   <div style={{ flex: 1, border: "1px solid #eaeaea", borderRadius: "12px", padding: "16px", backgroundColor: "#ffffff" }}>
                     <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                       <div style={{ width: "16px", height: "16px", borderRadius: "50%", border: "1px solid #ccc" }}></div>
                       <span style={{ fontSize: "12px", fontWeight: "500", color: "#555" }}>Option B</span>
                     </div>
                     <div style={{ fontSize: "13px", color: "#444", lineHeight: "1.4" }}>
                       I do my best work when I can give my full attention to one thing at a time
                     </div>
                   </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #eaeaea", paddingTop: "12px", marginTop: "12px" }}>
                   <div style={{ fontSize: "12px", color: "#666", display: "flex", alignItems: "center", gap: "6px" }}>
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
                     Swap question
                   </div>
                   <div style={{ fontSize: "12px", color: "#999", display: "flex", alignItems: "center", gap: "6px" }}>
                     <XCircle size={14} /> Remove
                   </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "12px", color: "#111" }}>
              Talent assessments
            </h3>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "16px", flex: 1 }}>
              Pick the skills and behaviors that matter to you. No universal right answers means no way to game the results. You get a shortlist based on real alignment, not polished answers.
            </p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", color: "#111", textDecoration: "none" }}>
              Learn more <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Column 3: Resume Screening */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ display: "flex", flexDirection: "column" }}
          >
             {/* Image Card - Resume UI */}
             <div style={{ 
              backgroundColor: "#f7f7f8", 
              borderRadius: "24px", 
              height: "320px", 
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              position: "relative",
              overflow: "hidden"
            }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "20px", width: "100%", height: "100%", boxShadow: "0 10px 40px rgba(0,0,0,0.05)", border: "1px solid #eaeaea", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "#111" }}>Resume Analysis</div>
                  <div style={{ fontSize: "11px", fontWeight: "600", color: "#10b981", background: "#ecfdf5", padding: "4px 8px", borderRadius: "100px" }}>+ 76% Match</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}>
                  {/* Item 1 */}
                  <div>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "6px", alignItems: "flex-start" }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ marginTop: "2px" }} />
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#333" }}>SaaS experience (2+ years)</div>
                        <div style={{ fontSize: "11px", color: "#777" }}>3.8 years across two B2B SaaS companies</div>
                      </div>
                      <div style={{ marginLeft: "auto", fontSize: "11px", color: "#10b981", fontWeight: "600" }}>96%</div>
                    </div>
                    <div style={{ height: "4px", background: "#ecfdf5", borderRadius: "2px", marginLeft: "26px", width: "calc(100% - 26px)" }}>
                      <div style={{ width: "96%", height: "100%", background: "#10b981", borderRadius: "2px" }}></div>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "6px", alignItems: "flex-start" }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ marginTop: "2px" }} />
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#333" }}>Proactive client communication</div>
                        <div style={{ fontSize: "11px", color: "#777" }}>Initiated quarterly business reviews, built client health dashboards</div>
                      </div>
                      <div style={{ marginLeft: "auto", fontSize: "11px", color: "#10b981", fontWeight: "600" }}>88%</div>
                    </div>
                    <div style={{ height: "4px", background: "#ecfdf5", borderRadius: "2px", marginLeft: "26px", width: "calc(100% - 26px)" }}>
                      <div style={{ width: "88%", height: "100%", background: "#10b981", borderRadius: "2px" }}></div>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "6px", alignItems: "flex-start" }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ marginTop: "2px" }} />
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#333" }}>Cross-functional collaboration</div>
                        <div style={{ fontSize: "11px", color: "#777" }}>Coordinated with product, sales, and engineering on escalations</div>
                      </div>
                      <div style={{ marginLeft: "auto", fontSize: "11px", color: "#10b981", fontWeight: "600" }}>85%</div>
                    </div>
                    <div style={{ height: "4px", background: "#ecfdf5", borderRadius: "2px", marginLeft: "26px", width: "calc(100% - 26px)" }}>
                      <div style={{ width: "85%", height: "100%", background: "#10b981", borderRadius: "2px" }}></div>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "6px", alignItems: "flex-start" }}>
                      <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#fef08a", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
                        <div style={{ width: "8px", height: "2px", background: "#ca8a04", borderRadius: "1px" }}></div>
                      </div>
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#333" }}>Data-driven decision making</div>
                        <div style={{ fontSize: "11px", color: "#777" }}>Tracked NPS and usage metrics — no mention of churn analysis</div>
                      </div>
                      <div style={{ marginLeft: "auto", fontSize: "11px", color: "#eab308", fontWeight: "600" }}>55%</div>
                    </div>
                    <div style={{ height: "4px", background: "#fef9c3", borderRadius: "2px", marginLeft: "26px", width: "calc(100% - 26px)" }}>
                      <div style={{ width: "55%", height: "100%", background: "#eab308", borderRadius: "2px" }}></div>
                    </div>
                  </div>

                  {/* Item 5 */}
                  <div>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "6px", alignItems: "flex-start" }}>
                      <XCircle size={16} color="#ef4444" style={{ marginTop: "2px" }} />
                      <div>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: "#333" }}>Renewal and expansion ownership</div>
                        <div style={{ fontSize: "11px", color: "#777" }}>Supported renewals but no direct ownership of revenue targets</div>
                      </div>
                      <div style={{ marginLeft: "auto", fontSize: "11px", color: "#ef4444", fontWeight: "600" }}>30%</div>
                    </div>
                    <div style={{ height: "4px", background: "#fee2e2", borderRadius: "2px", marginLeft: "26px", width: "calc(100% - 26px)" }}>
                      <div style={{ width: "30%", height: "100%", background: "#ef4444", borderRadius: "2px" }}></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Text Content */}
            <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "12px", color: "#111" }}>
              Resume screening
            </h3>
            <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "16px", flex: 1 }}>
              Forget blunt keyword filters. AI resume scoring reviews every application against your job description in seconds to help you prioritize review in minutes.
            </p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600", color: "#111", textDecoration: "none" }}>
              Learn more <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
