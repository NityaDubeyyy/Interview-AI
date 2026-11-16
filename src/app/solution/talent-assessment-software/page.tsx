"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClipboardCheck, Sparkles, ArrowRight, CheckCircle2, Target, Award, Brain, BarChart2 } from "lucide-react";

export default function TalentAssessmentPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#06030E", color: "#fff" }}>
      <Navbar />

      <div className="container" style={{ flex: 1, padding: "7rem 1.5rem 5rem" }}>
        {/* HERO */}
        <div style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto 4rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "99px",
              background: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              fontSize: "0.82rem",
              fontWeight: 600,
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <ClipboardCheck size={15} /> Pre-Employment Talent Assessments
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Scientifically Grounded <span style={{ color: "#34d399" }}>Skill & Behavioral Tests</span>
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "2rem" }}>
            Evaluate hard skills, problem solving, and behavioral alignment. Shortlist applicants based on authentic capability rather than rehearsed keyword buzzwords.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/role-setup"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                color: "white",
                textDecoration: "none",
                padding: "0.9rem 2rem",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 8px 25px rgba(16, 185, 129, 0.4)",
              }}
            >
              Configure Assessment <ArrowRight size={18} />
            </Link>

            <Link
              href="/practice-interview"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "white",
                textDecoration: "none",
                padding: "0.9rem 2rem",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Explore Sample Tests
            </Link>
          </div>
        </div>

        {/* ASSESSMENT TILES */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            {
              icon: <Brain size={24} color="#a78bfa" />,
              title: "Adaptive Questioning",
              desc: "Dynamic questions scale difficulty in real time based on candidate response depth."
            },
            {
              icon: <Target size={24} color="#10b981" />,
              title: "Job-Tailored Benchmarks",
              desc: "Compare candidates against industry averages calibrated for junior, mid, and senior levels."
            },
            {
              icon: <BarChart2 size={24} color="#f59e0b" />,
              title: "Detailed Competency Breakdown",
              desc: "Receive comprehensive reports highlighting analytical clarity, pacing, and core domain knowledge."
            }
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(18, 16, 32, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "18px",
                padding: "2rem",
                backdropFilter: "blur(16px)",
              }}
            >
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(255, 255, 255, 0.04)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.6rem" }}>{item.title}</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
