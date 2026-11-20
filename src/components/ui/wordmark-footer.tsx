"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// at least 44 px tall wherever a finger taps it
const tap =
  "max-md:inline-flex max-md:min-h-11 max-md:items-center pointer-coarse:inline-flex pointer-coarse:min-h-11 pointer-coarse:items-center";
const serif = "var(--font-display, var(--font-serif, ui-serif, Georgia, serif))";

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export interface WordmarkFooterProps
  extends React.HTMLAttributes<HTMLElement> {
  /** The product name: the wordmark top left and the large name at the bottom. */
  name: string;
  /** The name in the © line. */
  legalName?: string;
  year: number;
  description?: string;
  email?: string;
  /** A short status line next to a green dot, such as "All systems normal". */
  status?: string;
  /** What screen readers call the footer navigation. */
  navLabel?: string;
  columns: FooterColumn[];
  /** A small link at the end of the bottom line. */
  credit?: { label: string; href: string };
}

/**
 * A footer with a short description, link columns that fold on phones, and the product name set large,
 * fading into the background.
 */
export function WordmarkFooter({
  name,
  legalName,
  year,
  description,
  email,
  status,
  navLabel = "Footer",
  columns,
  credit,
  className,
  style,
  ...props
}: WordmarkFooterProps) {
  return (
    <footer
      className={cn(
        "relative overflow-hidden bg-[#08090c] text-white border-t border-white/[0.08]",
        className
      )}
      style={style}
      {...props}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 pt-16 pb-10 max-md:gap-6 max-md:pt-12 max-md:pb-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <span
            className="block text-[28px] leading-none tracking-[-0.02em] text-white font-extrabold"
            style={{ fontFamily: serif }}
          >
            {name}
          </span>
          {description && (
            <p className="mt-4 max-w-[340px] text-[13px] sm:text-[14px] leading-[22px] text-neutral-400">
              {description}
            </p>
          )}
          {status && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-neutral-300">
              <span
                className="size-2 rounded-full bg-emerald-400 animate-pulse"
                aria-hidden="true"
              />
              {status}
            </p>
          )}
        </div>

        {/* Desktop link columns */}
        <nav
          aria-label={navLabel}
          className="grid grid-cols-2 gap-8 max-md:hidden md:col-span-8 lg:grid-cols-4"
        >
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] tracking-[0.14em] text-neutral-500 uppercase font-semibold">
                {col.title}
              </p>
              <ul className="mt-4 grid gap-2.5 pointer-coarse:mt-2 pointer-coarse:gap-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className={cn(
                        "text-[13px] text-neutral-400 transition-colors hover:text-white",
                        tap
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Phones: each column folds away; tap a heading to open it */}
        <nav aria-label={navLabel} className="-mx-4 grid gap-1 md:hidden">
          {columns.map((col) => (
            <details
              key={col.title}
              className="group rounded-2xl open:bg-white/[0.04]"
            >
              <summary className="flex h-14 cursor-pointer list-none items-center justify-between px-4 [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-[12px] tracking-[0.14em] text-neutral-300 uppercase font-medium">
                  {col.title}
                </span>
                <Plus
                  className="size-4 text-neutral-400 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </summary>
              <ul className="px-4 pb-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="block py-2 text-[14px] text-neutral-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>
      </div>

      {/* Legal & Copyright Line */}
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 pb-6 text-[12px] text-neutral-500 sm:flex-row sm:items-center sm:gap-6 md:px-10 border-t border-white/[0.06] pt-6">
        <p className="font-mono tabular-nums">
          © {year} {legalName ?? name}
        </p>
        {email && (
          <a
            href={`mailto:${email}`}
            className={cn("hover:text-neutral-300 transition-colors", tap)}
          >
            {email}
          </a>
        )}
        {credit && (
          <a
            href={credit.href}
            className={cn("hover:text-neutral-300 sm:ml-auto transition-colors", tap)}
          >
            {credit.label}
          </a>
        )}
      </div>

      {/* The wordmark name, set large and fading into the background */}
      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.2em] text-center text-[clamp(96px,22vw,320px)] leading-[0.85] tracking-[-0.04em] text-transparent select-none [background-clip:text] [-webkit-background-clip:text] [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent_80%)] max-md:text-[28vw]"
        style={{ fontFamily: serif, fontWeight: 340 }}
      >
        {name}
      </p>
    </footer>
  );
}

export default WordmarkFooter;
