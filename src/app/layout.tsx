import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora, Quicksand } from "next/font/google";
import { SettingsProvider } from "@/context/SettingsContext";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { BlueprintGrid } from "@/components/BlueprintGrid";
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
  title: "Picsell Agency",
  description: "Picsell Agency — Precision in progress. Agence digitale à Kinshasa, RDC avec scrollytelling et interface dynamique.",
  openGraph: {
    title: "Picsell Agency",
    description: "Picsell Agency — Precision in progress. Agence digitale à Kinshasa, RDC avec scrollytelling et interface dynamique.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${quicksand.variable} antialiased`}
      >
        <SettingsProvider>
          <SmoothScrollProvider>
            <NoiseOverlay />
            <BlueprintGrid />
            {children}
          </SmoothScrollProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
