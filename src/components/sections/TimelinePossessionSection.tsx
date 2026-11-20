"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import {
  Clock,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Building2,
  Calendar,
} from "lucide-react";
import { TIMELINE_CONTENT } from "@/data/content";

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Ready to Move",
    tag: "Immediate Possession · Keys in 14 Days",
    count: "176 Properties Listed",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    description:
      "Occupancy Certificate in hand. Move into your dream home within 14 days with zero construction risk, immediate tax benefits on home loan interest, and verified physical inspection.",
    image: "/thumbs/joel-filipe-RFDP7_80v5A-unsplash.webp",
    benefits: [
      "Physical walkthrough of exact unit available today",
      "Zero Pre-EMI financial burden or delay risk",
      "Immediate rental yield generating income on day one",
      "100% RERA & Occupancy Certificate compliance verified",
    ],
    sectors: "Golf Course Road, Sector 150 Noida, NIT Faridabad, DLF Phase 5",
    highlight: "Zero Construction Risk",
  },
  {
    step: "02",
    title: "Under Construction",
    tag: "12–24 Months Delivery · Milestone Linked",
    count: "60 Properties Listed",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    description:
      "Staggered construction-linked payment plans. PropCapital independent civil engineers audit construction milestones before every slab payment is released, with 18–25% projected appreciation.",
    image: "/thumbs/kirill-9uH-hM0VwPg-unsplash.webp",
    benefits: [
      "Milestone-linked safe payments verified by engineers",
      "18–25% projected capital appreciation before handover",
      "Bespoke layout and interior finish customizations",
      "Quarterly drone footage and structural audit reports",
    ],
    sectors: "Dwarka Expressway, Golf Course Ext, SPR, Sohna Road",
    highlight: "18–25% Capital Growth",
  },
  {
    step: "03",
    title: "New Launch",
    tag: "Day 1 Pre-Launch · Lowest Entry Valuation",
    count: "14 Properties Listed",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    description:
      "Exclusive first-mover advantage with premier Tier-1 developers. Secure prime corner and high-floor panoramic residences at launch day valuations with maximum capital compounding.",
    image: "/thumbs/le-quan-kUNmgV9VNic-unsplash.webp",
    benefits: [
      "Lowest entry price per sq. ft. direct from builders",
      "Priority selection of best golf-facing & high-floor units",
      "Maximum long-term equity compounding potential",
      "Direct builder allotment with ₹0 brokerage fees",
    ],
    sectors: "Sector 76 Gurugram, Greater Noida West, CyberCity 2",
    highlight: "Priority Unit Selection",
  },
];

export function TimelinePossessionSection() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Smooth auto-cycle between phases every 6s, pauses on hover
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % TIMELINE_STEPS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = TIMELINE_STEPS[activeStep];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full bg-[#08090c] text-white py-16 md:py-20 px-4 md:px-8 lg:px-12 border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-1.5">
              {TIMELINE_CONTENT.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {TIMELINE_CONTENT.heading}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400 font-normal max-w-xl">
              {TIMELINE_CONTENT.subtext}
            </p>
          </div>

          {/* Interactive Milestone Tabs / Segmented Control */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#14151b] border border-white/10 shrink-0 self-start sm:self-auto">
            {TIMELINE_STEPS.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeStep === idx
                    ? "bg-white text-black shadow-lg"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>0{idx + 1}.</span>
                <span className="hidden sm:inline">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Large Architectural Milestone Card */}
        <div className="relative w-full h-[520px] sm:h-[540px] md:h-[560px] rounded-3xl bg-[#14151b] border border-white/10 shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 14, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 1.01 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="h-full w-full grid grid-cols-1 md:grid-cols-12"
            >
              {/* Left Column: Milestone Details */}
              <div className="md:col-span-6 lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between z-10 bg-[#14151b] h-full">
                <div className="space-y-3 sm:space-y-4 my-auto">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-neutral-200 border border-white/15 text-xs font-semibold tracking-wide">
                      Phase 0{activeStep + 1} of 03
                    </span>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5" />
                      {current.count}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                      {current.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-1 tracking-tight">
                      {current.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm md:text-[15px] text-neutral-300 leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* Benefit Checkpoints */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-3 border-t border-white/[0.08]">
                    {current.benefits.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-center gap-2 text-xs text-neutral-300"
                      >
                        <ShieldCheck className="h-4 w-4 text-neutral-400 shrink-0" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Details */}
                <div className="shrink-0 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400 mt-4">
                  <div className="truncate mr-4">
                    <span className="text-neutral-500 block text-[10px] uppercase font-semibold">
                      Prime Sectors
                    </span>
                    <span className="text-neutral-300 font-medium text-xs sm:text-sm truncate block">
                      {current.sectors}
                    </span>
                  </div>
                  <button className="rounded-full bg-white text-black hover:bg-neutral-200 px-4 py-2 text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors shrink-0 shadow-lg">
                    <span>Explore Homes</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: Full-Bleed Architectural Visual */}
              <div className="hidden md:block md:col-span-6 lg:col-span-6 relative h-full w-full overflow-hidden bg-[#16171d]">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  priority
                  className="object-cover object-center scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Corner Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold border border-white/10">
                    {current.highlight}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-black shadow-lg">
                    PropCapital Verified
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-xs text-white">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 font-medium">
                    Zero Buyer Brokerage
                  </span>
                  <span className="font-semibold text-neutral-300">
                    RERA Audited
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Timeline Controls & Status Strip */}
        <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-400 font-medium">
              Click tabs to explore milestones · Auto-advancing
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold text-white">
              Phase 0{activeStep + 1} / 03
            </span>
            <div className="flex items-center gap-1.5">
              {TIMELINE_STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Go to phase ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeStep === i ? "w-8 bg-white" : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
