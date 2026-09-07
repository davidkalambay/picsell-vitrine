import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Ingénierie — Picsell Agency | Haute Précision & Stratégie",
  description:
    "Bibliothèque d'ingénierie appliquée, retours d'expérience Next.js, modélisation n8n et tactiques de conversion cookieless par les maîtres-horlogers de Picsell Agency.",
  keywords: [
    "Picsell Insights",
    "Ingénierie Logicielle Blog",
    "Architecture Next.js 15",
    "Automatisation IA n8n",
    "Marketing Cookieless",
    "David Kalambay",
    "Jean-Luc Mukendi",
  ],
  openGraph: {
    title: "Insights & Ingénierie — Picsell Agency",
    description:
      "Articles de fond, patterns de code et stratégies d'accélération commerciale pour les fondateurs et décideurs techniques.",
    url: "https://picsell.agency/insights",
    siteName: "Picsell Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Ingénierie — Picsell Agency",
    description:
      "Articles de fond, patterns de code et stratégies d'accélération commerciale.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
