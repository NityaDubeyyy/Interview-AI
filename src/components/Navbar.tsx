"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bot, ChevronDown } from "lucide-react";
import CircleExpandButton from "./CircleExpandButton";
import LoginLiquidMorph from "./LoginLiquidMorph";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        background: scrolled ? "rgba(5, 1, 13, 1)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
        padding: scrolled ? "0.5rem 0" : "1rem 0",
      }}
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
            <li className="nav-link">
              <div style={{ display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
                Product <ChevronDown size={14} />
              </div>
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
