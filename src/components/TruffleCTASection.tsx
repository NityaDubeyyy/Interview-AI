"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";

export default function TruffleCTASection() {
  return (
    <section style={{ width: "100%", padding: "80px 24px", background: "white" }}>
      <div 
        style={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
          gap: "24px",
          alignItems: "stretch"
        }}
      >
        {/* Left Card - Text Content */}
        <div 
          style={{ 
            background: "#000", 
            borderRadius: "24px", 
            padding: "60px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Subtle noise/texture overlay */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.15, pointerEvents: "none", backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
          
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, color: "white", marginBottom: "32px", lineHeight: 1.1, maxWidth: "450px", position: "relative", zIndex: 1 }}>
            Truffle is candidate screening software built for the AI-age
          </h2>
          
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.7)", marginBottom: "48px", lineHeight: 1.6, maxWidth: "420px", position: "relative", zIndex: 1 }}>
            Stop spending all your time on applicant screening. Start making faster, more confident hiring decisions with structured data — not gut feel.
          </p>
          
          <button 
            style={{ 
              background: "white", 
              color: "black", 
              border: "none", 
              padding: "16px 32px", 
              borderRadius: "12px", 
              fontSize: "1rem", 
              fontWeight: 700, 
              cursor: "pointer",
              transition: "transform 0.2s ease",
              position: "relative",
              zIndex: 1
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            Start free trial
          </button>
        </div>

        {/* Right Card - Visual Comparison */}
        <div 
          style={{ 
            background: "#f1f5f9", 
            borderRadius: "24px", 
            overflow: "hidden", 
            display: "flex", 
            position: "relative"
          }}
        >
          {/* Split View Container */}
          <div style={{ display: "flex", width: "100%", height: "100%", minHeight: "450px" }}>
            
            {/* Left Side: Before */}
            <div style={{ flex: 1, position: "relative", overflow: "hidden", borderRight: "1px solid rgba(255,255,255,0.2)" }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Recruiter Before" 
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%) brightness(0.8)" }} 
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)" }} />
              
              {/* Labels & Tags */}
              <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(0,0,0,0.4)", backdropFilter: "blur(4px)", padding: "4px 12px", borderRadius: "99px", color: "white", fontSize: "0.75rem", fontWeight: 600 }}>Before</div>
              
              {/* Badges Overlay */}
              <div style={{ position: "absolute", top: "20px", right: "20px", background: "#f59e0b", color: "white", padding: "6px 12px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 700, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", display: "flex", alignItems: "center", gap: "6px" }}>
                 <div style={{ width: "8px", height: "8px", background: "white", borderRadius: "50%", opacity: 0.8 }} />
                 4+ Hours to review
              </div>
              
              <div style={{ position: "absolute", top: "80px", left: "20px", background: "#ef4444", color: "white", padding: "6px 12px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 700, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
                 249 Applications
              </div>

              {/* Video Thumbnails floating */}
              <div style={{ position: "absolute", top: "140px", right: "15%", width: "40px", height: "40px", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(4px)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <div style={{ width: 0, height: 0, borderTop: "5px solid transparent", borderBottom: "5px solid transparent", borderLeft: "8px solid white" }} />
              </div>
              <div style={{ position: "absolute", bottom: "100px", left: "15%", width: "35px", height: "35px", background: "rgba(255,255,255,0.4)", backdropFilter: "blur(4px)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 <div style={{ width: 0, height: 0, borderTop: "4px solid transparent", borderBottom: "4px solid transparent", borderLeft: "6px solid white" }} />
              </div>
            </div>

            {/* Right Side: After */}
            <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Recruiter After" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }} 
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))" }} />
              
              <div style={{ position: "absolute", bottom: "20px", right: "20px", background: "#2563eb", color: "white", padding: "4px 12px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 600 }}>After</div>
              
              {/* Top Candidates UI Card */}
              <div style={{ position: "absolute", top: "20px", left: "10%", right: "10%", background: "white", borderRadius: "12px", padding: "12px", boxShadow: "0 10px 25px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", gap: "8px" }}>
                 <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "1px" }}>Top Candidates</div>
                 
                 {[
                   { name: "Mateo Rodriguez", score: 95, color: "#10b981", img: "https://i.pravatar.cc/150?u=1" },
                   { name: "Jamie Park", score: 81, color: "#10b981", img: "https://i.pravatar.cc/150?u=2" },
                   { name: "Corey Morgan", score: 76, color: "#f59e0b", img: "https://i.pravatar.cc/150?u=3" }
                 ].map((cand, i) => (
                   <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <img src={cand.img} style={{ width: "24px", height: "24px", borderRadius: "50%" }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#1e293b" }}>{cand.name}</div>
                        <div style={{ height: "3px", background: "#f1f5f9", borderRadius: "2px", marginTop: "2px", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${cand.score}%`, background: cand.color }} />
                        </div>
                      </div>
                      <div style={{ fontSize: "0.7rem", fontWeight: 800, color: cand.color }}>{cand.score}%</div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Slider Handle (Visual only) */}
            <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "1px", background: "white", transform: "translateX(-50%)", zIndex: 10 }}>
               <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40px", height: "24px", background: "white", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}>
                  <div style={{ width: "12px", height: "12px", display: "flex", gap: "2px", alignItems: "center" }}>
                    <div style={{ width: "2px", height: "8px", background: "#e2e8f0" }} />
                    <div style={{ width: "2px", height: "8px", background: "#e2e8f0" }} />
                    <div style={{ width: "2px", height: "8px", background: "#e2e8f0" }} />
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
