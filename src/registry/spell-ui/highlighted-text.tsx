"use client";

import React from "react";
import { motion } from "framer-motion";

interface HighlightedTextProps {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right" | "top" | "bottom";
  className?: string;
  highlightColor?: string;
  textColor?: string;
}

export const HighlightedText = ({
  children,
  delay = 0,
  from = "left",
  className = "",
  highlightColor = "white",
  textColor = "#05010D",
}: HighlightedTextProps) => {
  const isHorizontal = from === "left" || from === "right";
  
  return (
    <span className={`relative inline-block px-2 mx-1 rounded-md overflow-hidden ${className}`} style={{ color: textColor }}>
      <motion.span
        initial={{ 
          scaleX: isHorizontal ? 0 : 1, 
          scaleY: isHorizontal ? 1 : 0,
          opacity: 1 
        }}
        whileInView={{ 
          scaleX: 1, 
          scaleY: 1 
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: delay,
          ease: [0.645, 0.045, 0.355, 1],
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: highlightColor,
          zIndex: 0,
          originX: from === "left" ? 0 : from === "right" ? 1 : 0.5,
          originY: from === "top" ? 0 : from === "bottom" ? 1 : 0.5,
        }}
      />
      <span className="relative z-10 font-semibold">{children}</span>
    </span>
  );
};
