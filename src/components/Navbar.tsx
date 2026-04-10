"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bot, ChevronDown, Video, ClipboardCheck, FileSearch, Utensils, Building2, HeartPulse, Rocket, ShoppingBag, Users2, CalendarClock, GraduationCap } from "lucide-react";
import CircleExpandButton from "./CircleExpandButton";
import LoginLiquidMorph from "./LoginLiquidMorph";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const industries = [
    { name: "Restaurants", href: "/industry/restaurant-hiring-software", icon: <Utensils size={18} /> },
    { name: "Staffing agencies", href: "/industry/staffing-agency-software", icon: <Building2 size={18} /> },
    { name: "Healthcare", href: "/industry/healthcare-hiring-software", icon: <HeartPulse size={18} /> },
    { name: "Tech companies", href: "/industry/startup-hiring-software", icon: <Rocket size={18} /> },
    { name: "Retail hiring", href: "/industry/retail-hiring-software", icon: <ShoppingBag size={18} /> },
  ];

  const solutions = [
    { name: "Async interviews", desc: "Video & audio interviews", href: "/solution/one-way-video-interview-software", icon: <Video size={18} /> },
    { name: "Talent assessments", desc: "Pre-employment tests", href: "/solution/talent-assessment-software", icon: <ClipboardCheck size={18} /> },
    { name: "Resume screening", desc: "Coming soon", href: "#", icon: <FileSearch size={18} /> },
  ];

  const useCases = [
    { name: "High-volume hiring", href: "/solution/high-volume-recruiting-software", icon: <Users2 size={18} /> },
    { name: "Seasonal hiring", href: "/solution/seasonal-hiring-software", icon: <CalendarClock size={18} /> },
    { name: "Early career hiring", href: "/industry/campus-hiring-software", icon: <GraduationCap size={18} /> },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled || activeDropdown ? "rgba(5, 1, 13, 0.95)" : "transparent",
        backdropFilter: scrolled || activeDropdown ? "blur(20px)" : "none",
        borderBottom: scrolled || activeDropdown ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
      }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container">
        <nav
          className="navbar"
          style={{
            background: "transparent",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem 0",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <div className="brand" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div
                style={{
                  position: "relative",
                  width: "24px",
                  height: "24px",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  transform: "rotate(45deg)",
                  borderRadius: "4px",
                }}
              >
                <div style={{ position: "absolute", inset: "6px", background: "white", borderRadius: "2px" }}></div>
              </div>
              <div
                className="brand-scene"
                style={{ fontWeight: 700, fontSize: "1.25rem", color: "white", letterSpacing: "-0.02em" }}
              >
                <span className="brand-word">Interview</span>
                <span className="brand-word">AI</span>
              </div>
            </div>
          </Link>
          <ul
            className="nav-links"
            style={{
              fontSize: "0.9rem",
              color: scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.7)",
              display: "flex",
              gap: "2.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li 
              className="nav-link" 
              onMouseEnter={() => setActiveDropdown("product")}
              style={{ position: "relative" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer", color: activeDropdown === "product" ? "white" : "inherit" }}>
                Product <ChevronDown size={14} style={{ transform: activeDropdown === "product" ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }} />
              </div>
              
              {activeDropdown === "product" && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: "1.5rem",
                    width: "max-content",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(10, 10, 18, 0.98)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "16px",
                      padding: "2rem",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                      display: "grid",
                      gridTemplateColumns: "250px 200px 200px",
                      gap: "2.5rem",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B5CF6", marginBottom: "1.25rem" }}>Solutions</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {solutions.map((item) => (
                          <Link key={item.name} href={item.href} style={{ textDecoration: "none", display: "flex", gap: "0.75rem", alignItems: "flex-start", color: "white" }}>
                            <div style={{ marginTop: "2px", color: "rgba(255, 255, 255, 0.4)" }}>{item.icon}</div>
                            <div>
                              <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{item.name}</div>
                              <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)" }}>{item.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B5CF6", marginBottom: "1.25rem" }}>Industries</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {industries.map((item) => (
                          <Link key={item.name} href={item.href} style={{ textDecoration: "none", display: "flex", gap: "0.75rem", alignItems: "center", color: "rgba(255, 255, 255, 0.7)", transition: "color 0.2s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}>
                            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>{item.icon}</span>
                            <span style={{ fontSize: "0.85rem" }}>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8B5CF6", marginBottom: "1.25rem" }}>Use Cases</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        {useCases.map((item) => (
                          <Link key={item.name} href={item.href} style={{ textDecoration: "none", display: "flex", gap: "0.75rem", alignItems: "center", color: "rgba(255, 255, 255, 0.7)", transition: "color 0.2s ease" }} onMouseEnter={(e) => e.currentTarget.style.color = "white"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}>
                            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>{item.icon}</span>
                            <span style={{ fontSize: "0.85rem" }}>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="nav-link">
              <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
                Solutions <ChevronDown size={14} />
              </div>
            </li>
            <li className="nav-link">
              <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
                Resources <ChevronDown size={14} />
              </div>
            </li>
            <li className="nav-link">
              <Link href="#" style={{ color: "white", textDecoration: "none" }}>
                Pricing
              </Link>
            </li>
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <LoginLiquidMorph />
            <CircleExpandButton
              className="btn"
              href="/interview-builder"
              style={{
                background: "white",
                border: "none",
                color: "black",
                padding: scrolled ? "0.5rem 1.25rem" : "0.6rem 1.5rem",
                borderRadius: "8px",
                fontSize: "0.9rem",
                fontWeight: 600,
                boxShadow: scrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "0 4px 12px rgba(255, 255, 255, 0.1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              Get Started
            </CircleExpandButton>
          </div>
        </nav>
      </div>
    </div>
  );
}
