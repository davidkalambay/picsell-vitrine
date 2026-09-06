import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Quicksand } from "next/font/google";
import { SettingsProvider } from "@/context/SettingsContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { BlueprintGrid } from "@/components/BlueprintGrid";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { EcoModeNotification } from "@/components/EcoModeNotification";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  weight: ["400", "600", "700", "800"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  weight: ["500", "700"],
});

export const metadata: Metadata = {
  title: "Picsell Agency — Precision in Progress | Haute Ingénierie & Automatisation IA",
  description: "Bureau d'ingénierie logicielle et de marketing de précision horlogère à Kinshasa, RDC. Next.js 15, IA multimodale, orchestration n8n et architecture cookieless.",
  keywords: ["Picsell Agency", "David Kalambay", "Ingénierie logicielle Kinshasa", "Next.js RDC", "Automatisation IA n8n", "Marketing de précision", "Horlogerie logicielle"],
  authors: [{ name: "David Kalambay", url: "https://picsell.agency" }],
  openGraph: {
    title: "Picsell Agency — Precision in Progress",
    description: "Bureau d'ingénierie logicielle et de marketing de précision horlogère à Kinshasa, RDC.",
    url: "https://picsell.agency",
    siteName: "Picsell Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Picsell Agency — Precision in Progress",
    description: "Bureau d'ingénierie logicielle et de marketing de précision horlogère.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <JsonLdSchema />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${quicksand.variable} antialiased`}
      >
        {/* WCAG 2.1 AA: Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#fdb913] focus:text-slate-950 focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Aller au contenu principal
        </a>

        <SettingsProvider>
          <SmoothScrollProvider>
            <NoiseOverlay />
            <BlueprintGrid />
            <EcoModeNotification />
            {children}
          </SmoothScrollProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
