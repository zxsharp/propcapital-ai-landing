<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# AGENTS.md — Implementation & Engineering Rules

## 1. Single Source of Truth for Content
- `src/content.txt` contains the exact original website content.
- **DO NOT change, rewrite, shorten, or invent marketing copy, metrics, property names, or links.**
- First step: parse `src/content.txt` verbatim into a strongly typed `src/data/content.ts` module and import all UI text strictly from `src/data/content.ts`.
- If a screenshot shows content not present in `src/content.txt`, ask or place it cleanly in `src/data/content.ts` without inventing fake numbers.

## 2. How to Treat Attached Screenshots
- Attached screenshots are from the **old vibecoded website**.
- Use screenshots **ONLY** to understand the original site's information hierarchy, sections, and functional elements.
- **DO NOT** imitate the old site's colors, typography, spacing, borders, or messy layout. Always apply `DESIGN.md` + the user's section-wise design notes.

## 3. Tech Stack & Dependencies
- Inspect `package.json`, `globals.css`, and Tailwind version (v3 vs v4) before editing configs.
- Use **shadcn/ui** components for interactive primitives (`button`, `card`, `badge`, `separator`, `sheet`, `tabs`, `carousel`, `dialog`, `accordion`, `slider` as needed). Install missing shadcn components via CLI rather than hand-rolling broken equivalents.
- Use `framer-motion` for the scroll-linked showcase and subtle reveals, and `lucide-react` with a consistent `strokeWidth={1.75}` for icons.
- **STRICT Component Rule:** NEVER hand-roll modals, drawers, tabs, accordions, carousels, or buttons with raw `<div>`/`<button>` markup when a shadcn/ui primitive exists.
- **Inspect After Install:** After running `npx shadcn@latest add`, read the generated files in `src/components/ui/` before importing them so all props and exports match the installed version.
- **Style at the Primitive Level:** Update `src/components/ui/button.tsx` (pill `rounded-full`, Apple primary/secondary variants) and `src/components/ui/card.tsx` (`rounded-[20px]`, hairline border, soft diffused shadow from `DESIGN.md`) once so every usage stays 100% visually consistent automatically.
- **Carousel Arrow Safety:** Never leave `CarouselPrevious` / `CarouselNext` hanging outside the container (`-left-12` / `-right-12`). Place navigation arrows inline inside the section header (hidden on mobile where users swipe) so they never clip or trigger overflow.
- **Keep `ScrollShowcase` Simple:** Do not write complex pixel-calculated scroll math. Use Framer Motion `useScroll` + `useTransform` strictly for `opacity` and subtle `scale` (`1.05` to `1`) on stacked `absolute inset-0` images inside a `sticky` frame.

## 4. Clean, Reusable Architecture
- Build shared layout primitives first in `src/components/ui/layout-primitives.tsx`:
  - `Container` (consistent max-width and horizontal padding)
  - `Section` (consistent vertical rhythm + alternating surface prop `surface="white" | "tinted"`)
  - `SectionHeader` (consistent eyebrow, H2, and max-width description)
- Place each page section in its own clean file under `src/components/sections/` (e.g., `Navbar.tsx`, `Hero.tsx`, `ScrollShowcase.tsx`, `Metrics.tsx`, `PropertyListings.tsx`, etc.).
- Keep `page.tsx` (or `App.tsx`) clean and declarative—just composing the ordered sections.

## 5. Responsiveness & Sticky Scroll Safety (CRITICAL)
- **NEVER apply `overflow-x-hidden` to `html`, `body`, or `<main>`**—it breaks `position: sticky` for the Vision Pro scroll section. Always use `overflow-x-clip` instead.
- Design explicitly for three viewports: **Mobile (`390px`)**, **Tablet (`768px–1024px`)**, and **Desktop (`1280px–1440px`)**.
- Use explicit breakpoint swaps instead of shrinking desktop layouts (e.g., desktop navbar -> mobile `Sheet`; desktop sticky scroll -> mobile vertical stack; desktop multi-column -> clean 1-col / 2-col grids).
- Lock all imagery inside fixed `aspect-[16/10]`, `aspect-[4/3]`, or `aspect-square` containers with `object-cover` so cards stay uniform across breakpoints.
- For external architectural images, use reliable high-res Unsplash URLs (or local assets if present in `/public`) and either configure `next.config.*` `images.remotePatterns` or use clean responsive `<img>` elements so Next.js never throws a runtime image hostname error.

## 6. Verification Before Completion
- After writing code, run the project's build/typecheck (`npm run build` or `npx tsc --noEmit`) and fix every TypeScript, lint, or import error.
- Verify zero unused imports, zero hardcoded duplicated copy outside `src/data/content.ts`, and zero horizontal overflow.
