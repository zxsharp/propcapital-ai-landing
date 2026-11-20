import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "PropCapital.ai — NCR's Smartest Property Platform",
  description:
    "250+ verified listings across Gurugram, Faridabad & Noida — AI-matched to your goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className="min-h-screen bg-white text-[#1D1D1F] antialiased">
        {children}
      </body>
    </html>
  );
}
