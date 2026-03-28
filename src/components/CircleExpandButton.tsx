"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CircleExpandButton({
  children,
  href = "/interview-builder",
  className,
  style,
  expandColor = "#ffffff",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  style?: React.CSSProperties;
  expandColor?: string;
}) {
  const [isExpanding, setIsExpanding] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent double clicking
    if (isExpanding) return;

    // Center of button fallback for keyboard access, otherwise exact click
    if (e.clientX === 0 && e.clientY === 0 && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setClickPos({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    } else {
      setClickPos({ x: e.clientX, y: e.clientY });
    }

    setIsExpanding(true);

    // Wait until circle fully expands to navigate
    setTimeout(() => {
      if (href) {
        router.push(href);
      }
      setTimeout(() => setIsExpanding(false), 500);
    }, 800);
  };

  return (
    <>
      <motion.button
        ref={buttonRef}
        className={className}
        style={{ ...style, position: "relative", overflow: "hidden" }}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span style={{ position: "relative", zIndex: 10 }}>{children}</span>
        
        {/* Subtle interactive hover effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileHover={{ opacity: 1, x: 50 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            top: 0,
            left: "-50%",
            width: "150%",
            height: "100%",
            background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(200,200,200,0.2) 50%, rgba(255,255,255,0) 100%)",
            zIndex: 1,
            pointerEvents: "none"
          }}
        />
      </motion.button>

      {/* Screen reveal transition overlay */}
      <AnimatePresence>
        {isExpanding && (
          <motion.div
            initial={{
              width: 0,
              height: 0,
              x: clickPos.x,
              y: clickPos.y,
              opacity: 1,
              borderRadius: "50%",
            }}
            animate={{
              width: 4000,
              height: 4000,
              x: clickPos.x - 2000,
              y: clickPos.y - 2000,
              opacity: 1,
              borderRadius: "50%",
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // Fast start, smooth out
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              backgroundColor: expandColor,
              zIndex: 99999, // Cover entire viewport and navbar
              pointerEvents: "none",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
