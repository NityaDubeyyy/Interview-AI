"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { HighlightedText } from "./highlighted-text";

const people = [
  {
    id: 1,
    name: "Michael Chen",
    designation: "Frontend Lead",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    designation: "AI Researcher",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Alex Thompson",
    designation: "Product Designer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
  },
];

export default function TextHighlightSection() {
  return (
    <section style={{ backgroundColor: "#05010D", padding: "100px 24px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", position: "relative" }}>
        
        {/* Avatars with drawn lines */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "48px", position: "relative" }}
        >
          {/* Avatars with Tooltip */}
          <div style={{ display: "flex", alignItems: "center", position: "relative", zIndex: 2 }}>
            <AnimatedTooltip items={people} />
          </div>
        </motion.div>

        {/* Text Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: "36px", fontWeight: "500", color: "#ffffff", lineHeight: "1.6", letterSpacing: "-0.01em" }}
        >
          Experience hyper-realistic AI mock interviews and comprehensive <span style={{ margin: "0 4px" }}><HighlightedText delay={0.2} from="left">performance analytics</HighlightedText></span> in one seamless system. Practice effortlessly to identify growth areas, perfect your storytelling, and <span style={{ margin: "0 4px" }}><HighlightedText delay={0.4} from="left">land your dream job</HighlightedText></span> across top tech companies.
        </motion.div>
        
      </div>
    </section>
  );
}

