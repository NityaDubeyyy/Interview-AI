"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TextHighlightSection() {
  return (
    <section style={{ backgroundColor: "#060313", padding: "100px 24px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        
        {/* Avatars with drawn lines */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "32px", position: "relative" }}
        >
          {/* Left Spark */}
          <svg style={{ position: "absolute", left: "calc(50% - 100px)", top: "-10px", width: "40px", height: "40px", stroke: "rgba(255,255,255,0.8)", strokeWidth: "2", fill: "none", strokeLinecap: "round" }} viewBox="0 0 40 40">
            <path d="M10 30 L20 15 M5 25 L15 10" />
          </svg>

          {/* Avatars */}
          <div style={{ display: "flex", position: "relative", zIndex: 2 }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", border: "3px solid #060313", marginRight: "-16px", zIndex: 1 }}>
              <Image src="https://i.pravatar.cc/150?img=11" alt="Avatar" width={64} height={64} style={{ objectFit: "cover" }} />
            </div>
            <div style={{ width: "72px", height: "72px", borderRadius: "50%", overflow: "hidden", border: "3px solid #060313", zIndex: 2, transform: "translateY(-4px)" }}>
              <Image src="https://i.pravatar.cc/150?img=47" alt="Avatar" width={72} height={72} style={{ objectFit: "cover" }} />
            </div>
            <div style={{ width: "64px", height: "64px", borderRadius: "50%", overflow: "hidden", border: "3px solid #060313", marginLeft: "-16px", zIndex: 1 }}>
              <Image src="https://i.pravatar.cc/150?img=12" alt="Avatar" width={64} height={64} style={{ objectFit: "cover" }} />
            </div>
          </div>

          {/* Right Spark */}
          <svg style={{ position: "absolute", right: "calc(50% - 100px)", top: "-10px", width: "40px", height: "40px", stroke: "rgba(255,255,255,0.8)", strokeWidth: "2", fill: "none", strokeLinecap: "round" }} viewBox="0 0 40 40">
            <path d="M30 30 L20 15 M35 25 L25 10" />
          </svg>
        </motion.div>

        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: "36px", fontWeight: "500", color: "#ffffff", lineHeight: "1.6", letterSpacing: "-0.01em" }}
        >
          Experience hyper-realistic AI mock interviews and comprehensive <span style={{ backgroundColor: "#ffffff", color: "#060313", padding: "2px 12px", borderRadius: "4px", display: "inline-block", fontWeight: "600" }}>performance analytics</span> in one seamless system. Practice effortlessly to identify growth areas, perfect your storytelling, and <span style={{ backgroundColor: "#ffffff", color: "#060313", padding: "2px 12px", borderRadius: "4px", display: "inline-block", fontWeight: "600" }}>land your dream job</span> across top tech companies.
        </motion.div>
        
      </div>
    </section>
  );
}
