"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import TypewriterTitle from "@/components/TypewriterTitle";
import LoginLiquidMorph from "@/components/LoginLiquidMorph";
import InterviewStepsSection from "@/components/InterviewStepsSection";
import ScreensCandidatesSection from "@/components/ScreensCandidatesSection";
import TextHighlightSection from "@/components/TextHighlightSection";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  PlayCircle, Star, ArrowRight, Video, Phone, Mic, Settings, Bell, Inbox,
  FileText, UserCheck, Bot, LineChart, Sparkles, Quote, Plus, ArrowUp, Mail, MapPin, PhoneCall, Users, ChevronDown, Layers, Globe, LayoutGrid, Clock, Briefcase, Zap, ShieldCheck, ClipboardCheck
} from "lucide-react";
import DarkVeil from "@/components/DarkVeil";
import CircleExpandButton from "@/components/CircleExpandButton";
import Counter from "@/components/Counter";
import ElectricBorder from "@/components/ElectricBorder";

// ─── Spotlight Bento Card ────────────────────────────────────────────────────
const BENTO_TILT_MAX = 9;
const BENTO_TILT_SPRING = { stiffness: 300, damping: 28 } as const;
const BENTO_GLOW_SPRING = { stiffness: 180, damping: 22 } as const;

function BentoSpotlightCard({
  children,
  dimmed,
  onHoverStart,
  onHoverEnd,
  className,
  style,
  glowColor = 'rgba(124, 58, 237, 0.35)',
  accentColor = 'rgba(124, 58, 237, 0.12)',
  ...rest
}: {
  children: React.ReactNode;
  dimmed: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  className?: string;
  style?: React.CSSProperties;
  glowColor?: string;
  accentColor?: string;
  [key: string]: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const normX = useMotionValue(0.5);
  const normY = useMotionValue(0.5);

  const rawRotateX = useTransform(normY, [0, 1], [BENTO_TILT_MAX, -BENTO_TILT_MAX]);
  const rawRotateY = useTransform(normX, [0, 1], [-BENTO_TILT_MAX, BENTO_TILT_MAX]);

  const rotateX = useSpring(rawRotateX, BENTO_TILT_SPRING);
  const rotateY = useSpring(rawRotateY, BENTO_TILT_SPRING);
  const glowOpacity = useSpring(0, BENTO_GLOW_SPRING);

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    normX.set(nx);
    normY.set(ny);
    spotX.set(nx * 100);
    spotY.set(ny * 100);
  };

  const handleMouseEnter = () => {
    glowOpacity.set(1);
    onHoverStart();
  };

  const handleMouseLeave = () => {
    normX.set(0.5);
    normY.set(0.5);
    spotX.set(50);
    spotY.set(50);
    glowOpacity.set(0);
    onHoverEnd();
  };

  const spotGradient = useTransform(
    [spotX, spotY],
    ([x, y]: number[]) =>
      `radial-gradient(ellipse at ${x}% ${y}%, ${glowColor}, transparent 60%)`
  );

  return (
    <motion.div
      ref={cardRef}
      animate={{
        scale: dimmed ? 0.96 : 1,
        opacity: dimmed ? 0.45 : 1,
      }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformPerspective: 900,
        position: 'relative',
        overflow: 'hidden',
      }}
      {...rest}
    >
      {/* Static accent tint */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(ellipse at 20% 20%, ${accentColor}, transparent 65%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Hover spotlight glow that follows cursor */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          opacity: glowOpacity,
          background: spotGradient,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Shimmer sweep on hover */}
      <div
        aria-hidden="true"
        className="bento-shimmer"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '55%',
          transform: 'translateX(-100%) skewX(-12deg)',
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.045), transparent)',
          transition: 'transform 0.7s ease-out',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Children stacked above overlays */}
      <div style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState("Product");
  const [featureHeadingSelected, setFeatureHeadingSelected] = useState(false);
  const [selectedFeatureCard, setSelectedFeatureCard] = useState<null | { title: string; desc: string; img: string }>(null);
  const [hoveredBento, setHoveredBento] = useState<string | null>(null);

  return (
    <main>
      {/* HERO SECTION WITH NAVBAR */}
      <section className={styles.hero} style={{ position: 'relative', zIndex: 0, overflow: 'hidden' }}>
        <DarkVeil hueShift={0} noiseIntensity={0.03} scanlineIntensity={0.2} speed={0.2} warpAmount={0.3} />
        <div style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 1000, background: 'transparent', backdropFilter: 'blur(12px)' }}>
          <div className="container">
            <nav className="navbar animate-fade" style={{ background: 'transparent', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ position: 'relative', width: '24px', height: '24px', background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)', transform: 'rotate(45deg)', borderRadius: '4px' }}>
                  <div style={{ position: 'absolute', inset: '6px', background: 'white', borderRadius: '2px' }}></div>
                </div>
                <div className="brand-scene" style={{ fontWeight: 700, fontSize: '1.25rem', color: 'white', letterSpacing: '-0.02em' }}>
                  <span className="brand-word">Interview</span>
                  <span className="brand-word">AI</span>
                </div>
              </div>
              <ul className="nav-links" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', display: 'flex', gap: '2rem' }}>
                <li className="nav-link">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    Product <ChevronDown size={14} />
                  </div>
                </li>
                <li className="nav-link">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    Solutions <ChevronDown size={14} />
                  </div>
                </li>
                <li className="nav-link">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                    Resources <ChevronDown size={14} />
                  </div>
                </li>
                <li className="nav-link"><Link href="#">Pricing</Link></li>
              </ul>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <CircleExpandButton className="btn" href="/interview-builder" style={{ background: 'white', border: 'none', color: 'black', padding: '0.6rem 1.5rem', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)', cursor: 'pointer' }}>
                  Get Started
                </CircleExpandButton>
              </div>
            </nav>
          </div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <motion.div 
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.5rem 1.25rem', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}
          >
            <Globe size={16} className={styles.badgeIcon} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)' }}>Smarter Interviews, Faster Hiring</span>
          </motion.div>

          <motion.h1 
            className={`${styles.heroTitle} hero-scene`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem' }}
          >
            <span className="hero-word">Reduce</span>
            <span className="hero-word">Hiring</span>
            <span className="hero-word">Time</span>
            <div style={{ flexBasis: '100%', height: 0 }}></div>
            <span className="hero-word">With</span>
            <span className="hero-word">AI</span>
            <span className="hero-word">Interview</span>
            <span className="hero-word">Analysis</span>
          </motion.h1>
          
          <motion.p 
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '800px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}
          >
            Streamline interviews, analyse candidates with AI, and make <br /> faster, <br /> data-driven hiring decisions — all in one unified platform.
          </motion.p>

          <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '6rem' }}
          >
            <button className={styles.btnOutline} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '1rem 2.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Video size={20} /> Watch Demo
            </button>
            <button className={styles.btnPrimary} style={{ background: 'white', color: 'black', padding: '1rem 2.5rem', borderRadius: '12px', boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Sparkles size={20} /> Get AI Analysis
            </button>
          </motion.div>

          <motion.div 
            className={`${styles.visualSection} card-container`}
            onClick={(e) => e.currentTarget.classList.toggle('active')}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', position: 'relative', perspective: '2000px' }}
          >
            <div className={`image-card ${styles.dashboardFrame}`} style={{ border: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative', zIndex: 1, width: '100%', height: '600px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 30px 100px rgba(124, 58, 237, 0.15)' }}>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                src="/whatsapp-video.mp4" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEXT HIGHLIGHT SECTION */}
      <TextHighlightSection />

      {/* HOW IT WORKS / MARVELLOUS INSIGHTS SECTION */}
      <section className={styles.section} style={{ position: 'relative', overflow: 'hidden', padding: '100px 24px', zIndex: 1 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, opacity: 0.3, filter: 'sepia(1) hue-rotate(240deg) saturate(2)' }}>
          <DarkVeil hueShift={40} noiseIntensity={0.05} scanlineIntensity={0.2} speed={0.1} warpAmount={0.5} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '64px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Simple Process.<br/>Powerful Results.
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '600px', margin: '0 auto' }}>
              Get job-ready in just 4 easy steps — from choosing your role to mastering real interview scenarios. We make your preparation simple, smart, and effective.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className={styles.bentoGrid}>
            
            {/* Box 1: Wide, Top Left */}
            <BentoSpotlightCard
              className={styles.bentoWide}
              dimmed={hoveredBento !== null && hoveredBento !== 'box1'}
              onHoverStart={() => setHoveredBento('box1')}
              onHoverEnd={() => setHoveredBento(null)}
              glowColor="rgba(124, 58, 237, 0.4)"
              accentColor="rgba(124, 58, 237, 0.12)"
              style={{ background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '32px', padding: '40px', display: 'flex', flexDirection: 'column', backdropFilter: 'blur(20px)', cursor: 'default' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ borderColor: 'rgba(124, 58, 237, 0.35)', boxShadow: '0 20px 40px rgba(124, 58, 237, 0.15)' }}
            >
              {/* Subtle background glow */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(124,58,237,0.1), transparent 70%)', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}></div>
              <div style={{ flex: 1, marginBottom: '30px', position: 'relative', minHeight: '220px' }}>
                 {/* Visual Graphic */}
                 <div style={{ position: 'absolute', top: '0', left: '0', color: 'white' }}>
                    <div style={{ fontSize: '42px', fontWeight: 300, display: 'flex', alignItems: 'baseline', gap: '8px', lineHeight: 1 }}>
                       100% <span style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>.</span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '8px' }}>Personalization . Complete</div>
                 </div>
                 
                 {/* Abstract Map/Chart elements */}
                 <div style={{ position: 'absolute', right: '10%', top: '20%' }}>
                    <div style={{ width: '250px', height: '120px', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: '50%', borderTopColor: 'transparent', borderRightColor: 'transparent', transform: 'rotate(-45deg)' }}></div>
                 </div>

                 {/* Nodes */}
                 <div style={{ position: 'absolute', right: '25%', top: '10%', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '12px', fontSize: '10px', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}>Node 2</div>
                 <div style={{ position: 'absolute', right: '40%', top: '45%', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '12px', fontSize: '10px', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }}></div> Node 1
                 </div>
                 <div style={{ position: 'absolute', right: '5%', top: '55%', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '12px', fontSize: '10px', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%' }}></div> Node 3
                 </div>

                 {/* Fake UI buttons */}
                 <div style={{ display: 'flex', gap: '8px', position: 'absolute', bottom: '0', left: '0' }}>
                    <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '11px', color: '#ccc', display: 'flex', alignItems: 'center', gap: '6px' }}>
                       Parsing Profile
                    </div>
                    <div style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '20px', fontSize: '11px', color: '#fff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                       <div style={{ width: '12px', height: '12px', background: 'white', color: 'black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 'bold' }}>!</div> Extract Skills
                    </div>
                 </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Step 1: Add Resume</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, maxWidth: '350px' }}>Let our smart engine tailor your AI-coaches to your career goals and profile.</p>
              </div>
            </BentoSpotlightCard>

            {/* Box 2: Narrow, Top Right */}
            <BentoSpotlightCard
              className={styles.bentoNarrow}
              dimmed={hoveredBento !== null && hoveredBento !== 'box2'}
              onHoverStart={() => setHoveredBento('box2')}
              onHoverEnd={() => setHoveredBento(null)}
              glowColor="rgba(96, 165, 250, 0.35)"
              accentColor="rgba(96, 165, 250, 0.10)"
              style={{ background: 'linear-gradient(180deg, rgba(20,20,20,0.6) 0%, rgba(30,30,30,0.4) 100%)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '32px', padding: '40px', display: 'flex', flexDirection: 'column', backdropFilter: 'blur(20px)', cursor: 'default' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ borderColor: 'rgba(96, 165, 250, 0.35)', boxShadow: '0 20px 40px rgba(96, 165, 250, 0.12)' }}
            >
              {/* Blur glow behind the pillars */}
              <div style={{ position: 'absolute', top: '30%', left: '50%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent 70%)', transform: 'translate(-50%, -50%)', pointerEvents: 'none' }}></div>
              <div style={{ flex: 1, marginBottom: '40px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '16px', minHeight: '220px', zIndex: 1 }}>
                 {/* 3D Pillars visual */}
                 <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                    {[120, 160, 110, 130, 80, 100].map((h, i) => (
                      <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '16px', height: '6px', background: '#e0f2fe', borderRadius: '50%', marginBottom: '-3px', zIndex: 2, boxShadow: '0 0 10px rgba(255,255,255,0.8)' }}></div>
                        <div style={{ width: '16px', height: `${h}px`, background: 'linear-gradient(180deg, rgba(255,255,255,0.5), transparent)', borderRadius: '8px' }}></div>
                      </div>
                    ))}
                 </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Step 2: Define Your Role</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>Set your target role or industry we'll fine-tune every tip for that position.</p>
              </div>
            </BentoSpotlightCard>

            {/* Box 3: Narrow, Bottom Left */}
            <BentoSpotlightCard
              className={styles.bentoNarrow}
              dimmed={hoveredBento !== null && hoveredBento !== 'box3'}
              onHoverStart={() => setHoveredBento('box3')}
              onHoverEnd={() => setHoveredBento(null)}
              glowColor="rgba(52, 211, 153, 0.35)"
              accentColor="rgba(52, 211, 153, 0.10)"
              style={{ background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '32px', padding: '40px', display: 'flex', flexDirection: 'column', backdropFilter: 'blur(20px)', cursor: 'default' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ borderColor: 'rgba(52, 211, 153, 0.35)', boxShadow: '0 20px 40px rgba(52, 211, 153, 0.12)' }}
            >
              <div style={{ flex: 1, marginBottom: '30px', display: 'flex', gap: '16px', minHeight: '140px' }}>
                 <div style={{ flex: 1, background: 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent)', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.02)' }}>
                    <div style={{ width: '4px', height: '16px', background: '#fef08a', borderRadius: '2px', marginBottom: '12px' }}></div>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Real-time<br/>Feedback</p>
                    <p style={{ fontSize: '26px', color: '#fff', fontWeight: 300, lineHeight: 1 }}>Live</p>
                 </div>
                 <div style={{ flex: 1, background: 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent)', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.02)' }}>
                    <div style={{ width: '4px', height: '16px', background: '#93c5fd', borderRadius: '2px', marginBottom: '12px' }}></div>
                    <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>Adaptive<br/>Questions</p>
                    <p style={{ fontSize: '26px', color: '#fff', fontWeight: 300, lineHeight: 1 }}>Smart</p>
                 </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Step 3: Launch AI Coach</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>Practice live interviews with real-time feedback and smart follow-ups.</p>
              </div>
            </BentoSpotlightCard>

            {/* Box 4: Wide, Bottom Right */}
            <BentoSpotlightCard
              className={styles.bentoWide}
              dimmed={hoveredBento !== null && hoveredBento !== 'box4'}
              onHoverStart={() => setHoveredBento('box4')}
              onHoverEnd={() => setHoveredBento(null)}
              glowColor="rgba(251, 191, 36, 0.35)"
              accentColor="rgba(251, 191, 36, 0.10)"
              style={{ background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '32px', padding: '40px', display: 'flex', flexDirection: 'column', backdropFilter: 'blur(20px)', cursor: 'default' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ borderColor: 'rgba(251, 191, 36, 0.35)', boxShadow: '0 20px 40px rgba(251, 191, 36, 0.12)' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '40px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Step 4: Get Report</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, maxWidth: '250px' }}>Review strengths, improvement areas, and AI-suggested answers to boost performance.</p>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '8px', minHeight: '120px', position: 'relative' }}>
                {/* Visual Chart Graphic with Colors */}
                <div style={{ position: 'absolute', top: '40%', width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ position: 'absolute', top: '70%', width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                
                {[
                  {h: 40, color: 'linear-gradient(180deg, #fef08a, transparent)'},
                  {h: 80, color: 'linear-gradient(180deg, #fca5a5, transparent)'},
                  {h: 120, color: 'linear-gradient(180deg, #86efac, transparent)'},
                  {h: 60, color: 'linear-gradient(180deg, #fdba74, transparent)'},
                  {h: 90, color: 'linear-gradient(180deg, #cbd5e1, transparent)'}
                ].map((bar, i) => (
                  <div key={i} style={{ width: '40px', height: `${bar.h}px`, background: bar.color, borderRadius: '4px', position: 'relative', zIndex: 1 }}>
                     <div style={{ position: 'absolute', top: '-20px', width: '100%', textAlign: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>{(i+1)*10 + 2}</div>
                     <div style={{ position: 'absolute', bottom: '-20px', width: '100%', textAlign: 'center', fontSize: '10px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>{['Str', 'Tne', 'Pce', 'Clt', 'Rlv'][i]}</div>
                  </div>
                ))}
              </div>
            </BentoSpotlightCard>

          </div>
        </div>
      </section>

      {/* HOW INTERVIEWAI SCREENS CANDIDATES SECTION */}
      <ScreensCandidatesSection />

      {/* WHY INTERVIEW AI SECTION */}
      <section id="why-ai-section" style={{ background: '#05010D', padding: '100px 24px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '64px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '16px' }}>Why Interview AI</p>
            <h2 style={{ fontSize: '42px', fontWeight: 700, color: '#ffffff', maxWidth: '700px', margin: '0 auto 20px', lineHeight: 1.1 }}>The smarter way to land your dream job</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>Traditional interview prep is guesswork. We provide the intelligent AI systems to give you the edge.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '1200px', margin: '0 auto 80px', position: 'relative', zIndex: 10 }}>
            {/* Background connecting lines to mimic layout design */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}>
               {/* Line from Instant AI to Role-specific */}
               <path d="M 50% 25% L 54% 25% L 54% 15% L 60% 15%" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 6px rgba(124,58,237,0.6))' }} />
               {/* Line from Role-specific to Track progress */}
               <path d="M 75% 30% L 75% 45%" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 6px rgba(124,58,237,0.6))' }} />
               {/* Line from Instant AI to Smart Career Coach */}
               <path d="M 23% 65% L 23% 75%" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 6px rgba(124,58,237,0.6))' }} />
               {/* Line from Smart Career Coach to Comprehensive Reports */}
               <path d="M 35% 85% L 40% 85%" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 6px rgba(124,58,237,0.6))' }} />
               {/* Line from Track progress to Comprehensive reports */}
               <path d="M 65% 65% L 65% 75% L 55% 75%" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 6px rgba(124,58,237,0.6))' }} />
               {/* Line from Comprehensive reports to Private and secure */}
               <path d="M 65% 85% L 75% 85%" stroke="rgba(124, 58, 237, 0.4)" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 6px rgba(124,58,237,0.6))' }} />
            </svg>

            {[
              { 
                icon: <Clock size={32} color="var(--primary)" />, 
                title: "Instant AI feedback", 
                desc: "Get detailed, real-time feedback on your answers, tone, and clarity the moment you finish speaking.",
                gridCol: "1 / 3",
                gridRow: "1 / 3",
                height: "450px",
                frontContent: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 24px', gap: '20px' }}>
                    <div style={{ flex: '0 0 35%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: '16px' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Clock size={32} color="var(--primary)" />
                      </div>
                      <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', margin: 0 }}>Instant AI<br/>feedback</h3>
                    </div>
                    {/* The requested video in place of the image */}
                    <div style={{ flex: '1', height: '85%', background: '#0a0a0a', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                      <video autoPlay loop muted playsInline src="/whatsapp-video.mp4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                )
              },
              { 
                icon: <Briefcase size={32} color="var(--primary)" />, 
                title: "Role-specific questions", 
                desc: "Practice with questions tailored to your exact industry—software, finance, marketing and more.",
                gridCol: "3 / 5",
                gridRow: "1 / 2",
                height: "213px",
                frontContent: (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', padding: '0 32px', gap: '24px', position: 'relative' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Briefcase size={32} color="var(--primary)" />
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', margin: 0, textAlign: 'left' }}>Role-specific questions</h3>
                    <div style={{ position: 'absolute', right: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap', width: '100px' }}>
                      <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Bot size={16} color="var(--primary)"/></div>
                      <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><ShieldCheck size={16} color="#4ade80"/></div>
                      <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><UserCheck size={16} color="#60a5fa"/></div>
                    </div>
                  </div>
                )
              },
              { 
                icon: <Zap size={32} color="var(--primary)" />, 
                title: "Track your progress", 
                desc: "Watch your improvement with session-by-session analytics. Know exactly where you've grown.",
                gridCol: "3 / 5",
                gridRow: "2 / 3",
                height: "213px",
                frontContent: null
              },
              { 
                icon: <Bot size={32} color="var(--primary)" />, 
                title: "Smart Career Coach", 
                desc: "Your AI coach adapts to your performance, targets weak spots, and suggests high-impact practice.",
                gridCol: "1 / 2",
                gridRow: "3 / 4",
                height: "213px",
                frontContent: null
              },
              { 
                icon: <ClipboardCheck size={32} color="var(--primary)" />, 
                title: "Comprehensive reports", 
                desc: "Receive a personalised report after every session with strengths and sample better answers.",
                gridCol: "2 / 4",
                gridRow: "3 / 4",
                height: "213px",
                frontContent: null
              },
              { 
                icon: <ShieldCheck size={32} color="var(--primary)" />, 
                title: "Private and secure", 
                desc: "Your data is completely private. We never share your performance data with third parties.",
                gridCol: "4 / 5",
                gridRow: "3 / 4",
                height: "213px",
                frontContent: null
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                style={{ 
                  height: feature.height || '240px', 
                  gridColumn: feature.gridCol, 
                  gridRow: feature.gridRow,
                  perspective: '1000px' 
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <motion.div
                  style={{ 
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer'
                  }}
                  whileHover={{ rotateY: 180, scale: 1.02 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Front Side */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    background: 'var(--card-bg)',
                    borderRadius: '20px',
                    padding: feature.frontContent ? '0' : '32px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
                  }}>
                    {feature.frontContent ? feature.frontContent : (
                      <>
                        <div style={{ 
                          width: '64px', 
                          height: '64px', 
                          borderRadius: '16px', 
                          background: 'rgba(124, 58, 237, 0.1)', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center'
                        }}>
                          {feature.icon}
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', margin: 0 }}>{feature.title}</h3>
                      </>
                    )}
                  </div>

                  {/* Back Side */}
                  <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    background: 'linear-gradient(135deg, #0F0A1A 0%, #1A1033 100%)',
                    borderRadius: '20px',
                    padding: '32px',
                    border: '1px solid var(--primary)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxShadow: '0 10px 30px rgba(124, 58, 237, 0.2)'
                  }}>
                    <p style={{ fontSize: '15px', color: '#fff', lineHeight: '1.6', margin: 0, fontWeight: 500 }}>{feature.desc}</p>
                    <div style={{ marginTop: '20px', color: 'var(--primary)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Learn More
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', maxWidth: '1000px', margin: '0 auto 80px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', overflow: 'hidden' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {[
              { value: "3x", label: "Offer Rate" },
              { value: "50k+", label: "Practiced" },
              { value: "94%", label: "Confidence" },
              { value: "500+", label: "Roles" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                style={{ padding: '40px 24px', textAlign: 'center', borderRight: i === 3 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)', cursor: 'default' }}
                whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.05)', zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <p style={{ fontSize: '40px', fontWeight: 700, color: 'var(--primary)', margin: '0 0 8px' }}>
                  <Counter value={stat.value} />
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', padding: '60px 40px', borderRadius: '32px', background: 'radial-gradient(circle at top, rgba(124, 58, 237, 0.15) 0%, transparent 70%)', border: '1px solid rgba(124, 58, 237, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', margin: '0 0 16px' }}>Ready to ace your next interview?</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', margin: '0 0 32px' }}>Start your free session today. No credit card required.</p>
            <Link href="/interview-builder" style={{ display: 'inline-block', background: 'var(--primary)', color: '#fff', fontSize: '16px', fontWeight: 600, padding: '16px 40px', textDecoration: 'none', boxShadow: '0 10px 20px rgba(124, 58, 237, 0.3)', transition: 'transform 0.2s ease', borderRadius: '999px' }}>
              Start free session ↗
            </Link>
          </motion.div>
        </div>
      </section>
 
      {/* INTERACTIVE QUESTION CREATOR DASHBOARD LINK START */}
      <section className={styles.section} style={{ padding: '6rem 0', textAlign: 'center' }}>
        <motion.div className="container">
          <h2 className={styles.sectionTitle}>Build Custom Interview Scripts</h2>
          <p className={styles.sectionSubtitle} style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
            Customize your questions, set the roles, and get ready for a perfect interview experience with our Interactive Builder.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/interview-builder" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.8rem 1.5rem', borderRadius: '8px', background: 'var(--primary)', color: 'white', fontWeight: 600 }}>
              Open Interactive Builder <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
      {/* INTERACTIVE QUESTION CREATOR DASHBOARD LINK END */}

      {/* CUSTOM INTERVIEW STEPS */}
      <InterviewStepsSection />

      {/* FEATURE IMAGE MODAL */}
      {selectedFeatureCard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedFeatureCard(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
            cursor: 'zoom-out'
          }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(10, 10, 18, 0.95)',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              borderRadius: '28px',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 40px 80px -15px rgba(124,58,237,0.3), 0 0 120px rgba(124,58,237,0.12)',
              maxWidth: '900px',
              width: '100%',
              overflow: 'hidden',
              position: 'relative'
            }}
          >
            {/* Corner accent lines - like the reference image */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '32px', height: '32px', borderTop: '2px solid rgba(124,58,237,0.8)', borderLeft: '2px solid rgba(124,58,237,0.8)', borderRadius: '28px 0 0 0', zIndex: 10 }} />
            <div style={{ position: 'absolute', top: 0, right: 0, width: '32px', height: '32px', borderTop: '2px solid rgba(124,58,237,0.8)', borderRight: '2px solid rgba(124,58,237,0.8)', borderRadius: '0 28px 0 0', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '32px', height: '32px', borderBottom: '2px solid rgba(124,58,237,0.8)', borderLeft: '2px solid rgba(124,58,237,0.8)', borderRadius: '0 0 0 28px', zIndex: 10 }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '32px', height: '32px', borderBottom: '2px solid rgba(124,58,237,0.8)', borderRight: '2px solid rgba(124,58,237,0.8)', borderRadius: '0 0 28px 0', zIndex: 10 }} />

            {/* Scan line glow accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.9), rgba(167,139,250,0.7), transparent)', zIndex: 10 }} />

            {/* Image area with device mockup feel */}
            <div style={{ position: 'relative', width: '100%', height: '460px', background: '#0a0a12', overflow: 'hidden' }}>
              {/* Subtle grid overlay */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 1 }} />
              <Image
                src={selectedFeatureCard.img}
                alt={selectedFeatureCard.title}
                fill
                style={{ objectFit: 'cover', zIndex: 0 }}
              />
              {/* Bottom gradient fade */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, rgba(10,10,18,1), transparent)', zIndex: 2 }} />
            </div>

            {/* Content area below image */}
            <div style={{ padding: '28px 36px 32px', position: 'relative', zIndex: 5 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '8px' }}>Smart Tools · AI-Powered</p>
                  <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 1.2 }}>{selectedFeatureCard.title}</h3>
                  <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, maxWidth: '540px' }}>{selectedFeatureCard.desc}</p>
                </div>
                <button
                  onClick={() => setSelectedFeatureCard(null)}
                  style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}
                >
                  ✕
                </button>
              </div>
              <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>AI-Powered · Live Session Ready</span>
                <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.5px' }}>Click outside to close</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* FEATURES SECTION (DARK THEME) */}
      <section className={styles.darkSection}>
        <motion.div 
          className="container" 
          style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="section-label" style={{ color: 'var(--primary)', background: 'rgba(37, 99, 235, 0.1)', padding: '0.4rem 1rem', borderRadius: '99px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>Key Features</span>

          {/* CLICKABLE HEADING WITH LINING BOX EFFECT */}
          <motion.div
            style={{
              display: 'inline-block',
              position: 'relative',
              marginTop: '1.5rem',
              cursor: 'pointer',
              padding: '16px 28px',
              borderRadius: '16px',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setFeatureHeadingSelected(s => !s)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {/* Corner accent lines that appear on click - like the reference image */}
            <motion.div
              animate={{ opacity: featureHeadingSelected ? 1 : 0, scale: featureHeadingSelected ? 1 : 0.92 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{ pointerEvents: 'none', position: 'absolute', inset: 0, borderRadius: '16px' }}
            >
              {/* Full border glow */}
              <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', border: '1.5px solid rgba(124,58,237,0.7)', boxShadow: '0 0 18px rgba(124,58,237,0.25), inset 0 0 18px rgba(124,58,237,0.07)' }} />
              {/* Corner TL */}
              <div style={{ position: 'absolute', top: '-2px', left: '-2px', width: '18px', height: '18px', borderTop: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa', borderRadius: '16px 0 0 0' }} />
              {/* Corner TR */}
              <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '18px', height: '18px', borderTop: '3px solid #a78bfa', borderRight: '3px solid #a78bfa', borderRadius: '0 16px 0 0' }} />
              {/* Corner BL */}
              <div style={{ position: 'absolute', bottom: '-2px', left: '-2px', width: '18px', height: '18px', borderBottom: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa', borderRadius: '0 0 0 16px' }} />
              {/* Corner BR */}
              <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '18px', height: '18px', borderBottom: '3px solid #a78bfa', borderRight: '3px solid #a78bfa', borderRadius: '0 0 16px 0' }} />
              {/* Scan line shimmer */}
              <motion.div
                animate={{ x: featureHeadingSelected ? ['0%', '100%'] : '0%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                style={{ position: 'absolute', top: 0, left: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.15), transparent)', borderRadius: '16px', pointerEvents: 'none' }}
              />
            </motion.div>

            <motion.h2
              className={styles.sectionTitle}
              style={{ margin: 0, position: 'relative', zIndex: 1 }}
              animate={{ color: featureHeadingSelected ? '#c4b5fd' : '#ffffff' }}
              transition={{ duration: 0.3 }}
            >
              Smart Tools for AI-Powered Interview Practice
            </motion.h2>

            {/* Click hint */}
            <motion.span
              animate={{ opacity: featureHeadingSelected ? 0 : 0.4 }}
              style={{ position: 'absolute', right: '-8px', top: '-22px', fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', fontWeight: 500, whiteSpace: 'nowrap' }}
            >
              click to select ↗
            </motion.span>
          </motion.div>

          <motion.p 
            className={styles.sectionSubtitle} 
            style={{ maxWidth: '700px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Practice smarter, not harder — our AI-powered tools simulate real interview scenarios, give instant feedback, and help you improve with every session.
          </motion.p>

          {/* BENTO FEATURE GRID */}
          <div className={styles.featureBentoGrid}>
            {/* CARD 1: Generate scores based on pictures (TALL) */}
            <motion.div 
              className={`${styles.featureBentoCard} ${styles.featureBentoCardTall}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFeatureCard({ title: 'AI Visual Analysis', desc: 'Our AI analyzes your visual presentation and professional presence to provide scoring and feedback.', img: '/candidate-analysis.png' })}
              style={{ padding: 0 }}
            >
              <ElectricBorder borderRadius={32} chaos={0.08} speed={0.8} color="#7C3AED" style={{ height: '100%', width: '100%' }}>
                <div style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 className={styles.featureBentoCardTitle}>Generate scores based on pictures</h3>
                  <p className={styles.featureBentoCardDesc}>Rate your candidate's looks. As real as ATS scores.</p>
                  
                  <div className={styles.bentoImageGrid}>
                    <Image src="https://i.pravatar.cc/300?img=68" alt="Portrait" width={150} height={150} className={styles.bentoImage} />
                    <Image src="https://i.pravatar.cc/300?img=12" alt="Portrait" width={150} height={150} className={styles.bentoImage} />
                    <Image src="https://i.pravatar.cc/300?img=11" alt="Portrait" width={150} height={150} className={styles.bentoImage} />
                    <div style={{ position: 'relative' }}>
                      <Image src="https://i.pravatar.cc/300?img=32" alt="Portrait" width={150} height={150} className={styles.bentoImage} style={{ filter: 'grayscale(0)', border: '2px solid var(--primary)' }} />
                      <div style={{ position: 'absolute', inset: 0, border: '2px solid var(--primary)', borderRadius: '16px', pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', top: -5, left: -5, width: 10, height: 10, background: 'var(--primary)', borderRadius: '2px' }} />
                        <div style={{ position: 'absolute', top: -5, right: -5, width: 10, height: 10, background: 'var(--primary)', borderRadius: '2px' }} />
                        <div style={{ position: 'absolute', bottom: -5, left: -5, width: 10, height: 10, background: 'var(--primary)', borderRadius: '2px' }} />
                        <div style={{ position: 'absolute', bottom: -5, right: -5, width: 10, height: 10, background: 'var(--primary)', borderRadius: '2px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>

            {/* CARD 2: Track progress (WIDE TOP) */}
            <motion.div 
              className={styles.featureBentoCard}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onClick={() => setSelectedFeatureCard({ title: 'Pipeline Tracker', desc: 'Monitor every stage of your interview journey with our automated progress tracker.', img: '/prep-engine.png' })}
              style={{ padding: 0 }}
            >
              <ElectricBorder borderRadius={32} chaos={0.08} speed={0.8} color="#7C3AED" style={{ height: '100%', width: '100%' }}>
                <div style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 className={styles.featureBentoCardTitle}>Track progress</h3>
                  <p className={styles.featureBentoCardDesc}>Track every step of the candidate's journey, from initial application to rejected appraisal.</p>
                  
                  <div className={styles.bentoProgressContainer}>
                    <div className={styles.bentoProgressDots}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                        <div key={i} className={`${styles.bentoDot} ${i <= 3 ? styles.bentoDotActive : ''}`} />
                      ))}
                    </div>
                    <div style={{ position: 'relative', height: '100px' }}>
                      <div className={`${styles.bentoProgressStep} ${styles.bentoProgressStepActive}`} style={{ position: 'absolute', top: 0, left: '20%' }}>
                        Application Submitted
                      </div>
                      <div style={{ position: 'absolute', top: '35px', left: '25%', fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>Manu</div>
                      <div className={styles.bentoProgressStep} style={{ position: 'absolute', bottom: 0, right: '10%', borderColor: 'rgba(255,255,255,0.2)' }}>
                        Interview started
                      </div>
                    </div>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>

            {/* CARD 4: Easy upload resumes (TALL RIGHT) */}
            <motion.div 
              className={`${styles.featureBentoCard} ${styles.featureBentoCardTall}`}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onClick={() => setSelectedFeatureCard({ title: 'Smart Resume Upload', desc: 'Our AI parses resumes instantly to extract key skills and experiences for tailored practice.', img: '/career-vault.png' })}
              style={{ padding: 0 }}
            >
              <ElectricBorder borderRadius={32} chaos={0.08} speed={0.8} color="#7C3AED" style={{ height: '100%', width: '100%' }}>
                <div style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 className={styles.featureBentoCardTitle}>Easy upload resumes manually</h3>
                  <p className={styles.featureBentoCardDesc}>One click OR drag and drop candidate's resumes.</p>
                  
                  <div className={styles.bentoUploadArea}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ArrowUp size={24} />
                    </div>
                    <span style={{ fontSize: '0.9rem' }}>Upload Resume</span>
                  </div>
                  
                  {/* Background grid pattern for the right card as seen in image */}
                  <div style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: 0.1, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                </div>
              </ElectricBorder>
            </motion.div>

            {/* CARD 3: Schedule interviews (SMALL MIDDLE BOTTOM) */}
            <motion.div 
              className={styles.featureBentoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onClick={() => setSelectedFeatureCard({ title: 'Seamless Scheduling', desc: 'Sync your calendar and automate interview coordination without the back-and-forth.', img: '/mock-interview.png' })}
              style={{ padding: 0 }}
            >
              <ElectricBorder borderRadius={32} chaos={0.08} speed={0.8} color="#7C3AED" style={{ height: '100%', width: '100%' }}>
                <div style={{ padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <h3 className={styles.featureBentoCardTitle}>Schedule interviews seamlessly</h3>
                  <p className={styles.featureBentoCardDesc}>Ask about DSA or Dev, we don't care.</p>
                  
                  <div className={styles.bentoImageSmallRow}>
                    <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200" alt="Meeting" width={100} height={100} className={styles.bentoImageSmall} />
                    <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200&h=200" alt="Collaboration" width={100} height={100} className={styles.bentoImageSmall} />
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* BLOG INSIGHTS */}
      <section className={styles.section}>
        <motion.div className="container" style={{ textAlign: 'center' }}>
          <h2 className={styles.sectionTitle}>Dive Into Our Top Career Insights</h2>
          <p className={styles.sectionSubtitle}>
            Explore expert guides and actionable tips to help you prepare smarter, interview confidently, and land your dream job faster.
          </p>

          <div className={styles.blogContainer}>
            {/* MAIN CARD */}
            <motion.div 
              className={`${styles.blogCard} ${styles.blogCardMain}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className={styles.blogImageWrapper}>
                <Image src="/candidate-analysis.png" alt="AI Interview Prep" fill className={styles.blogImage} />
              </div>
              <div className={styles.blogCardContent}>
                <span className={styles.blogTag}>Interview Prep</span>
                <h3 className={styles.blogCardTitle}>Mastering AI-Powered Mock Interviews for Real Results</h3>
                <p className={styles.blogCardDesc}>
                  Discover how simulated interviews with instant AI feedback can transform your confidence, 
                  highlight your strengths, and prepare you for real hiring challenges.
                </p>
                <div className={styles.blogCardFooter}>
                  <div className={styles.blogReadTime}>
                    <Clock size={16} /> 8 Min Read
                  </div>
                  <div className={styles.blogArrow}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SMALL CARD 1 */}
            <motion.div 
              className={`${styles.blogCard} ${styles.blogCardSmall}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={styles.blogImageWrapper}>
                <Image src="/career-vault.png" alt="Success Methods" fill className={styles.blogImage} />
              </div>
              <div className={styles.blogCardContent}>
                <span className={styles.blogTag}>Career Growth</span>
                <h3 className={styles.blogCardTitle}>Methods for Interview Success</h3>
                <div className={styles.blogCardFooter}>
                  <div className={styles.blogReadTime}>
                    <Clock size={16} /> 5 Min Read
                  </div>
                  <div className={styles.blogArrow}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SMALL CARD 2 */}
            <motion.div 
              className={`${styles.blogCard} ${styles.blogCardSmall}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.blogImageWrapper}>
                <Image src="/career-coach.png" alt="Feedback Loop" fill className={styles.blogImage} />
              </div>
              <div className={styles.blogCardContent}>
                <span className={styles.blogTag}>Soft Skills</span>
                <h3 className={styles.blogCardTitle}>Turning Feedback into Growth</h3>
                <div className={styles.blogCardFooter}>
                  <div className={styles.blogReadTime}>
                    <Clock size={16} /> 6 Min Read
                  </div>
                  <div className={styles.blogArrow}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SMALL CARD 3 */}
            <motion.div 
              className={`${styles.blogCard} ${styles.blogCardSmall}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className={styles.blogImageWrapper}>
                <Image src="/prep-engine.png" alt="Anxiety Management" fill className={styles.blogImage} />
              </div>
              <div className={styles.blogCardContent}>
                <span className={styles.blogTag}>Wellness</span>
                <h3 className={styles.blogCardTitle}>Overcoming Interview Anxiety</h3>
                <div className={styles.blogCardFooter}>
                  <div className={styles.blogReadTime}>
                    <Clock size={16} /> 7 Min Read
                  </div>
                  <div className={styles.blogArrow}>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA CARD */}
            <motion.a 
              href="/blog"
              className={`${styles.blogCard} ${styles.blogCardCTA}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className={styles.blogTag}>Explore More</span>
              <h3 className={styles.blogCardTitle} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Want more expert career advice?
              </h3>
              <div className="btn btn-primary" style={{ background: 'white', color: 'var(--primary)', border: 'none' }}>
                See All Insights <ArrowRight size={20} />
              </div>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.testimonialsHeader}>
            <h2 className={styles.sectionTitle}>What Our Users Say</h2>
            <p className={styles.sectionSubtitle}>
              Real stories from professionals who boosted their confidence and landed their dream jobs.
            </p>
          </div>

          {/* TESTIMONIALS CAROUSEL */}
          <div style={{ position: 'relative', overflow: 'hidden', padding: '3rem 0 4rem 0', perspective: '1200px' }}>
            <motion.div 
              className={styles.testimonialContainer} 
              style={{
                display: 'flex',
                gap: '2.5rem',
                transformStyle: 'preserve-3d'
              }}
              animate={{
                translateX: `calc(-${currentTestimonial * (350 + 40)}px)`
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                mass: 1
              }}
            >
              {[
                {
                  name: "David Tui", role: "Marketing Manager, HubSync",
                  text: "This refined my responses and boosted my interview confidence to the next level.",
                  icon: <UserCheck size={24} color="var(--primary)" />, bg: '#e2e8f0'
                },
                {
                  name: "Sarah Mitchell", role: "Software Engineer, Anydesk",
                  text: "This platform trained me to deliver structured, confident interview answers.",
                  icon: <Users size={24} color="var(--primary)" />, bg: '#cbd5e1'
                },
                {
                  name: "Priya Sharma", role: "Product Designer, Designdot",
                  text: "With this platform, I learned confidence, professional storytelling, and poise.",
                  icon: <Bot size={24} color="var(--primary)" />, bg: '#94a3b8'
                },
                {
                  name: "Michael Chang", role: "Data Scientist, TechFlow",
                  text: "The technical mock interviews felt just like the real thing. Highly recommended!",
                  icon: <LineChart size={24} color="var(--primary)" />, bg: '#e2e8f0'
                },
                {
                  name: "Jessica Rivera", role: "HR Specialist, PeopleFirst",
                  text: "As an HR professional, I can honestly say the feedback the AI gives is spot on.",
                  icon: <FileText size={24} color="var(--primary)" />, bg: '#cbd5e1'
                },
                {
                  name: "Ahmed Ousman", role: "Recent Graduate",
                  text: "I landed my first job after practicing here for just two weeks. It's a lifesaver.",
                  icon: <Sparkles size={24} color="var(--primary)" />, bg: '#94a3b8'
                },
                {
                  name: "Emma Watson", role: "Product Manager, StartupInc",
                  text: "The detailed analytics helped me pinpoint exactly what behavioral questions I was failing.",
                  icon: <LineChart size={24} color="var(--primary)" />, bg: '#e2e8f0'
                },
                {
                  name: "James Lee", role: "Frontend Developer, WebCorp",
                  text: "I used the specific React role prep and the questions were incredibly accurate to my real onsite.",
                  icon: <FileText size={24} color="var(--primary)" />, bg: '#cbd5e1'
                },
                {
                  name: "Olivia Chen", role: "UX Designer, Creatives",
                  text: "I loved that the AI understood context and challenged my design storytelling directly.",
                  icon: <Bot size={24} color="var(--primary)" />, bg: '#94a3b8'
                },
                {
                  name: "Marcus Johnson", role: "Sales Executive, CloudNet",
                  text: "Practicing the objection handling scenarios gave me the edge I needed. Phenomenal tool.",
                  icon: <UserCheck size={24} color="var(--primary)" />, bg: '#e2e8f0'
                }
              ].map((t, idx) => {
                const isActive = currentTestimonial === idx;
                return (
                  <motion.div 
                    className={styles.testimonialCard} 
                    key={idx} 
                    style={{ 
                      width: '350px', 
                      minWidth: '350px', 
                      flexShrink: 0, 
                      flexGrow: 0,
                      cursor: 'pointer',
                      position: 'relative',
                      transformStyle: 'preserve-3d',
                      zIndex: isActive ? 50 : 1,
                      backgroundColor: isActive ? 'rgba(24, 24, 27, 0.95)' : 'rgba(24, 24, 27, 0.7)',
                      borderColor: isActive ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)',
                      boxShadow: isActive 
                        ? '0 40px 80px -15px rgba(37, 99, 235, 0.5), 0 20px 40px -20px rgba(0, 0, 0, 0.4)' 
                        : '0 10px 20px -10px rgba(0, 0, 0, 0.5)'
                    }}
                    animate={isActive ? {
                      scale: 1.15,
                      z: 80,
                      rotateX: 5,
                      rotateY: currentTestimonial > idx ? -10 : (currentTestimonial < idx ? 10 : 0),
                      y: [0, -10, 0], // Floating loop
                    } : {
                      scale: 0.9,
                      z: 0,
                      rotateX: 0,
                      rotateY: 0,
                      y: 0,
                      opacity: 0.6,
                      filter: 'blur(1px)'
                    }}
                    transition={isActive ? {
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      default: {
                        type: "spring",
                        stiffness: 150,
                        damping: 20
                      }
                    } : {
                      type: "spring",
                      stiffness: 100,
                      damping: 25
                    }}
                    whileHover={{ 
                      scale: isActive ? 1.2 : 1.1,
                      z: isActive ? 120 : 50,
                      rotateY: isActive ? 5 : (currentTestimonial > idx ? -15 : 15),
                      opacity: 1,
                      filter: 'blur(0px)',
                      boxShadow: "0 40px 80px -15px rgba(37, 99, 235, 0.45)"
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      z: 10
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    onClick={() => {
                      setCurrentTestimonial(idx);
                    }}
                  >
                    <div className={styles.testimonialAvatar} style={{ 
                      background: t.bg, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      padding: 0, 
                      overflow: 'hidden',
                      transform: 'translateZ(20px)', // Lift avatar even more
                      boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                    }}>
                      <img src={`https://i.pravatar.cc/150?img=${10 + idx}`} alt={t.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                    </div>
                    <Quote className={styles.quoteIcon} style={{ transform: 'translateZ(30px)' }} />
                    <p className={styles.testimonialText} style={{ transform: 'translateZ(15px)' }}>&quot;{t.text}&quot;</p>
                    <div style={{ borderLeft: '3px solid var(--primary)', paddingLeft: '1rem', transform: 'translateZ(10px)' }}>
                      <div className={styles.testimonialAuthor}>{t.name}</div>
                      <div className={styles.testimonialRole}>{t.role}</div>
                    </div>
                    
                    {/* Glow effect for active card */}
                    {isActive && (
                      <motion.div 
                        layoutId="active-glow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.15, 0.35, 0.15] }}
                        transition={{ 
                          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                          layout: { type: "spring", stiffness: 300, damping: 30 }
                        }}
                        style={{ 
                          position: 'absolute', 
                          inset: '-20px', 
                          background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                          zIndex: -1,
                          borderRadius: '30px'
                        }}
                      />
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '3rem' }}>
            <button
              onClick={() => setCurrentTestimonial(Math.max(0, currentTestimonial - 1))}
              disabled={currentTestimonial === 0}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: currentTestimonial === 0 ? 'var(--bg)' : '#27272a',
                border: `1px solid ${currentTestimonial === 0 ? 'var(--border)' : 'var(--primary)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: currentTestimonial === 0 ? 'var(--text-muted)' : '#ffffff',
                cursor: currentTestimonial === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s'
              }}>
              <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <button
              onClick={() => setCurrentTestimonial(Math.min(9, currentTestimonial + 1))}
              disabled={currentTestimonial === 9}
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: currentTestimonial === 9 ? 'var(--bg)' : '#27272a',
                border: `1px solid ${currentTestimonial === 9 ? 'var(--border)' : 'var(--primary)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: currentTestimonial === 9 ? 'var(--text-muted)' : '#ffffff',
                cursor: currentTestimonial === 9 ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s'
              }}>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.faqSection} style={{ position: 'relative' }}>
        <div className={styles.faqHeader} style={{ position: 'relative', zIndex: 1, marginBottom: '2rem' }}>
          <span className={styles.faqLabel}>FAQ</span>
          <h2 className={styles.faqTitle}>Everything You Need to Know</h2>
          <p className={styles.faqSubtitle}>Learn how Interview AI helps you prepare smarter.</p>
        </div>

        {/* Tabbed Category Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '4rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', position: 'relative', zIndex: 10 }}>
          {[
            { id: "Product", icon: <LayoutGrid size={20} /> },
            { id: "Support", icon: <PhoneCall size={20} /> },
            { id: "Pricing", icon: <Briefcase size={20} /> }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFaqCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1.5rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: activeFaqCategory === cat.id ? 'var(--primary)' : 'var(--text-muted)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {cat.icon}
              {cat.id}
              {activeFaqCategory === cat.id && (
                <motion.div
                  layoutId="faq-active-tab"
                  style={{
                    position: 'absolute',
                    bottom: '-1rem',
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: 'var(--primary)',
                    boxShadow: '0 0 15px var(--primary)'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        <div className={styles.faqList}>
          {[
            { category: "Product", q: "How is Interview AI different from a normal mock interview?", a: "Unlike traditional mock interviews, Interview AI uses AI to simulate real interviewer behavior — asking follow-ups, evaluating your tone, and giving instant, structured feedback." },
            { category: "Support", q: "Is my data and recording private?", a: "Yes, all your data and interview recordings are completely private and encrypted. We do not share your information with third parties without your consent." },
            { category: "Pricing", q: "Can I practice for free?", a: "We offer a generous free tier that includes a set number of basic mock interviews per month. Premium features are available through our subscription plans." },
            { category: "Product", q: "What kind of jobs can I prepare for?", a: "You can prepare for almost any role! Our system supports software engineering, product management, marketing, sales, HR, and custom roles based on the job description you provide." },
            { category: "Product", q: "How accurate is the feedback?", a: "Our AI is trained on thousands of successful real-world interviews. It provides highly accurate and actionable feedback based on industry standards and best practices." },
            { category: "Support", q: "How can I contact technical support?", a: "Our support team is available 24/7 via the dashboard chat or at support@interviewai.dev for technical issues." },
            { category: "Pricing", q: "What's included in the Pro plan?", a: "The Pro plan includes unlimited mock interviews, advanced behavioral analytics, role-specific question sets, and high-definition video reviews." },
            { category: "Product", q: "Can I watch my previous sessions?", a: "Yes! Every session is recorded and saved to your dashboard where you can review both the video and the AI-generated timeline of your performance." }
          ].filter(faq => faq.category === activeFaqCategory).map((faq, i) => (
            <motion.details 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={styles.faqItem} 
              key={`${activeFaqCategory}-${i}`}
            >
              <summary className={styles.faqSummary}>
                {faq.q}
                <Plus className={styles.faqIcon} size={20} />
              </summary>
              <p className={styles.faqAnswer}>{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaWrapper}>
        <div className="container">
          <div className={styles.ctaBox} style={{ position: 'relative', overflow: 'hidden' }}>
            <div className={styles.ctaContent} style={{ position: 'relative', zIndex: 1 }}>
              <h2 className={styles.ctaTitle}>Unlock Your Dream Role - One Session Away</h2>
              <p className={styles.ctaSubtitle}>Join Interview AI powered interview simulator and step into your next opportunity with confidence.</p>
              <CircleExpandButton href="/interview-builder" className="btn" expandColor="#ffffff" style={{ background: 'white', color: 'black', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '12px', fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Get Started Now <ArrowRight size={20} />
              </CircleExpandButton>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerGrid}>
            <div>
              <div className={styles.footerBrand}>
                <Layers size={32} color="var(--primary)" />
                Interview AI
              </div>
              <div className={styles.footerContact}>
                <div className={styles.footerContactItem}>
                  <MapPin size={18} color="var(--primary)" />
                  <span>1800, Walt Disney World, Bay Lake,<br />Orlando, United State</span>
                </div>
                <div className={styles.footerContactItem}>
                  <Mail size={18} color="var(--primary)" />
                  <span>support@interviewai.com</span>
                </div>
                <div className={styles.footerContactItem}>
                  <PhoneCall size={18} color="var(--primary)" />
                  <span>+1 (786) 259 4652</span>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.footerColTitle}>Company</div>
              <div className={styles.footerLinks}>
                <Link href="/contact">Contact Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Sign in / Sign Up</Link>
              </div>
            </div>

            <div>
              <div className={styles.footerColTitle}>Quick Navigation</div>
              <div className={styles.footerLinks}>
                <Link href="/">Home</Link>
                <Link href="/practice-interview">Career Preparation</Link>
                <Link href="#">Learn & Grow</Link>
              </div>
            </div>

            <div>
              <div className={styles.footerColTitle}>Tools</div>
              <div className={styles.footerLinks}>
                <a href="#">Career Vault</a>
                <a href="#">The Prep Engine</a>
                <a href="#">Mock Interview</a>
                <a href="#">Smart Career Coach</a>
                <a href="#">Question Hub</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div>© 2026 InterviewAI. All rights reserved.</div>
            <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Back to the top <ArrowUp size={16} />
            </div>
          </div>
        </div>

        <div className={styles.footerGiantText}>
          Interview AI
        </div>
      </footer>

    </main>
  );
}
