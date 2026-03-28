"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
  value: string;
}

export default function Counter({ value }: CounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // Extract the numeric part and the suffix
      const match = value.match(/^(\d+)(.*)$/);
      if (match) {
        const target = parseInt(match[1], 10);
        const suffix = match[2];

        const controls = animate(0, target, {
          duration: 2,
          ease: "easeOut",
          onUpdate(value) {
            setDisplayValue(Math.floor(value).toString() + suffix);
          },
        });

        return () => controls.stop();
      } else {
        setDisplayValue(value);
      }
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}
