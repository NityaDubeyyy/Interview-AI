"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import DarkVeil from "./DarkVeil";
import { Calendar, Bot, Zap, BarChart3, Clock, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Schedule & Connect",
    desc: "Seamlessly integrate with your calendar and automatically join scheduled meetings across all platforms, ensuring you stay connected and prepared.",
    tag: "Step 1",
    color: "var(--primary)",
    icon: <Calendar size={24} />,
    visual: (
      <div style={{ background: '#05010D', border: '1px solid var(--primary)', padding: '30px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)', width: '100%' }}>
        <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Calendar size={18} /> Connecting to Calendar...
        </p>
        <div style={{ height: '2px', background: 'rgba(124, 58, 237, 0.2)', width: '100%', margin: '20px 0' }}></div>
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>Syncing Zoom & Google Meet</p>
      </div>
    )
  },
  {
    id: 2,
    title: "AI Live Analysis",
    desc: "As you speak, our AI analyzes your body language, keywords, and tone in real-time, providing a shadow coach that never misses a detail.",
    tag: "Step 2",
    color: "var(--primary)",
    icon: <Bot size={24} />,
    visual: (
      <div style={{ background: '#05010D', border: '1px solid var(--primary)', padding: '30px', borderRadius: '24px', width: '100%' }}>
        <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Bot size={18} /> AI Coach Active
        </p>
        <div style={{ height: '6px', background: '#1e293b', width: '100%', marginTop: '20px', borderRadius: '3px', overflow: 'hidden' }}>
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "65%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ background: 'var(--primary)', height: '100%' }} 
            />
        </div>
        <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '15px', margin: 0 }}>Analyzing Tone & Sentiment</p>
      </div>
    )
  },
  {
    id: 3,
    title: "Real-time Nudges",
    desc: "Get subtle, private feedback during the session to help you adjust your pace, reduce filler words, and stay on track with your talking points.",
    tag: "Step 3",
    color: "#319ce0",
    icon: <Zap size={24} />,
    visual: (
      <div style={{ background: '#05010D', border: '1px solid #319ce0', padding: '30px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(49, 156, 224, 0.15)', width: '100%' }}>
        <p style={{ margin: 0, color: '#fff', fontSize: '15px' }}>"You're speaking a bit fast."</p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '15px' }}>
          <div style={{ background: 'rgba(49, 156, 224, 0.2)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', color: '#319ce0' }}>Pace</div>
          <div style={{ background: 'rgba(49, 156, 224, 0.2)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', color: '#319ce0' }}>Clarity</div>
        </div>
        <p style={{ fontSize: '13px', color: '#319ce0', marginTop: '15px', fontWeight: 600, margin: 0 }}>Recommendation: Pause for 2s</p>
      </div>
    )
  },
  {
    id: 4,
    title: "Post-Match Insights",
    desc: "Receive a comprehensive score and a personalized action plan within minutes of finishing your session.",
    tag: "Step 4",
    color: "#319ce0",
    icon: <BarChart3 size={24} />,
    visual: (
      <div style={{ background: '#05010D', border: '1px solid #319ce0', padding: '30px', borderRadius: '24px', width: '100%', textAlign: 'center' }}>
        <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 20px' }}>
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <motion.circle 
              cx="50" cy="50" r="45" fill="none" stroke="#319ce0" strokeWidth="8" 
              strokeDasharray="283"
              initial={{ strokeDashoffset: 283 }}
              whileInView={{ strokeDashoffset: 283 - (283 * 0.92) }}
              transition={{ duration: 2, ease: "easeOut" }}
              strokeLinecap="round"
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 800 }}>92%</div>
        </div>
        <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>Interview Readiness Score</p>
      </div>
    )
  }
];

export default function InterviewStepsSection() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const step = Math.min(Math.floor(latest * steps.length) + 1, steps.length);
    if (step !== activeStep) {
      setActiveStep(step);
    }
  });

  return (
    <section 
      ref={containerRef}
      id="interview-steps-section" 
      style={{ 
        background: '#05010D', 
        fontFamily: "'Inter', sans-serif", 
        color: '#ffffff',
        position: 'relative',
        minHeight: `${steps.length * 100}vh`
      }}
    >
      {/* Reduced intensity background for performance */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.08, pointerEvents: 'none' }}>
        <DarkVeil hueShift={20} noiseIntensity={0.03} scanlineIntensity={0.1} speed={0.1} warpAmount={0.2} resolutionScale={0.5} />
      </div>

      <div className="container" style={{ display: 'flex', position: 'relative', zIndex: 1 }}>
        
        {/* LEFT SIDE: SCROLLING CARDS */}
        <div style={{ flex: 1.2, padding: '10vh 0' }}>
          {steps.map((step) => (
            <motion.div 
              key={step.id}
              className="step-card-scroll"
              initial={{ opacity: 0.3, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-40% 0px -40% 0px" }}
              transition={{ duration: 0.6 }}
              style={{ 
                height: '80vh', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '0 40px'
              }}
            >
              <div style={{ 
                width: '100%', 
                maxWidth: '500px', 
                aspectRatio: '1 / 1',
                background: 'rgba(255, 255, 255, 0.02)', 
                backdropFilter: 'blur(20px)', 
                border: '1px solid rgba(255,255,255,0.08)', 
                borderRadius: '48px', 
                position: 'relative', 
                overflow: 'hidden', 
                boxShadow: activeStep === step.id ? '0 40px 80px rgba(0,0,0,0.6), 0 0 20px rgba(124, 58, 237, 0.1)' : '0 20px 40px rgba(0,0,0,0.4)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '40px',
                transition: 'all 0.5s ease'
              }}>
                <div style={{ position: 'absolute', top: '30px', left: '30px', width: '50px', height: '50px', background: step.color, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', boxShadow: `0 0 20px ${step.color}44` }}>
                  {step.icon}
                </div>
                <div style={{ position: 'absolute', top: '30px', right: '30px', fontSize: '14px', fontWeight: 700, opacity: 0.2 }}>
                  {step.tag}
                </div>
                
                <div style={{ width: '100%', transform: activeStep === step.id ? 'scale(1)' : 'scale(0.95)', transition: 'transform 0.5s ease' }}>
                  {step.visual}
                </div>

                {/* Decorative particles */}
                <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px', background: `radial-gradient(circle, ${step.color}22 0%, transparent 70%)`, filter: 'blur(30px)' }}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE: STICKY DETAILS */}
        <div style={{ flex: 1, height: '100vh', position: 'sticky', top: 0, display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            padding: '60px',
            background: 'rgba(15, 10, 26, 0.4)',
            backdropFilter: 'blur(30px)',
            borderRadius: '40px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            position: 'relative',
            marginLeft: '-60px', // Overlap effect
            zIndex: 10
          }}>
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeStep === step.id ? 1 : 0,
                  x: activeStep === step.id ? 0 : 20,
                  display: activeStep === step.id ? 'block' : 'none'
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div style={{ 
                  background: `${step.color}15`, 
                  color: step.color, 
                  padding: '8px 20px', 
                  borderRadius: '99px', 
                  fontSize: '14px', 
                  fontWeight: 700, 
                  width: 'fit-content', 
                  marginBottom: '30px', 
                  border: `1px solid ${step.color}33`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Clock size={16} /> {step.tag}
                </div>
                <h2 style={{ 
                  fontSize: '48px', 
                  fontWeight: 800, 
                  marginBottom: '24px', 
                  lineHeight: 1.1, 
                  letterSpacing: '-0.04em', 
                  background: 'linear-gradient(to bottom, #ffffff, #94a3b8)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}>
                  {step.title}
                </h2>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#94a3b8', 
                  lineHeight: 1.6, 
                  marginBottom: '40px'
                }}>
                  {step.desc}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'transparent',
                    border: `1px solid ${step.color}44`,
                    color: '#fff',
                    padding: '12px 24px',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer'
                  }}
                >
                  Learn More <ArrowRight size={18} color={step.color} />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
