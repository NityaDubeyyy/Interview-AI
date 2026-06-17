"use client";

import React from "react";
import Link from "next/link";
import { Layers, MapPin, Mail, PhoneCall, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer 
      style={{ 
        background: "radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 24%), #05010D", 
        padding: "96px 0 64px", 
        color: "rgba(226, 232, 240, 0.88)", 
        fontFamily: "var(--font-inter), sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1.5fr", 
            gap: "40px", 
          }}
        >
          {/* Brand & Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "12px", 
                fontSize: "24px", 
                fontWeight: 700, 
                color: "#E2E8F0", 
                letterSpacing: "-0.02em",
                marginBottom: "8px"
              }}
            >
              <div style={{ padding: "10px", background: "#7C3AED", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Layers size={22} color="white" />
              </div>
              <span style={{ color: "#CBD5E1" }}>Interview AI</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", lineHeight: 1.6 }}>
              <MapPin size={18} color="#8B5CF6" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>1800, Walt Disney World, Bay Lake,<br />Orlando, United State</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px" }}>
              <Mail size={18} color="#8B5CF6" style={{ flexShrink: 0 }} />
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>support@interviewai.com</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px" }}>
              <PhoneCall size={18} color="#8B5CF6" style={{ flexShrink: 0 }} />
              <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>+1 (786) 259 4652</span>
            </div>
          </div>

          {/* Company */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ color: "#E2E8F0", fontWeight: 700, fontSize: "16px" }}>Company</div>
            <Link href="/contact" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Contact Us</Link>
            <Link href="/blog" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Blog</Link>
            <Link href="#" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Pricing</Link>
            <Link href="#" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Sign in / Sign Up</Link>
          </div>

          {/* Quick Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ color: "#E2E8F0", fontWeight: 700, fontSize: "16px" }}>Quick Navigation</div>
            <Link href="/" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Home</Link>
            <Link href="/practice-interview" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Career Preparation</Link>
            <Link href="#" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Learn &amp; Grow</Link>
          </div>

          {/* Tools */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ color: "#E2E8F0", fontWeight: 700, fontSize: "16px" }}>Tools</div>
            <Link href="#" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Career Vault</Link>
            <Link href="#" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>The Prep Engine</Link>
            <Link href="#" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Mock Interview</Link>
            <Link href="#" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Smart Career Coach</Link>
            <Link href="#" style={{ color: "rgba(226, 232, 240, 0.78)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.78)"}>Question Hub</Link>
          </div>

          {/* Legal */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#E2E8F0", fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>Legal</div>
            {[
              "Terms of Service",
              "Privacy Policy",
              "Disclaimer",
              "Cookies Policy"
            ].map((policy, idx) => (
              <div key={idx} style={{ padding: "12px 0", borderBottom: idx < 3 ? "1px solid rgba(255, 255, 255, 0.05)" : "none" }}>
                <Link href="#" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}>
                  {policy}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            paddingTop: "32px", 
            borderTop: "1px solid rgba(226, 232, 240, 0.12)", 
            fontSize: "13px",
            marginTop: "64px"
          }}
        >
          <div style={{ color: "rgba(226, 232, 240, 0.72)" }}>© {new Date().getFullYear()} InterviewAI. All rights reserved.</div>
          <div 
            onClick={scrollToTop} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "#E2E8F0", 
              fontWeight: 600, 
              cursor: "pointer",
              opacity: 0.85,
              transition: "opacity 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "0.85"}
          >
            Back to the top <ArrowUp size={16} />
          </div>
        </div>
      </div>

      {/* Giant Background Text */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "-4vw", 
          left: "50%", 
          transform: "translateX(-50%)",
          width: "220%", 
          fontSize: "15vw", 
          fontWeight: 900, 
          color: "rgba(255, 255, 255, 0.06)", 
          textAlign: "center", 
          lineHeight: 0.8, 
          whiteSpace: "nowrap", 
          pointerEvents: "none", 
          zIndex: 1, 
          letterSpacing: "-0.05em",
          userSelect: "none",
          fontFamily: "var(--font-inter), sans-serif"
        }}
      >
        Interview AI
      </div>
    </footer>
  );
}
