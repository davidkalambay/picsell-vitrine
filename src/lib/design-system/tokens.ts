/**
 * Picsell Agency — Design System Tokens
 * Source: 100% Extraction from Active Codebase (Next.js 16, GSAP 3.14, Lenis, Tailwind v4)
 * Architecture: Swiss Clockwork & Glass-Engine Vitrine
 */

export const CODE_COLORS = {
  // Brand Color Variables (as defined across gears.config.ts and CSS)
  blue: {
    DEFAULT: "#0089d0",
    var: "var(--pic-blue, #0089d0)",
    name: "Picsell Blue",
    rgb: "0, 137, 208",
    bgSubtle: "rgba(0, 137, 208, 0.08)",
    border: "rgba(0, 137, 208, 0.3)",
    glow: "rgba(0, 137, 208, 0.65)",
  },
  turquoise: {
    DEFAULT: "#3dbcc7",
    var: "var(--pic-turquoise, #3dbcc7)",
    name: "Picsell Turquoise",
    rgb: "61, 188, 199",
    bgSubtle: "rgba(61, 188, 199, 0.08)",
    border: "rgba(61, 188, 199, 0.3)",
    glow: "rgba(61, 188, 199, 0.65)",
  },
  orange: {
    DEFAULT: "#f37021",
    var: "var(--pic-orange, #f37021)",
    name: "Picsell Orange",
    rgb: "243, 112, 33",
    bgSubtle: "rgba(243, 112, 33, 0.08)",
    border: "rgba(243, 112, 33, 0.3)",
    glow: "rgba(243, 112, 33, 0.65)",
  },
  gold: {
    DEFAULT: "#fdb913",
    var: "var(--pic-gold, #fdb913)",
    name: "Picsell Gold",
    rgb: "253, 185, 19",
    bgSubtle: "rgba(253, 185, 19, 0.08)",
    border: "rgba(253, 185, 19, 0.3)",
    glow: "rgba(253, 185, 19, 0.65)",
  },
  // Backgrounds & Surface Themes
  charcoal: {
    DEFAULT: "#1a1a1a",
    var: "var(--pic-charcoal, #1a1a1a)",
    textDark: "#1a1a1a",
  },
  obsidian: {
    DEFAULT: "#06070a",
    drawer: "#090a10",
    navbarDark: "#090a0f",
    aiCore: "#1e212b",
    aiStroke: "#333846",
    textLight: "#f4f4f6",
    textMuted: "#E5E4E2",
  },
  white: {
    DEFAULT: "#ffffff",
    slate50: "#f8fafc",
    slate100: "#f1f5f9",
    slate200: "#e2e8f0",
    slate600: "#475569",
    slate900: "#0f172a",
  },
} as const;

export const SERVICE_MODULES = {
  marketing: {
    id: "marketing",
    number: "01",
    name: "Digital Marketing",
    subName: "GROWTH_SYS",
    color: "#f37021",
    colorVar: "var(--pic-orange, #f37021)",
    teeth: 12,
    radius: 85,
    glowColor: "rgba(243, 112, 33, 0.65)",
    gradient: "linear-gradient(135deg, #f37021 0%, #fdb913 50%, #ff3b00 100%)",
    cardBg: "from-[rgba(243,112,33,0.1)] via-white/[0.04] to-transparent",
    borderColor: "border-[var(--pic-orange,#f37021)]/40",
    shadow: "shadow-[0_20px_50px_rgba(243,112,33,0.15)]",
  },
  automation: {
    id: "automation",
    number: "02",
    name: "Process Automation",
    subName: "AUTO_FLOW",
    color: "#3dbcc7",
    colorVar: "var(--pic-turquoise, #3dbcc7)",
    teeth: 10,
    radius: 70,
    glowColor: "rgba(61, 188, 199, 0.65)",
    gradient: "linear-gradient(135deg, #3dbcc7 0%, #0089d0 50%, #00ffa2 100%)",
    cardBg: "from-[rgba(61,188,199,0.1)] via-white/[0.04] to-transparent",
    borderColor: "border-[var(--pic-turquoise,#3dbcc7)]/40",
    shadow: "shadow-[0_20px_50px_rgba(61,188,199,0.15)]",
  },
  development: {
    id: "development",
    number: "03",
    name: "Modern Engineering",
    subName: "STACK_V4",
    color: "#0089d0",
    colorVar: "var(--pic-blue, #0089d0)",
    teeth: 14,
    radius: 90,
    glowColor: "rgba(0, 137, 208, 0.65)",
    gradient: "linear-gradient(135deg, #0089d0 0%, #7c3aed 50%, #3dbcc7 100%)",
    cardBg: "from-[rgba(0,137,208,0.1)] via-white/[0.04] to-transparent",
    borderColor: "border-[var(--pic-blue,#0089d0)]/40",
    shadow: "shadow-[0_20px_50px_rgba(0,137,208,0.15)]",
  },
  data: {
    id: "data",
    number: "04",
    name: "Data Intelligence",
    subName: "INSIGHTS",
    color: "#fdb913",
    colorVar: "var(--pic-gold, #fdb913)",
    teeth: 16,
    radius: 100,
    glowColor: "rgba(253, 185, 19, 0.65)",
    gradient: "linear-gradient(135deg, #fdb913 0%, #f37021 50%, #ffea79 100%)",
    cardBg: "from-[rgba(253,185,19,0.1)] via-white/[0.04] to-transparent",
    borderColor: "border-[var(--pic-gold,#fdb913)]/40",
    shadow: "shadow-[0_20px_50px_rgba(253,185,19,0.15)]",
  },
} as const;

export const TYPOGRAPHY_TOKENS = {
  sora: "var(--font-sora), system-ui, sans-serif",
  quicksand: "var(--font-quicksand), system-ui, sans-serif",
  mono: "var(--font-mono), ui-monospace, monospace",
} as const;

export const RADII_TOKENS = {
  full: "9999px", // Utilisé pour tous les boutons principaux, badges, navbar pill, settings button
  "3xl": "1.5rem", // 24px - Cartes scrollytelling
  "2xl": "1rem", // 16px - Tiroir de réglages & onglets
  xl: "0.75rem", // 12px - Boutons d'onglets, boîtes de code
  lg: "0.5rem",
} as const;
