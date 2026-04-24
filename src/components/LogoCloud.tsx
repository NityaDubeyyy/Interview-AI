"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Layers, Globe, Zap, LayoutGrid, ShieldCheck, 
  Users, Clock, Star, Plus, Sparkles, Leaf, Orbit, PenTool 
} from "lucide-react";
import styles from "@/app/page.module.css";

interface LogoItemData {
  icon: React.ReactNode;
  label: string;
}

interface LogoCloudProps {
  title?: string;
  logos?: LogoItemData[];
}

const DEFAULT_LOGOS = [
  { icon: <Globe size={22} />, label: "Mercury" },
  { icon: <Zap size={22} />, label: "Luminous" },
  { icon: <LayoutGrid size={22} />, label: "Quadratic" },
  { icon: <Layers size={22} />, label: "Hues" },
  { icon: <Sparkles size={22} />, label: "Theory" },
  { icon: <Leaf size={22} />, label: "Leafe" },
  { icon: <Orbit size={22} />, label: "Orbital" },
  { icon: <Star size={22} />, label: "Luminous" },
  { icon: <PenTool size={22} />, label: "Theo" },
];

export default function LogoCloud({ title, logos = DEFAULT_LOGOS }: LogoCloudProps) {

  return (
    <section className="container" style={{ marginTop: '1rem', paddingBottom: '5rem', position: 'relative', zIndex: 10 }}>
      {title && (
        <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.4)", marginBottom: "24px", textAlign: "center" }}>
          {title}
        </p>
      )}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={styles.logoCloudContainer}
      >
        <div className={styles.logoCloudWrapper}>
          <div className={styles.centralLogo}>
            <div className={styles.logoPulseRing} />
            <div className={styles.logoPulseRing} />
            <div className={styles.logoPulseRing} />
            <div className={styles.centralLogoInner}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
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
            {/* Repeat triple to ensure screen is always full and seamless */}
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} className={styles.logoItem}>
                {logo.icon}
                <span>{logo.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
