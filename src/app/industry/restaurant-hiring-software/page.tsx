"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Utensils, Clock, Zap, ShieldCheck, Users, ArrowRight, ClipboardCheck, Video, FileText } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";
import CircleExpandButton from "@/components/CircleExpandButton";
import StatsSection from "@/components/StatsSection";

export default function RestaurantHiringPage() {
  return (
    <main style={{ backgroundColor: "#05010D", color: "white", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ position: "relative", paddingTop: "160px", paddingBottom: "100px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <DarkVeil hueShift={280} noiseIntensity={0.02} scanlineIntensity={0.1} speed={0.2} warpAmount={0.2} />
        </div>
        
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              background: "rgba(139, 92, 246, 0.1)", 
              border: "1px solid rgba(139, 92, 246, 0.2)", 
              padding: "6px 16px", 
              borderRadius: "99px", 
              color: "#A78BFA", 
              fontSize: "0.8rem", 
              fontWeight: 600, 
              textTransform: "uppercase", 
              letterSpacing: "0.1em",
              marginBottom: "24px"
            }}
          >
            <Utensils size={14} /> RESTAURANT hiring software
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, lineHeight: 1.1, marginBottom: "24px", maxWidth: "900px", margin: "0 auto 24px" }}
          >
            Hire restaurant teams at scale with Truffle's applicant screening tools
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: "1.2rem", color: "rgba(255, 255, 255, 0.6)", maxWidth: "700px", margin: "0 auto 40px", lineHeight: 1.6 }}
          >
            Restaurant hiring teams don't have time to screen 50 applicants per role. Truffle gives you async interviews, AI summaries, and match scores so you get to the right conversations faster.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "flex", gap: "16px", justifyContent: "center" }}
          >
            <CircleExpandButton
              href="https://app.hiretruffle.com/sign-up/"
              style={{ background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)", color: "white", padding: "1rem 2.5rem", borderRadius: "99px", fontWeight: 600, border: "none" }}
            >
              Start free trial
            </CircleExpandButton>
            <button style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "white", padding: "1rem 2.5rem", borderRadius: "99px", fontWeight: 600 }}>
              Book Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: "100px 0", backgroundColor: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "16px" }}>Get to signal before the interview starts</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Stop wasting time on no-shows and unqualified candidates.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {[
              {
                title: "Replace the scheduling nightmare with a single link",
                desc: "Send a link to all applicants. They record their answers when they're free. You review them when you're free. No more phone tag.",
                icon: <Clock size={24} color="#8B5CF6" />
              },
              {
                title: "Find out how candidates actually work before the first shift",
                desc: "Ask situational questions. 'How would you handle a busy Friday night?' See their personality and communication skills immediately.",
                icon: <Zap size={24} color="#8B5CF6" />
              },
              {
                title: "Review 100 candidates in the time it used to take to phone screen 1",
                desc: "AI-powered summaries and match scores highlight the best candidates so you can skip the rest.",
                icon: <Users size={24} color="#8B5CF6" />
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ 
                  background: "rgba(255, 255, 255, 0.03)", 
                  border: "1px solid rgba(255, 255, 255, 0.08)", 
                  padding: "40px", 
                  borderRadius: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px"
                }}
              >
                <div style={{ background: "rgba(139, 92, 246, 0.1)", width: "48px", height: "48px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.4 }}>{feature.title}</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6 }}>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "center" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "24px", lineHeight: 1.2 }}>Switching takes 10 minutes. No IT tickets. No onboarding calls.</h2>
              <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.6)", marginBottom: "32px", lineHeight: 1.6 }}>
                Truffle is built to be used by busy managers, not IT departments. You can have your first interview link live before your next table is cleared.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  "No credit card required to start",
                  "Unlimited applicants and team members",
                  "Works on any mobile device or browser",
                  "Integrates with your existing job boards"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px", color: "rgba(255, 255, 255, 0.8)" }}>
                    <ShieldCheck size={18} color="#4ADE80" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255, 255, 255, 0.1)", aspectRatio: "4/3" }}
            >
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, #1A1A2E, #05010D)" }}></div>
              <div style={{ position: "absolute", inset: "40px", display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ height: "40px", width: "100%", background: "rgba(255, 255, 255, 0.05)", borderRadius: "8px" }}></div>
                <div style={{ height: "120px", width: "100%", background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px" }}></div>
                <div style={{ display: "flex", gap: "12px" }}>
                   <div style={{ height: "80px", flex: 1, background: "rgba(139, 92, 246, 0.1)", borderRadius: "8px", border: "1px solid rgba(139, 92, 246, 0.2)" }}></div>
                   <div style={{ height: "80px", flex: 1, background: "rgba(255, 255, 255, 0.03)", borderRadius: "8px" }}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Job Descriptions Section */}
      <section style={{ padding: "100px 0", backgroundColor: "rgba(255, 255, 255, 0.02)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px" }}>
            <div>
              <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "12px" }}>Restaurant job descriptions</h2>
              <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>Free templates to help you attract the best talent.</p>
            </div>
            <button style={{ color: "#8B5CF6", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none" }}>
              View all templates <ArrowRight size={16} />
            </button>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {[
              { title: "Executive chef", desc: "Discover the perfect chef job description template. Ideal for executive chefs." },
              { title: "Fast food manager", desc: "Explore a comprehensive fast food manager job description. Includes duties and skills." },
              { title: "Broiler chef", desc: "Discover the key responsibilities and skills for a Broiler Chef or Grill Chef." },
              { title: "Assistant restaurant manager", desc: "Find a detailed assistant restaurant manager job description template." }
            ].map((job, i) => (
              <div key={i} style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "32px", borderRadius: "20px" }}>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "12px" }}>{job.title}</h4>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.4)", marginBottom: "20px", lineHeight: 1.5 }}>{job.desc}</p>
                <button style={{ color: "white", fontSize: "0.85rem", fontWeight: 500, display: "flex", alignItems: "center", gap: "4px", background: "none", border: "none" }}>
                  Get template <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "120px 0", textAlign: "center" }}>
        <div className="container">
          <div style={{ background: "linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%)", padding: "80px 40px", borderRadius: "40px", border: "1px solid rgba(139, 92, 246, 0.2)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)", filter: "blur(40px)" }}></div>
            
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "20px" }}>Start screening smarter today</h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.6)", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.6 }}>
              Try Truffle free for 7 days—no credit card required. See how AI-powered video interviews help you shortlist top candidates in minutes.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <CircleExpandButton
                href="https://app.hiretruffle.com/sign-up/"
                style={{ background: "white", color: "black", padding: "1rem 2.5rem", borderRadius: "99px", fontWeight: 600, border: "none" }}
              >
                Start free trial
              </CircleExpandButton>
              <button style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "white", padding: "1rem 2.5rem", borderRadius: "99px", fontWeight: 600 }}>
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer style={{ padding: "60px 0", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
             <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>InterviewAI</div>
             <div style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.4)" }}>© 2026 InterviewAI. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
