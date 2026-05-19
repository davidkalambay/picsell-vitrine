/**
 * Picsell Design System — configuration surface
 *
 * Theme tokens (colors, fonts, CTA utilities) are defined in `src/app/globals.css`
 * via Tailwind v4 `@theme` and `@layer components`.
 *
 * Reference: docs/picsell-brand-guideline.md
 * Color hierarchy (60/30/10): ~60% bleu + blanc/clair, ~30% orange + turquoise, ~10% jaune + noir
 *
 * Forbidden palette (removed): Midnight Luxury gold #D4AF37, steel #E5E4E2
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;
