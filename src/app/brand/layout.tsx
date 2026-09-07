import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Identity Guidelines — Picsell Agency | Standards & Palette",
  description:
    "Référence officielle de la marque Picsell Agency : logotype, palette chromatique interactive, spécimens typographiques et téléchargement du Brand Kit.",
  keywords: [
    "Picsell Brand Guidelines",
    "Identité Visuelle Picsell",
    "Logo Picsell Agency",
    "Palette de couleurs Picsell",
    "Typographie Sora Geist",
    "Precision in every pixel",
  ],
  openGraph: {
    title: "Brand Identity Guidelines — Picsell Agency",
    description:
      "Standards officiels de la marque, palette chromatique interactive et logotype vectoriel.",
    url: "https://picsell.agency/brand",
    siteName: "Picsell Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Identity Guidelines — Picsell Agency",
    description:
      "Standards officiels de la marque, palette chromatique interactive et logotype vectoriel.",
  },
};

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
