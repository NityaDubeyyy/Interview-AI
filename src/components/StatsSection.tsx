"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Cpu } from "lucide-react";

export default function StatsSection() {
  return (
    <section style={{ 
      position: "relative", 
      padding: "100px 24px", 
      backgroundColor: "#050508", 
      color: "#ffffff", 
      overflow: "hidden",
      fontFamily: "'Geist', sans-serif"
    }}>
      {/* Background Glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 60%)",
        filter: "blur(40px)",
        pointerEvents: "none"
      }}></div>

      <div style={{ maxWidth: "1000px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "80px", maxWidth: "600px", margin: "0 auto 80px auto" }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "100px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "var(--primary, #a78bfa)",
            marginBottom: "24px"
          }}>
             Platform Scale
          </div>
          <h2 style={{ fontSize: "3.5rem", fontWeight: "600", marginBottom: "24px", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
            Tailark in numbers
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", lineHeight: "1.6" }}>
            Gemini is evolving to be more than just the models. It supports an entire ecosystem to the APIs and platforms helping developers and businesses innovate.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "24px" 
        }}>
          
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.1)" }}
            style={{ 
              background: "linear-gradient(180deg, rgba(20,20,24,0.8) 0%, rgba(10,10,14,0.9) 100%)", 
              border: "1px solid rgba(255,255,255,0.05)", 
              borderRadius: "24px", 
              padding: "48px 32px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: 0, left: "20%", width: "60%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(167, 139, 250, 0.5), transparent)" }}></div>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(167, 139, 250, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "#a78bfa" }}>
               <Star size={24} />
            </div>
            <div style={{ fontSize: "4rem", fontWeight: "700", color: "#ffffff", lineHeight: "1", marginBottom: "12px", letterSpacing: "-0.03em" }}>
              +1200
            </div>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>
              Stars on GitHub
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.1)" }}
            style={{ 
              background: "linear-gradient(180deg, rgba(20,20,24,0.8) 0%, rgba(10,10,14,0.9) 100%)", 
              border: "1px solid rgba(255,255,255,0.05)", 
              borderRadius: "24px", 
              padding: "48px 32px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: 0, left: "20%", width: "60%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(52, 211, 153, 0.5), transparent)" }}></div>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(52, 211, 153, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "#34d399" }}>
               <TrendingUp size={24} />
            </div>
            <div style={{ fontSize: "4rem", fontWeight: "700", color: "#ffffff", lineHeight: "1", marginBottom: "12px", letterSpacing: "-0.03em" }}>
              56%
            </div>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>
              Conversion rate
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
            style={{ 
              background: "linear-gradient(180deg, rgba(20,20,24,0.8) 0%, rgba(10,10,14,0.9) 100%)", 
              border: "1px solid rgba(255,255,255,0.05)", 
              borderRadius: "24px", 
              padding: "48px 32px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ position: "absolute", top: 0, left: "20%", width: "60%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.5), transparent)" }}></div>
            <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(96, 165, 250, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px", color: "#60a5fa" }}>
               <Cpu size={24} />
            </div>
            <div style={{ fontSize: "4rem", fontWeight: "700", color: "#ffffff", lineHeight: "1", marginBottom: "12px", letterSpacing: "-0.03em" }}>
              +500
            </div>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", fontWeight: "500", textTransform: "uppercase", letterSpacing: "1px" }}>
              Powered Apps
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
