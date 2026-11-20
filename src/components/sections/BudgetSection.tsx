"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Wallet,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";
import { BUDGET_CONTENT } from "@/data/content";
import { BackgroundCubesGrid } from "@/components/ui/background-cubes-grid";

const BUDGET_CAROUSEL_PROPERTIES = [
  {
    title: "Signature Global City 93",
    price: "₹92 Lakh",
    tier: "Value Homes",
    location: "Sector 93, New Gurugram",
    bhk: "2 & 3 BHK Floors",
    image: "/thumbs/huang-lin-WdYSs3M5lHk-unsplash.webp",
    badge: "Under ₹1.2 Cr",
    tag: "High Capital Yield",
  },
  {
    title: "M3M Antalya Hills",
    price: "₹1.45 Cr",
    tier: "Contemporary Homes",
    location: "Sector 79, Gurugram Foothills",
    bhk: "2.5 & 3.5 BHK Luxury",
    image: "/thumbs/le-quan-kUNmgV9VNic-unsplash.webp",
    badge: "₹1.2 Cr – ₹2.5 Cr",
    tag: "Aravalli Facing",
  },
  {
    title: "Godrej Tropical Isle",
    price: "₹2.2 Cr",
    tier: "Contemporary Homes",
    location: "Sector 146, Noida Expressway",
    bhk: "3 BHK Island Themed",
    image: "/thumbs/kirill-9uH-hM0VwPg-unsplash.webp",
    badge: "₹1.2 Cr – ₹2.5 Cr",
    tag: "Near Metro",
  },
  {
    title: "DLF Privana South",
    price: "₹6.8 Cr",
    tier: "Premium Luxury Homes",
    location: "Sector 76/77, Gurugram",
    bhk: "4 BHK Ultra Luxury",
    image: "/thumbs/pure-julia-ZZTzq5qdt7c-unsplash.webp",
    badge: "Above ₹2.5 Cr",
    tag: "Golf Course Extension",
  },
  {
    title: "Oberoi Forest Sanctuary",
    price: "₹7.9 Cr",
    tier: "Premium Luxury Homes",
    location: "Golf Course Ext, Sector 58",
    bhk: "4 BHK Luxury Estate",
    image: "/thumbs/mahmoud-azmy-iFVuDQZAxFc-unsplash.webp",
    badge: "Above ₹2.5 Cr",
    tag: "Bespoke Architecture",
  },
  {
    title: "BPTP Discovery Park",
    price: "₹85 Lakh",
    tier: "Value Homes",
    location: "Sector 80, Greater Faridabad",
    bhk: "2 BHK Contemporary",
    image: "/thumbs/prydumano-design-4Q9aOJF-6vI-unsplash.webp",
    badge: "Under ₹1.2 Cr",
    tag: "Gated Community",
  },
];

export function BudgetSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Background cubes are crisp during budget tiers, then smoothly dissolve to 0 before carousel ends (zero hard line)
  const bgOpacity = useTransform(scrollYProgress, [0, 0.08, 0.55, 0.72], [0.6, 0.95, 0.8, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const offset = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full bg-[#08090c] text-white">
      {/* Centered Background Animation with Soft Gradient Dissolve (Zero Hard Lines) */}
      <motion.div
        style={{ opacity: bgOpacity, scale: bgScale }}
        className="sticky top-0 h-screen w-full pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <BackgroundCubesGrid
            variant="isometric"
            className="w-full h-full opacity-80"
            cellSize={44}
            topColor="#52525b"
            leftColor="#3f3f46"
            rightColor="#27272a"
            amplitude={0.7}
            speed={1.1}
          />
        </div>
        {/* Deep top and bottom dissolves so the cubes never create a hard parting edge */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#08090c] via-[#08090c]/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#08090c] via-[#08090c]/85 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090c]/60 via-transparent to-[#08090c]/80 pointer-events-none" />
      </motion.div>

      {/* Scrolling Text Content Layer */}
      <div className="relative z-10 -mt-[100vh] min-h-[160vh] flex flex-col justify-start">
        {/* Centered Heading with Grey Subheading */}
        <div className="sticky top-20 text-center max-w-3xl mx-auto px-4 pt-8 pointer-events-none">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
            {BUDGET_CONTENT.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {BUDGET_CONTENT.heading}
          </h2>
          <p className="mt-2 text-sm md:text-base text-neutral-400 font-normal">
            {BUDGET_CONTENT.subtext}
          </p>
        </div>

        {/* The 3 Tiers Scrolling Through */}
        <div className="max-w-4xl mx-auto px-4 mt-32 space-y-12 pb-20">
          {BUDGET_CONTENT.tiers.map((tier, idx) => (
            <motion.div
              key={tier.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-60px", once: false }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-10 rounded-3xl bg-[#14151b]/95 border border-white/[0.12] backdrop-blur-2xl shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-white/30 transition-colors"
            >
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-neutral-200 border border-white/15">
                    Tier 0{idx + 1}
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {tier.title}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-normal">
                  {tier.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/[0.08]">
                <span className="text-2xl md:text-3xl font-extrabold text-white">
                  {tier.priceRange}
                </span>
                <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-neutral-200 text-xs font-semibold transition-colors">
                  <span>{tier.cta}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Followed by Large Visual Property Cards Carousel (Seamless Blend, No Hard Line) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Curated Portfolio
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mt-1">
              Featured Homes Across All Budget Tiers
            </h3>
          </div>
          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarousel("left")}
              aria-label="Previous property"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              aria-label="Next property"
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Large Image Cards with Direct Text Overlay */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] overscroll-x-auto"
        >
          {BUDGET_CAROUSEL_PROPERTIES.map((prop, i) => (
            <div
              key={i}
              className="group relative h-[420px] md:h-[480px] w-[300px] sm:w-[360px] md:w-[380px] shrink-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between p-6 cursor-pointer bg-[#14151b]"
            >
              {/* Full Card Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 group-hover:via-black/50 transition-colors" />
              </div>

              {/* Card Top: Tier Pill & Price Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10">
                  {prop.tier}
                </span>
                <span className="px-3.5 py-1 rounded-full bg-white text-black text-xs font-black shadow-lg">
                  {prop.price}
                </span>
              </div>

              {/* Card Bottom: Overlay Details */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-neutral-300 bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full">
                    {prop.tag}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-medium">
                    {prop.badge}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                    {prop.title}
                  </h4>
                  <p className="text-xs text-neutral-300 flex items-center gap-1.5 mt-1 font-medium">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                    <span>{prop.location}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-neutral-300">
                  <span className="font-medium">{prop.bhk}</span>
                  <span className="text-white font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-8 text-center text-xs text-neutral-500 font-medium">
          {BUDGET_CONTENT.footerNote}
        </p>
      </div>

      {/* Soft bottom gradient dissolve to guarantee zero parting line before next section */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#08090c] to-transparent pointer-events-none z-10" />
    </div>
  );
}
