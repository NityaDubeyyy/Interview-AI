"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./RecruitingFeaturesSection.module.css";
import { ArrowRight, CheckCircle2, Sparkles, Shield, UserCheck, Zap, Layers } from "lucide-react";

export default function RecruitingFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const handleCardClick = (name: string) => {
    setActiveFeature(activeFeature === name ? null : name);
  };

  return (
    <section className={styles.section_recruiting_features}>
      <div className={`${styles.padding_global} ${styles.padding_section_medium}`}>
        <div className={styles.container_default}>
          {/* Feature 1 */}
          <div className={styles.home1_feature_grid}>
            <motion.div 
               className={styles.home1_feature_content}
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <div className={styles.section_heading}>
                <div className={styles.text_style_badge}>PERFECT for high-volume hiring</div>
                <div className={styles.spacer_xxsmall}></div>
                <h2>Tired of resumes that all look the same? We solve your screening problem</h2>
                <div className={styles.spacer_xsmall}></div>
                <div>
                  Video summaries. Assessment scores. Resume highlights. All automatic, all analyzed by Interview AI. Get to the real signal in minutes, not days.<br />
                </div>
                <div className={styles.spacer_small}></div>
                <div className={styles.button_group}>
                  <Link href="/role-setup" className={styles.button_box} style={{ textDecoration: "none" }}>
                    <div className={styles.button}>
                      <div>Start free trial</div>
                      <ArrowRight size={18} style={{ marginLeft: "4px" }} />
                    </div>
                    <div className={styles.button_shadow}></div>
                  </Link>
                  <Link href="/contact" className={`${styles.button} ${styles.is_secondary}`} style={{ textDecoration: "none" }}>
                    Book Demo
                  </Link>
                </div>
              </div>
              <div className={styles.spacer_small}></div>
              
              <div className={styles.home1_feature_list}>
                <div 
                  className={styles.home1_feature_card}
                  onClick={() => handleCardClick("Match %")}
                  style={{ 
                    cursor: "pointer", 
                    transition: "all 0.25s ease",
                    border: activeFeature === "Match %" ? "1px solid #8B5CF6" : undefined,
                    background: activeFeature === "Match %" ? "rgba(139, 92, 246, 0.15)" : undefined,
                  }}
                >
                  <div className={styles.spacer_xxsmall}></div>
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Match %</div>
                  <div className={`${styles.text_size_small} ${styles.text_style_muted60}`}>Match % based on your exact requirements</div>
                </div>
                <div 
                  className={styles.home1_feature_card}
                  onClick={() => handleCardClick("Instant checks")}
                  style={{ 
                    cursor: "pointer", 
                    transition: "all 0.25s ease",
                    border: activeFeature === "Instant checks" ? "1px solid #8B5CF6" : undefined,
                    background: activeFeature === "Instant checks" ? "rgba(139, 92, 246, 0.15)" : undefined,
                  }}
                >
                  <div className={styles.spacer_xxsmall}></div>
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Instant checks</div>
                  <div className={`${styles.text_size_small} ${styles.text_style_muted60}`}>Quickly review years of experience &amp; must-haves</div>
                </div>
              </div>
              
              <div className={styles.home1_feature_list}>
                <div 
                  className={styles.home1_feature_card}
                  onClick={() => handleCardClick("Candidate Shorts")}
                  style={{ 
                    cursor: "pointer", 
                    transition: "all 0.25s ease",
                    border: activeFeature === "Candidate Shorts" ? "1px solid #8B5CF6" : undefined,
                    background: activeFeature === "Candidate Shorts" ? "rgba(139, 92, 246, 0.15)" : undefined,
                  }}
                >
                  <div className={styles.spacer_xxsmall}></div>
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Candidate Shorts</div>
                  <div className={`${styles.text_size_small} ${styles.text_style_muted60}`}>Get a short 30-second recap of the interview.</div>
                </div>
                <div 
                  className={styles.home1_feature_card}
                  onClick={() => handleCardClick("Candidate summary")}
                  style={{ 
                    cursor: "pointer", 
                    transition: "all 0.25s ease",
                    border: activeFeature === "Candidate summary" ? "1px solid #8B5CF6" : undefined,
                    background: activeFeature === "Candidate summary" ? "rgba(139, 92, 246, 0.15)" : undefined,
                  }}
                >
                  <div className={styles.spacer_xxsmall}></div>
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Candidate summary</div>
                  <div className={`${styles.text_size_small} ${styles.text_style_muted60}`}>Key details compiled into one TL;DR.</div>
                </div>
              </div>
            </motion.div>
            
            <motion.img 
              src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6984e348e42081e89a8b747e_740d47ae734093a1ce6c2158b17b8006_Untitled%20design%20%282%29.avif" 
              loading="lazy" 
              alt="Woman participating in async interviews" 
              className={styles.home1_feature_image}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>

          <div className={styles.spacer_xxlarge}></div>

          {/* Feature 2 */}
          <div className={`${styles.home1_feature_grid} ${styles.is_2nd}`}>
            <motion.img 
              src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/6984e52be13854575d03219c_bd5356bfe26c8e024bb6459a5a760055_Untitled%20design%20%283%29.avif" 
              loading="lazy" 
              alt="Woman using candidate screening software" 
              className={styles.home1_feature_image}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
            
            <motion.div 
               className={styles.home1_feature_content}
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
              <div className={styles.section_heading}>
                <div className={styles.text_style_badge}>Every answer analyzed and explained</div>
                <div className={styles.spacer_xxsmall}></div>
                <h2>AI helps you prioritize candidates based on <em>your</em> criteria</h2>
                <div className={styles.spacer_xsmall}></div>
                <div>
                  Interview AI doesn't just transcribe or process information. It evaluates each candidate against your rubric and explains its reasoning. See exactly where candidates align — and where you'll want to dig deeper.<br />
                </div>
                <div className={styles.spacer_small}></div>
                <div className={styles.button_group}>
                  <Link href="/role-setup" className={styles.button_box} style={{ textDecoration: "none" }}>
                    <div className={styles.button}>
                      <div>Start free trial</div>
                      <ArrowRight size={18} style={{ marginLeft: "4px" }} />
                    </div>
                    <div className={styles.button_shadow}></div>
                  </Link>
                  <Link href="/contact" className={`${styles.button} ${styles.is_secondary}`} style={{ textDecoration: "none" }}>
                    Book Demo
                  </Link>
                </div>
                <div className={styles.spacer_small}></div>
              </div>
              
              <div className={`${styles.home1_feature_list} ${styles.is_v2}`}>
                {[
                  { name: "Manage team access", icon: <UserCheck size={18} color="#8B5CF6" /> },
                  { name: "Smart candidate ranking", icon: <Zap size={18} color="#10B981" /> },
                  { name: "Candidate analytics", icon: <Layers size={18} color="#38BDF8" /> },
                  { name: "Enterprise Security", icon: <Shield size={18} color="#F59E0B" /> },
                  { name: "Seamless Integrations", icon: <Sparkles size={18} color="#EC4899" /> },
                ].map((item) => (
                  <div 
                    key={item.name}
                    className={`${styles.home1_feature_card} ${styles.is_v2}`}
                    onClick={() => handleCardClick(item.name)}
                    style={{ 
                      cursor: "pointer", 
                      transition: "all 0.25s ease",
                      border: activeFeature === item.name ? "1px solid #8B5CF6" : undefined,
                      background: activeFeature === item.name ? "rgba(139, 92, 246, 0.15)" : undefined,
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {item.icon}
                    <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>{item.name}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
