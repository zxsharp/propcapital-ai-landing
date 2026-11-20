"use client";

import * as React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const NCR_PARALLAX_PROPERTIES = [
  {
    title: "DLF The Camellias · Golf Course Road",
    link: "#properties",
    thumbnail: "/thumbs/huang-lin-WdYSs3M5lHk-unsplash.webp",
  },
  {
    title: "The Arbour · Golf Course Ext, Sector 63",
    link: "#properties",
    thumbnail: "/thumbs/joel-filipe-RFDP7_80v5A-unsplash.webp",
  },
  {
    title: "Godrej Tropical Isle · Sector 146 Noida",
    link: "#properties",
    thumbnail: "/thumbs/kirill-9uH-hM0VwPg-unsplash.webp",
  },
  {
    title: "M3M Antalya Hills · Gurugram Foothills",
    link: "#properties",
    thumbnail: "/thumbs/le-quan-kUNmgV9VNic-unsplash.webp",
  },
  {
    title: "Oberoi Forest Sanctuary · Sector 58",
    link: "#properties",
    thumbnail: "/thumbs/mahmoud-azmy-iFVuDQZAxFc-unsplash.webp",
  },
  {
    title: "BPTP Discovery Park · Greater Faridabad",
    link: "#properties",
    thumbnail: "/thumbs/prydumano-design-4Q9aOJF-6vI-unsplash.webp",
  },
  {
    title: "Signature Global City · New Gurugram",
    link: "#properties",
    thumbnail: "/thumbs/pure-julia-FWIme06K06E-unsplash.webp",
  },
  {
    title: "DLF Privana South · Sector 76/77",
    link: "#properties",
    thumbnail: "/thumbs/pure-julia-ZZTzq5qdt7c-unsplash.webp",
  },
  {
    title: "M3M Crown · Dwarka Expressway",
    link: "#properties",
    thumbnail: "/thumbs/ryunosuke-kikuno-zU3TfyW9WhY-unsplash.webp",
  },
  {
    title: "Golf Course Road Luxury Penthouses",
    link: "#properties",
    thumbnail: "/thumbs/skyline.webp",
  },
  {
    title: "Godrej Aristocrat · Sector 49 Gurugram",
    link: "#properties",
    thumbnail: "/thumbs/taichi-nakamura-HKpn1x4juSs-unsplash.webp",
  },
  {
    title: "Tata Primanti · Southern Peripheral Road",
    link: "#properties",
    thumbnail: "/thumbs/ahmad-ossayli-tNE4KI3URuE-unsplash.webp",
  },
  {
    title: "Sobha City · Sector 108 Dwarka Expressway",
    link: "#properties",
    thumbnail: "/thumbs/huang-lin-WdYSs3M5lHk-unsplash.webp",
  },
  {
    title: "Emaar Palm Heights · Sector 77 Gurugram",
    link: "#properties",
    thumbnail: "/thumbs/joel-filipe-RFDP7_80v5A-unsplash.webp",
  },
  {
    title: "Central Park Flower Valley · Sohna Road",
    link: "#properties",
    thumbnail: "/thumbs/sam-davis-4dDBBsatdV8-unsplash.webp",
  },
];

export function ParallaxShowcase() {
  return (
    <section className="w-full bg-[#08090b] text-white overflow-hidden">
      <HeroParallax
        products={NCR_PARALLAX_PROPERTIES}
        header={
          <div className="max-w-7xl relative mx-auto pt-16 pb-6 md:pt-28 md:pb-8 px-4 w-full left-0 top-0">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold block mb-3">
              NCR Architectural Landmarks
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Curated masterworks <br />
              across Gurugram & Noida.
            </h2>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg mt-4 text-neutral-400 font-normal leading-relaxed">
              From golf-facing sky residences to modern forest sanctuaries. Every development independently verified for structural pedigree, delivery record, and capital growth.
            </p>
          </div>
        }
      />
    </section>
  );
}
