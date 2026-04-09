"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./RecruitingFeaturesSection.module.css";

export default function RecruitingFeaturesSection() {
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
                  Video summaries. Assessment scores. Resume highlights. All automatic, all analyzed by Truffle's AI. Get to the real signal in minutes, not days.<br />
                </div>
                <div className={styles.spacer_small}></div>
                <div className={styles.button_group}>
                  <a href="https://app.hiretruffle.com/sign-up/" className={styles.button_box}>
                    <div className={styles.button}>
                      <div>Start free trial</div>
                      <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0ca3_Right%20-%204.svg" loading="lazy" alt="" className={styles.icon_height_small} />
                    </div>
                    <div className={styles.button_shadow}></div>
                  </a>
                  <a href="https://www.hiretruffle.com/demo" className={`${styles.button} ${styles.is_secondary}`}>Book Demo</a>
                </div>
              </div>
              <div className={styles.spacer_small}></div>
              
              <div className={styles.home1_feature_list}>
                <div className={styles.home1_feature_card}>
                  <div className={styles.spacer_xxsmall}></div>
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Match %</div>
                  <div className={`${styles.text_size_small} ${styles.text_style_muted60}`}>Match % based on your exact requirements</div>
                </div>
                <div className={styles.home1_feature_card}>
                  <div className={styles.spacer_xxsmall}></div>
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Instant checks</div>
                  <div className={`${styles.text_size_small} ${styles.text_style_muted60}`}>Quickly review years of experience &amp; must-haves</div>
                </div>
              </div>
              
              <div className={styles.home1_feature_list}>
                <div className={styles.home1_feature_card}>
                  <div className={styles.spacer_xxsmall}></div>
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Candidate Shorts</div>
                  <div className={`${styles.text_size_small} ${styles.text_style_muted60}`}>Get a short 30-second recap of the interview.</div>
                </div>
                <div className={styles.home1_feature_card}>
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
                  Truffle doesn't just transcribe or process information. It evaluates each candidate against your rubric and explains its reasoning. See exactly where candidates align — and where you'll want to dig deeper.<br />
                </div>
                <div className={styles.spacer_small}></div>
                <div className={styles.button_group}>
                  <a href="https://app.hiretruffle.com/sign-up/" className={styles.button_box}>
                    <div className={styles.button}>
                      <div>Start free trial</div>
                      <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0ca3_Right%20-%204.svg" loading="lazy" alt="" className={styles.icon_height_small} />
                    </div>
                    <div className={styles.button_shadow}></div>
                  </a>
                  <a href="https://www.hiretruffle.com/demo" className={`${styles.button} ${styles.is_secondary}`}>Book Demo</a>
                </div>
                <div className={styles.spacer_small}></div>
              </div>
              
              <div className={`${styles.home1_feature_list} ${styles.is_v2}`}>
                <div className={`${styles.home1_feature_card} ${styles.is_v2}`}>
                  <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0ce6_icon1.svg" loading="lazy" alt="" className={styles.icon_height_small} />
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Manage your team access</div>
                </div>
                <div className={`${styles.home1_feature_card} ${styles.is_v2}`}>
                  <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0ce7_icon2.svg" loading="lazy" alt="" className={styles.icon_height_small} />
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Smart candidate ranking</div>
                </div>
                <div className={`${styles.home1_feature_card} ${styles.is_v2}`}>
                  <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0ce9_icon3.svg" loading="lazy" alt="" className={styles.icon_height_small} />
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Candidate analytics</div>
                </div>
                <div className={`${styles.home1_feature_card} ${styles.is_v2}`}>
                  <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0cea_icon4.svg" loading="lazy" alt="" className={styles.icon_height_small} />
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Enterprise Security</div>
                </div>
                <div className={`${styles.home1_feature_card} ${styles.is_v2}`}>
                  <img src="https://cdn.prod.website-files.com/69846634cdf00025c27f0908/69846636cdf00025c27f0ceb_icon5.svg" loading="lazy" alt="" className={styles.icon_height_small} />
                  <div className={`${styles.text_size_small} ${styles.text_weight_medium}`}>Seamless Integrations</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
