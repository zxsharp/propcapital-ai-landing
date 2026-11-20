"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { CONFIGURATION_CONTENT } from "@/data/content";

const CONFIG_IMAGES = [
  "/huang-lin-WdYSs3M5lHk-unsplash.jpg", // 1 BHK
  "/joel-filipe-RFDP7_80v5A-unsplash.jpg", // 2 BHK
  "/kirill-9uH-hM0VwPg-unsplash.jpg", // 3 BHK
  "/le-quan-kUNmgV9VNic-unsplash.jpg", // 4 BHK
  "/mahmoud-azmy-iFVuDQZAxFc-unsplash.jpg", // 4 BHK+
];

const CARD_TRANSFORMS = [
  "md:-rotate-2 md:-translate-y-2",
  "md:rotate-2 md:translate-y-3",
  "md:-rotate-1 md:translate-y-0",
  "md:rotate-2 md:-translate-y-2",
  "md:-rotate-2 md:translate-y-2",
];

export function ConfigurationSection() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="relative w-full bg-[#0a0a0d] py-20 px-4 md:px-8 overflow-hidden text-white border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with Grey Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
            {CONFIGURATION_CONTENT.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            {CONFIGURATION_CONTENT.heading}
          </h2>
          <p className="mt-2.5 text-sm md:text-base text-neutral-400">
            {CONFIGURATION_CONTENT.subtext}
          </p>
        </div>

        {/* Misplaced / Staggered Cards Grid with Apple Monochrome Focus Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-4 pt-2 pb-8">
          {CONFIGURATION_CONTENT.items.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered = hoveredIndex !== null && !isHovered;
            const transformClass = CARD_TRANSFORMS[index % CARD_TRANSFORMS.length];

            return (
              <motion.div
                key={item.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group rounded-3xl transition-all duration-300 ease-out cursor-pointer ${
                  isHovered
                    ? "z-30 scale-105 rotate-0 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                    : transformClass
                } ${isOtherHovered ? "opacity-35 scale-95 blur-[0.6px]" : "opacity-100"}`}
              >
                <div className="relative h-[340px] md:h-[370px] w-full rounded-3xl overflow-hidden border border-white/[0.08] bg-[#14151b] flex flex-col justify-between p-5">
                  {/* Image Background */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={CONFIG_IMAGES[index % CONFIG_IMAGES.length]}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110 opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-[#0a0a0d]/60 to-black/30" />
                  </div>

                  {/* Card Top: Tag & Floor Plan pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-neutral-300">
                      {item.floorPlan}
                    </span>
                    {item.tag && (
                      <span className="px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-wide uppercase shadow-md">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  {/* Card Bottom: Title, Count, Link */}
                  <div className="relative z-10 pt-4">
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-xs text-neutral-400 font-medium">
                        {item.count}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-white/[0.08] pt-3">
                      <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
                        {item.linkText}
                      </span>
                      <div className="h-7 w-7 rounded-full bg-white/10 group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all group-hover:translate-x-0.5">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fallback CTA Banner (Apple Dark Grey) */}
        <div className="mt-4 rounded-2xl bg-[#14151b] border border-white/[0.08] p-6 md:p-7 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto backdrop-blur-md">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 text-neutral-300 flex items-center justify-center shrink-0">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm md:text-base">
                {CONFIGURATION_CONTENT.fallbackCta.question}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400">
                {CONFIGURATION_CONTENT.fallbackCta.text}
              </p>
            </div>
          </div>
          <button className="rounded-full bg-white text-black hover:bg-neutral-200 px-5 py-2 text-xs sm:text-sm font-semibold transition-colors shrink-0">
            {CONFIGURATION_CONTENT.fallbackCta.button}
          </button>
        </div>
      </div>
    </section>
  );
}
