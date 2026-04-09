"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import TypewriterTitle from "@/components/TypewriterTitle";
import LoginLiquidMorph from "@/components/LoginLiquidMorph";
import InterviewStepsSection from "@/components/InterviewStepsSection";
import ScreensCandidatesSection from "@/components/ScreensCandidatesSection";
import RecruitingFeaturesSection from "@/components/RecruitingFeaturesSection";
import StatsSection from "@/components/StatsSection";
import Navbar from "@/components/Navbar";
import TextHighlightSection from "@/components/TextHighlightSection";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import {
  PlayCircle, Star, ArrowRight, Video, Phone, Mic, Settings, Bell, Inbox,
  FileText, UserCheck, Bot, LineChart, Sparkles, Quote, Plus, ArrowUp, Mail, MapPin, PhoneCall, Users, ChevronDown, Layers, Globe, LayoutGrid, Clock, Briefcase, Zap, ShieldCheck, ClipboardCheck, ArrowUpRight, ChevronRight
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
  glowColor = 'rgba(139, 92, 246, 0.35)',
  accentColor = 'rgba(139, 92, 246, 0.12)',
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
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <main>
      <Navbar />
      {/* HERO SECTION WITH NAVBAR */}
      <section className={styles.hero} style={{ position: 'relative', zIndex: 0, overflow: 'hidden' }}>
        <DarkVeil hueShift={0} noiseIntensity={0.03} scanlineIntensity={0.2} speed={0.2} warpAmount={0.3} />
        <div className={`container ${styles.heroContent}`} style={{ position: 'relative', zIndex: 10, marginTop: '5rem' }}>
          <motion.div 
            className={styles.heroBadge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '0.5rem 1.25rem', borderRadius: '99px', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}
          >
            <Globe size={16} className={styles.badgeIcon} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)' }}>Smarter Interviews, Faster Hiring</span>
          </motion.div>

          <motion.h1 
            className={`${styles.heroTitle} hero-scene`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem' }}
          >
            <span className="hero-word">Reduce</span>
            <span className="hero-word">Hiring</span>
            <span className="hero-word">Time</span>
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
            style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.6 }}
          >
            Streamline interviews, analyse candidates with AI, and make faster, <br /> data-driven hiring decisions — all in one unified platform.
          </motion.p>

          <motion.div 
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '4rem' }}
          >
            <button className={styles.btnPrimary} style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', color: 'white', padding: '0.85rem 2rem', borderRadius: '999px', boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3)', display: 'flex', alignItems: 'center', gap: '0.6rem', border: 'none', fontWeight: 600, fontSize: '0.95rem' }}>
              Start a project <ArrowUpRight size={18} />
            </button>
            <button className={styles.btnOutline} style={{ background: 'rgba(10, 10, 18, 0.8)', border: '1px solid rgba(255, 255, 255, 0.15)', color: 'white', padding: '0.85rem 2rem', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '0.6rem', fontWeight: 500, fontSize: '0.95rem' }}>
              Explore work
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
            <div className={`image-card ${styles.dashboardFrame}`} style={{ border: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative', zIndex: 1, width: '100%', height: '600px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 30px 100px rgba(139, 92, 246, 0.15)' }}>
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

        {/* LOGO CLOUD SECTION */}
        <div className="container" style={{ marginTop: '0.5rem', paddingBottom: '0rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.logoCloudContainer}
          >
            <div className={styles.logoCloudWrapper}>
              <div className={styles.centralLogo}>
                <div className={styles.logoPulseRing} />
                <div className={styles.logoPulseRing} />
                <div className={styles.logoPulseRing} />
                <div className={styles.centralLogoInner}>
                  {/* Custom Dot Pattern Icon matching the image */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="8" cy="8" r="2" />
                    <circle cx="12" cy="8" r="2" />
                    <circle cx="16" cy="8" r="2" />
                    <circle cx="4" cy="12" r="2" />
                    <circle cx="8" cy="12" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="16" cy="12" r="2" />
                    <circle cx="20" cy="12" r="2" />
                    <circle cx="8" cy="16" r="2" />
                    <circle cx="12" cy="16" r="2" />
                    <circle cx="16" cy="16" r="2" />
                    <circle cx="12" cy="20" r="2" />
                  </svg>
                </div>
              </div>
              
              <div className={styles.logoCloud}>
                {/* First Set of Logos */}
                <div className={styles.logoItem}><Layers size={22} /><span>Leafe</span></div>
                <div className={styles.logoItem}><Globe size={22} /><span>Merc</span></div>
                <div className={styles.logoItem}><Zap size={22} /><span>luminous</span></div>
                <div className={styles.logoItem}><LayoutGrid size={22} /><span>hue</span></div>
                <div className={styles.logoItem}><ShieldCheck size={22} /><span>Safe</span></div>
                <div className={styles.logoItem}><Users size={22} /><span>Collaborate</span></div>
                <div className={styles.logoItem}><Clock size={22} /><span>FastTrack</span></div>
                <div className={styles.logoItem}><Star size={22} /><span>Nexus</span></div>
                <div className={styles.logoItem}><Plus size={22} /><span>Orbit</span></div>
                <div className={styles.logoItem}><Sparkles size={22} /><span>Pulse</span></div>

                {/* Second Set for Seamless Loop */}
                <div className={styles.logoItem}><Layers size={22} /><span>Leafe</span></div>
                <div className={styles.logoItem}><Globe size={22} /><span>Merc</span></div>
                <div className={styles.logoItem}><Zap size={22} /><span>luminous</span></div>
                <div className={styles.logoItem}><LayoutGrid size={22} /><span>hue</span></div>
                <div className={styles.logoItem}><ShieldCheck size={22} /><span>Safe</span></div>
                <div className={styles.logoItem}><Users size={22} /><span>Collaborate</span></div>
                <div className={styles.logoItem}><Clock size={22} /><span>FastTrack</span></div>
                <div className={styles.logoItem}><Star size={22} /><span>Nexus</span></div>
                <div className={styles.logoItem}><Plus size={22} /><span>Orbit</span></div>
                <div className={styles.logoItem}><Sparkles size={22} /><span>Pulse</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TEXT HIGHLIGHT SECTION */}
      <TextHighlightSection />

      {/* HOW INTERVIEWAI SCREENS CANDIDATES SECTION */}
      <ScreensCandidatesSection />

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
              glowColor="rgba(139, 92, 246, 0.4)"
              accentColor="rgba(139, 92, 246, 0.12)"
              style={{ background: 'rgba(20, 20, 20, 0.6)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '32px', padding: '40px', display: 'flex', flexDirection: 'column', backdropFilter: 'blur(20px)', cursor: 'default' }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ borderColor: 'rgba(139, 92, 246, 0.35)', boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)' }}
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



      {/* RECRUITING FEATURES (FROM IMAGES) */}
      <RecruitingFeaturesSection />

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
              border: '1px solid rgba(139, 92, 246, 0.4)',
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


      {/* STATS SECTION (TAILARK IN NUMBERS) */}
      <StatsSection />

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

      {/* PRICING SECTION */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.pricingHeader}>
            <span className={styles.pricingLabel}>Simple Pricing</span>
            <h2 className={styles.pricingTitle}>Choose Your Perfect Plan</h2>
            <p className={styles.pricingSubtitle}>
              Transform your project with our comprehensive pricing options designed for every need.
            </p>
          </div>

          <div className={styles.pricingToggle}>
            <button 
              className={styles.pricingToggleButton}
              onClick={() => setBillingCycle('monthly')}
              style={{
                background: billingCycle === 'monthly' ? '#111' : 'transparent',
                color: billingCycle === 'monthly' ? '#fff' : 'rgba(255,255,255,0.5)',
                boxShadow: billingCycle === 'monthly' ? '0 4px 12px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              Monthly
            </button>
            <button 
              className={styles.pricingToggleButton}
              onClick={() => setBillingCycle('yearly')}
              style={{
                background: billingCycle === 'yearly' ? '#111' : 'transparent',
                color: billingCycle === 'yearly' ? '#fff' : 'rgba(255,255,255,0.5)',
                boxShadow: billingCycle === 'yearly' ? '0 4px 12px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              Yearly <span className={styles.saveBadge}>Save 17%</span>
            </button>
          </div>

          <div className={styles.pricingGrid}>
            {/* Starter Plan */}
            <motion.div 
              className={styles.pricingCard}
              whileHover={{ y: -12 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>Starter</h3>
                <div className={styles.planIcon}><Layers size={20} /></div>
              </div>
              <p className={styles.planDesc}>For developers testing out Interview AI locally.</p>
              <div className={styles.planPrice}>
                <span className={styles.priceAmount}>$0</span>
                <span className={styles.pricePeriod}>{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
              </div>
              <button className={`${styles.planBtn} ${styles.planBtnStarter}`}>Start today for free</button>
              <span className={styles.featureLabel}>Included Features:</span>
              <ul className={`${styles.featureList} ${styles.featureListFull}`}>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Presence</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Comments</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Notifications</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Text Editor</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Sync Datastore</li>
              </ul>
            </motion.div>

            {/* Essential Automation Plan */}
            <motion.div 
              className={styles.pricingCard}
              whileHover={{ y: -12 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>Essential Automation</h3>
                <div className={styles.planIcon}><Star size={20} /></div>
              </div>
              <p className={styles.planDesc}>Everything you need to automate simple work.</p>
              <div className={styles.planPrice}>
                <span className={styles.priceAmount}>{billingCycle === 'monthly' ? '$499' : '$4,990'}</span>
                <span className={styles.pricePeriod}>{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
              </div>
              <button className={`${styles.planBtn} ${styles.planBtnConsultation}`}>Schedule a Consultation</button>
              <span className={styles.featureLabel}>Included Features:</span>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> 1-2 basic automations</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Integration with 1 tool</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Basic chatbot or light</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Workflow testing</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Email support</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> 1 revision</li>
              </ul>
            </motion.div>

            {/* Advanced AI Build Plan */}
            <motion.div 
              className={`${styles.pricingCard} ${styles.pricingCardFeatured}`}
              whileHover={{ y: -12 }}
            >
              <div className={styles.popularBadge}>Most popular</div>
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>Advanced AI Build</h3>
                <div className={styles.planIcon}><Briefcase size={20} /></div>
              </div>
              <p className={styles.planDesc}>Built for teams needing powerful, scalable AI automation.</p>
              <div className={styles.planPrice}>
                <span className={styles.priceAmount}>{billingCycle === 'monthly' ? '$1,500' : '$15,000'}</span>
                <span className={styles.pricePeriod}>{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
              </div>
              <button className={`${styles.planBtn} ${styles.planBtnConsultation}`} style={{ borderImage: 'linear-gradient(to right, #8B5CF6, #EC4899) 1' }}>Book a Consultation</button>
              <span className={styles.featureLabel}>Included Features:</span>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Custom AI agent</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Full testing + optimization</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Multi-tool integrations</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Documentation</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Automated workflows</li>
                <li className={styles.featureItem}><ChevronRight className={styles.checkIcon} size={14} /> Two revisions</li>
              </ul>
            </motion.div>
          </div>

          <div className={styles.pricingBottomGrid}>
            <div className={styles.supplementaryBox}>
              <div>
                <h4 className={styles.suppTitle}>Ongoing Support & Optimization</h4>
                <p className={styles.suppDesc}>Small updates, tweaks, bug fixes, and light monitoring.</p>
              </div>
              <div className={styles.suppPrice}>
                {billingCycle === 'monthly' ? '$199' : '$1,990'} <span className={styles.suppPricePeriod}>{billingCycle === 'monthly' ? '/mo' : '/yr'}</span>
              </div>
            </div>

            <div className={`${styles.supplementaryBox} ${styles.consultantBox}`}>
              <h4 className={styles.suppTitle}>Not Sure Which Plan is Right for You?</h4>
              <button className={styles.consultantBtn}>Talk to an AI Consultant</button>
            </div>
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
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaBadge}>
                <div className={styles.ctaBadgeDot} />
                AI-Powered Interview Simulator
              </div>
              <h2 className={styles.ctaTitle}>
                Unlock Your <span className={styles.ctaTitleHighlight}>Dream Role</span> — One Session Away
              </h2>
              <p className={styles.ctaSubtitle}>
                Join Interview AI powered interview simulator and step into your next opportunity with confidence.
              </p>
            </div>
            <div className={styles.ctaButtonWrapper}>
              <Link href="/interview-builder" className={styles.ctaBtn}>
                Get Started Now <ArrowRight size={20} />
              </Link>
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

