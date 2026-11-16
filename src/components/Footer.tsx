"use client";

import React from "react";
import Link from "next/link";
import { Layers, MapPin, Mail, PhoneCall, ArrowUp, Sparkles, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer 
      style={{ 
        background: "radial-gradient(circle at top left, rgba(124, 58, 237, 0.18), transparent 28%), #05010D", 
        padding: "80px 0 48px", 
        color: "rgba(226, 232, 240, 0.88)", 
        fontFamily: "var(--font-inter), sans-serif",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)"
      }}
    >
      <style>{`
        .footer-grid-responsive {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1.3fr;
          gap: 40px;
        }

        .footer-sub-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid rgba(226, 232, 240, 0.12);
          font-size: 13px;
          margin-top: 56px;
        }

        @media (max-width: 1024px) {
          .footer-grid-responsive {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 640px) {
          .footer-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .footer-sub-bar {
            flex-direction: column !important;
            gap: 16px !important;
            text-align: center !important;
          }
        }
      `}</style>

      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div className="footer-grid-responsive">
          {/* Brand & Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <div 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "12px", 
                  fontSize: "22px", 
                  fontWeight: 800, 
                  color: "#E2E8F0", 
                  letterSpacing: "-0.02em",
                }}
              >
                <div style={{ padding: "8px", background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Layers size={20} color="white" />
                </div>
                <span style={{ color: "#ffffff" }}>Interview <span style={{ color: "#a78bfa" }}>AI</span></span>
              </div>
            </Link>
            
            <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.6, margin: 0 }}>
              The next-generation AI interview simulator and candidate screening platform.
            </p>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", lineHeight: 1.5, marginTop: "4px" }}>
              <MapPin size={16} color="#8B5CF6" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>1800 Walt Disney World, Bay Lake, FL</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <Mail size={16} color="#8B5CF6" style={{ flexShrink: 0 }} />
              <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>support@interviewai.dev</span>
            </div>
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px" }}>
              <PhoneCall size={16} color="#8B5CF6" style={{ flexShrink: 0 }} />
              <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>+1 (786) 259 4652</span>
            </div>
          </div>

          {/* Company */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ color: "#E2E8F0", fontWeight: 700, fontSize: "15px" }}>Company</div>
            <Link href="/contact" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Contact Us</Link>
            <Link href="/blog" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Blog & News</Link>
            <Link href="/#pricing" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Pricing Plans</Link>
            <Link href="/case-studies" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Customer Stories</Link>
            <Link href="/login" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Sign in / Register</Link>
          </div>

          {/* Platform Navigation */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ color: "#E2E8F0", fontWeight: 700, fontSize: "15px" }}>Solutions</div>
            <Link href="/role-setup" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Target Role Setup</Link>
            <Link href="/interview-cockpit" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Live Interview Cockpit</Link>
            <Link href="/solution/application-review" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Application Review</Link>
            <Link href="/solution/one-way-video-interview-software" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Async Video Interviews</Link>
            <Link href="/solution/talent-assessment-software" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Talent Assessments</Link>
          </div>

          {/* Tools */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ color: "#E2E8F0", fontWeight: 700, fontSize: "15px" }}>Prep Tools</div>
            <Link href="/practice-interview" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Practice Simulator</Link>
            <Link href="/interview-builder" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Interactive Builder</Link>
            <Link href="/role-setup" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Question Bank</Link>
            <Link href="/comparison" style={{ color: "rgba(226, 232, 240, 0.7)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(226, 232, 240, 0.7)"}>Platform Comparisons</Link>
          </div>

          {/* Legal */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#E2E8F0", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>Legal & Trust</div>
            {[
              { label: "Terms of Service", href: "/legal" },
              { label: "Privacy Policy", href: "/legal" },
              { label: "AI Disclaimer", href: "/legal" },
              { label: "Cookies Policy", href: "/legal" },
            ].map((item, idx) => (
              <div key={idx} style={{ padding: "10px 0", borderBottom: idx < 3 ? "1px solid rgba(255, 255, 255, 0.05)" : "none" }}>
                <Link 
                  href={item.href} 
                  style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }} 
                  onMouseEnter={(e) => e.currentTarget.style.color = "white"} 
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-sub-bar">
          <div style={{ color: "rgba(226, 232, 240, 0.6)" }}>
            © {new Date().getFullYear()} Interview AI Inc. All rights reserved. Built for recruiters and career seekers worldwide.
          </div>
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
              transition: "opacity 0.2s",
              userSelect: "none"
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "0.85"}
          >
            Back to the top <ArrowUp size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}
