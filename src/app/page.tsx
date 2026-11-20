import { Navbar } from "@/components/sections/Navbar";
import { HeroFront } from "@/components/sections/HeroFront";
import { ContainerScrollChat } from "@/components/sections/ContainerScrollChat";
import { ParallaxShowcase } from "@/components/sections/ParallaxShowcase";
import { StatsBentoGrid } from "@/components/sections/StatsBentoGrid";
import { TimelineSteps } from "@/components/sections/TimelineSteps";
import { ConfigurationSection } from "@/components/sections/ConfigurationSection";
import { BudgetSection } from "@/components/sections/BudgetSection";
import { TimelinePossessionSection } from "@/components/sections/TimelinePossessionSection";
import { DevelopersSection } from "@/components/sections/DevelopersSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#08090c] text-white">
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        {/* Section 1A: First Visual Appearance Hero with Skyline Background */}
        <HeroFront />

        {/* Section 1B: Container Scroll with Aurora Background & Linear Chat */}
        <ContainerScrollChat />

        {/* Section 2: 3D Parallax Architectural Showcase (Smooth 60fps WebP) */}
        <ParallaxShowcase />

        {/* Section 3: Apple-style Stats Bento Grid */}
        <StatsBentoGrid />

        {/* Section 4: 6-Stage Process & Statistics Timeline */}
        <TimelineSteps />

        {/* Section 5: By Configuration with Faded Misplaced Card Components */}
        <ConfigurationSection />

        {/* Section 6: By Budget with Crisp Isometric 3D Background & Large Overlay Carousel */}
        <BudgetSection />

        {/* Section 7: By Timeline with Continuous Horizontal Scroll Lock */}
        <TimelinePossessionSection />

        {/* Section 8: Top Developers with Apple-like Scrollable Carousel & Hover Sharpness */}
        <DevelopersSection />
      </main>
      <Footer />
    </div>
  );
}
