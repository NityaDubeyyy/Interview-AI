"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Check, Plus, 
} from "lucide-react";

export default function HealthcareHiringPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeFaqTab, setActiveFaqTab] = useState("Product");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    {
      id: "feature1",
      navLabel: "Resume screening",
      title: "Get to signal before the interview starts",
      description: "Healthcare resumes blur together fast — same certifications, same clinical rotations, same formatting. But the differences that matter are buried in the details. Truffle surfaces experience highlights and alignment signals for every candidate — so your team can quickly see who's worth a closer look.",
      bullets: [
        "Surface candidates with relevant clinical, administrative, or patient-facing experience",
        "Flag key qualifications like certifications, availability, and location match",
        "Every candidate stays visible — nothing gets auto-rejected"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6994342d33de6662fd825335_resume%20screening.png",
      imageAlt: "Candidate skills analysis report"
    },
    {
      id: "feature2",
      navLabel: "Async video interviews",
      title: "Replace the scheduling nightmare with a single link",
      description: "Your hiring managers are on the floor. Your candidates are on the floor. Nobody has 30 minutes free at the same time on the same day. Send one link. Candidates record answers between shifts, after hours, whenever works. Your team reviews when they have a minute — not when the calendar says so.",
      bullets: [
        "Candidates complete interviews from any device, anytime",
        "Average completion takes under 15 minutes",
        "Completion itself is signal — if they'll spend 10 minutes, they're serious"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985b7ebb2e4b058976aec54_async%20video%20interviews.svg",
      imageAlt: "Video interview software interface"
    },
    {
      id: "feature3",
      navLabel: "Talent assessments",
      title: "Find out how candidates handle real situations before they're on the floor",
      description: "Credentials get someone in the door. How they handle a difficult patient interaction, a team conflict, or an unexpected shift change — that's what determines whether they stay. Truffle's assessments surface alignment between candidates and your team's way of working.",
      bullets: [
        "Situational judgment scenarios based on real situations",
        "Environment fit assessment to align expectations before day one",
        "No trick questions — candidates respond honestly, you see the alignment"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985ba56d27c7b40226aaf91_assessments.svg",
      imageAlt: "Applicant screening software scorecard"
    },
    {
      id: "feature4",
      navLabel: "AI review tools",
      title: "Review 100 candidates in the time it used to take to phone screen 1",
      description: "Truffle's AI summarizes every interview, scores alignment with your role, and pulls key moments into a 30-second Candidate Short. You get the signal fast — then decide who's worth a real conversation.",
      bullets: [
        "AI summaries of every candidate response",
        "Match scores with reasoning — see exactly why each score was given",
        "Candidate Shorts highlight key moments — full interviews always available"
      ],
      image: "https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985b91d7f2f0007067a4be1_ai%20review.svg",
      imageAlt: "AI review interface"
    }
  ];

  const faqData = {
    Product: [
      { q: "What is candidate screening software?", a: "Candidate screening software automates the early stages of hiring by evaluating applicants before live interviews. Instead of manually reviewing hundreds of resumes or scheduling dozens of phone screens, screening tools use a combination of video interviews, skills assessments, resume parsing, AI-generated summaries, and structured scoring to surface the best candidates faster." },
      { q: "What screening methods does Truffle support?", a: "Truffle supports four core screening methods: one-way video interviews, automated resume screening, structured talent assessments (Personality, Situational Judgment, and Environment Fit), and text-based qualification checks." },
      { q: "How does candidate screening software improve quality of hire?", a: "Screening software improves quality of hire by replacing unstructured evaluation with consistent, criteria-based assessment. Every candidate is measured against the same scoring rubric, reducing variability and bias." },
      { q: "What's the difference between an ATS and candidate screening software?", a: "An applicant tracking system manages job postings and candidate pipelines. Candidate screening software focuses specifically on the evaluation layer — giving your team structured, comparable information before live conversations." },
      { q: "Is Truffle's AI biased?", a: "Truffle's AI analyzes only transcripts of candidate responses. Demographic data isn't requested or used in scoring, and every match score includes transparent reasoning." }
    ],
    Support: [
      { q: "Do you offer onboarding or training?", a: "Yes. We're happy to walk you and your team through the platform on a live call. Most teams are self-sufficient after a few minutes, but we're here to help." },
      { q: "What kind of support do you offer?", a: "Direct access to our team via email, phone, and live chat. You're talking to the people who built the product." },
      { q: "How long does setup take?", a: "Most teams are live in under 15 minutes. No implementation project or IT involvement required." }
    ],
    Pricing: [
      { q: "What does Truffle cost?", a: "Truffle starts at $99/month. No per-seat pricing, so your whole hiring team gets access without long-term contracts." },
      { q: "Is there a free trial?", a: "Yes. Every Truffle account starts with a free trial — no credit card required. You can run five candidates to see the experience." }
    ]
  };

  return (
    <main style={{ background: "#060212", color: "#fff", minHeight: "100vh" }}>
      <Navbar />

      {/* 1. Hero Section */}
      <section style={{ padding: "180px 24px 100px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "100%", opacity: 0.1, zIndex: 0 }}>
          <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "80%", background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)", filter: "blur(120px)" }} />
        </div>
        
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "rgba(255, 255, 255, 0.05)", padding: "8px 16px", borderRadius: "100px", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "32px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(255, 255, 255, 0.6)" }}>healthcare hiring software</span>
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.04em" }}>
            Hire clinical and support staff without burning out the team doing the hiring
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(255, 255, 255, 0.6)", maxWidth: "800px", margin: "0 auto 48px", lineHeight: 1.6 }}>
            Healthcare hiring never stops — and the people doing the screening are usually the same ones covering shifts. Truffle gives you async interviews, AI summaries, and match scores so you spend less time sorting applications and more time filling roles.
          </p>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button style={{ background: "#fff", color: "#000", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
              Start free trial <ArrowRight size={20} />
            </button>
            <button style={{ background: "rgba(255, 255, 255, 0.05)", color: "#fff", padding: "16px 32px", borderRadius: "12px", fontWeight: 600, border: "1px solid rgba(255, 255, 255, 0.1)", cursor: "pointer" }}>
              Book Demo
            </button>
          </div>
        </div>
      </section>

      {/* 2. Benefits Cards */}
      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
          {[
            { label: "Resume screening (coming soon)", sub: "Surface qualified candidates before interviews even start" },
            { label: "Async video interviews", sub: "Candidates respond on their time — no scheduling required" },
            { label: "Talent assessments", sub: "See how candidates align with your role and environment" },
            { label: "AI Summaries & Match Scores", sub: "Review candidates in minutes, not hours" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, background: "rgba(255, 255, 255, 0.05)" }}
              style={{ padding: "24px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)", cursor: "pointer" }}
            >
              <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "8px" }}>{card.label}</div>
              <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.4)", lineHeight: 1.4 }}>{card.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.05)", margin: "80px 0" }} />

      {/* 3. Detailed Features Section with Tabs */}
      <section id="features" style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "250px 1fr", gap: "80px" }}>
          {/* Side Nav */}
          <div style={{ position: "sticky", top: "100px", height: "fit-content" }}>
            {features.map((f, i) => (
              <div 
                key={f.id}
                onClick={() => setActiveFeature(i)}
                style={{ 
                  padding: "16px 20px", 
                  borderRadius: "12px", 
                  cursor: "pointer", 
                  color: activeFeature === i ? "#fff" : "rgba(255, 255, 255, 0.4)",
                  background: activeFeature === i ? "rgba(255, 255, 255, 0.05)" : "transparent",
                  fontWeight: 600,
                  marginBottom: "8px",
                  transition: "all 0.2s"
                }}
              >
                {f.navLabel}
              </div>
            ))}
          </div>

          {/* Feature Display */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}
            >
              <div>
                <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "24px", lineHeight: 1.2 }}>
                  {features[activeFeature].title}
                </h2>
                <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.6)", lineHeight: 1.6, marginBottom: "32px" }}>
                  {features[activeFeature].description}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {features[activeFeature].bullets.map((bullet, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={12} color="#10b981" />
                      </div>
                      <span style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.8)", lineHeight: 1.5 }}>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderRadius: "24px", overflow: "hidden", background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)", padding: "24px" }}>
                <img src={features[activeFeature].image} alt={features[activeFeature].imageAlt} style={{ width: "100%", height: "auto" }} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 4. Metrics Section */}
      <section style={{ padding: "100px 24px", background: "rgba(255, 255, 255, 0.02)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(139, 92, 246, 0.1)", padding: "4px 12px", borderRadius: "100px", marginBottom: "24px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", color: "#8B5CF6" }}>get started today</span>
            </div>
            <h2 style={{ fontSize: "3rem", fontWeight: 600, lineHeight: 1.1, marginBottom: "40px" }}>Switching takes 10 minutes. No IT tickets. No onboarding calls.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "8px" }}>10 min</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.4)" }}>The time it takes to launch</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "8px" }}>0</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.4)" }}>The amount of time wasted</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "8px" }}>+2.1x</div>
                <div style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.4)" }}>Faster time-to-hire on average</div>
              </div>
            </div>
          </div>
          <div>
            <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0d0c_metrics.avif" alt="Metrics" style={{ width: "100%", borderRadius: "24px", filter: "invert(42%) sepia(34%) saturate(2256%) hue-rotate(228deg) brightness(101%) contrast(95%)" }} />
          </div>
        </div>
      </section>

      {/* 5. FAQ Section */}
      <section style={{ padding: "140px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "80px" }}>
            <div style={{ display: "inline-block", background: "rgba(255, 255, 255, 0.05)", padding: "6px 14px", borderRadius: "100px", marginBottom: "24px" }}>
              <span style={{ fontSize: "11px", fontWeight: 800, textTransform: "uppercase", color: "rgba(255, 255, 255, 0.6)" }}>FAQ</span>
            </div>
            <h2 style={{ fontSize: "3rem", fontWeight: 600, marginBottom: "24px" }}>FAQs about Truffle's candidate screening software</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.4)" }}>Quick answers to help you get the most out of your visit. 👋</p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "40px" }}>
              {["Product", "Support", "Pricing"].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveFaqTab(tab)}
                  style={{ 
                    padding: "12px 24px", 
                    borderRadius: "100px", 
                    border: "1px solid", 
                    borderColor: activeFaqTab === tab ? "#fff" : "rgba(255, 255, 255, 0.1)",
                    background: activeFaqTab === tab ? "#fff" : "transparent",
                    color: activeFaqTab === tab ? "#000" : "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {faqData[activeFaqTab as keyof typeof faqData].map((faq, i) => (
                <div key={i} style={{ borderRadius: "16px", border: "1px solid rgba(255, 255, 255, 0.06)", overflow: "hidden" }}>
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", textAlign: "left", padding: "24px", background: "transparent", border: "none", color: "#fff", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <span style={{ fontWeight: 600 }}>{faq.q}</span>
                    <Plus size={18} style={{ transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.3s" }} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div style={{ padding: "0 24px 24px", fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6 }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Traditional Assessments Banner */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)",
            borderRadius: "40px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            padding: "80px",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center"
          }}>
            <div>
              <div style={{ display: "inline-block", background: "rgba(139, 92, 246, 0.1)", padding: "4px 12px", borderRadius: "100px", marginBottom: "24px" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#8B5CF6", textTransform: "uppercase" }}>candidate screening for the age of ai</span>
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 600, marginBottom: "24px", lineHeight: 1.2 }}>
                Traditional assessments are broken. AI can fake them in seconds.
              </h2>
              <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "32px" }}>
                Getting polished take-home responses that don't match interview performance? With Truffle's talent assessment software, you finally see the real candidate with no scripts and no AI assistance.
              </p>
              <button style={{ background: "#fff", color: "#000", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, border: "none" }}>
                Start free trial
              </button>
            </div>
            <div>
              <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6985bb617119879180082645_cta%20.svg" alt="Banner" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Healthcare hiring guides & resources */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 600 }}>Healthcare hiring guides & resources</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            {[
              {
                title: "Healthcare hiring trends every recruiter needs to know in 2026",
                desc: "Discover the latest healthcare hiring trends for 2026. Learn how recruiters can reduce ghosting, speed up hiring, and win top talent.",
                img: "https://cdn.prod.website-files.com/69846636cdf00025c27f0a12/698dcb9e13d2a2595013590b_69887a9d4729ae4c3a424d7b_6807c87fed8d97fd78e691c3_834988ede2.webp",
                link: "/blog/healthcare-hiring-trends"
              },
              {
                title: "Best high volume hiring software in 2026",
                desc: "Learn how AI transforms high-volume hiring into a streamlined process. Discover strategies to efficiently manage high-volume recruitment.",
                img: "https://cdn.prod.website-files.com/69846636cdf00025c27f0a12/69ca31c27c92e63fe26cc9ff_high%20volume.png",
                link: "/blog/high-volume-hiring"
              },
              {
                title: "Top 7 candidate screening software tools in 2026",
                desc: "Need faster, fairer hiring? Our 2026 roundup shows the seven candidate screening tools that slash résumé triage.",
                img: "https://cdn.prod.website-files.com/69846636cdf00025c27f0a12/698dcc0213d2a2595013806f_69887594ece7ff793d4353bd_6862beaa6ef198f8df390fd7_2521e3edaa.webp",
                link: "/blog/candidate-screening-tools"
              }
            ].map((blog, i) => (
              <motion.a 
                key={i}
                href={blog.link}
                whileHover={{ y: -8 }}
                style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)", borderRadius: "24px", overflow: "hidden", textDecoration: "none", color: "inherit" }}
              >
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img src={blog.img} alt={blog.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px", lineHeight: 1.4 }}>{blog.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.6, marginBottom: "24px" }}>{blog.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, fontSize: "14px", color: "#fff" }}>
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Healthcare Job Descriptions */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 600 }}>Healthcare job descriptions</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
            {[
              { title: "Phlebotomist", desc: "Hire entry-level phlebotomists with this job description template covering duties and certifications.", link: "/job-descriptions/phlebotomist" },
              { title: "Medical assistant", desc: "Use this medical assistant job description to hire for clinical and administrative support roles.", link: "/job-descriptions/medical-assistant" },
              { title: "Certified nursing assistant (CNA)", desc: "Hire entry-level CNAs with this template covering duties, qualifications, and requirements.", link: "/job-descriptions/certified-nursing-assistant" },
              { title: "Home health aide", desc: "Use this entry-level home health aide job description template to hire compassionate caregivers.", link: "/job-descriptions/home-health-aide" },
              { title: "Medical records clerk", desc: "Hire medical records clerks with this template. Covers responsibilities and qualifications.", link: "/job-descriptions/medical-records-clerk" },
              { title: "Pharmacy technician", desc: "Use this entry-level pharmacy technician job description template for retail or hospital roles.", link: "/job-descriptions/pharmacy-technician" },
              { title: "Patient care technician", desc: "Hire entry-level patient care technicians with this template covering responsibilities.", link: "/job-descriptions/patient-care-technician" },
              { title: "Medical receptionist", desc: "Use this template to hire entry-level front desk staff for your healthcare practice.", link: "/job-descriptions/medical-receptionist" }
            ].map((job, i) => (
              <div 
                key={i}
                style={{ padding: "24px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.02)", border: "1px solid rgba(255, 255, 255, 0.06)" }}
              >
                <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "12px" }}>{job.title} job description</div>
                <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.4)", lineHeight: 1.5, marginBottom: "20px" }}>{job.desc}</div>
                <a href={job.link} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  -&gt; Get template
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
