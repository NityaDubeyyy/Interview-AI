"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, FileText, Lock, Cookie, Scale } from "lucide-react";

export default function LegalPage() {
  const [activeTab, setActiveTab] = useState<"terms" | "privacy" | "disclaimer" | "cookies">("terms");

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#06030E", color: "#fff" }}>
      <Navbar />

      <div className="container" style={{ flex: 1, padding: "7rem 1.5rem 4rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem 0.9rem",
              borderRadius: "99px",
              background: "rgba(139, 92, 246, 0.15)",
              border: "1px solid rgba(139, 92, 246, 0.3)",
              color: "#c084fc",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <Shield size={14} /> Trust & Transparency
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
            Legal Documentation & Policies
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
            Review our terms of service, privacy practices, and compliance standards designed to protect your interview data.
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { id: "terms", label: "Terms of Service", icon: <FileText size={18} /> },
            { id: "privacy", label: "Privacy Policy", icon: <Lock size={18} /> },
            { id: "disclaimer", label: "Disclaimer", icon: <Scale size={18} /> },
            { id: "cookies", label: "Cookies Policy", icon: <Cookie size={18} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "12px",
                border: activeTab === tab.id ? "1px solid #8B5CF6" : "1px solid rgba(255, 255, 255, 0.1)",
                background: activeTab === tab.id ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.04)",
                color: activeTab === tab.id ? "#ffffff" : "#94a3b8",
                fontWeight: 600,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Legal Document Card */}
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "rgba(18, 16, 32, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            padding: "2.5rem",
            lineHeight: 1.7,
            color: "#cbd5e1",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          {activeTab === "terms" && (
            <div>
              <h2 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "1rem" }}>Terms of Service</h2>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.5rem" }}>Last Updated: March 2026</p>
              
              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>1. Acceptance of Terms</h3>
              <p>By accessing or utilizing Interview AI’s website, simulated interviews, role generators, and cockpit tools, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>

              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>2. Use of AI Simulation Tools</h3>
              <p>Our mock interviews and AI evaluation rubrics provide educational training and feedback based on typical industry patterns. Interview AI does not guarantee employment or specific hiring outcomes with any third-party employer.</p>

              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>3. User Conduct & Content</h3>
              <p>You agree not to upload harmful, offensive, or infringing material during camera, voice, or text interview simulations. You retain ownership of your submitted answers and practice responses.</p>
            </div>
          )}

          {activeTab === "privacy" && (
            <div>
              <h2 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "1rem" }}>Privacy Policy</h2>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.5rem" }}>Last Updated: March 2026</p>

              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>1. Data Collection & Camera Access</h3>
              <p>When you enable your webcam or microphone in the Interview Cockpit, audio-visual streams are processed locally in your browser for live user preview and real-time interaction. We do not sell your personal recordings to third parties.</p>

              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>2. Data Encryption</h3>
              <p>All interview transcripts, rubrics, and user profiles are stored using industry-standard TLS encryption in transit and AES-256 encryption at rest.</p>

              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>3. Your Rights</h3>
              <p>You may request data deletion or an export of your interview sessions at any time by contacting our privacy compliance team at privacy@interviewai.dev.</p>
            </div>
          )}

          {activeTab === "disclaimer" && (
            <div>
              <h2 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "1rem" }}>Disclaimer</h2>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.5rem" }}>Last Updated: March 2026</p>

              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>AI Scoring & Evaluation Rubrics</h3>
              <p>The feedback generated by our AI models is intended for career preparation, practice, and skill development. Scores and diagnostic recommendations should be used as guidance rather than definitive assessments of professional competence.</p>
            </div>
          )}

          {activeTab === "cookies" && (
            <div>
              <h2 style={{ color: "#fff", fontSize: "1.75rem", marginBottom: "1rem" }}>Cookies Policy</h2>
              <p style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "1.5rem" }}>Last Updated: March 2026</p>

              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: "1.5rem", marginBottom: "0.5rem" }}>Essential Cookies</h3>
              <p>We use essential cookies and local session storage to maintain your active role setup, question bank configurations, and authentication status across tabs.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
