"use client";

import React from "react";
import Link from "next/link";
import { Layers, MapPin, Mail, PhoneCall, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      style={{ 
        background: "#05010d", 
        padding: "80px 0 40px", 
        color: "rgba(255, 255, 255, 0.5)", 
        borderTop: "1px solid rgba(255, 255, 255, 0.05)", 
        position: "relative", 
        overflow: "hidden" 
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "40px", 
            marginBottom: "80px" 
          }}
        >
          {/* Brand & Contact */}
          <div style={{ gridColumn: "span 2" }}>
            <div 
              style={{ 
                display: "flex", 
                alignItems: "center", 
                gap: "12px", 
                fontSize: "24px", 
                fontWeight: 700, 
                color: "white", 
                marginBottom: "32px",
                letterSpacing: "-0.02em"
              }}
            >
              <div style={{ padding: "6px", background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)", borderRadius: "8px" }}>
                <Layers size={20} color="white" />
              </div>
              Interview AI
            </div>
            <div 
              style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "20px", 
                fontSize: "14px", 
                color: "rgba(255, 255, 255, 0.5)" 
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", lineHeight: 1.5 }}>
                <MapPin size={18} color="#8B5CF6" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>1800, Walt Disney World, Bay Lake,<br />Orlando, United State</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", lineHeight: 1.5 }}>
                <Mail size={18} color="#8B5CF6" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>support@interviewai.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", lineHeight: 1.5 }}>
                <PhoneCall size={18} color="#8B5CF6" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>+1 (786) 259 4652</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ color: "white", fontWeight: 700, marginBottom: "24px", fontSize: "16px" }}>Company</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px" }}>
              <Link href="/contact" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Contact Us</Link>
              <Link href="/blog" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Blog</Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Pricing</Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Sign in / Sign Up</Link>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <div style={{ color: "white", fontWeight: 700, marginBottom: "24px", fontSize: "16px" }}>Quick Navigation</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px" }}>
              <Link href="/" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Home</Link>
              <Link href="/practice-interview" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Career Preparation</Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Learn & Grow</Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <div style={{ color: "white", fontWeight: 700, marginBottom: "24px", fontSize: "16px" }}>Tools</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "14px" }}>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Career Vault</Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>The Prep Engine</Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Mock Interview</Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Smart Career Coach</Link>
              <Link href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"}>Question Hub</Link>
            </div>
          </div>
        </div>

        <div 
          style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            paddingTop: "32px", 
            borderTop: "1px solid rgba(255, 255, 255, 0.05)", 
            fontSize: "13px" 
          }}
        >
          <div>© 2026 InterviewAI. All rights reserved.</div>
          <div 
            onClick={scrollToTop} 
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "white", 
              fontWeight: 600, 
              cursor: "pointer",
              opacity: 0.6,
              transition: "opacity 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "0.6"}
          >
            Back to the top <ArrowUp size={16} />
          </div>
        </div>
      </div>

      {/* Giant Background Text */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "-5vw", 
          left: 0, 
          width: "100%", 
          fontSize: "14vw", 
          fontWeight: 900, 
          color: "rgba(255, 255, 255, 0.02)", 
          textAlign: "center", 
          lineHeight: 1, 
          whiteSpace: "nowrap", 
          pointerEvents: "none", 
          zIndex: 1, 
          letterSpacing: "-0.04em",
          userSelect: "none",
          fontFamily: "var(--font-inter), sans-serif"
        }}
      >
        Interview AI
      </div>
    </footer>
  );
}
