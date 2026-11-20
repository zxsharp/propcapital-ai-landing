"use client";

import * as React from "react";
import Image from "next/image";
import {
  Building2,
  Award,
  Star,
  CheckCircle2,
  MapPin,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { DEVELOPERS_CONTENT } from "@/data/content";

const DEVELOPER_CARDS_DATA = [
  {
    category: "DLF Limited · Ultra Luxury",
    title: "Defining Indian luxury with iconic Golf Course landmarks.",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    developer: {
      name: "DLF Limited",
      projectsCount: "18 Projects",
      priceNote: "₹2.8 Cr onwards",
      tags: ["Ultra Luxury", "Golf Course Road", "Commercial"],
      featuredProjects: ["The Camellias", "The Arbour", "DLF Privana"],
      quote:
        "Defining Indian luxury real estate with landmark developments that set national benchmarks.",
      stats: [
        { label: "Delivered", value: "340M+ sq.ft." },
        { label: "Rating", value: "4.9 / 5" },
        { label: "NRI Preference", value: "Top Ranked" },
      ],
      description:
        "DLF is India's largest and most trusted real estate developer. With landmark creations including The Camellias, The Magnolias, and DLF Phase 5, DLF has transformed Gurugram into a global luxury destination.",
    },
  },
  {
    category: "Godrej Properties · Sustainable Living",
    title: "127 years of trust with biophilic, green architecture.",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    developer: {
      name: "Godrej Properties",
      projectsCount: "12 Projects",
      priceNote: "₹1.4 Cr onwards",
      tags: ["Sustainable", "Green Living", "Modern"],
      featuredProjects: [
        "Godrej Tropical Isle",
        "Godrej Aristocrat",
        "Godrej Zenith",
      ],
      quote:
        "127-year legacy of trust with cutting-edge sustainable architecture and biophilic designs.",
      stats: [
        { label: "Green Certified", value: "100%" },
        { label: "Rating", value: "4.8 / 5" },
        { label: "Presence", value: "Pan-NCR" },
      ],
      description:
        "Godrej Properties brings a commitment to cutting-edge design and sustainability to real estate development. Each project combines a 127-year legacy of excellence with contemporary aesthetics.",
    },
  },
  {
    category: "M3M India · Modern Landmarks",
    title: "Fastest growing developer reshaping Gurugram skyline.",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    developer: {
      name: "M3M India",
      projectsCount: "15 Projects",
      priceNote: "₹1.2 Cr onwards",
      tags: ["High Street", "Golf Course Ext", "Speed & Scale"],
      featuredProjects: ["M3M Antalya Hills", "M3M Crown", "M3M Altitude"],
      quote:
        "Transforming the Gurugram skyline with ultra-modern architectural statements.",
      stats: [
        { label: "Speed of Delivery", value: "Industry Best" },
        { label: "Rating", value: "4.7 / 5" },
        { label: "Footprint", value: "Golf Course Ext" },
      ],
      description:
        "M3M India is synonymous with speed, class, and luxury. Renowned for pioneering world-class lifestyle developments on Golf Course Extension Road and Southern Peripheral Road.",
    },
  },
  {
    category: "BPTP Limited · Master Townships",
    title: "Pioneering integrated master-planned communities.",
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    developer: {
      name: "BPTP Limited",
      projectsCount: "8 Projects",
      priceNote: "₹55 Lakh onwards",
      tags: ["Residential", "Affordable", "Townships"],
      featuredProjects: [
        "BPTP Discovery Park",
        "BPTP Park Grandeura",
        "BPTP District 1",
      ],
      quote:
        "Pioneering integrated townships across Faridabad and Gurugram for over two decades.",
      stats: [
        { label: "Acres Developed", value: "1,500+" },
        { label: "Families", value: "24,000+" },
        { label: "Hub", value: "Faridabad & GGM" },
      ],
      description:
        "BPTP has played an instrumental role in developing Greater Faridabad and emerging sectors of Gurugram, offering value luxury and sprawling gated townships.",
    },
  },
  {
    category: "Oberoi Realty · Bespoke Masterworks",
    title: "Uncompromising precision and timeless architectural luxury.",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    developer: {
      name: "Oberoi Realty",
      projectsCount: "6 Projects",
      priceNote: "₹4.5 Cr onwards",
      tags: ["Bespoke", "Ultra Luxury", "Design First"],
      featuredProjects: [
        "Oberoi Forest Sanctuary",
        "Oberoi Sector 58",
        "Oberoi Golf Residences",
      ],
      quote:
        "Mumbai's most revered luxury builder now bringing uncompromising mastercraft to NCR.",
      stats: [
        { label: "Customer Trust", value: "99.8%" },
        { label: "Rating", value: "4.9 / 5" },
        { label: "Specification", value: "World Class" },
      ],
      description:
        "Oberoi Realty brings its legendary craftsmanship and obsessive attention to detail to the National Capital Region with flagship luxury master developments.",
    },
  },
];

const DeveloperModalContent = ({ dev }: { dev: (typeof DEVELOPER_CARDS_DATA)[0]["developer"] }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-900 p-6 md:p-12 rounded-3xl space-y-8 font-sans">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {dev.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-semibold shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl md:text-4xl font-extrabold text-neutral-900 dark:text-white">
          {dev.name}
        </h3>
        <p className="text-base md:text-xl text-neutral-600 dark:text-neutral-300 font-medium italic">
          &ldquo;{dev.quote}&rdquo;
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white dark:bg-neutral-800/80 shadow-sm border border-neutral-200/50 dark:border-neutral-700/50">
        {dev.stats.map((s, idx) => (
          <div key={idx} className="text-center">
            <span className="block text-lg md:text-2xl font-bold text-neutral-900 dark:text-white">
              {s.value}
            </span>
            <span className="text-[11px] md:text-xs text-neutral-500 font-medium">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
          About the Developer
        </h4>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {dev.description}
        </p>
      </div>

      <div className="space-y-3 border-t border-neutral-200 dark:border-neutral-800 pt-6">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500">
            Featured Flagship Projects
          </h4>
          <span className="text-xs font-bold text-neutral-900 dark:text-white">
            {dev.priceNote}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {dev.featuredProjects.map((p, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-xs font-semibold text-neutral-800 dark:text-neutral-200 flex items-center justify-between"
            >
              <span>{p}</span>
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function DevelopersSection() {
  const cards = DEVELOPER_CARDS_DATA.map((card, index) => (
    <Card
      key={card.src}
      card={{
        src: card.src,
        title: card.title,
        category: card.category,
        content: <DeveloperModalContent dev={card.developer} />,
      }}
      index={index}
    />
  ));

  return (
    <section className="w-full bg-[#0a0a0d] text-white pt-12 pb-20 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
              {DEVELOPERS_CONTENT.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              {DEVELOPERS_CONTENT.heading}
            </h2>
            <p className="mt-2 text-sm md:text-base text-neutral-400">
              {DEVELOPERS_CONTENT.subtext}
            </p>
          </div>

          {/* Quick Stats Strip */}
          <div className="flex flex-wrap items-center gap-6 text-neutral-400">
            {DEVELOPERS_CONTENT.overviewStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-neutral-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apple Cards Carousel */}
      <div className="w-full">
        <Carousel items={cards} />
      </div>
    </section>
  );
}
