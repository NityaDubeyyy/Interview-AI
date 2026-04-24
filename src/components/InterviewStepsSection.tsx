"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import DarkVeil from "./DarkVeil";
import { Calendar, Bot, Zap, BarChart3, Clock, ArrowRight, ChevronLeft, ChevronRight, Edit, FileText, Mic, XCircle, CheckCircle, File } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Schedule & Connect",
    desc: "Seamlessly integrate with your calendar and automatically join scheduled meetings across all platforms, ensuring you stay connected and prepared.",
    tag: "Step 1",
    color: "var(--primary)",
    icon: <Calendar size={24} />,
    visual: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        {/* Step Number and Line */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#fbbf24',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#000',
            flexShrink: 0
          }}>
            1
          </div>
          <div style={{
            height: '2px',
            flex: 1,
            background: 'linear-gradient(90deg, #fbbf24, transparent)'
          }} />
        </div>

        {/* Meeting Card */}
        <div style={{
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          borderRadius: '0',
          padding: '20px',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '16px' }}>
            {/* Avatar */}
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              flexShrink: 0
            }}>
              JD
            </div>
            
            {/* Meeting Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: 600, 
                color: '#fff',
                marginBottom: '6px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                Meeting Has Been Scheduled
              </h3>
              <div style={{ 
                fontSize: '12px', 
                color: 'rgba(255, 255, 255, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}>
                <span>July 13, 2025</span>
                <span>10:00 am</span>
              </div>
            </div>
            
            {/* Edit Button */}
            <button style={{
              background: 'transparent',
              border: 'none',
              borderRadius: '0',
              padding: '6px 12px',
              color: '#fff',
              fontSize: '12px',
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              flexShrink: 0
            }}>
              <Edit size={12} />
              Edit
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div style={{
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          borderRadius: '0',
          padding: '20px',
          flex: 1
        }}>
          {/* Calendar Header */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <button style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              padding: '4px'
            }}>
              <ChevronLeft size={16} />
            </button>
            
            <h3 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#fff'
            }}>
              July 2025
            </h3>
            
            <button style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.4)',
              cursor: 'pointer',
              padding: '4px'
            }}>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {/* Week day headers */}
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <div key={index} style={{
                textAlign: 'center',
                fontSize: '10px',
                fontWeight: 600,
                color: 'rgba(255, 255, 255, 0.4)',
                padding: '4px 0'
              }}>
                {day}
              </div>
            ))}
            
            {/* Calendar days */}
            {["", "", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "", ""].map((day, index) => (
              <div
                key={index}
                style={{
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  color: day === '13' ? '#000' : 'rgba(255, 255, 255, 0.7)',
                  background: day === '13' ? '#fbbf24' : 'transparent',
                  borderRadius: '6px',
                  cursor: day === '13' ? 'pointer' : 'default',
                  fontWeight: day === '13' ? 600 : 400,
                  transition: 'all 0.3s ease'
                }}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "AI-Powered Note Taking",
    desc: "Our intelligent assistant captures every discussion, decision, and action item in real-time with perfect accuracy, keeping your team aligned and informed at all times.",
    tag: "Step 2",
    color: "var(--primary)",
    icon: <FileText size={24} />,
    visual: (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', gap: '8px', padding: '15px', paddingTop: '25px' }}>
        {/* Audio File */}
        <div style={{
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          borderRadius: '0',
          padding: '16px',
          position: 'relative',
          marginTop: '10px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            {/* Audio Icon */}
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              flexShrink: 0
            }}>
              <Mic size={20} />
            </div>
            
            {/* Audio Info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ 
                fontSize: '14px', 
                fontWeight: 600, 
                color: '#fff',
                marginBottom: '4px',
                lineHeight: 1.2,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <span>Volume-02-Ep-13</span>
                <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.5)' }}>.</span>
              </h3>
              <div style={{ 
                fontSize: '11px', 
                color: 'rgba(255, 255, 255, 0.6)'
              }}>
                210.43mb
              </div>
            </div>
          </div>
          
          {/* Waveform */}
          <div style={{ 
            height: '35px', 
            background: 'transparent',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            gap: '1px'
          }}>
            {[3, 8, 12, 6, 15, 10, 18, 14, 8, 20, 16, 12, 6, 14, 18, 10, 8, 12, 16, 14, 10, 6, 8, 12, 18, 14, 10, 8, 6, 12, 16, 14, 8, 10, 12, 6, 8, 14, 18, 16].map((height, index) => (
              <div key={index} style={{
                width: '1.5px',
                height: `${Math.min(height * 1.8, 32)}px`,
                background: index < 15 ? '#8B5CF6' : 'rgba(139, 92, 246, 0.3)',
                borderRadius: '1px',
                flexShrink: 0
              }} />
            ))}
          </div>
        </div>

        {/* Arrow connecting to AI Notes */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '4px 0'
        }}>
          <div style={{
            width: '2px',
            height: '20px',
            background: 'linear-gradient(180deg, #8B5CF6, transparent)'
          }} />
        </div>

        {/* AI Notes Card */}
        <div style={{
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          borderRadius: '0',
          padding: '16px',
          flex: 1,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '0'
        }}>
          {/* AI Notes Header */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            marginBottom: '12px',
            flexShrink: 0
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <FileText size={14} />
            </div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#fff'
            }}>
              AI Notes
            </h3>
          </div>

          {/* Transcript Content */}
          <div style={{
            fontSize: '11px',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: 1.5,
            flex: 1,
            overflow: 'hidden'
          }}>
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>Q2 Product Roadmap Priorities</strong><br/>
              Discussion focused on finalizing Q2 priorities. Main emphasis on user authentication improvements and mobile app performance optimization.
            </p>
            <p style={{ margin: '0 0 10px 0' }}>
              <strong>Action Items:</strong><br/>
              • Design team to prototype new auth flow by end of week<br/>
              • Engineering to audit mobile performance bottlenecks<br/>
              • Budget allocation review scheduled for next sprint
            </p>
            <p style={{ margin: '0' }}>
              <strong>Key Decisions:</strong><br/>
              Approved additional resources for mobile optimization. Deferred non-critical features to Q3.
            </p>
          </div>

          {/* Transcript Label */}
          <div style={{
            position: 'absolute',
            bottom: '8px',
            right: '8px',
            fontSize: '9px',
            color: 'rgba(255, 255, 255, 0.4)',
            fontStyle: 'italic',
            flexShrink: 0
          }}>
            Transcript
          </div>
        </div>
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
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', position: 'relative' }}>
        {/* Worst Audio Quality */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          borderRadius: '0',
          padding: '8px 16px',
          marginBottom: '10px',
          position: 'relative',
          left: '-40px'
        }}>
          <XCircle size={16} color="#EF4444" />
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>Worst Audio Quality</span>
          <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.5)', position: 'absolute', right: '-35px', top: '50%', transform: 'translateY(-50%)', fontStyle: 'italic' }}>Before</span>
        </div>

        {/* Audio File - Before */}
        <div style={{
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          borderRadius: '0',
          padding: '12px',
          width: '220px',
          marginBottom: '20px',
          position: 'relative',
          left: '-20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              flexShrink: 0
            }}>
              <File size={16} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>Volume-02-Ep-13.</h3>
              <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)' }}>210.43mb</div>
            </div>
          </div>
          <div style={{
            height: '30px',
            background: 'transparent',
            borderRadius: '0',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            gap: '1px'
          }}>
            {[3, 8, 12, 6, 15, 10, 18, 14, 8, 20, 16, 12, 6, 14, 18, 10, 8, 12, 16, 14, 10, 6, 8, 12, 18, 14, 10, 8, 6, 12, 16, 14, 8, 10, 12, 6, 8, 14, 18, 16].map((height, index) => (
              <div key={index} style={{
                width: '1.5px',
                height: `${Math.min(height * 1.5, 25)}px`,
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '1px',
                flexShrink: 0
              }} />
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div style={{
          width: '2px',
          height: '40px',
          background: 'linear-gradient(180deg, #319ce0, transparent)',
          marginBottom: '20px'
        }} />

        {/* Clear Audio Quality */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          borderRadius: '0',
          padding: '8px 16px',
          marginBottom: '10px',
          position: 'relative',
          right: '-40px'
        }}>
          <CheckCircle size={16} color="#10B981" />
          <span style={{ fontSize: '12px', fontWeight: 500, color: '#fff' }}>Clear Audio Quality</span>
          <span style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.5)', position: 'absolute', right: '-30px', top: '50%', transform: 'translateY(-50%)', fontStyle: 'italic' }}>After</span>
        </div>

        {/* Audio File - After */}
        <div style={{
          background: 'transparent',
          backdropFilter: 'none',
          border: 'none',
          borderRadius: '0',
          padding: '12px',
          width: '220px',
          position: 'relative',
          right: '-20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10B981',
              flexShrink: 0
            }}>
              <File size={16} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ fontSize: '12px', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>Volume-02-Ep-13.</h3>
              <div style={{ fontSize: '10px', color: 'rgba(255, 255, 255, 0.6)' }}>210.43mb</div>
            </div>
          </div>
          <div style={{
            height: '30px',
            background: 'transparent',
            borderRadius: '0',
            display: 'flex',
            alignItems: 'center',
            padding: '0 8px',
            gap: '1px'
          }}>
            {[3, 8, 12, 6, 15, 10, 18, 14, 8, 20, 16, 12, 6, 14, 18, 10, 8, 12, 16, 14, 10, 6, 8, 12, 18, 14, 10, 8, 6, 12, 16, 14, 8, 10, 12, 6, 8, 14, 18, 16].map((height, index) => (
              <div key={index} style={{
                width: '1.5px',
                height: `${Math.min(height * 1.5, 25)}px`,
                background: index < 20 ? '#10B981' : 'rgba(16, 185, 129, 0.3)',
                borderRadius: '1px',
                flexShrink: 0
              }} />
            ))}
          </div>
        </div>
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
        position: 'relative'
      }}
    >
      {/* Reduced intensity background for performance */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, opacity: 0.08, pointerEvents: 'none' }}>
        <DarkVeil hueShift={20} noiseIntensity={0.03} scanlineIntensity={0.1} speed={0.1} warpAmount={0.2} resolutionScale={0.5} />
      </div>

      <div className="container" style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '100px', marginBottom: '-5vh', position: 'relative', zIndex: 20 }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
            How It Works
          </h2>
        </div>
        <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
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
                background: step.id === 1 ? 'transparent' : 'rgba(255, 255, 255, 0.02)', 
                backdropFilter: step.id === 1 ? 'none' : 'blur(20px)', 
                border: step.id === 1 ? 'none' : '1px solid rgba(255,255,255,0.08)', 
                borderRadius: '48px', 
                position: 'relative', 
                overflow: 'hidden', 
                boxShadow: step.id === 1 ? 'none' : (activeStep === step.id ? '0 40px 80px rgba(0,0,0,0.6), 0 0 20px rgba(139, 92, 246, 0.1)' : '0 20px 40px rgba(0,0,0,0.4)'),
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
            position: 'relative',
            marginLeft: '-60px', // Overlap effect
            zIndex: 10
          }}>
            {/* Connector Line for right-side steps 2, 3, 4 */}
            <div style={{
              position: 'absolute',
              left: '30px',
              top: '100px',
              bottom: '100px',
              width: '1px',
              background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent)',
              zIndex: -1,
              display: activeStep > 1 ? 'block' : 'none'
            }} />
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

      </div>
    </section>
  );
}

