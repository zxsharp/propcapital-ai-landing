# DESIGN.md — Apple / Mac + Linear Visual System

## 1. Visual Direction
- **Aesthetic:** Apple/Mac hardware product page minimalism combined with Linear's restrained card precision.
- **Core Rule:** Use surface contrast, generous whitespace, crisp typography, and hairline borders instead of heavy shadows, gradients, or decorative clutter.
- **Consistency Rule:** Every section must reuse the exact same `Container`, `Section`, typography scale, border radii, button styles, and shadow tokens defined below.

## 2. Color & Surface System
Define and use these semantic tokens in `globals.css` (do not scatter random Tailwind color utilities across components):
- **Primary Canvas:** `#FFFFFF`
- **Secondary Surface (Alternating Sections / Cards):** `#F5F5F7`
- **Elevated Card Surface:** `#FFFFFF` on `#F5F5F7` (or `#F5F5F7` on `#FFFFFF`)
- **Primary Text:** `#1D1D1F`
- **Secondary / Muted Text:** `#6E6E73`
- **Hairline Border:** `rgba(0, 0, 0, 0.08)` (`border-black/[0.08]`)
- **Subtle Inner Border:** `rgba(0, 0, 0, 0.05)` (`border-black/[0.05]`)
- **Single Accent (Primary CTAs & Active States only):** `#0071E3` (hover `#0077ED`)
- **Frosted Glass (Sticky Navbar / Overlays):** `bg-white/75 backdrop-blur-xl border-b border-black/[0.06]`

## 3. Typography
- **Font Family:** `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", system-ui, sans-serif`
- **Hero H1:** `clamp(2.5rem, 5.5vw, 4.75rem)`, `font-semibold`, `tracking-[-0.035em]`, `leading-[1.05]`, `text-[#1D1D1F]`
- **Section H2:** `clamp(2rem, 3.8vw, 3.25rem)`, `font-semibold`, `tracking-[-0.025em]`, `leading-[1.1]`
- **Card / Subheading H3:** `1.25rem` to `1.5rem`, `font-semibold`, `tracking-[-0.02em]`, `leading-[1.2]`
- **Body Copy:** `1.0625rem` (`17px`), `leading-[1.47]`, `text-[#6E6E73]`, constrained to `max-w-[62ch]`
- **Eyebrow / Metadata:** `0.8125rem` (`13px`), `font-medium`, `tracking-[0.02em]`, `text-[#6E6E73]`
- **Numbers / Metrics / Prices:** Always apply `tabular-nums`.

## 4. Curves, Shadows & Spacing
- **Radii (Apple Soft Curves):**
  - Large feature frames / bento containers / sticky stages: `rounded-[28px]`
  - Standard cards & modals: `rounded-[20px]`
  - Inputs & inner pills: `rounded-[12px]`
  - Buttons & filter chips: `rounded-full`
- **Shadows (Strictly Soft & Diffused — NO default `shadow-lg` or `shadow-xl`):**
  - Resting Card: `shadow-[0_2px_12px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)]`
  - Hover / Elevated Card: `shadow-[0_12px_36px_rgba(0,0,0,0.07),0_2px_6px_rgba(0,0,0,0.03)]`
- **Vertical Rhythm:** `py-20 md:py-28 lg:py-32` per section. Max content width: `max-w-[1200px] mx-auto px-5 sm:px-8`.
- **Buttons (Strictly 2 Tiers):**
  - Primary: solid `#0071E3` (or `#1D1D1F`), white text, `rounded-full`, `h-11 px-6 text-[15px] font-medium`.
  - Secondary: subtle outline or ghost (`border border-black/[0.12] bg-white hover:bg-[#F5F5F7]`), `#1D1D1F` text, `rounded-full`.

## 5. Signature Section Designs
- **Sticky Navbar:** Single-row frosted glass bar (`h-14`). Desktop: brand left, clean links center, single primary CTA right. Mobile (below `md`): shadcn `Sheet` slide-over drawer.
- **Vision Pro-Style Scroll Showcase:**
  - Desktop (`md:` and up): Tall scroll runway (`h-[260vh]` to `h-[300vh]`) with a `sticky top-14 h-[calc(100vh-3.5rem)]` viewport.
  - Inside the stage: `rounded-[28px]` visual frame where multiple curated images smoothly crossfade (`opacity`) and gently scale (`1.06 -> 1.0`) driven by Framer Motion `useScroll` + `useTransform`, synced with crisp step captions and a subtle progress indicator.
  - Mobile (below `md`): Replace sticky scroll runway with a clean vertical stack of `whileInView` reveal cards so users never get trapped in awkward mobile scroll space.
- **Metrics Section (shadcn/ui):**
  - Built using shadcn `Card`, `Separator`, and `Badge` inside a clean `#F5F5F7` `rounded-[28px]` container or uniform card row.
  - Oversized `tabular-nums` stat (`text-4xl md:text-5xl font-semibold tracking-[-0.03em]`), crisp 1-line label, vertical `Separator` on desktop switching to horizontal on mobile.
- **Linear-Style Faded Property Listing Cards:**
  - Built using shadcn `Carousel`, `Card`, `Badge`, and `Dialog` (clicking a card opens full property specs in a clean modal).
  - Ordered horizontal track with subtle progressive visual focus: cards use `border border-black/[0.08] rounded-[20px] bg-white overflow-hidden`, resting at `opacity-80 hover:opacity-100 hover:-translate-y-1 transition-all duration-300`.
  - **Linear Image Fade:** Apply a smooth bottom fade mask on card imagery (`[mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]`) so images blend effortlessly into the card surface without harsh cut lines.
  - **Desktop Edge Fade:** Apply `[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]` on the desktop carousel viewport only; on mobile, disable edge mask and set slides to `basis-[85%]` so the next card peeks cleanly from the right.

## 6. Hard Anti-Slop Bans
- NEVER use purple/indigo/pink gradients, glowing buttons, dark neon themes, floating abstract blobs, or pulsing badges.
- NEVER stack generic 3-equal-icon-cards with circular colored icon backgrounds.
- NEVER use stiff/slow animations: keep UI transitions under `300ms` with `[0.22, 1, 0.36, 1]` easing, and respect `prefers-reduced-motion`.