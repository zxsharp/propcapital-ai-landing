"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
  className,
  textClassName,
  wordClassName,
}: {
  text?: string;
  words: string[];
  duration?: number;
  className?: string;
  textClassName?: string;
  wordClassName?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <span className={cn("inline-flex flex-wrap items-center justify-center gap-3", className)}>
      {text && (
        <motion.span
          layoutId="subtext"
          className={cn("tracking-tight font-bold", textClassName)}
        >
          {text}
        </motion.span>
      )}

      <motion.span
        layout
        className={cn(
          "relative inline-flex overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 px-4 py-1.5 font-sans tracking-tight text-white shadow-lg backdrop-blur-md",
          wordClassName
        )}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -30, filter: "blur(8px)", opacity: 0 }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            exit={{ y: 30, filter: "blur(8px)", opacity: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="inline-block whitespace-nowrap bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </span>
  );
};
