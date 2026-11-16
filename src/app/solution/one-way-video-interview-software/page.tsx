"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, Sparkles, ArrowRight, CheckCircle2, Clock, Play, Users, BarChart3, ShieldCheck } from "lucide-react";

export default function OneWayVideoInterviewPage() {
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
              background: "rgba(139, 92, 246, 0.15)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              color: "#c084fc",
              fontSize: "0.82rem",
              fontWeight: 600,
              marginBottom: "1.25rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <Video size={15} /> Async Video & Audio Interviews
          </div>

          <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Screen Top Candidates In Minutes With <span style={{ color: "#a78bfa" }}>AI Video Shorts</span>
          </h1>

          <p style={{ fontSize: "1.15rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "2rem" }}>
            Automate early-round screening with customizable asynchronous video prompts. Automatically transcribe, summarize, and score candidate responses against your hiring rubric.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/role-setup"
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                color: "white",
                textDecoration: "none",
                padding: "0.9rem 2rem",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "1rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: "0 8px 25px rgba(139, 92, 246, 0.4)",
              }}
            >
              Start Free Setup <ArrowRight size={18} />
            </Link>

            <Link
              href="/interview-cockpit"
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
              <Play size={18} color="#10b981" /> Try Live Cockpit
            </Link>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.75rem", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            {
              icon: <Clock size={24} color="#8b5cf6" />,
              title: "90-Second Candidate Shorts",
              desc: "Skip endless phone screens. Get rapid, AI-distilled highlights of each candidate's responses."
            },
            {
              icon: <BarChart3 size={24} color="#10b981" />,
              title: "Rubric-Based Scoring",
              desc: "Score technical and behavioral answers against standardized competencies for bias-free candidate reviews."
            },
            {
              icon: <ShieldCheck size={24} color="#38bdf8" />,
              title: "Private & Encrypted",
              desc: "Enterprise-grade encryption and secure access controls for all candidate video and audio recordings."
            }
          ].map((feat, i) => (
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
                {feat.icon}
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.6rem" }}>{feat.title}</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
