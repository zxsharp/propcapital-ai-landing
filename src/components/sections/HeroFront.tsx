"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Send } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { HERO_CONTENT } from "@/data/content";

const serif = "var(--font-display, var(--font-serif, ui-serif, Georgia, serif))";

export function HeroFront({ onSelectPrompt }: { onSelectPrompt?: (prompt: string) => void }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = React.useState("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headingOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const headingScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleSubmit = (val?: string) => {
    const text = val || inputValue;
    if (onSelectPrompt && text) {
      onSelectPrompt(text);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[88vh] md:min-h-[92vh] flex flex-col items-center justify-start bg-[#08090c] text-white overflow-hidden px-4 pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16"
    >
      {/* Skyline Image covers ONLY this first visual appearance */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/skyline.jpg"
          alt="NCR Skyline Luxury Real Estate"
          fill
          priority
          className="object-cover object-center opacity-45 mix-blend-luminosity scale-105"
        />
        {/* Apple-style dark gradient fade: seamlessly dissolves into #08090c at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090c]/85 via-[#08090c]/40 to-[#08090c]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#08090c] via-[#08090c]/80 to-transparent pointer-events-none" />
      </div>

      {/* Large ambient background wordmark: full-width, capped height & max-width limit */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[58px] sm:top-[68px] md:top-[74px] pointer-events-none select-none z-0 flex items-center justify-center overflow-hidden max-h-[85px] sm:max-h-[115px] md:max-h-[135px]"
      >
        <p
          className="text-center tracking-[-0.035em] text-[clamp(64px,21.5vw,310px)] leading-[0.8] text-transparent select-none [background-clip:text] [-webkit-background-clip:text] [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.07)_65%,rgba(255,255,255,0.015)_90%,transparent_100%)] w-[102vw] max-w-[1500px] whitespace-nowrap"
          style={{ fontFamily: serif, fontWeight: 300 }}
        >
          PropCapital
        </p>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center pt-14 sm:pt-16 md:pt-20">
        {/* Hero Title & Subtitle with Text Flip */}
        <motion.div
          style={{ opacity: headingOpacity, scale: headingScale }}
          className="w-full"
        >
          <h1
            style={{ fontFamily: serif, fontWeight: 360 }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.18] max-w-5xl mx-auto"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-neutral-400/50">
              NCR&apos;s smartest property platform
            </span>
            <span className="inline-flex items-center justify-center flex-wrap gap-x-3.5 gap-y-2 mt-1 sm:mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-neutral-400/60 font-light">
                for
              </span>
              <LayoutTextFlip
                words={[
                  "Luxury Living.",
                  "NRI Investors.",
                  "100% RERA Verified.",
                  "Zero Brokerage.",
                ]}
                duration={3000}
                className="inline-flex whitespace-nowrap not-italic"
                wordClassName="border-white/15 bg-neutral-900/90 text-white shadow-2xl font-sans font-semibold text-2xl sm:text-4xl md:text-5xl whitespace-nowrap"
              />
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            {HERO_CONTENT.subtitle}
          </p>

          {/* Quick Metrics Pills */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-neutral-400 text-xs sm:text-sm">
            {HERO_CONTENT.quickStats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className="font-bold text-white">{stat.value}</span>
                <span className="text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Typebar with Aceternity HoverBorderGradient */}
          <div className="mt-7 w-full max-w-2xl mx-auto">
            <HoverBorderGradient
              containerClassName="rounded-full w-full p-[1px] shadow-2xl"
              as="div"
              className="w-full bg-[#14151a]/95 backdrop-blur-2xl rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 sm:gap-3 border border-white/10"
            >
              <Search className="h-4 w-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder={HERO_CONTENT.searchPlaceholder}
                className="min-w-0 flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
              <button
                onClick={() => handleSubmit()}
                className="rounded-full bg-white text-black hover:bg-neutral-200 px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-semibold flex items-center gap-1 sm:gap-1.5 transition-colors shrink-0 whitespace-nowrap"
              >
                <span>{HERO_CONTENT.searchButton}</span>
                <Send className="h-3 w-3 shrink-0" />
              </button>
            </HoverBorderGradient>

            {/* Prompt Chips */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              <span className="text-[11px] text-neutral-500">Quick queries:</span>
              {HERO_CONTENT.promptChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => {
                    setInputValue(chip);
                    handleSubmit(chip);
                  }}
                  className="rounded-full bg-white/5 border border-white/[0.08] px-3 py-1 text-[11px] text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  &ldquo;{chip}&rdquo;
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
