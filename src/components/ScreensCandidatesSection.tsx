"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Video, ClipboardCheck, FileSearch } from "lucide-react";

export default function ScreensCandidatesSection() {
  const cards = [
    {
      title: "One-way video and audio interviews",
      desc: "Interview AI's async video interviews transcribe, summarize, and score everyone automatically. Watch 90-second Candidate Shorts instead of sitting through hour-long phone screens.",
      href: "/solution/one-way-video-interview-software",
      img: "/one-way-video-interview.avif",
      icon: <Video size={18} color="#8B5CF6" />
    },
    {
      title: "Talent assessments",
      desc: "Pick the skills and behaviors that matter to you. No universal right answers means no way to game the results. You get a shortlist based on real alignment, not polished answers.",
      href: "/solution/talent-assessment-software",
      img: "/talent-assessments.avif",
      icon: <ClipboardCheck size={18} color="#10B981" />
    },
    {
      title: "Resume screening",
      desc: "Forget blunt keyword filters. AI resume scoring reviews every application against your job description in seconds to help you prioritize review in minutes.",
      href: "/solution/application-review",
      img: "/resume-screening.avif",
      icon: <FileSearch size={18} color="#38BDF8" />
    }
  ];

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
          <h2 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: "600", marginBottom: "16px", color: "#111", lineHeight: "1.15" }}>
            How Interview AI screens applicants
          </h2>
          <p style={{ fontSize: "18px", color: "#444", lineHeight: "1.5", maxWidth: "600px", margin: "0 auto" }}>
            Resume screens and phone calls are so 2008. <br />
            Meet the tools that screen every applicant for you.
          </p>
        </div>

        {/* 3-Column Responsive Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "32px" 
        }}>
          {cards.map((card, idx) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Link 
                href={card.href}
                style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}
              >
                {/* Image Card */}
                <div style={{ 
                  borderRadius: "24px", 
                  height: "380px", 
                  marginBottom: "24px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  background: "#f3f4f6"
                }}>
                  <img 
                    src={card.img} 
                    alt={card.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
                
                {/* Text Content */}
                <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "12px", color: "#111", display: "flex", alignItems: "center", gap: "8px" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#666", lineHeight: "1.6", marginBottom: "18px", flex: 1 }}>
                  {card.desc}
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "15px", fontWeight: "700", color: "#7C3AED" }}>
                  Learn more <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
