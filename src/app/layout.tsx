import type { Metadata } from "next";
import { Sora, Quicksand } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
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
    <html lang="fr" className={`${sora.variable} ${quicksand.variable}`}>
      <body className="antialiased bg-white selection:bg-blue/10">
        <Navbar />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      </body>
    </html>
  );
}
