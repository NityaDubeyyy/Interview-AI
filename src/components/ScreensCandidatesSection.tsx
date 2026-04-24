"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
              borderRadius: "24px", 
              height: "450px", 
              marginBottom: "24px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}>
              <img 
                src="/one-way-video-interview.avif" 
                alt="Video Interview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
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
              borderRadius: "24px", 
              height: "450px", 
              marginBottom: "24px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}>
              <img 
                src="/talent-assessments.avif" 
                alt="Talent Assessments"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
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
              borderRadius: "24px", 
              height: "450px", 
              marginBottom: "24px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
            }}>
              <img 
                src="/resume-screening.avif" 
                alt="Resume Screening"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
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
