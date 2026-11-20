"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Send, ArrowRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { HERO_CONTENT } from "@/data/content";

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
      className="relative w-full min-h-[82vh] md:min-h-[88vh] flex flex-col justify-center items-center bg-[#08090c] text-white overflow-hidden px-4 pt-12 pb-6 md:pt-16 md:pb-8"
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

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top NRI Badge Pill */}
        <div className="mb-5">
          <Link
            href={HERO_CONTENT.nriPill.href}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs md:text-sm font-medium text-neutral-300 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-neutral-300" />
            <span>{HERO_CONTENT.nriPill.text}</span>
            <ArrowRight className="h-3 w-3 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Hero Title & Subtitle with Text Flip */}
        <motion.div
          style={{ opacity: headingOpacity, scale: headingScale }}
          className="w-full"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-2.5">
            Next-Generation Property Intelligence
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-[-0.03em] text-white leading-[1.1] max-w-4xl mx-auto">
            NCR&apos;s smartest property platform for{" "}
            <LayoutTextFlip
              words={[
                "Luxury Living.",
                "NRI Investors.",
                "100% RERA Verified.",
                "Zero Brokerage.",
              ]}
              duration={3000}
              className="inline-block mt-1"
              wordClassName="border-white/15 bg-neutral-900/90 text-white shadow-2xl"
            />
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
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
          <div className="mt-7 max-w-2xl mx-auto">
            <HoverBorderGradient
              containerClassName="rounded-full w-full p-[1px] shadow-2xl"
              as="div"
              className="w-full bg-[#14151a]/95 backdrop-blur-2xl rounded-full px-4 py-2 flex items-center gap-3 border border-white/10"
            >
              <Search className="h-4 w-4 text-neutral-400 shrink-0" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder={HERO_CONTENT.searchPlaceholder}
                className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none"
              />
              <button
                onClick={() => handleSubmit()}
                className="rounded-full bg-white text-black hover:bg-neutral-200 px-4 py-2 text-xs font-semibold flex items-center gap-1.5 transition-colors shrink-0"
              >
                <span>{HERO_CONTENT.searchButton}</span>
                <Send className="h-3 w-3" />
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
