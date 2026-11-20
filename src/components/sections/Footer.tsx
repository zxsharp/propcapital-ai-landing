"use client";

import * as React from "react";
import Link from "next/link";
import { FOOTER_COLUMNS, SITE_METADATA } from "@/data/content";

export function Footer() {
  return (
    <footer className="w-full bg-[#08090c] text-neutral-400 border-t border-neutral-800 text-xs py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Brand & Mission Statement */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-800 pb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-[10px] font-bold text-white">
                {SITE_METADATA.short}
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                {SITE_METADATA.logoPrefix}
                <span className="text-blue-500">{SITE_METADATA.logoSuffix}</span>
              </span>
            </div>
            <p className="text-neutral-400 max-w-md text-xs leading-relaxed">
              {SITE_METADATA.fullDescription}
            </p>
          </div>
          <div className="text-neutral-500 text-xs">
            <span>{SITE_METADATA.tagline}</span>
          </div>
        </div>

        {/* Columns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-semibold text-white text-xs uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors text-xs text-neutral-400"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-neutral-800/80 pt-8 space-y-4">
          <p className="text-[11px] leading-relaxed text-neutral-500">
            {SITE_METADATA.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 pt-4">
            <p>{SITE_METADATA.copyright}</p>
            <div className="flex flex-wrap items-center gap-4">
              {SITE_METADATA.bottomLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-neutral-300 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
