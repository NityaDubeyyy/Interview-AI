"use client";

import React from "react";
import { motion } from "framer-motion";
import { PlayCircle, ShieldCheck, Users, LineChart, Lock, Sliders, ChevronRight } from "lucide-react";

export default function RecruitingFeaturesSection() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "100px 24px", color: "#111", fontFamily: "'Geist', sans-serif" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "120px" }}>
        
        {/* Feature 1 (Image 1) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          {/* Left Content */}
          <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div style={{ 
              fontSize: "11px", 
              fontWeight: "600", 
              letterSpacing: "1px", 
              textTransform: "uppercase", 
              background: "#f8f9fa", 
              border: "1px solid #eaeaea", 
              padding: "6px 12px", 
              borderRadius: "100px", 
              color: "#888", 
              marginBottom: "24px", 
              display: "inline-block" 
            }}>
              PERFECT FOR HIGH-VOLUME HIRING
            </div>
            
            <h2 style={{ fontSize: "3rem", fontWeight: "400", marginBottom: "20px", color: "#111", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              Tired of resumes that all<br/>look the same? We solve<br/>your screening problem
            </h2>
            
            <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6", marginBottom: "32px", maxWidth: "480px" }}>
              Video summaries. Assessment scores. Resume highlights. All automatic, all analyzed by Truffle's AI. Get to the real signal in minutes, not days.
            </p>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
              <button style={{ backgroundColor: "#0b0f19", color: "#fff", padding: "14px 28px", border: "none", borderRadius: "12px", fontWeight: "500", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" }}>
                Start free trial <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
              </button>
              <button style={{ backgroundColor: "#fff", color: "#111", border: "1px solid #eaeaea", padding: "14px 28px", borderRadius: "12px", fontWeight: "500", fontSize: "15px", cursor: "pointer" }}>
                Book Demo
              </button>
            </div>

            {/* 2x2 Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "16px", padding: "20px", background: "#fcfcfc" }}>
                <div style={{ fontWeight: "500", fontSize: "15px", marginBottom: "8px", color: "#222" }}>Match %</div>
                <div style={{ fontSize: "13px", color: "#777", lineHeight: "1.5" }}>Match % based on your exact requirements</div>
              </div>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "16px", padding: "20px", background: "#fcfcfc" }}>
                <div style={{ fontWeight: "500", fontSize: "15px", marginBottom: "8px", color: "#222" }}>Instant checks</div>
                <div style={{ fontSize: "13px", color: "#777", lineHeight: "1.5" }}>Quickly review years of experience & must-haves</div>
              </div>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "16px", padding: "20px", background: "#fcfcfc" }}>
                <div style={{ fontWeight: "500", fontSize: "15px", marginBottom: "8px", color: "#222" }}>Candidate Shorts</div>
                <div style={{ fontSize: "13px", color: "#777", lineHeight: "1.5" }}>Get a short 30-second recap of the interview.</div>
              </div>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "16px", padding: "20px", background: "#fcfcfc" }}>
                <div style={{ fontWeight: "500", fontSize: "15px", marginBottom: "8px", color: "#222" }}>Candidate summary</div>
                <div style={{ fontSize: "13px", color: "#777", lineHeight: "1.5" }}>Key details compiled into one TL;DR.</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             style={{ position: "relative", height: "600px", borderRadius: "24px", overflow: "hidden" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
              alt="Woman on laptop" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
            {/* Overlay UI Card */}
            <div style={{ position: "absolute", bottom: "32px", left: "32px", backgroundColor: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", width: "320px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                <span style={{ fontSize: "12px", fontWeight: "500", color: "#666" }}>0:00</span>
                <span style={{ fontSize: "11px", fontWeight: "600", color: "#3b82f6", background: "#eff6ff", padding: "4px 8px", borderRadius: "100px" }}>Mission alignment</span>
              </div>
              <p style={{ fontSize: "13px", color: "#111", lineHeight: "1.5", marginBottom: "12px" }}>
                I've been following GreenLeaf's sustainability reports for over a year. This is exactly the kind of impact-driven work I want to be part of.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#3b82f6", fontSize: "12px", fontWeight: "500", cursor: "pointer" }}>
                <PlayCircle size={14} /> Why this matters <ChevronRight size={14} />
              </div>
            </div>
          </motion.div>
        </div>


        {/* Feature 2 (Image 2) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          
          {/* Left Content - Image */}
          <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             style={{ position: "relative", height: "600px", borderRadius: "24px", overflow: "hidden" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop" 
              alt="Woman working on laptop" 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
            {/* Overlay UI Card */}
            <div style={{ position: "absolute", bottom: "32px", left: "32px", display: "flex", flexDirection: "column", gap: "10px", width: "320px" }}>
              {/* Card 1 */}
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "#8b5cf6", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "bold" }}>MR</div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#111" }}>Mateo Rodriguez</div>
                      <div style={{ fontSize: "10px", color: "#777" }}>mateo@email.com</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "30px", height: "4px", background: "#f0fdf4", borderRadius: "2px" }}>
                      <div style={{ width: "85%", height: "100%", background: "#22c55e", borderRadius: "2px" }}></div>
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#22c55e" }}>85%</span>
                  </div>
                </div>
                <div style={{ fontSize: "11px", color: "#666" }}>Bilingual support, hit 90% SLA and upsold renewals.</div>
              </div>
              
               {/* Card 2 */}
              <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "#ef4444", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "bold" }}>JP</div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#111" }}>Jamie Park</div>
                      <div style={{ fontSize: "10px", color: "#777" }}>jamie.park@email.com</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "30px", height: "4px", background: "#fefce8", borderRadius: "2px" }}>
                      <div style={{ width: "71%", height: "100%", background: "#eab308", borderRadius: "2px" }}></div>
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#eab308" }}>71%</span>
                  </div>
                </div>
                <div style={{ fontSize: "11px", color: "#666" }}>Quick learner, clear KPI wins, lighter on de-escalation.</div>
              </div>

               {/* Card 3 */}
               <div style={{ backgroundColor: "white", padding: "16px", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "6px", background: "#22c55e", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", fontWeight: "bold" }}>CM</div>
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "600", color: "#111" }}>Corey Morgan</div>
                      <div style={{ fontSize: "10px", color: "#777" }}>cmorgan@email.com</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "30px", height: "4px", background: "#fef2f2", borderRadius: "2px" }}>
                      <div style={{ width: "58%", height: "100%", background: "#ef4444", borderRadius: "2px" }}></div>
                    </div>
                    <span style={{ fontSize: "11px", fontWeight: "600", color: "#ef4444" }}>58%</span>
                  </div>
                </div>
                <div style={{ fontSize: "11px", color: "#666" }}>Customer-first mindset, answers generic, lacks metrics.</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div style={{ 
              fontSize: "11px", 
              fontWeight: "600", 
              letterSpacing: "1px", 
              textTransform: "uppercase", 
              background: "#f8f9fa", 
              border: "1px solid #eaeaea", 
              padding: "6px 12px", 
              borderRadius: "100px", 
              color: "#888", 
              marginBottom: "24px", 
              display: "inline-block" 
            }}>
              EVERY ANSWER ANALYZED AND EXPLAINED
            </div>
            
            <h2 style={{ fontSize: "3rem", fontWeight: "400", marginBottom: "20px", color: "#111", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              AI helps you prioritize candidates based on <i>your</i> criteria
            </h2>
            
            <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6", marginBottom: "32px", maxWidth: "480px" }}>
              Truffle doesn't just transcribe or process information. It evaluates each candidate against your rubric and explains its reasoning. See exactly where candidates align — and where you'll want to dig deeper.
            </p>
            
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
              <button style={{ backgroundColor: "#0b0f19", color: "#fff", padding: "14px 28px", border: "none", borderRadius: "12px", fontWeight: "500", fontSize: "15px", display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,0,0,0.1)" }}>
                Start free trial <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5l7 7-7 7"/></svg>
              </button>
              <button style={{ backgroundColor: "#fff", color: "#111", border: "1px solid #eaeaea", padding: "14px 28px", borderRadius: "12px", fontWeight: "500", fontSize: "15px", cursor: "pointer" }}>
                Book Demo
              </button>
            </div>

            {/* List */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "100px", padding: "14px 24px", fontSize: "15px", color: "#222", display: "flex", alignItems: "center", width: "max-content", gap: "12px", background: "#fff", fontWeight: "500" }}>
                <Users size={18} color="#666" /> Manage your team access
              </div>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "100px", padding: "14px 24px", fontSize: "15px", color: "#222", display: "flex", alignItems: "center", width: "max-content", gap: "12px", background: "#fff", fontWeight: "500" }}>
                <Sliders size={18} color="#666" /> Smart candidate ranking
              </div>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "100px", padding: "14px 24px", fontSize: "15px", color: "#222", display: "flex", alignItems: "center", width: "max-content", gap: "12px", background: "#fff", fontWeight: "500" }}>
                <LineChart size={18} color="#666" /> Candidate analytics
              </div>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "100px", padding: "14px 24px", fontSize: "15px", color: "#222", display: "flex", alignItems: "center", width: "max-content", gap: "12px", background: "#fff", fontWeight: "500" }}>
                <ShieldCheck size={18} color="#666" /> Enterprise Security
              </div>
              <div style={{ border: "1px solid #eaeaea", borderRadius: "100px", padding: "14px 24px", fontSize: "15px", color: "#222", display: "flex", alignItems: "center", width: "max-content", gap: "12px", background: "#fff", fontWeight: "500" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg> 
                Seamless Integrations
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
