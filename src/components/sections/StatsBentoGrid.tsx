"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Users,
  Coins,
  FileCheck2,
  Building,
  CheckCircle2,
  TrendingUp,
  Award,
} from "lucide-react";
import { METRICS_CONTENT } from "@/data/content";

export function StatsBentoGrid() {
  return (
    <section className="w-full bg-[#0a0a0c] text-white py-20 px-4 md:px-8 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
              Verified Platform Standards
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Built on trust. Backed by numbers.
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md font-normal leading-relaxed">
            India&apos;s only real estate network combining verified RERA auditing, zero buyer brokerage, and independent engineering inspections.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Card 1: 100% Verified Consultants & Platform (Col-span 2) */}
          <div className="md:col-span-2 rounded-3xl bg-[#14151a] border border-white/[0.08] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  RERA Compliance Engine
                </span>
                <ShieldCheck className="h-6 w-6 text-neutral-400" />
              </div>
              <div>
                <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
                  100%
                </span>
                <h3 className="text-xl font-bold text-neutral-200 mt-2">
                  Verified Consultants & Projects
                </h3>
                <p className="text-sm text-neutral-400 mt-1 max-w-lg leading-relaxed">
                  Every listed developer project is cross-checked against Haryana and UP RERA registries. No fake listings, no outdated brochures, no unverified agents.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Title Search</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Encumbrance Cert</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>Builder Escrow</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>OC Verification</span>
              </div>
            </div>
          </div>

          {/* Card 2: 4.8 Rating & Client Trust */}
          <div className="rounded-3xl bg-[#14151a] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
                  Client Satisfaction
                </span>
                <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                    4.8
                  </span>
                  <span className="text-lg text-neutral-500 font-bold">/ 5.0</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-200 mt-2">
                  Client Rating
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Rated by thousands of families across Gurugram, Faridabad, and Noida for transparency and stress-free advisory.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-neutral-400 border-t border-white/[0.06] pt-4">
              <div className="flex -space-x-1.5">
                <div className="h-6 w-6 rounded-full bg-neutral-700 border border-neutral-900" />
                <div className="h-6 w-6 rounded-full bg-neutral-600 border border-neutral-900" />
                <div className="h-6 w-6 rounded-full bg-neutral-500 border border-neutral-900" />
              </div>
              <span>Over 2,400+ verified Google & Trustpilot reviews</span>
            </div>
          </div>

          {/* Card 3: 50,000+ Happy Clients */}
          <div className="rounded-3xl bg-[#14151a] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
                  Community
                </span>
                <Users className="h-5 w-5 text-neutral-400" />
              </div>
              <div>
                <span className="text-5xl sm:text-6xl font-black text-white tracking-tight">
                  50k+
                </span>
                <h3 className="text-lg font-bold text-neutral-200 mt-2">
                  Happy Clients
                </h3>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  From first-time homebuyers to NRI portfolio investors across 16 countries.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
              <span>NCR Footprint</span>
              <span className="text-white font-semibold">Gurugram · Noida · Faridabad</span>
            </div>
          </div>

          {/* Card 4: End-to-End Asset Management */}
          <div className="md:col-span-2 rounded-3xl bg-[#14151a] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
                  Full Lifecycle
                </span>
                <FileCheck2 className="h-5 w-5 text-neutral-400" />
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  End-to-End
                </span>
                <h3 className="text-xl font-bold text-neutral-200 mt-2">
                  Comprehensive Asset Management
                </h3>
                <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                  We don&apos;t stop at property discovery. Our legal team coordinates title registry, certified engineers conduct 120-point snagging audits, and our asset desk manages tenant onboarding and resale advisory.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-4 text-xs text-neutral-300">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">120-Point Snagging Audit</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Home Loan Sanction</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Registry Handover</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">Rental Onboarding</span>
            </div>
          </div>

          {/* Card 5: ₹0 Brokerage & Transparent Fee */}
          <div className="md:col-span-2 rounded-3xl bg-[#14151a] border border-white/[0.08] p-8 flex flex-col justify-between group hover:border-white/20 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neutral-300">
                  Zero Hidden Costs
                </span>
                <Coins className="h-5 w-5 text-neutral-400" />
              </div>
              <div>
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  Transparent & Secure
                </span>
                <h3 className="text-xl font-bold text-neutral-200 mt-2">
                  ₹0 Brokerage for Property Buyers
                </h3>
                <p className="text-sm text-neutral-400 mt-1 leading-relaxed">
                  Direct builder developer alliances mean you never pay a single rupee in commission fees for new launches and verified projects. Save up to ₹4,00,000 on average transactions.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
              <span>Average Buyer Savings:</span>
              <span className="text-emerald-400 font-bold text-sm">₹2.5L – ₹8.5L Saved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
