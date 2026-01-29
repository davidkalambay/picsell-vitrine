import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ClientTracker } from "@/components/animations/ClientTracker";
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
  title: "Picsell.Agency | Haute Horlogerie Digitale",
  description: "Agence boutique spécialisée dans le développement web premium, le marketing digital (AEO) et l'automatisation de workflows. Excellence technique et précision suisse.",
  keywords: ["Développement Web", "Marketing Digital", "AEO", "Automatisation", "Next.js", "GSAP", "Luxury Tech"],
  authors: [{ name: "David" }],
  openGraph: {
    title: "Picsell.Agency | Haute Horlogerie Digitale",
    description: "Expertise technique et précision pour vos projets digitaux.",
    url: "https://picsell.agency",
    siteName: "Picsell Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Picsell.Agency | Haute Horlogerie Digitale",
    description: "Expertise technique et précision pour vos projets digitaux.",
  },
  alternates: {
    canonical: "https://picsell.agency",
  },
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
        {children}
        <ClientTracker />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
