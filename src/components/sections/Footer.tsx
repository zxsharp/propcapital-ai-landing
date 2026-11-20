"use client";

import * as React from "react";
import { WordmarkFooter } from "@/components/ui/wordmark-footer";
import { FOOTER_COLUMNS, SITE_METADATA } from "@/data/content";

export function Footer() {
  const columns = FOOTER_COLUMNS.map((col) => ({
    title: col.title,
    links: col.links.map((link) => ({
      label: link,
      href: `#${link.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    })),
  }));

  return (
    <WordmarkFooter
      name="PropCapital"
      legalName="PropCapital Technologies Pvt. Ltd."
      year={2026}
      description={SITE_METADATA.fullDescription}
      status="All systems operational · RERA Verified"
      email="advisory@propcapital.ai"
      columns={columns}
      credit={{
        label: "RERA Reg: DLRERA2024A0012",
        href: "#rera",
      }}
    />
  );
}
