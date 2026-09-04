import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SettingsProvider } from "@/context/SettingsContext";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { BlueprintGrid } from "@/components/BlueprintGrid";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Picsell Agency — Precision in progress",
  description: "Agence digitale — Kinshasa, RDC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SettingsProvider>
          <NoiseOverlay />
          <BlueprintGrid />
          {children}
        </SettingsProvider>
      </body>
    </html>
  );
}
