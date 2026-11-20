"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/ui/layout-primitives";
import { SITE_METADATA, NAV_LINKS, NAV_CTA } from "@/data/content";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#08090c]/85 backdrop-blur-xl transition-all duration-200">
      <Container className="flex h-14 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-90"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[12px] font-bold tracking-tight text-black shadow-sm transition-transform duration-200 group-hover:scale-105">
            {SITE_METADATA.short}
          </div>
          <span className="text-[16px] font-semibold tracking-[-0.02em] text-white">
            {SITE_METADATA.logoPrefix}
            <span className="text-neutral-400">{SITE_METADATA.logoSuffix}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-neutral-400 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-[13px] font-medium text-neutral-400 hover:text-white hover:bg-white/5"
          >
            <Link href={NAV_CTA.loginHref}>{NAV_CTA.loginText}</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="group relative flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-black hover:bg-neutral-200 transition-colors"
          >
            <Link href={NAV_CTA.href}>
              <span>{NAV_CTA.text}</span>
              <span className="inline-flex items-center rounded-full bg-black/10 px-1.5 py-0.2 text-[10px] font-bold text-neutral-700">
                {NAV_CTA.badge}
              </span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="h-9 w-9 rounded-full text-white hover:bg-white/10"
              >
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col justify-between bg-[#111216] border-white/10 text-white">
              <div>
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="flex items-center gap-2 text-white">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-[12px] font-bold text-black">
                      {SITE_METADATA.short}
                    </div>
                    <span className="text-[17px] font-semibold tracking-[-0.02em] text-white">
                      {SITE_METADATA.logoPrefix}
                      <span className="text-neutral-400">{SITE_METADATA.logoSuffix}</span>
                    </span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col space-y-3">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between py-2 text-[15px] font-medium text-neutral-300 transition-colors hover:text-white"
                    >
                      {link.name}
                      <ArrowUpRight className="h-4 w-4 text-neutral-500" strokeWidth={1.75} />
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <Button
                  asChild
                  className="w-full justify-center bg-white text-black hover:bg-neutral-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={NAV_CTA.href} className="flex items-center gap-2">
                    <span>{NAV_CTA.text}</span>
                    <Badge variant="outline" className="text-[10px] py-0 px-1.5 border-white/20 text-neutral-300">
                      {NAV_CTA.badge}
                    </Badge>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-center text-neutral-300 hover:text-white hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={NAV_CTA.loginHref}>{NAV_CTA.loginText}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
