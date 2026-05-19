import { Montserrat, Open_Sans } from "next/font/google";

/** Headings — Montserrat Bold / SemiBold (brand guideline) */
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

/** Body — Open Sans Regular 400 */
export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const fontVariables = `${montserrat.variable} ${openSans.variable}`;
