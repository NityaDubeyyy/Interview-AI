"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Bot, ChevronDown, CheckCircle2 } from "lucide-react";

export default function ScreensCandidatesSection() {
  return (
    <section style={{ backgroundColor: "#F9FAFB", padding: "100px 24px", color: "#111827", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", background: "#EFF6FF", color: "#3B82F6", padding: "6px 16px", borderRadius: "999px", fontSize: "14px", fontWeight: "600", marginBottom: "24px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
            AI-POWERED INTERVIEW PLATFORM
          </div>
          <h2 style={{ fontSize: "48px", fontWeight: "700", marginBottom: "20px", color: "#111827", letterSpacing: "-0.02em" }}>
            How InterviewAI screens candidates
          </h2>
          <p style={{ fontSize: "18px", color: "#6B7280", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
            Phone screens and blind resume reviews are outdated. Meet the AI
            tools that evaluate every candidate — automatically, fairly, and in
            minutes.
          </p>
        </div>

        {/* Content Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "24px", alignItems: "start" }}>
          
          {/* Left Column: Async AI-conducted interviews */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ backgroundColor: "#ffffff", borderRadius: "24px", overflow: "hidden", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column", height: "100%" }}
          >
            {/* Top Mockup (Dark UI) */}
            <div style={{ backgroundColor: "#0F172A", padding: "32px", color: "#fff", flexGrow: 1, display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: "600" }}>
                <span style={{ color: "#10B981", display: "flex", alignItems: "center", gap: "6px" }}>
                  <div style={{ width: "8px", height: "8px", backgroundColor: "#10B981", borderRadius: "50%" }}></div> LIVE
                </span>
                <span style={{ color: "#64748B" }}>02:14 left</span>
              </div>
              
              <div style={{ backgroundColor: "#1E293B", padding: "24px", borderRadius: "16px", border: "1px solid #334155" }}>
                <div style={{ color: "#60A5FA", fontSize: "12px", fontWeight: "700", marginBottom: "12px" }}>QUESTION 2 OF 5</div>
                <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.5", color: "#F8FAFC" }}>
                  Tell me about a time you used data to influence a product decision. What was the outcome?
                </p>
              </div>

              <div style={{ display: "flex", gap: "4px", height: "24px", alignItems: "flex-end" }}>
                {[12, 24, 16, 8, 20, 16, 24, 12, 16].map((h, i) => (
                  <div key={i} style={{ width: "4px", height: h, backgroundColor: "#3B82F6", borderRadius: "2px", opacity: h > 16 ? 1 : 0.5 }}></div>
                ))}
              </div>

              <div style={{ backgroundColor: "#1E293B", padding: "16px", borderRadius: "16px", border: "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "36px", height: "36px", backgroundColor: "#3B82F6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600" }}>
                    SR
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: "600" }}>Sarah R.</div>
                    <div style={{ fontSize: "12px", color: "#64748B" }}>Senior Product Manager</div>
                  </div>
                </div>
                <div style={{ color: "#10B981", fontSize: "12px", fontWeight: "600" }}>Responding</div>
              </div>
            </div>

            {/* Bottom Content */}
            <div style={{ padding: "32px", borderTop: "1px solid #E5E7EB" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>Async AI-conducted interviews</h3>
              <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
                Our AI interviews every candidate on their own schedule — no calendars, no phone calls. It transcribes, scores, and summarises every response so you skip straight to the best fits.
              </p>
              <a href="#" style={{ color: "#3B82F6", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>Learn more <ArrowRight size={16} /></a>
            </div>
          </motion.div>

          {/* Right Column: Grid of feature cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
            
            {/* Top Wide Card: Competency Scores */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "32px", border: "1px solid #E5E7EB", display: "flex", gap: "32px" }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <h4 style={{ fontWeight: "700", fontSize: "18px" }}>Competency scores</h4>
                  <span style={{ backgroundColor: "#D1FAE5", color: "#065F46", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "600" }}>88% match</span>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Communication clarity", score: 92, color: "#10B981" },
                    { label: "Problem-solving depth", score: 87, color: "#10B981" },
                    { label: "Role-specific knowledge", score: 84, color: "#10B981" },
                    { label: "Cultural alignment", score: 61, color: "#F59E0B" },
                    { label: "Leadership signals", score: 38, color: "#EF4444" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600", marginBottom: "6px", color: "#4B5563" }}>
                        <span>{item.label}</span>
                        <span style={{ color: item.color }}>{item.score}%</span>
                      </div>
                      <div style={{ height: "6px", backgroundColor: "#F3F4F6", borderRadius: "3px", overflow: "hidden" }}>
                        <div style={{ width: `${item.score}%`, height: "100%", backgroundColor: item.color, borderRadius: "3px" }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "160px" }}>
                <div style={{ border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                  <div style={{ fontSize: "24px", fontWeight: "700" }}>340</div>
                  <div style={{ fontSize: "11px", color: "#6B7280" }}>Candidates screened</div>
                </div>
                <div style={{ border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", textAlign: "center", backgroundColor: "#F0FDF4" }}>
                  <div style={{ fontSize: "24px", fontWeight: "700", color: "#059669" }}>91%</div>
                  <div style={{ fontSize: "11px", color: "#6B7280" }}>Avg accuracy score</div>
                </div>
                <div style={{ border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", textAlign: "center", backgroundColor: "#F9FAFB" }}>
                  <div style={{ fontSize: "24px", fontWeight: "700" }}>4.2x</div>
                  <div style={{ fontSize: "11px", color: "#6B7280" }}>Faster than manual</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.15 }}
               style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "32px", border: "1px solid #E5E7EB" }}
            >
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>AI competency scoring</h3>
              <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
                Define the skills and traits that matter for your role. Our AI scores every response objectively — no bias, no gaming. Get a ranked shortlist based on real alignment.
              </p>
              <a href="#" style={{ color: "#3B82F6", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>Learn more <ArrowRight size={16} /></a>
            </motion.div>

            {/* Bottom Split */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
              
              {/* Instant candidate reports */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "24px", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}
              >
                <div style={{ padding: "24px", borderBottom: "1px solid #E5E7EB" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "40px", height: "40px", backgroundColor: "#2563EB", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "600" }}>
                        SR
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: "700" }}>Sarah R.</div>
                        <div style={{ fontSize: "12px", color: "#6B7280" }}>Senior Product Manager</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: "20px", fontWeight: "700", color: "#2563EB" }}>91</div>
                      <div style={{ fontSize: "11px", color: "#6B7280" }}>Overall</div>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                    <span style={{ backgroundColor: "#DCFCE7", color: "#166534", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "500" }}>Strong communicator</span>
                    <span style={{ backgroundColor: "#DCFCE7", color: "#166534", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "500" }}>Data-driven</span>
                    <span style={{ backgroundColor: "#FEF3C7", color: "#92400E", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "500" }}>Leadership thin</span>
                    <span style={{ backgroundColor: "#FEE2E2", color: "#991B1B", padding: "4px 12px", borderRadius: "999px", fontSize: "12px", fontWeight: "500" }}>Low ML skills</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ width: "100%", height: "4px", backgroundColor: "#E5E7EB", borderRadius: "2px" }}></div>
                    <div style={{ width: "85%", height: "4px", backgroundColor: "#E5E7EB", borderRadius: "2px" }}></div>
                    <div style={{ width: "95%", height: "4px", backgroundColor: "#E5E7EB", borderRadius: "2px" }}></div>
                  </div>
                </div>
                
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>Instant candidate reports</h3>
                  <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>
                    Every candidate gets a detailed AI report — strengths, gaps, and scores you can share with your team in seconds.
                  </p>
                  <a href="#" style={{ color: "#3B82F6", fontWeight: "600", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>Learn more <ArrowRight size={16} /></a>
                </div>
              </motion.div>

              {/* AI debrief assistant */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{ backgroundColor: "#ffffff", borderRadius: "24px", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}
              >
                <div style={{ padding: "8px", borderBottom: "1px solid #E5E7EB", backgroundColor: "#F9FAFB", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }}>
                   {/* Chat UI */}
                   <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "16px" }}>
                     <div style={{ fontSize: "13px", fontWeight: "600", color: "#10B981", marginBottom: "4px" }}>AI debrief assistant</div>
                     <div style={{ backgroundColor: "#D1FAE5", color: "#065F46", padding: "12px 16px", borderRadius: "16px", borderBottomLeftRadius: "0", fontSize: "13px", lineHeight: "1.5" }}>
                       Sarah scored 91/100. Strong communicator with solid data skills. Leadership experience is limited — worth probing in the final round.
                     </div>
                     <div style={{ backgroundColor: "#DBEAFE", color: "#1E3A8A", padding: "12px 16px", borderRadius: "16px", borderBottomRightRadius: "0", fontSize: "13px", alignSelf: "flex-end" }}>
                       Should I move her to the next stage?
                     </div>
                     <div style={{ backgroundColor: "#E5E7EB", padding: "12px 16px", borderRadius: "16px", borderBottomLeftRadius: "0", display: "inline-flex", gap: "4px", alignSelf: "flex-start", alignItems: "center" }}>
                        <div style={{ width: "6px", height: "6px", backgroundColor: "#6B7280", borderRadius: "50%" }}></div>
                        <div style={{ width: "6px", height: "6px", backgroundColor: "#6B7280", borderRadius: "50%" }}></div>
                        <div style={{ width: "6px", height: "6px", backgroundColor: "#6B7280", borderRadius: "50%" }}></div>
                     </div>
                   </div>
                </div>
                
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}>AI debrief assistant</h3>
                  <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>
                    Ask our AI anything about a candidate — get instant summaries, comparisons, and hiring recommendations without re-reading transcripts.
                  </p>
                  <a href="#" style={{ color: "#3B82F6", fontWeight: "600", fontSize: "14px", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}>Learn more <ArrowRight size={16} /></a>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
