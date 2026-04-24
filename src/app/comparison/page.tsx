"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

// Truffle cat logo SVG
const TruffleLogo = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="#0f172a">
    <path d="M19,3 L15,7 C14,6.6 13,6.4 12,6.4 C11,6.4 10,6.6 9,7 L5,3 L5,9.2 C3.1,10.6 2,12.7 2,15 C2,19.4 6.5,23 12,23 C17.5,23 22,19.4 22,15 C22,12.7 20.9,10.6 19,9.2 L19,3 Z" />
  </svg>
);

const comparisons = [
  {
    competitor: "Willo Video",
    desc: "Both do async. Truffle adds AI-ranked shortlists so you review smarter, not longer.",
    bg: "#eff6ff", // light blue
    logoNode: <div style={{color: '#8b5cf6', fontSize: '36px', fontFamily: 'cursive', fontWeight: 'bold', lineHeight: 1, padding: '0 8px'}}>w</div>
  },
  {
    competitor: "Spark Hire",
    desc: "Spark Hire records. Truffle ranks. Get AI insights, not just another video inbox.",
    bg: "#f8f5ff", // light purple
    logoNode: <div style={{color: '#f97316', fontSize: '36px', lineHeight: 1}}>🔥</div>
  },
  {
    competitor: "Hireflix",
    desc: "Hireflix keeps it simple. Truffle adds the intelligence layer you'll wish you had at scale.",
    bg: "#fff1f2", // light pink
    logoNode: (
      <div style={{background: '#4f46e5', color: 'white', borderRadius: '10px', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      </div>
    )
  },
  {
    competitor: "HireVue",
    desc: "Enterprise power without the enterprise rollout. Set up in minutes, not months.",
    bg: "#f8f5ff", // light purple
    logoNode: (
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{color: '#0f172a', fontSize: '32px', fontWeight: 'bold', lineHeight: 1}}>h</span>
        <span style={{color: '#e81cff', fontSize: '20px', marginLeft: '2px', lineHeight: 1}}>✦</span>
      </div>
    )
  },
  {
    competitor: "VidCruiter",
    desc: "Skip the sales calls and implementation fees. Same AI screening, fraction of the friction.",
    bg: "#fff1f2", // light pink
    logoNode: (
      <div style={{background: '#16a34a', color: 'white', padding: '4px 6px', borderRadius: '6px', fontWeight: 'bold', fontSize: '18px', lineHeight: 1}}>Vid</div>
    )
  },
  {
    competitor: "Jobma",
    desc: "Jobma offers video + assessments. Truffle's ai analysis connects the dots between them.",
    bg: "#eff6ff", // light blue
    logoNode: (
      <div style={{color: '#84cc16', border: '3px solid #84cc16', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      </div>
    )
  },
  {
    competitor: "TestGorilla",
    desc: "Tests measure skills. Truffle reveals the whole candidate—communication, thinking, fit.",
    bg: "#fff1f2", // light pink
    logoNode: (
      <div style={{color: '#d946ef'}}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a9 9 0 0 0-9 9c0 3.39 1.88 6.34 4.67 7.9A4.5 4.5 0 0 1 12 16a4.5 4.5 0 0 1 4.33 2.9C19.12 17.34 21 14.39 21 11a9 9 0 0 0-9-9z"/></svg>
      </div>
    )
  },
  {
    competitor: "myInterview",
    desc: "myInterview is building an AI assistant. Truffle built a hiring brain to help make the right choice.",
    bg: "#eff6ff", // light blue
    logoNode: (
      <div style={{color: '#ef4444'}}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </div>
    )
  },
  {
    competitor: "Indeed",
    desc: "'Good enough' video is just video. Truffle adds the brain—and works across your entire stack.",
    bg: "#f8f5ff", // light purple
    logoNode: (
      <div style={{color: '#2563eb', fontSize: '36px', fontWeight: 'bold', fontStyle: 'italic', lineHeight: 1}}>i</div>
    )
  },
  {
    competitor: "Workable",
    desc: "Built-in screening is convenient. Specialized screening is transformative.",
    bg: "#eff6ff", // light blue
    logoNode: (
      <div style={{color: '#059669', fontSize: '32px', fontFamily: 'serif', fontWeight: 'bold', lineHeight: 1}}>w</div>
    )
  },
  {
    competitor: "ScreeningHive",
    desc: "You like one-way interviews, but want a faster way to review and shortlist.",
    bg: "#f8f5ff", // light purple
    logoNode: (
      <div style={{color: '#22c55e'}}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l8.66 5v10L12 22l-8.66-5V7z"/></svg>
      </div>
    )
  },
  {
    competitor: "Vervoe",
    desc: "Do you need a skills test library, or do you need a faster way to screen communication and fit?",
    bg: "#eff6ff", // light blue
    logoNode: (
      <div style={{background: '#1d4ed8', color: 'white', padding: '4px 10px', borderRadius: '4px', fontWeight: 'bold', fontSize: '20px', lineHeight: 1}}>V</div>
    )
  }
];

const ComparisonCard = ({ item }: { item: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate a URL-friendly slug from the competitor name, removing "Video" from Willo if present
  const slug = item.competitor.toLowerCase().replace(' video', '').replace(/\s+/g, '-');

  return (
    <Link href={`/comparison/truffle-vs-${slug}`} style={{ textDecoration: 'none' }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          borderRadius: "16px", 
          border: "1px solid #e2e8f0", 
          overflow: "hidden", 
          backgroundColor: "white",
          transition: "box-shadow 0.2s ease, transform 0.2s ease",
          cursor: "pointer",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered 
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
          height: "100%"
        }}
      >
        {/* Top Half - Colored Background */}
        <div style={{ 
          backgroundColor: item.bg, 
          height: "180px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          padding: "24px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {/* Truffle Logo Box */}
            <div style={{ 
              background: "white", 
              width: "80px", 
              height: "80px", 
              borderRadius: "16px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}>
              <TruffleLogo />
            </div>
            
            <div style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a" }}>VS</div>
            
            {/* Competitor Logo Box */}
            <div style={{ 
              background: "white", 
              width: "80px", 
              height: "80px", 
              borderRadius: "16px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
            }}>
              {item.logoNode}
            </div>
          </div>
        </div>
        
        {/* Bottom Half - Content */}
        <div style={{ padding: "32px 24px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "600", color: "#0f172a", marginBottom: "16px" }}>
            Truffle vs {item.competitor}
          </h3>
          <p style={{ fontSize: "15px", color: "#475569", lineHeight: "1.6", marginBottom: "24px", minHeight: "72px" }}>
            {item.desc}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "500", color: "#0f172a" }}>
            <span style={{ fontSize: "16px", transition: "transform 0.2s ease", transform: isHovered ? "translateX(4px)" : "translateX(0)" }}>→</span> See full comparison
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function ComparisonPage() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#0f172a" }}>
      <Navbar />
      <div style={{ paddingTop: "140px", paddingBottom: "100px", maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 80px" }}>
          <div style={{ 
            display: "inline-block", 
            border: "1px solid #e2e8f0", 
            borderRadius: "999px", 
            padding: "4px 16px", 
            fontSize: "11px", 
            fontWeight: "600", 
            color: "#64748b", 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "32px"
          }}>
            Truffle Alternatives
          </div>
          
          <h1 style={{ fontSize: "56px", fontWeight: "600", lineHeight: "1.1", marginBottom: "32px", letterSpacing: "-0.02em", color: "#0f172a" }}>
            Choosing between AI<br />screening tools?<br />Here's how Truffle<br />stacks up
          </h1>
          
          <p style={{ fontSize: "18px", color: "#475569", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto 48px" }}>
            Most applicant screening tools help you collect more signal. Truffle analyzes these signals, helps you rank candidates, surface insights, and drastically cut screening time.
          </p>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
            <button style={{ 
              background: "#0f172a", 
              color: "white", 
              padding: "14px 28px", 
              borderRadius: "8px", 
              fontWeight: "600",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)"
            }}>
              Start free trial <ArrowRight size={16} />
            </button>
            <button style={{ 
              background: "white", 
              color: "#0f172a", 
              padding: "14px 28px", 
              borderRadius: "8px", 
              fontWeight: "600",
              fontSize: "15px",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
            }}>
              Book Demo
            </button>
          </div>
        </div>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", 
          gap: "32px" 
        }}>
          {comparisons.map((item, index) => (
            <ComparisonCard key={index} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
