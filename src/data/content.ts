/**
 * Verbatim website content parsed from src/data/content.txt
 * SINGLE SOURCE OF TRUTH: Do not edit, shorten, or alter strings.
 */

export const SITE_METADATA = {
  name: "PropCapital.ai",
  short: "PC",
  logoPrefix: "PropCapital",
  logoSuffix: ".ai",
  tagline: "NCR's smartest property platform.",
  fullDescription:
    "India's AI-powered real estate platform — search, match, and invest with confidence across Gurugram, Faridabad and Noida.",
  disclaimer:
    "PropCapital.ai is NCR's dedicated AI-powered real estate platform specialising in residential and commercial property in Gurugram, Faridabad, and Noida. We offer RERA-verified listings, AI property matching, NRI services, free home loan assistance, and end-to-end buying support — all at zero brokerage for buyers. Key areas: Golf Course Road, DLF Phase 5, Dwarka Expressway, Sohna Road, NIT Faridabad, Sector 86, Sector 150 Noida, Greater Noida West.",
  copyright: "© 2026 PropCapital.ai All rights reserved.",
  bottomLinks: ["Privacy Policy", "Terms of Use", "Contact Us", "About PropCapital"],
};

export const NAV_LINKS = [
  { name: "AI Match", href: "#ai-match" },
  { name: "Buyers", href: "#buyers" },
  { name: "Sellers", href: "#sellers" },
  { name: "NRIs", href: "#nris" },
  { name: "Project Hub", href: "#project-hub" },
  { name: "Estatepreneur", href: "#estatepreneur" },
  { name: "Platform", href: "#platform" },
  { name: "Tools", href: "#tools" },
  { name: "Media", href: "#media" },
];

export const NAV_CTA = {
  text: "List Your Property",
  badge: "Free",
  href: "#list-property",
  loginText: "Login",
  loginHref: "#login",
};

export const HERO_CONTENT = {
  nriPill: {
    text: "Living abroad? Explore the NRI Hub",
    href: "#nris",
  },
  title: "NCR's smartest property platform.",
  subtitle:
    "250+ verified listings across Gurugram, Faridabad & Noida — AI-matched to your goals.",
  searchPlaceholder: "Ask IRA — budget, city, BHK…",
  searchButton: "Ask PropCapital",
  promptChips: [
    "Sell my 3 BHK in DLF 5",
    "New launches in Sector 150, Noida",
    "RERA-verified plots in Faridabad",
  ],
  quickStats: [
    { value: "250+", label: "Properties listed" },
    { value: "0+", label: "Verified consultants" },
    { value: "3", label: "NCR cities covered" },
  ],
  skylineCaption: "NCR skyline · Unsplash",
};

export const SCROLL_SHOWCASE_CONTENT = {
  eyebrow: "AI-Powered · Smart Match",
  title: "Your next home, matched in 30 seconds.",
  subtitle:
    "Stop scrolling. Tell IRA what matters — your budget, your area, the life you want — and watch every NCR listing get scored and ranked for you, live.",
  features: [
    {
      title: "Ask anything. No limits.",
      description:
        "Budget, builder, ROI, lifestyle, possession, resale — IRA understands it all.",
    },
    {
      title: "Every parameter that matters.",
      description:
        "Thousands of data points weighed toward one goal — your right match.",
    },
    {
      title: "100% personalized.",
      description:
        "Each result is uniquely ranked for you — never just a generic filter.",
    },
  ],
  ctaText: "Start AI Match",
  chatPreview: {
    badge: "Chat with IRA",
    secondaryTab: "Quick Form",
    botName: "IRA — Property Finder",
    botStatus: "Describe what you need · I'll find it instantly",
    welcomeMessage:
      "Hi! I'm IRA, your AI property consultant. Tell me exactly what you're looking for and I'll find the best matches right away.",
    examplesHeading: "For example:",
    examples: [
      "3 BHK in Gurugram under ₹2 Cr, ready to move",
      "Investment flat in Noida ₹1–2 Cr near metro",
    ],
    inputPlaceholder: "Ask IRA — budget, city, BHK…",
    emptyStateTitle: "Ready when you are",
    emptyStateSubtitle: "No results yet",
    emptyStateDescription:
      "Describe what you're looking for in the chat — your AI-scored matches appear right here.",
    suggestedChips: [
      "Family home near top schools, ~₹4 Cr",
      "Highest rental yield under ₹3 Cr",
      "Quiet, green, ready-to-move 3 BHK",
    ],
  },
  showcaseSteps: [
    {
      step: "01",
      eyebrow: "Step 01 · Smart Profiling",
      heading: "Define your dream criteria with IRA.",
      description:
        "Budget, builder, ROI, lifestyle, possession, resale — IRA understands it all.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    },
    {
      step: "02",
      eyebrow: "Step 02 · Deep Scanning",
      heading: "Thousands of verified NCR listings scanned.",
      description:
        "Thousands of data points weighed toward one goal — your right match.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    },
    {
      step: "03",
      eyebrow: "Step 03 · AI Scoring & Ranking",
      heading: "Uniquely ranked in 30 seconds.",
      description:
        "Each result is uniquely ranked for you — never just a generic filter.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    },
  ],
};

export const METRICS_CONTENT = {
  eyebrow: "PC PropCapital.ai",
  badge: "Verified Consultants & Platforms",
  stats: [
    { value: "100%", label: "Verified Consultants" },
    { value: "50,000+", label: "Happy Clients" },
    { value: "End-to-End", label: "Management" },
    { value: "Transparent", label: "& Secure" },
    { value: "4.8", label: "Client Rating" },
  ],
  supportBanner: {
    heading: "We're here, whenever you need us.",
    cta: "Contact our team",
  },
};

export const HOW_IT_WORKS_CONTENT = {
  eyebrow: "HOW IT WORKS",
  heading: "Your journey from search to satisfaction.",
  totalStages: "06",
  stages: [
    {
      step: "01",
      title: "AI Match & Discovery",
      description:
        "Our AI scans thousands of RERA-verified listings and surfaces the homes that fit your budget, location and lifestyle — in seconds, not weeks.",
      insideHeader: "INSIDE THIS STAGE",
      highlights: [
        {
          title: "Smart preference profile",
          text: "Budget, locality, lifestyle and timeline mapped in minutes.",
        },
        {
          title: "12,000+ verified listings",
          text: "Only RERA-checked inventory ever reaches your feed.",
        },
        {
          title: "Instant match score",
          text: "Every home ranked by how well it fits you.",
        },
      ],
      callout: "12,000+ RERA-verified homes scanned for you",
    },
    {
      step: "02",
      title: "Expert Consultation",
      description:
        "Connect with verified local consultants who understand the micro-market nuances of your chosen sectors.",
      insideHeader: "INSIDE THIS STAGE",
      highlights: [],
    },
    {
      step: "03",
      title: "Shortlist & Compare",
      description:
        "Side-by-side comparison of amenities, floor plans, developer track record, and genuine ROI projections.",
      insideHeader: "INSIDE THIS STAGE",
      highlights: [],
    },
    {
      step: "04",
      title: "End-to-End Management",
      description:
        "Site visits, price negotiations, documentation, and home loan sanction handled seamlessly by our team.",
      insideHeader: "INSIDE THIS STAGE",
      highlights: [],
    },
    {
      step: "05",
      title: "After-Sales Support",
      description:
        "Registration assistance, possession handover checks, and snagging inspection before key handover.",
      insideHeader: "INSIDE THIS STAGE",
      highlights: [],
    },
    {
      step: "06",
      title: "Lifetime Relationship",
      description:
        "Portfolio tracking, rental assistance, resale valuation, and continuous market intelligence.",
      insideHeader: "INSIDE THIS STAGE",
      highlights: [],
    },
  ],
};

export const CONFIGURATION_CONTENT = {
  eyebrow: "By configuration",
  heading: "Unlock your dream home: choose the perfect option",
  subtext: "A space tailored for your comfort.",
  items: [
    {
      title: "1 BHK",
      count: "19 Properties",
      floorPlan: "1 BHK floor plan",
      linkText: "Explore",
    },
    {
      title: "2 BHK",
      count: "113 Properties",
      floorPlan: "2 BHK floor plan",
      tag: "Most popular",
      linkText: "Explore",
    },
    {
      title: "3 BHK",
      count: "101 Properties",
      floorPlan: "3 BHK floor plan",
      linkText: "Explore",
    },
    {
      title: "4 BHK",
      count: "15 Properties",
      floorPlan: "4 BHK floor plan",
      linkText: "Explore",
    },
    {
      title: "4 BHK+",
      count: "16 Properties",
      floorPlan: "4 BHK+ floor plan",
      linkText: "Explore",
    },
  ],
  fallbackCta: {
    question: "Not sure which configuration fits you?",
    text: "Let AI find the perfect match for your needs.",
    button: "Find Your Match",
  },
};

export const DEVELOPERS_CONTENT = {
  eyebrow: "Top Developers",
  heading: "Builders who are changing the game",
  subtext: "Meet the builders behind NCR's most coveted addresses.",
  allLink: "All developers",
  overviewStats: [
    { value: "50+", label: "Developers" },
    { value: "1,200+", label: "Projects" },
    { value: "4.8", label: "Average Rating" },
    { value: "₹2 Cr", label: "Starting Price" },
  ],
  developers: [
    {
      initials: "BL",
      name: "BPTP Limited",
      projectsCount: "8 Projects",
      tags: ["Residential", "Affordable", "Townships"],
      featuredHeading: "Featured Projects",
      featuredProjects: ["BPTP Discovery Park", "BPTP Park Grandeura", "BPTP District 1"],
      priceNote: "₹55 Lakh onwards",
      cta: "View Projects",
    },
    {
      initials: "AR",
      name: "Adore Realtech Pvt Ltd",
      projectsCount: "4 Projects",
      tags: ["Residential", "Affordable"],
      featuredHeading: "Featured Projects",
      featuredProjects: ["Adore Samriddhi", "Adore Happy Homes Exclusive Phase 2", "Adore Happy Homes Pride"],
      priceNote: "₹22 Lakh onwards",
      cta: "View Projects",
    },
    {
      initials: "SG",
      name: "Signature Global",
      projectsCount: "4 Projects",
      tags: ["Residential", "Affordable"],
      featuredHeading: "Featured Projects",
      featuredProjects: ["Signature Global Aspire", "Signature Global Grand IVA", "Signature Global The Millennia 3"],
      priceNote: "₹32 Lakh 40K onwards",
      cta: "View Projects",
    },
  ],
};

export const BUDGET_CONTENT = {
  eyebrow: "By budget",
  heading: "A dream home within your budget — yes, it's possible!",
  subtext: "Explore homes that match your financial comfort.",
  tiers: [
    {
      title: "Value Homes",
      description: "Smart homes in prime Gurugram locations that fit your budget.",
      priceRange: "Up to ₹1.2 Cr",
      cta: "Explore Homes",
    },
    {
      title: "Contemporary Homes",
      description: "Modern living with the perfect balance of comfort and value.",
      priceRange: "₹1.2 Cr – ₹2.5 Cr",
      cta: "Explore Homes",
    },
    {
      title: "Premium Luxury Homes",
      description: "Exquisite homes for those who want the very best.",
      priceRange: "Above ₹2.5 Cr",
      cta: "Explore Homes",
    },
  ],
  footerNote: "Proudly featuring homes across Gurugram's Golf Course Road, SPR, Dwarka Expressway & more.",
};

export const TIMELINE_CONTENT = {
  eyebrow: "By timeline",
  heading: "Timing is everything: choose when to move",
  subtext: "Your dream home, delivered on your timeline.",
  items: [
    { title: "Ready to Move", count: "176 Properties" },
    { title: "Under Construction", count: "60 Properties" },
    { title: "New Launch", count: "14 Properties" },
  ],
};

export const WHAT_WE_OFFER_CONTENT = {
  eyebrow: "What We Offer",
  heading: "Every property need, one platform.",
  allServicesLink: "All services",
  services: [
    {
      title: "Buy a Home",
      tag: "12,000+ listings",
      description: "RERA-verified listings in Gurugram, Faridabad & Noida. AI-matched to your goals.",
      cta: "Browse Properties",
    },
    {
      title: "Commercial",
      tag: "High-yield",
      description: "Offices, retail & warehouses across NCR.",
      cta: "Explore",
    },
    {
      title: "Invest & Grow",
      tag: "7–12% avg returns",
      description: "Learn more",
      cta: "Learn more",
    },
    {
      title: "Buy in India from anywhere",
      tag: "NRI Property Platform",
      description: "Virtual visits · FEMA guide · NRI loans",
      cta: "NRI Hub",
    },
  ],
};

export const LOCALITIES_CONTENT = {
  eyebrow: "Explore by Area",
  heading: "Top localities in Gurugram.",
  allLink: "All listings",
  localities: [
    { name: "Golf Course Road", category: "Gurugram · Luxury", count: "1,800+ listings" },
    { name: "Dwarka Expressway", category: "Gurugram · Growth Corridor", count: "2,400+ listings" },
    { name: "Sohna Road", category: "Gurugram · Mid-Premium", count: "1,600+ listings" },
    { name: "DLF Phase 5", category: "Gurugram · Ultra Luxury", count: "920+ listings" },
    { name: "Golf Course Ext. Road", category: "Gurugram · New Luxury", count: "1,400+ listings" },
    { name: "Southern Peripheral Rd", category: "Gurugram · Emerging", count: "1,150+ listings" },
    { name: "New Gurugram", category: "Gurugram · Value", count: "1,300+ listings" },
    { name: "MG Road", category: "Gurugram · Established", count: "780+ listings" },
  ],
  footerCta: "All Gurugram listings",
};

export const TOOLS_CONTENT = {
  eyebrow: "Free Tools",
  heading: "Make smarter decisions with better numbers.",
  allLink: "All calculators",
  tools: [
    {
      title: "EMI Calculator",
      description: "Know your exact monthly home loan payment before you commit. Adjust rate, tenure, and amount in real time.",
      badge: "Up to ₹5 Cr loans",
    },
    {
      title: "Stamp Duty",
      description: "Stamp duty rates vary by state — Haryana, UP, Delhi all differ. Calculate your exact registration cost.",
      badge: "All states covered",
    },
    {
      title: "NRI Cost Calculator",
      description: "Know your true all-in cost as an NRI — stamp duty, GST, LTCG on resale, TDS, and repatriation limits.",
      badge: "NRI-specific",
    },
  ],
};

export const NRI_PLATFORM_CONTENT = {
  eyebrow: "NRI Property Platform",
  heading: "Living abroad? Buy in India from anywhere.",
  subtext: "India's NRI property platform — RERA-verified listings and a dedicated NRI team, wherever you are.",
  countries: ["UAE", "USA", "UK", "Singapore", "Canada", "Australia", "Qatar", "Germany", "+8 more"],
  cta: "Explore NRI Hub",
  cardsHeading: "Everything NRIs need · One platform",
  cards: [
    { title: "NRI Cost Calculator", subtitle: "True all-in cost: TDS + LTCG" },
    { title: "RERA-Verified Listings", subtitle: "Every property, cross-checked" },
    { title: "Talk to our NRI team", subtitle: "FEMA, financing & buying questions" },
  ],
  statBox: {
    value: "₹5,250 Cr",
    label: "DLF NRI sales in FY2025 · 32% of total revenue",
  },
};

export const WHY_PROPCAPITAL_CONTENT = {
  eyebrow: "Why PropCapital",
  heading: "More than a listing portal.",
  subtext: "India has dozens of property portals. Here's why 25,000+ families chose PropCapital.",
  trustedBadge: "Trusted platform",
  trustedStat: "25,000+ families found their home here.",
  points: [
    {
      title: "End-to-end, not just search",
      description:
        "Most portals stop at a phone number. PropCapital covers AI matching, verified consultants, home loans, and NRI services — everything under one platform.",
    },
    {
      title: "RERA-verified listings only",
      description: "Every single project is vetted against Haryana and UP RERA records before listing.",
    },
    {
      title: "AI that understands you",
      description: "Proprietary recommendation engine that learns your lifestyle and financial parameters.",
    },
  ],
  cta: "Our story & mission",
};

export const SELL_RENT_CONTENT = {
  eyebrow: "Sell or Rent Faster",
  heading: "List your property. ₹0 listing fee.",
  description:
    "Our listing experts call you within 2 hours, arrange free HD photography, and syndicate your property across 20+ platforms. You get enquiries — we handle the rest.",
  bullets: [
    "Free HD photography",
    "Reach buyers across Gurugram, Faridabad & Noida",
    "Real-time enquiry analytics",
  ],
  buttons: [
    { text: "List for Free", primary: true },
    { text: "Talk to a Consultant", primary: false },
  ],
  stats: [
    { value: "Free", label: "Professional HD photography" },
    { value: "2 hrs", label: "Average response time from our team" },
    { value: "20+", label: "Portals your listing appears on" },
    { value: "48 hrs", label: "Average time to first enquiry" },
  ],
};

export const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: ["PropCapital CRM", "Broker CRM", "Builder CRM", "Integrations", "Mobile app", "Book a demo"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blogs & Insights", "Videos", "Property Maps", "Developer Directory", "Estatepreneur", "Contact Us", "Privacy Policy", "Terms of Use"],
  },
  {
    title: "Properties",
    links: ["Buy a Home", "Commercial", "New Projects", "Plot & Land", "List Your Property"],
  },
  {
    title: "Services",
    links: ["AI Property Match", "All Services", "Home Loans", "Smart Match"],
  },
  {
    title: "NRI Services",
    links: ["NRI Hub", "NRI Cost Calculator", "Talk to our NRI team"],
  },
  {
    title: "Calculators",
    links: ["EMI Calculator", "Stamp Duty", "NRI Cost Calculator"],
  },
];
