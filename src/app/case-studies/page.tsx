"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <main style={{ backgroundColor: "#03000a", color: "#ffffff", minHeight: "100vh", fontFamily: "var(--font-inter), sans-serif" }}>
      <Navbar />
      
      <div style={{ paddingTop: "140px", paddingBottom: "100px", px: "24px", maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 700, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Meet our Customers
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.6)", maxWidth: "600px", lineHeight: 1.6 }}>
            Interview AI is trusted by over 100 companies to help them scale their business and stay ahead of the competition.
          </p>
        </div>

        {/* Featured Case Study (Bolt) */}
        <div 
          style={{ 
            background: "#0d0d12", 
            borderRadius: "24px", 
            border: "1px solid rgba(255, 255, 255, 0.05)",
            position: "relative",
            overflow: "hidden",
            marginBottom: "64px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
          }}
        >
          {/* Glowing orbs for background */}
          <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: "60%", height: "80%", background: "radial-gradient(ellipse at center, rgba(37, 99, 235, 0.3) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-30%", right: "10%", width: "50%", height: "70%", background: "radial-gradient(ellipse at center, rgba(147, 51, 234, 0.2) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.5, pointerEvents: "none" }} />
          
          <div style={{ position: "relative", zIndex: 2, padding: "56px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "600px" }}>
              <div style={{ fontSize: "32px", fontWeight: 800, fontStyle: "italic", letterSpacing: "-0.05em" }}>bolt</div>
              
              <h2 style={{ fontSize: "2rem", fontWeight: 500, lineHeight: 1.3 }}>
                Bolt implemented our streaming optimization suite to <span style={{ fontWeight: 700 }}>reduce buffering by 62% during peak viewing hours.</span>
              </h2>
              
              <Link href="#" style={{ display: "flex", alignItems: "center", gap: "8px", color: "white", textDecoration: "none", fontSize: "14px", fontWeight: 600, marginTop: "16px" }}>
                Read Story <ArrowRight size={14} />
              </Link>
            </div>
            
            <div style={{ display: "flex", gap: "60px", marginTop: "80px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "32px" }}>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>99.9 <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255, 255, 255, 0.6)" }}>%</span></div>
                <div style={{ fontSize: "13px", color: "white", fontWeight: 600 }}>Uptime guarantee</div>
                <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)" }}>for all our services.</div>
              </div>
              <div>
                <div style={{ fontSize: "24px", fontWeight: 700, marginBottom: "8px" }}>24/7</div>
                <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.6)" }}><span style={{ color: "white", fontWeight: 600 }}>24/7 support</span> available<br/>around the clock.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "180px", marginBottom: "80px", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "40px 0" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "4rem", fontWeight: 700, color: "white", lineHeight: 1 }}>+85%</div>
            <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", marginTop: "12px" }}>Conversion Rate</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "4rem", fontWeight: 700, color: "white", lineHeight: 1 }}>12K</div>
            <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", marginTop: "12px" }}>Active Users</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "4rem", fontWeight: 700, color: "white", lineHeight: 1 }}>40%</div>
            <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", marginTop: "12px" }}>Revenue Growth</div>
          </div>
        </div>

        {/* Grid of Case Studies */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "100px" }}>
          {[
            {
              logo: "stripe",
              slug: "stripe",
              sub: "65% Faster.",
              title: "How Stripe is scaling their marketing websites.",
            },
            {
              logo: "hulu",
              slug: "hulu",
              sub: "High-performance.",
              title: "How Hulu is building and scaling their marketing websites.",
            },
            {
              logo: "▲ Vercel",
              slug: "vercel",
              sub: "Fast and secure.",
              title: "How Vercel is building and scaling their marketing websites.",
            },
            {
              logo: "Beacon",
              slug: "beacon",
              sub: "Improved workflow.",
              title: "How Beacon is transforming their marketing websites.",
            },
            {
              logo: "supabase", // In a real app we'd use their logo icon
              slug: "supabase",
              sub: "Improved workflow.",
              title: "How Supabase is transforming their marketing websites.",
            },
            {
              logo: "OpenAI",
              slug: "openai",
              sub: "Improved workflow.",
              title: "How OpenAI is transforming their marketing websites.",
            }
          ].map((item, i) => (
            <div 
              key={i} 
              style={{ 
                background: "#08080a", 
                border: "1px solid rgba(255, 255, 255, 0.05)", 
                borderRadius: "16px", 
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "24px", fontWeight: 700, marginBottom: "48px" }}>
                {item.logo}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.4)", marginBottom: "12px" }}>
                {item.sub}
              </div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "white", marginBottom: "40px", lineHeight: 1.4 }}>
                {item.title}
              </h3>
              <div style={{ marginTop: "auto" }}>
                <Link href={`/case-studies/${item.slug}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px", fontWeight: 500 }}>
                  Read Story <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Loved by the Community Section */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Loved by the Community
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255, 255, 255, 0.5)", maxWidth: "500px", margin: "0 auto" }}>
            Interview AI is trusted by over 100 companies to help them scale their business and stay ahead of the competition.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", alignItems: "start", marginBottom: "120px" }}>
          {/* Column 1 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                Interview AI is really extraordinary and very practical, no need to break your head. A real gold mine.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Jonathan Yombo</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>Software Engineer</div>
                </div>
              </div>
            </div>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                With no experience in recruitment software I just redesigned my entire interviewing process in a few minutes thanks to Interview AI.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Yves Kalume</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>GDE - Android</div>
                </div>
              </div>
            </div>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                Great work on the template. This is one of the best platforms that I have seen so far :)
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=13" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Yucel Faruksahan</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>Founder</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                Interview AI is redefining the standard of hiring, with these tools it provides an easy and efficient way for those who love beauty but may lack the time to implement it.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=14" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Shekinah Tshiokufila</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>Senior Software Engineer</div>
                </div>
              </div>
            </div>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                Using Interview AI has been like unlocking a secret design superpower.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=15" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Zeki</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>Founder of ChatExtend</div>
                </div>
              </div>
            </div>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                Interview AI is an elegant, clean, and responsive set of components. It's very helpful to start fast with your project.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=16" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Khatab Wedaa</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>Creator</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                I love Interview AI ❤️. The component blocks are well-structured, simple to use, and beautifully designed.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=17" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Rodrigo Aguilar</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>Creator</div>
                </div>
              </div>
            </div>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                Interview AI is so well designed that even with a very poor knowledge of software you can do miracles. Let yourself be seduced!
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=18" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Roland Tubonge</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>Software Engineer</div>
                </div>
              </div>
            </div>
            <div style={{ background: "#08080a", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "16px", padding: "24px" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>
                It's mind blowing the level of detail and care put into this product.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <img src="https://i.pravatar.cc/150?img=19" alt="Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>Alex Turner</div>
                  <div style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.4)" }}>CTO</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ textAlign: "center", paddingBottom: "60px" }}>
          <h2 style={{ fontSize: "3.5rem", fontWeight: 700, marginBottom: "24px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            Build, Sell and<br/>Scale Your Business
          </h2>
          <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.6)", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.6 }}>
            Join a community of over 1000+ companies and developers who have already discovered the power of Interview AI.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
