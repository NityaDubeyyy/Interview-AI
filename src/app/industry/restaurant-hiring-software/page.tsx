"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Play, Star, Users, Briefcase, UserCheck, ShieldCheck, LayoutDashboard, Clock, Smartphone, Bell, Share2, Layers, Zap, PenTool, BarChart3, Lock, Globe, LayoutGrid, Plus, Sparkles, Monitor, Headphones, CreditCard, ChevronRight } from "lucide-react";
import styles from "@/app/page.module.css";

export default function RestaurantHiringPage() {
  const [activeFeature, setActiveFeature] = useState("feature1");

  const features = [
    {
      id: "feature1",
      navLabel: "Resume screening",
      title: "Get to signal before the interview starts",
      desc: "You don't need to read 50 resumes line by line. Truffle surfaces experience highlights and alignment signals for every candidate — so you can quickly see who's worth a closer look.",
      bullets: [
        "Surface candidates with relevant restaurant, hospitality, or food service experience",
        "Flag key qualifications like availability, certifications, and food safety training",
        "Every candidate stays visible — nothing gets auto-rejected"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/699432c73205db0b2f28554b_restaurant%20hiring%20software.png"
    },
    {
      id: "feature2",
      navLabel: "Async video interviews",
      title: "Replace the scheduling nightmare with a single link",
      desc: "Phone screens eat entire shifts — and restaurant candidates aren't waiting around for a callback next Tuesday. Send one link. Candidates record answers on their phone, on their time. You review when you're ready.",
      bullets: [
        "Candidates complete interviews from any device, anytime",
        "Average completion takes under 15 minutes",
        "Completion itself is signal — if they'll spend 10 minutes, they're serious"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985b7ebb2e4b058976aec54_async%20video%20interviews.svg"
    },
    {
      id: "feature3",
      navLabel: "Talent assessments",
      title: "Find out how candidates actually work before the first shift",
      desc: "Resumes tell you where someone's worked. Assessments show you how they approach the job. Truffle's assessments surface alignment between candidates and your team's way of doing things — so your interviews focus on the people who fit how you operate.",
      bullets: [
        "Situational judgment scenarios based on real restaurant situations",
        "Environment fit assessment to align expectations before day one",
        "No trick questions — candidates respond honestly, you see the alignment"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985ba56d27c7b40226aaf91_assessments.svg"
    },
    {
      id: "feature4",
      navLabel: "AI review tools",
      title: "Review 100 candidates in the time it used to take to phone screen 1",
      desc: "Truffle's AI summarizes every interview, scores alignment with your role, and pulls key moments into a 30-second Candidate Short. You get the signal fast — then decide who's worth a real conversation.",
      bullets: [
        "AI summaries of every candidate response",
        "Match scores with reasoning — see exactly why each score was given",
        "Candidate Shorts highlight key moments — full interviews always available"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985b91d7f2f0007067a4be1_ai%20review.svg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveFeature(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    features.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#060212", color: "#fff", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "140px",
          paddingBottom: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{ position: "absolute", top: "-10%", left: "10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
          <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "40%", height: "60%", background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)", filter: "blur(60px)" }}></div>
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", padding: "0 24px", width: "100%" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: "6px 16px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "100px",
              display: "inline-flex",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255, 255, 255, 0.7)", textTransform: "uppercase" }}>
              RESTAURANT HIRING SOFTWARE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              marginBottom: "28px",
              letterSpacing: "-0.04em",
              maxWidth: "1000px",
              margin: "0 auto 28px",
            }}
          >
            Hire restaurant teams at scale with Truffle&apos;s applicant screening tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "1.25rem",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "800px",
              margin: "0 auto 52px",
            }}
          >
            Restaurant hiring teams don&apos;t have time to screen 50 applicants per role. Truffle gives you async interviews, AI summaries, and match scores so you get to the right conversations faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", gap: "20px", justifyContent: "center" }}
          >
            <button style={{ background: "#fff", color: "#05010d", border: "none", padding: "16px 36px", borderRadius: "14px", fontSize: "1.05rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
              Start free trial
              <ArrowRight size={20} style={{ transform: "rotate(-45deg)" }} />
            </button>
            <button style={{ background: "rgba(255, 255, 255, 0.05)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.1)", padding: "16px 36px", borderRadius: "14px", fontSize: "1.05rem", fontWeight: 600, cursor: "pointer" }}>
              Book Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { title: "Resume screening (coming soon)", desc: "Surface qualified candidates before interviews even start" },
              { title: "Async video interviews", desc: "Candidates respond on their time — no scheduling required" },
              { title: "Talent assessments", desc: "See how candidates align with your role and environment" },
              { title: "AI Summaries & Match Scores", desc: "Review candidates in minutes, not hours" }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  padding: "32px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  borderRadius: "24px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ y: -5, background: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.12)" }}
              >
                <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "12px", color: "#fff" }}>{benefit.title}</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.5 }}>{benefit.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Showcase Section */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "80px", alignItems: "start" }}>
            {/* Sticky Nav */}
            <div style={{ position: "sticky", top: "120px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {features.map((f) => (
                <button
                  key={f.id}
                  onClick={() => document.getElementById(f.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  style={{
                    textAlign: "left",
                    padding: "14px 20px",
                    borderRadius: "12px",
                    border: "none",
                    background: activeFeature === f.id ? "rgba(139, 92, 246, 0.1)" : "transparent",
                    color: activeFeature === f.id ? "#a78bfa" : "rgba(255,255,255,0.4)",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {f.navLabel}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div style={{ display: "flex", flexDirection: "column", gap: "200px" }}>
              {features.map((f) => (
                <div key={f.id} id={f.id} style={{ display: "flex", flexDirection: "column", scrollMarginTop: "150px" }}>
                  <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "24px" }}>
                    {f.title}
                  </h2>
                  <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, marginBottom: "40px", maxWidth: "800px" }}>
                    {f.desc}
                  </p>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "60px" }}>
                    {f.bullets.map((bullet, idx) => (
                      <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Check size={14} color="#10b981" />
                        </div>
                        <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)" }}>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "32px", padding: "1px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                    <img 
                      src={f.image} 
                      alt={f.title} 
                      style={{ width: "100%", borderRadius: "31px", display: "block" }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section style={{ padding: "140px 24px", background: "linear-gradient(to bottom, #060212, #0c081d)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "100px", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", padding: "6px 16px", background: "rgba(139, 92, 246, 0.1)", border: "1px solid rgba(139, 92, 246, 0.2)", borderRadius: "100px", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#a78bfa", textTransform: "uppercase", letterSpacing: "1px" }}>Get started today</span>
            </div>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 600, lineHeight: 1.1, marginBottom: "40px" }}>
              Switching takes 10 minutes. No IT tickets. No onboarding calls.
            </h2>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
              <div>
                <div style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "8px", color: "#fff" }}>10 min</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>The time it takes to launch</div>
              </div>
              <div>
                <div style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "8px", color: "#fff" }}>0</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>The amount of time wasted</div>
              </div>
              <div>
                <div style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "8px", color: "#fff" }}>+2.1x</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>Faster time-to-hire on average</div>
              </div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               style={{ borderRadius: "32px", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
             >
                <img 
                  src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0d0c_metrics.avif" 
                  alt="Metrics Graph" 
                  style={{ width: "100%", display: "block", filter: "invert(42%) sepia(34%) saturate(2256%) hue-rotate(228deg) brightness(101%) contrast(95%)" }} 
                />
             </motion.div>
             {/* Glow effect */}
             <div style={{ position: "absolute", inset: "-20px", background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)", zIndex: -1, filter: "blur(20px)" }}></div>
          </div>
        </div>
      </section>

      {/* Restaurant Resources Grid */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>restaurant resources</div>
            <h2 style={{ fontSize: "3rem", fontWeight: 600 }}>Restaurant hiring guides & resources</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "32px" }}>
            {[
              {
                title: "The 9 best restaurant hiring platforms",
                desc: "In this guide, we’ll break down the 9 best restaurant hiring platforms to help you cut through the noise.",
                image: "https://cdn.prod.website-files.com/69846636cdf00025c27f0a12/698dcb7ac1b8f72768b74f19_69887aa02c5c028e7f05ef68_6807c886579c652976a3d3c9_539497b502.webp"
              },
              {
                title: "Restaurant interview questions and answers for 2026 hiring",
                desc: "To help you hire restaurant staff, here are 15 essential restaurant interview questions and answers.",
                image: "https://cdn.prod.website-files.com/69846636cdf00025c27f0a12/698dcb831a77e42d859fdca6_69887aa086ebfea9dacd72e6_6807c8847bd47b758e0ba30f_eb0d465a64.webp"
              },
              {
                title: "How to create the best restaurant job application template",
                desc: "Create a professional restaurant job application with our free template and step-by-step guide. Learn how to build and customize your application using Truffle.",
                image: "https://cdn.prod.website-files.com/69846636cdf00025c27f0a12/698dcb86267ca21291f82bdc_69887a9fb0b28f227e766dbf_6807c88201aee7cb3ccd8604_4e3f3bc5d0.webp"
              }
            ].map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                whileHover={{ y: -5, background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div style={{ height: "240px", overflow: "hidden" }}>
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "32px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "16px", lineHeight: 1.4 }}>{post.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "24px" }}>{post.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fff", fontWeight: 600, fontSize: "14px" }}>
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: "60px", padding: "32px", background: "rgba(255, 255, 255, 0.02)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <dl style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", margin: 0, padding: 0 }}>
              <div>
                <dt style={{ fontWeight: 600, color: "#fff", marginBottom: "8px", fontSize: "1.1rem" }}>Streamlined Processing</dt>
                <dd style={{ color: "rgba(255, 255, 255, 0.6)", margin: 0, fontSize: "15px", lineHeight: "1.6" }}>Review candidates faster with AI summaries and cut down your screen time by 80%.</dd>
              </div>
              <div>
                <dt style={{ fontWeight: 600, color: "#fff", marginBottom: "8px", fontSize: "1.1rem" }}>Better Quality Hires</dt>
                <dd style={{ color: "rgba(255, 255, 255, 0.6)", margin: 0, fontSize: "15px", lineHeight: "1.6" }}>Assess candidates based on actual performance indicators and situational scenarios.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Traditional Assessments Banner CTA */}
      <section style={{ padding: "60px 24px" }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          background: "linear-gradient(135deg, rgba(20, 10, 40, 0.6) 0%, rgba(10, 5, 20, 0.8) 100%)",
          borderRadius: "16px",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "80px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "80px",
          alignItems: "center",
          overflow: "hidden",
          position: "relative"
        }}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#a78bfa", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "24px", opacity: 0.8 }}>
              candidate screening for the age of ai
            </div>
            <h2 style={{ fontSize: "3rem", fontWeight: 600, marginBottom: "24px", lineHeight: 1.1 }}>
              Traditional assessments are broken. AI can fake them in seconds.
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: "40px" }}>
              Getting polished take-home responses that don&apos;t match interview performance? With Truffle&apos;s <span style={{ color: "#a78bfa" }}>talent assessment software</span>, you finally see the real candidate with no scripts and no AI assistance.
            </p>
            <button style={{ background: "#fff", color: "#000", border: "none", padding: "16px 36px", borderRadius: "12px", fontSize: "1rem", fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
              Start free trial
              <ArrowRight size={18} style={{ transform: "rotate(-45deg)" }} />
            </button>
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <img 
              src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985bb617119879180082645_cta%20.svg" 
              alt="AI Interview" 
              style={{ width: "100%", height: "auto" }} 
            />
          </div>
          {/* Background Glow */}
          <div style={{ position: "absolute", top: "50%", right: "-10%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)", filter: "blur(60px)", zIndex: 0 }}></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}



