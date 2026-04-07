"use client";

import React from "react";
import { motion } from "framer-motion";

interface HighlightedTextProps {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right" | "top" | "bottom";
  className?: string;
}

export function HighlightedText({
  children,
  delay = 0,
  from = "left",
  className = "",
}: HighlightedTextProps) {
  return (
    <span style={{ display: "inline-block", position: "relative" }} className={className}>
      <motion.span
        initial={{ 
          scaleX: from === "left" || from === "right" ? 0 : 1,
          scaleY: from === "top" || from === "bottom" ? 0 : 1,
          originX: from === "left" ? 0 : from === "right" ? 1 : 0.5,
          originY: from === "top" ? 0 : from === "bottom" ? 1 : 0.5,
        }}
        whileInView={{ scaleX: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#ffffff",
          borderRadius: "99px",
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1, mixBlendMode: "difference", color: "#ffffff", padding: "4px 20px", display: "inline-block", fontWeight: "600" }}>
        {children}
      </span>
    </span>
  );
}
