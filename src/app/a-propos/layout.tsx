import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de Picsell Agency — Haute Horlogerie Logicielle & ADN Kinshasa",
  description:
    "Découvrez le manifeste du calibre numérique, notre ancrage à Kinshasa et le leadership de David Kalambay & Jean-Luc Mukendi. Zéro dette technique, 99.9% d'uptime garanti.",
  keywords: [
    "Picsell Agency À Propos",
    "David Kalambay",
    "Jean-Luc Mukendi",
    "Horlogerie Logicielle Kinshasa",
    "Méthode BMAD",
    "Ingénierie Logicielle RDC",
    "Automatisation IA n8n",
  ],
  openGraph: {
    title: "À Propos de Picsell Agency — Haute Horlogerie Logicielle",
    description:
      "Le manifeste du calibre numérique et l'art de la haute précision appliqué aux systèmes logiciels et au marketing.",
    url: "https://picsell.agency/a-propos",
    siteName: "Picsell Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "À Propos de Picsell Agency — Haute Horlogerie Logicielle",
    description: "Le manifeste du calibre numérique et l'art de la haute précision.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
