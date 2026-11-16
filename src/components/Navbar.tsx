"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Bot, ChevronDown, Video, ClipboardCheck, FileSearch, Utensils, 
  Building2, HeartPulse, Rocket, ShoppingBag, Users2, CalendarClock, 
  GraduationCap, Target, Menu, X, ArrowRight, Sparkles, BookOpen, Layers
} from "lucide-react";
import CircleExpandButton from "./CircleExpandButton";
import LoginLiquidMorph from "./LoginLiquidMorph";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname() || "";
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const industries = [
    { name: "Restaurants", href: "/industry/restaurant-hiring-software", icon: <Utensils size={18} /> },
    { name: "Staffing agencies", href: "/industry/staffing-agency-software", icon: <Building2 size={18} /> },
    { name: "Healthcare", href: "/industry/healthcare-hiring-software", icon: <HeartPulse size={18} /> },
    { name: "Tech companies", href: "/industry/startup-hiring-software", icon: <Rocket size={18} /> },
    { name: "Retail hiring", href: "/industry/retail-hiring-software", icon: <ShoppingBag size={18} /> },
  ];

  const solutions = [
    { name: "Role Setup", desc: "Target job, domain & level questions", href: "/role-setup", icon: <Target size={18} /> },
    { name: "Async interviews", desc: "Video & audio interviews", href: "/solution/one-way-video-interview-software", icon: <Video size={18} /> },
    { name: "Talent assessments", desc: "Pre-employment tests", href: "/solution/talent-assessment-software", icon: <ClipboardCheck size={18} /> },
    { name: "Application Review", desc: "AI agent for inbound recruiting", href: "/solution/application-review", icon: <FileSearch size={18} /> },
  ];

  const useCases = [
    { name: "High-volume hiring", href: "/solution/high-volume-recruiting-software", icon: <Users2 size={18} /> },
    { name: "Seasonal hiring", href: "/solution/seasonal-hiring-software", icon: <CalendarClock size={18} /> },
    { name: "Early career hiring", href: "/industry/campus-hiring-software", icon: <GraduationCap size={18} /> },
  ];

  const handlePricingClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const pricingSection = document.getElementById("pricing");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <style>{`
        .desktop-nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .desktop-nav-cta {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .mobile-toggle-btn {
          display: none;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: white;
          padding: 8px;
          border-radius: 10px;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .mobile-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(139, 92, 246, 0.4);
        }

        @media (max-width: 1024px) {
          .desktop-nav-links {
            display: none !important;
          }
          .desktop-nav-cta {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }

        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(8, 6, 16, 0.96);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          z-index: 999;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          padding: 5.5rem 1.5rem 3rem;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .nav-item-btn {
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
        }

        .nav-item-btn:hover {
          color: #ffffff;
        }
      `}</style>

      <div
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          background: scrolled || mobileMenuOpen ? "rgba(10, 8, 20, 0.92)" : "rgba(10, 8, 20, 0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          padding: scrolled ? "0.4rem 0" : "0.7rem 0",
        }}
      >
        <div className="container">
          <nav
            style={{
              background: "transparent",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0.4rem 0",
            }}
          >
            {/* BRAND LOGO */}
            <Link 
              href="/" 
              style={{ textDecoration: "none" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="brand" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    position: "relative",
                    width: "26px",
                    height: "26px",
                    background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                    transform: "rotate(45deg)",
                    borderRadius: "5px",
                    boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
                  }}
                >
                  <div style={{ position: "absolute", inset: "6px", background: "white", borderRadius: "2px" }} />
                </div>
                <div
                  className="brand-scene"
                  style={{ fontWeight: 800, fontSize: "1.3rem", color: "white", letterSpacing: "-0.02em" }}
                >
                  <span className="brand-word">Interview</span>
                  <span className="brand-word" style={{ color: "#a78bfa" }}>AI</span>
                </div>
              </div>
            </Link>

            {/* DESKTOP NAV LINKS */}
            <ul className="desktop-nav-links">
              {/* PRODUCT DROPDOWN */}
              <li 
                style={{ position: "relative" }}
                onMouseEnter={() => setActiveDropdown("product")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div 
                  className="nav-item-btn"
                  onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
                  style={{ 
                    fontSize: "0.92rem", 
                    fontWeight: 500,
                    color: activeDropdown === "product" ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  Product 
                  <ChevronDown 
                    size={14} 
                    style={{ 
                      transform: activeDropdown === "product" ? "rotate(180deg)" : "rotate(0)", 
                      transition: "transform 0.25s ease" 
                    }} 
                  />
                </div>
                
                {activeDropdown === "product" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      paddingTop: "1.25rem",
                      width: "max-content",
                      zIndex: 1050,
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(12, 10, 24, 0.98)",
                        border: "1px solid rgba(139, 92, 246, 0.25)",
                        borderRadius: "18px",
                        padding: "2rem",
                        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(139, 92, 246, 0.15)",
                        display: "grid",
                        gridTemplateColumns: "260px 210px 210px",
                        gap: "2.5rem",
                      }}
                    >
                      {/* Solutions Column */}
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#a78bfa", marginBottom: "1.25rem" }}>
                          Platform Solutions
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                          {solutions.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href} 
                              onClick={() => setActiveDropdown(null)}
                              style={{ 
                                textDecoration: "none", 
                                display: "flex", 
                                gap: "0.85rem", 
                                alignItems: "flex-start", 
                                color: "white",
                                padding: "6px 8px",
                                borderRadius: "8px",
                                transition: "background 0.2s ease",
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
                              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                            >
                              <div style={{ marginTop: "2px", color: "#a78bfa" }}>{item.icon}</div>
                              <div>
                                <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{item.name}</div>
                                <div style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.5)", marginTop: "2px" }}>{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Industries Column */}
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#a78bfa", marginBottom: "1.25rem" }}>
                          Industries
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                          {industries.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href} 
                              onClick={() => setActiveDropdown(null)}
                              style={{ 
                                textDecoration: "none", 
                                display: "flex", 
                                gap: "0.75rem", 
                                alignItems: "center", 
                                color: "rgba(255, 255, 255, 0.75)", 
                                padding: "6px 8px",
                                borderRadius: "8px",
                                transition: "all 0.2s ease" 
                              }} 
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "white";
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                              }} 
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                                e.currentTarget.style.background = "transparent";
                              }}
                            >
                              <span style={{ color: "#a78bfa" }}>{item.icon}</span>
                              <span style={{ fontSize: "0.88rem" }}>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases Column */}
                      <div>
                        <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#a78bfa", marginBottom: "1.25rem" }}>
                          Use Cases
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                          {useCases.map((item) => (
                            <Link 
                              key={item.name} 
                              href={item.href} 
                              onClick={() => setActiveDropdown(null)}
                              style={{ 
                                textDecoration: "none", 
                                display: "flex", 
                                gap: "0.75rem", 
                                alignItems: "center", 
                                color: "rgba(255, 255, 255, 0.75)", 
                                padding: "6px 8px",
                                borderRadius: "8px",
                                transition: "all 0.2s ease" 
                              }} 
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "white";
                                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                              }} 
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                                e.currentTarget.style.background = "transparent";
                              }}
                            >
                              <span style={{ color: "#a78bfa" }}>{item.icon}</span>
                              <span style={{ fontSize: "0.88rem" }}>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* ROLE SETUP LINK */}
              <li>
                <Link 
                  href="/role-setup" 
                  style={{ 
                    color: pathname === "/role-setup" ? "#8B5CF6" : "rgba(255, 255, 255, 0.75)", 
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                  onMouseLeave={(e) => e.currentTarget.style.color = pathname === "/role-setup" ? "#8B5CF6" : "rgba(255, 255, 255, 0.75)"}
                >
                  Role Setup
                </Link>
              </li>

              {/* RESOURCES DROPDOWN */}
              <li 
                style={{ position: "relative" }}
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div 
                  className="nav-item-btn"
                  onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
                  style={{ 
                    fontSize: "0.92rem", 
                    fontWeight: 500,
                    color: activeDropdown === "resources" ? "#ffffff" : "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  Resources 
                  <ChevronDown 
                    size={14} 
                    style={{ 
                      transform: activeDropdown === "resources" ? "rotate(180deg)" : "rotate(0)", 
                      transition: "transform 0.25s ease" 
                    }} 
                  />
                </div>

                {activeDropdown === "resources" && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      paddingTop: "1.25rem",
                      width: "max-content",
                      zIndex: 1050,
                    }}
                  >
                    <div
                      style={{
                        background: "rgba(12, 10, 24, 0.98)",
                        border: "1px solid rgba(139, 92, 246, 0.25)",
                        borderRadius: "16px",
                        padding: "1.25rem",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(139, 92, 246, 0.15)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        minWidth: "170px",
                      }}
                    >
                      <Link 
                        href="/blog" 
                        onClick={() => setActiveDropdown(null)}
                        style={{ 
                          textDecoration: "none", 
                          color: "rgba(255, 255, 255, 0.8)", 
                          fontSize: "0.92rem", 
                          fontWeight: 500, 
                          padding: "8px 12px",
                          borderRadius: "8px",
                          transition: "all 0.2s ease" 
                        }} 
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        }} 
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        Blog & Guides
                      </Link>
                      <Link 
                        href="/comparison" 
                        onClick={() => setActiveDropdown(null)}
                        style={{ 
                          textDecoration: "none", 
                          color: "rgba(255, 255, 255, 0.8)", 
                          fontSize: "0.92rem", 
                          fontWeight: 500, 
                          padding: "8px 12px",
                          borderRadius: "8px",
                          transition: "all 0.2s ease" 
                        }} 
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "white";
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        }} 
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        Platform Comparisons
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              {/* CASE STUDIES */}
              <li>
                <Link 
                  href="/case-studies" 
                  style={{ 
                    color: pathname.startsWith("/case-studies") ? "#8B5CF6" : "rgba(255, 255, 255, 0.75)", 
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                  onMouseLeave={(e) => e.currentTarget.style.color = pathname.startsWith("/case-studies") ? "#8B5CF6" : "rgba(255, 255, 255, 0.75)"}
                >
                  Case Studies
                </Link>
              </li>

              {/* PRICING LINK */}
              <li>
                <Link 
                  href="/#pricing" 
                  onClick={handlePricingClick}
                  style={{ 
                    color: "rgba(255, 255, 255, 0.75)", 
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)"}
                >
                  Pricing
                </Link>
              </li>

              {/* CONTACT US */}
              <li>
                <Link 
                  href="/contact" 
                  style={{ 
                    color: pathname === "/contact" ? "#8B5CF6" : "rgba(255, 255, 255, 0.75)", 
                    textDecoration: "none",
                    fontSize: "0.92rem",
                    fontWeight: 500,
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                  onMouseLeave={(e) => e.currentTarget.style.color = pathname === "/contact" ? "#8B5CF6" : "rgba(255, 255, 255, 0.75)"}
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* DESKTOP CTA BUTTONS */}
            <div className="desktop-nav-cta">
              <LoginLiquidMorph />
              <CircleExpandButton
                className="btn"
                href="/role-setup"
                style={{
                  background: "white",
                  border: "none",
                  color: "black",
                  padding: scrolled ? "0.5rem 1.25rem" : "0.6rem 1.4rem",
                  borderRadius: "10px",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 14px rgba(255, 255, 255, 0.15)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Get Started
              </CircleExpandButton>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </div>

      {/* MOBILE DRAWER / OVERLAY */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            
            {/* PRODUCT ACCORDION */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "product" ? null : "product")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  padding: "0.75rem 0",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span>Product</span>
                <ChevronDown 
                  size={18} 
                  style={{ 
                    transform: mobileDropdown === "product" ? "rotate(180deg)" : "rotate(0)", 
                    transition: "transform 0.25s ease" 
                  }} 
                />
              </button>

              {mobileDropdown === "product" && (
                <div style={{ padding: "0.75rem 0 1rem 0.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "1px" }}>
                    Solutions
                  </div>
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ 
                        color: "rgba(255, 255, 255, 0.85)", 
                        textDecoration: "none", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "0.75rem",
                        padding: "0.35rem 0"
                      }}
                    >
                      <span style={{ color: "#8B5CF6" }}>{item.icon}</span>
                      <span style={{ fontSize: "0.95rem" }}>{item.name}</span>
                    </Link>
                  ))}

                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#8B5CF6", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.5rem" }}>
                    Industries
                  </div>
                  {industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ 
                        color: "rgba(255, 255, 255, 0.85)", 
                        textDecoration: "none", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "0.75rem",
                        padding: "0.35rem 0"
                      }}
                    >
                      <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>{item.icon}</span>
                      <span style={{ fontSize: "0.95rem" }}>{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* DIRECT LINKS */}
            <Link
              href="/role-setup"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span>Role Setup & Questions</span>
              <ArrowRight size={16} color="#8B5CF6" />
            </Link>

            <Link
              href="/interview-cockpit"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span>Live Interview Cockpit</span>
              <Sparkles size={16} color="#10B981" />
            </Link>

            {/* RESOURCES ACCORDION */}
            <div>
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  color: "white",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  padding: "0.75rem 0",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <span>Resources</span>
                <ChevronDown 
                  size={18} 
                  style={{ 
                    transform: mobileDropdown === "resources" ? "rotate(180deg)" : "rotate(0)", 
                    transition: "transform 0.25s ease" 
                  }} 
                />
              </button>

              {mobileDropdown === "resources" && (
                <div style={{ padding: "0.75rem 0 1rem 0.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "rgba(255, 255, 255, 0.85)", textDecoration: "none", fontSize: "0.95rem" }}
                  >
                    Blog & Articles
                  </Link>
                  <Link
                    href="/comparison"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: "rgba(255, 255, 255, 0.85)", textDecoration: "none", fontSize: "0.95rem" }}
                  >
                    Product Comparisons
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              Case Studies
            </Link>

            <Link
              href="/#pricing"
              onClick={handlePricingClick}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              Contact Us
            </Link>

            {/* MOBILE ACTION BUTTONS */}
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Link
                href="/role-setup"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                  color: "white",
                  textDecoration: "none",
                  padding: "0.85rem 1.5rem",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 700,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
                }}
              >
                Get Started <ArrowRight size={18} />
              </Link>

              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  color: "white",
                  textDecoration: "none",
                  padding: "0.85rem 1.5rem",
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
