"use client";

import * as React from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  FileCheck,
  Key,
  Users,
  BarChart3,
  Award,
} from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { HOW_IT_WORKS_CONTENT } from "@/data/content";

const STAGE_IMAGES = [
  "/joel-filipe-RFDP7_80v5A-unsplash.jpg",
  "/kirill-9uH-hM0VwPg-unsplash.jpg",
  "/le-quan-kUNmgV9VNic-unsplash.jpg",
  "/huang-lin-WdYSs3M5lHk-unsplash.jpg",
  "/prydumano-design-4Q9aOJF-6vI-unsplash.jpg",
  "/pure-julia-FWIme06K06E-unsplash.jpg",
];

const STAGE_EXTRAS = [
  {
    icon: Sparkles,
    badge: "12,000+ Listings Scanned",
    metrics: [
      { label: "Preference Match", value: "98.4%" },
      { label: "Search Speed", value: "< 30s" },
      { label: "Verified RERA", value: "100%" },
    ],
  },
  {
    icon: Users,
    badge: "Zero Bias Local Specialists",
    metrics: [
      { label: "Consultant Rating", value: "4.9/5" },
      { label: "Local Experience", value: "8+ Yrs" },
      { label: "Micro-markets", value: "Gurugram, Noida" },
    ],
  },
  {
    icon: BarChart3,
    badge: "Transparent ROI Analysis",
    metrics: [
      { label: "Yield Accuracy", value: "95%" },
      { label: "Floor Plan Comparison", value: "Side-by-Side" },
      { label: "Price Benchmark", value: "Verified" },
    ],
  },
  {
    icon: FileCheck,
    badge: "Free Legal & Loan Sanction",
    metrics: [
      { label: "Brokerage for Buyers", value: "₹0" },
      { label: "Loan Approval Rate", value: "99%" },
      { label: "Site Visit Support", value: "Chauffeured" },
    ],
  },
  {
    icon: Award,
    badge: "120-Point Snagging Inspection",
    metrics: [
      { label: "Quality Checkpoints", value: "120" },
      { label: "Registry Assistance", value: "Included" },
      { label: "Possession Check", value: "Guaranteed" },
    ],
  },
  {
    icon: Key,
    badge: "Continuous Asset Management",
    metrics: [
      { label: "Rental Assistance", value: "Active" },
      { label: "Portfolio Value", value: "Tracked" },
      { label: "Resale Advisory", value: "Lifetime" },
    ],
  },
];

export function TimelineSteps() {
  const timelineData = HOW_IT_WORKS_CONTENT.stages.map((stage, idx) => {
    const extra = STAGE_EXTRAS[idx];
    const Icon = extra.icon;
    const imgUrl = STAGE_IMAGES[idx];

    return {
      title: `Stage ${stage.step}`,
      content: (
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
              <Icon className="h-3.5 w-3.5 text-neutral-400" />
              <span>{stage.title}</span>
            </div>
            <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
              {stage.title}
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed max-w-2xl font-normal">
              {stage.description}
            </p>
          </div>

          {/* Side Component / Visual Preview Card (Apple Dark Grey) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-44 md:h-56 w-full rounded-2xl overflow-hidden shadow-xl border border-white/[0.08] group bg-[#16171d]">
              <Image
                src={imgUrl}
                alt={stage.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-medium border border-white/10">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  {extra.badge}
                </span>
              </div>
            </div>

            {/* Metrics & Highlights side container */}
            <div className="flex flex-col justify-between p-4 rounded-2xl bg-[#14151b] border border-white/[0.08]">
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500">
                  {stage.insideHeader || "KEY HIGHLIGHTS"}
                </span>
                <div className="mt-2.5 space-y-2">
                  {extra.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#1a1b22] border border-white/[0.05] text-xs"
                    >
                      <span className="text-neutral-400 font-medium">
                        {m.label}
                      </span>
                      <span className="font-bold text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {stage.callout && (
                <div className="mt-3 pt-2.5 border-t border-white/[0.06] text-xs text-neutral-400 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{stage.callout}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ),
    };
  });

  return (
    <section className="w-full bg-[#0a0a0d] py-12 border-t border-white/[0.06]">
      <Timeline
        data={timelineData}
        title={
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 block mb-2">
              {HOW_IT_WORKS_CONTENT.eyebrow}
            </span>
            <span>{HOW_IT_WORKS_CONTENT.heading}</span>
          </div>
        }
        description="Experience a seamless journey with end-to-end guidance from initial AI scanning to registry and lifetime wealth management."
      />
    </section>
  );
}
