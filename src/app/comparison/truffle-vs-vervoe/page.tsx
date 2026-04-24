"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, XCircle, ArrowRight, Zap, Brain, Clock, Shield } from "lucide-react";
import Link from "next/link";

const TruffleLogo = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
    <path d="M19,3 L15,7 C14,6.6 13,6.4 12,6.4 C11,6.4 10,6.6 9,7 L5,3 L5,9.2 C3.1,10.6 2,12.7 2,15 C2,19.4 6.5,23 12,23 C17.5,23 22,19.4 22,15 C22,12.7 20.9,10.6 19,9.2 L19,3 Z" />
  </svg>
);

const VervoeLogo = () => (
  <div style={{background: '#1d4ed8', color: 'white', padding: '4px 10px', borderRadius: '4px', fontWeight: 'bold', fontSize: '20px', lineHeight: 1}}>V</div>
);

export default function TruffleVsVervoe() {
  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", color: "#0f172a" }}>
      <Navbar />
      
      <section style={{ 
        paddingTop: "160px", 
        paddingBottom: "80px", 
        background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 10 }}>
          
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <Link href="/comparison" style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "#64748b", 
              fontSize: "14px", 
              fontWeight: "500", 
              textDecoration: "none",
              marginBottom: "32px",
              padding: "8px 16px",
              borderRadius: "999px",
              backgroundColor: "#f1f5f9",
              transition: "background-color 0.2s"
            }}>
              ← Back to all comparisons
            </Link>
            
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
              <div style={{ 
                border: "1px solid #e2e8f0", 
                borderRadius: "999px", 
                padding: "6px 16px", 
                fontSize: "12px", 
                fontWeight: "600", 
                color: "#64748b", 
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                backgroundColor: "#f8fafc"
              }}>
                Vervoe Alternative
              </div>
            </div>
            
            <h1 style={{ fontSize: "72px", fontWeight: "500", lineHeight: "1.1", marginBottom: "32px", letterSpacing: "-0.02em", color: "#000000" }}>
              Do you need a skills<br />test library, or do you<br />need to hire faster?
            </h1>
            
            <p style={{ fontSize: "18px", color: "#475569", lineHeight: "1.6", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px", fontWeight: "500" }}>
              Do you need a skills test library, or do you need a faster<br />
              way to screen communication and fit?
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "64px" }}>
              <div style={{ position: "relative" }}>
                <div style={{ 
                  position: "absolute", 
                  top: "10px", 
                  left: "10%", 
                  right: "10%", 
                  bottom: "-10px", 
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)", 
                  filter: "blur(15px)", 
                  opacity: 0.7,
                  zIndex: 0,
                  borderRadius: "16px"
                }}></div>
                <button style={{ 
                  position: "relative",
                  zIndex: 1,
                  background: "#030712", 
                  color: "white", 
                  padding: "16px 28px", 
                  borderRadius: "12px", 
                  fontWeight: "600",
                  fontSize: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "none",
                  cursor: "pointer"
                }}>
                  Start free trial <span style={{ transform: "rotate(90deg) scaleY(-1)" }}>↵</span>
                </button>
              </div>
              
              <button style={{ 
                background: "white", 
                color: "#0f172a", 
                padding: "16px 28px", 
                borderRadius: "12px", 
                fontWeight: "600",
                fontSize: "16px",
                border: "1px solid #e2e8f0",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
              }}>
                Book Demo
              </button>
            </div>
          </div>
          
        </div>
      </section>

      <section style={{ padding: "0 24px 80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
          
          <div style={{ 
            background: "#ffffff", 
            borderRadius: "16px", 
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0,0,0,0.05)",
            overflow: "hidden",
            display: "flex",
            height: "600px",
            position: "relative",
            zIndex: 1
          }}>
            <div style={{ width: "64px", borderRight: "1px solid #e2e8f0", display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 0", gap: "24px", backgroundColor: "#f8fafc" }}>
              <TruffleLogo />
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "4px", backgroundColor: "#e2e8f0" }}></div>
                <div style={{ width: "24px", height: "24px", borderRadius: "4px", backgroundColor: "#94a3b8" }}></div>
                <div style={{ width: "24px", height: "24px", borderRadius: "4px", backgroundColor: "#e2e8f0" }}></div>
              </div>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: "#f8fafc" }}>
              <div style={{ padding: "16px 24px", borderBottom: "1px solid #e2e8f0", backgroundColor: "#ffffff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ fontWeight: "600", fontSize: "18px", color: "#0f172a" }}>Marcus Chen</div>
                  <div style={{ fontSize: "13px", color: "#64748b" }}>Applied 2 days ago</div>
                  <div style={{ background: "#dcfce3", color: "#16a34a", padding: "2px 8px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>82% Match</div>
                  <div style={{ background: "#e0f2fe", color: "#0284c7", padding: "2px 8px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>✦ AI check</div>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <div style={{ border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "#0f172a" }}>For Review</div>
                  <div style={{ border: "1px solid #e2e8f0", padding: "6px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "#0f172a" }}>Add to shortlist</div>
                </div>
              </div>
              
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px", overflowY: "auto" }}>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div style={{ flex: 2, background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <div style={{ background: "#3b82f6", color: "white", padding: "6px", borderRadius: "8px" }}>
                        <Brain size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: "600", color: "#0f172a" }}>Candidate summary</div>
                        <div style={{ fontSize: "13px", color: "#64748b" }}>AI powered analysis & insights</div>
                      </div>
                    </div>
                    <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6", marginBottom: "16px" }}>
                      Marcus demonstrates strong alignment with GreenLeaf Solutions' sustainability mission and brings 6 years of proven digital marketing expertise to scale customer acquisition.
                    </p>
                    <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "12px", marginBottom: "12px" }}>
                      <div style={{ fontSize: "14px", color: "#0f172a" }}><span style={{ fontWeight: "600" }}>Strategic thinking:</span> Shows clear understanding of marketing funnel optimization.</div>
                    </div>
                    <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "12px" }}>
                      <div style={{ fontSize: "14px", color: "#0f172a" }}><span style={{ fontWeight: "600" }}>Leadership potential:</span> Mentions experience managing 2-person team and collaborating.</div>
                    </div>
                  </div>
                  
                  <div style={{ flex: 1, background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                      <div style={{ background: "#3b82f6", color: "white", padding: "6px", borderRadius: "8px" }}>
                        <Zap size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: "600", color: "#0f172a" }}>Match overview</div>
                        <div style={{ fontSize: "13px", color: "#64748b" }}>How this candidate ranks</div>
                      </div>
                    </div>
                    <div style={{ textAlign: "center", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "24px 0", marginBottom: "16px" }}>
                      <div style={{ fontSize: "40px", fontWeight: "700", color: "#16a34a", lineHeight: "1" }}>82%</div>
                      <div style={{ fontSize: "14px", color: "#64748b", marginTop: "8px" }}>Match Analysis</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "14px", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px", marginBottom: "8px" }}>
                      <span style={{ color: "#475569" }}>Communication</span>
                      <span style={{ fontWeight: "600", color: "#16a34a" }}>85</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "14px" }}>
                      <span style={{ color: "#475569" }}>Data analysis</span>
                      <span style={{ fontWeight: "600", color: "#16a34a" }}>81</span>
                    </div>
                  </div>
                </div>
                
                <div style={{ background: "#ffffff", borderRadius: "12px", border: "1px solid #e2e8f0", padding: "24px", display: "flex", gap: "24px" }}>
                  <div style={{ flex: 1, background: "#1e293b", borderRadius: "8px", minHeight: "200px", position: "relative", overflow: "hidden" }}>
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" alt="Video thumbnail" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }} />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "48px", height: "48px", borderRadius: "50%", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "12px solid white", marginLeft: "4px" }}></div>
                    </div>
                    <div style={{ position: "absolute", top: "12px", left: "12px", background: "rgba(0,0,0,0.6)", color: "white", padding: "4px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "500" }}>0:45</div>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "12px" }}>
                      <div style={{ fontSize: "12px", color: "#3b82f6", fontWeight: "600", marginBottom: "4px" }}>0:00 Mission alignment</div>
                      <div style={{ fontSize: "14px", color: "#0f172a" }}>I've been following GreenLeaf's sustainability reports for over a year...</div>
                    </div>
                    <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "12px" }}>
                      <div style={{ fontSize: "12px", color: "#3b82f6", fontWeight: "600", marginBottom: "4px" }}>0:16 Data-driven</div>
                      <div style={{ fontSize: "14px", color: "#0f172a" }}>I increased our email open rates from 18% to 47% in four months...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ 
            position: "absolute", 
            top: "50px", 
            left: "300px", 
            background: "#0f172a", 
            color: "white", 
            padding: "12px 20px", 
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: "500",
            zIndex: 10,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          }}>
            Faster way to screen communication and fit
          </div>
          
          <div style={{ 
            position: "absolute", 
            top: "300px", 
            right: "20px", 
            background: "#0f172a", 
            color: "white", 
            padding: "12px 20px", 
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: "500",
            zIndex: 10,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          }}>
            Skills test library vs hiring faster
          </div>
          
          <div style={{ 
            position: "absolute", 
            bottom: "220px", 
            left: "20px", 
            background: "#0f172a", 
            color: "white", 
            padding: "12px 20px", 
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: "500",
            zIndex: 10,
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
          }}>
            AI-powered communication and fit analysis
          </div>
          
          <div style={{ 
            position: "absolute", 
            top: "-50px", 
            left: "-50px", 
            right: "-50px", 
            bottom: "-50px", 
            background: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)", 
            filter: "blur(100px)",
            opacity: 0.3,
            zIndex: 0,
            pointerEvents: "none"
          }}></div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", textAlign: "center", marginBottom: "64px" }}>
            Feature Comparison
          </h2>
          
          <div style={{ borderRadius: "24px", border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", background: "#f8fafc", padding: "24px", borderBottom: "1px solid #e2e8f0", fontWeight: "600", fontSize: "18px" }}>
              <div>Features</div>
              <div style={{ textAlign: "center", color: "#0f172a" }}>Truffle</div>
              <div style={{ textAlign: "center", color: "#64748b" }}>Vervoe</div>
            </div>
            
            {[
              { name: "Asynchronous Video Interviews", truffle: true, vervoe: false },
              { name: "Custom Questions & Branding", truffle: true, vervoe: true },
              { name: "ATS Integrations", truffle: true, vervoe: true },
              { name: "AI-Powered Candidate Ranking", truffle: true, vervoe: false, highlight: true },
              { name: "Automated Communication Analysis", truffle: true, vervoe: false, highlight: true },
              { name: "Smart Shortlisting", truffle: true, vervoe: false, highlight: true },
              { name: "Fraud & Deepfake Detection", truffle: true, vervoe: false, highlight: true },
            ].map((row, i) => (
              <div key={i} style={{ 
                display: "grid", 
                gridTemplateColumns: "2fr 1fr 1fr", 
                padding: "24px", 
                borderBottom: i !== 6 ? "1px solid #e2e8f0" : "none",
                backgroundColor: row.highlight ? "#f0f9ff" : "white",
                alignItems: "center"
              }}>
                <div style={{ fontWeight: "500", color: row.highlight ? "#0369a1" : "#334155", display: "flex", alignItems: "center", gap: "8px" }}>
                  {row.highlight && <SparklesIcon />}
                  {row.name}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {row.truffle ? <CheckCircle2 color="#10b981" /> : <XCircle color="#cbd5e1" />}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {row.vervoe ? <CheckCircle2 color="#64748b" /> : <XCircle color="#cbd5e1" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "16px" }}>Why choose Truffle?</h2>
            <p style={{ fontSize: "18px", color: "#64748b", maxWidth: "600px", margin: "0 auto" }}>
              Go beyond just recording videos. Truffle turns your interviews into actionable data.
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px" }}>
            <FeatureCard 
              icon={<Brain color="#8b5cf6" size={32} />}
              title="Intelligence, not just inbox"
              desc="Do you need a skills test library, or do you need a faster way to screen communication and fit?"
            />
            <FeatureCard 
              icon={<Clock color="#3b82f6" size={32} />}
              title="Cut screening time by 80%"
              desc="Stop watching 30-minute interviews of unqualified candidates. Truffle's AI rankings tell you exactly who to focus on, letting you hire faster."
            />
            <FeatureCard 
              icon={<Shield color="#10b981" size={32} />}
              title="Advanced Fraud Detection"
              desc="With the rise of deepfakes and AI tools, Truffle ensures you're talking to the real person with state-of-the-art liveness and consistency checks."
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "16px", color: "#0f172a" }}>
              They switched from Vervoe<br />and didn't look back
            </h2>
            <p style={{ fontSize: "16px", color: "#475569", fontWeight: "500" }}>
              Real stories from teams who reduced time-to-hire and delivered more with less
            </p>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
            gap: "24px",
            overflowX: "auto",
            paddingBottom: "16px"
          }}>
            <TestimonialCard 
              name="Shannon Rechter"
              title="HR Generalist"
              company="Waldron Private Wealth"
              quote="Truffle helps us move through high-volume intern hiring, with clear visibility into each student's fit."
              avatarBg="#e2e8f0"
            />
            <TestimonialCard 
              name="Laura Williams"
              title="Founder & CEO"
              company="InSync Media"
              quote="As a marketing agency owner, I don't have time to screen every applicant. Truffle has saved hundreds of hours."
              avatarBg="#dcfce3"
            />
            <TestimonialCard 
              name="Maggie Rivers"
              title="Sales Recruiter"
              company="Classic Country Land"
              quote="We use Truffle to hire field sales reps. It helps us quickly spot who might be a great fit for us."
              avatarBg="#ffedd5"
            />
            <TestimonialCard 
              name="Aldila Nimas"
              title="Education Recruiter"
              company="Pribadi School"
              quote="Not only has Truffle reduced the time it takes us to hire, their team has been great to work with."
              avatarBg="#fee2e2"
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "40px", fontWeight: "600", marginBottom: "16px", color: "#0f172a" }}>
              The much more affordable Vervoe<br />alternative
            </h2>
            <p style={{ fontSize: "16px", color: "#475569" }}>
              Choose the plan that fits your team's needs
            </p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "start", marginBottom: "32px" }}>
            <div style={{ 
              background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #4c1d95 100%)", 
              borderRadius: "24px", 
              padding: "48px 40px", 
              color: "white",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}>
              <div style={{ 
                position: "absolute", 
                bottom: "-50px", 
                right: "-50px", 
                width: "300px", 
                height: "300px", 
                background: "radial-gradient(circle, rgba(29,78,216,0.8) 0%, rgba(37,99,235,0.4) 50%, transparent 70%)", 
                filter: "blur(40px)",
                zIndex: 0
              }}></div>
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>
                  Simple pricing
                </h3>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", marginBottom: "48px", lineHeight: "1.6", maxWidth: "280px" }}>
                  Everything you need to screen candidates faster. Get set up in 10 minutes.
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "48px" }}>
                  <span style={{ fontSize: "64px", fontWeight: "700", lineHeight: "1" }}>$99</span>
                  <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)" }}>per month</span>
                </div>
                <button style={{ 
                  background: "white", 
                  color: "#0f172a", 
                  padding: "16px 32px", 
                  borderRadius: "12px", 
                  fontWeight: "600",
                  fontSize: "16px",
                  border: "none",
                  cursor: "pointer",
                  width: "max-content",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}>
                  Book Demo
                </button>
              </div>
            </div>

            <div style={{ paddingTop: "16px" }}>
              <div style={{ fontSize: "18px", fontWeight: "600", marginBottom: "32px", color: "#0f172a" }}>
                What is included:
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                <PricingFeature 
                  title="AI Summaries & Match Scores"
                  desc="Every candidate response is summarized with a match score and reasoning so you can prioritize your review."
                />
                <PricingFeature 
                  title="Async Video Interviews & Candidate Shorts"
                  desc="Candidates record on their own time. You get a 30-second highlight reel for each with full interviews available."
                />
                <PricingFeature 
                  title="Skills & Fit Assessments"
                  desc="Surface how candidates approach real situations and whether their work preferences align with your environment."
                />
                <PricingFeature 
                  title="Unlimited users & team collaboration"
                  desc="Add managers, leads, and HR to the same view. Everyone rates, comments, and shortlists in one place."
                />
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: "#f8fafc", 
            borderRadius: "16px", 
            padding: "24px 32px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            border: "1px solid #e2e8f0"
          }}>
            <div>
              <div style={{ fontSize: "16px", fontWeight: "500", color: "#0f172a", marginBottom: "4px" }}>
                Need more than 150 candidates per month?
              </div>
              <div style={{ fontSize: "15px", color: "#64748b" }}>
                Talk to our sales team.
              </div>
            </div>
            <button style={{ 
              background: "#0f172a", 
              color: "white", 
              padding: "12px 24px", 
              borderRadius: "8px", 
              fontWeight: "500",
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              Start free trial <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", backgroundColor: "#0f172a", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "48px", fontWeight: "700", marginBottom: "24px" }}>
            Ready for a smarter screening process?
          </h2>
          <p style={{ fontSize: "20px", color: "#94a3b8", marginBottom: "40px", lineHeight: "1.6" }}>
            Join hundreds of companies that have upgraded from simple video recording to AI-powered talent intelligence.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
            <button style={{ 
              background: "white", 
              color: "#0f172a", 
              padding: "16px 32px", 
              borderRadius: "12px", 
              fontWeight: "600",
              fontSize: "16px",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s"
            }}>
              Start free trial
            </button>
            <button style={{ 
              background: "rgba(255,255,255,0.1)", 
              color: "white", 
              padding: "16px 32px", 
              borderRadius: "12px", 
              fontWeight: "600",
              fontSize: "16px",
              border: "1px solid rgba(255,255,255,0.2)",
              cursor: "pointer",
              transition: "background 0.2s"
            }}>
              Book a demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SparklesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="m19 5-14 14" />
      <path d="m5 5 14 14" />
    </svg>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div style={{ 
      background: "white", 
      padding: "32px", 
      borderRadius: "24px", 
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      border: "1px solid #e2e8f0"
    }}>
      <div style={{ 
        width: "64px", 
        height: "64px", 
        borderRadius: "16px", 
        background: "#f1f5f9", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        marginBottom: "24px"
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "12px", color: "#0f172a" }}>
        {title}
      </h3>
      <p style={{ color: "#475569", lineHeight: "1.6" }}>
        {desc}
      </p>
    </div>
  );
}

function TestimonialCard({ name, title, company, quote, avatarBg }: { name: string, title: string, company: string, quote: string, avatarBg: string }) {
  return (
    <div style={{ 
      border: "1px solid #e2e8f0", 
      borderRadius: "16px", 
      padding: "32px 24px",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
        <div style={{ 
          width: "48px", 
          height: "48px", 
          borderRadius: "12px", 
          backgroundColor: avatarBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          fontWeight: "600",
          color: "#0f172a"
        }}>
          {name.charAt(0)}
        </div>
        <div>
          <div style={{ fontWeight: "600", color: "#0f172a", fontSize: "16px" }}>{name}</div>
          <div style={{ color: "#64748b", fontSize: "14px" }}>{title}</div>
          <div style={{ color: "#64748b", fontSize: "14px" }}>{company}</div>
        </div>
      </div>
      <p style={{ color: "#334155", fontSize: "15px", lineHeight: "1.6", marginTop: "auto" }}>
        {quote}
      </p>
    </div>
  );
}

function PricingFeature({ title, desc }: { title: string, desc: string }) {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div style={{ marginTop: "2px" }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <div style={{ fontWeight: "600", color: "#0f172a", fontSize: "16px", marginBottom: "4px" }}>
          {title}
        </div>
        <div style={{ color: "#64748b", fontSize: "15px", lineHeight: "1.5" }}>
          {desc}
        </div>
      </div>
    </div>
  );
}
