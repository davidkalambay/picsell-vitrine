"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { MagneticButton } from "@/components/interactions/MagneticButton";
import { Download } from "lucide-react";

export function BrandHero() {
  const handleDownloadBrandKit = () => {
    // Generate a downloadable JSON/TXT of the Brand Guidelines summary
    const brandKitData = {
      brand: "Picsell Agency",
      tagline: "Precision in every pixel",
      signature: "</> Precision in every pixel",
      positioning: "Accélérateur de vente & Haute horlogerie logicielle",
      colors: {
        primary: { name: "Bleu Picsell", hex: "#0089D0", role: "Couleur principale (60%)" },
        secondary: { name: "Turquoise", hex: "#3DBCC7", role: "Couleur tech & fraîcheur (30%)" },
        action: { name: "Orange Énergie", hex: "#F37021", role: "CTA & alertes" },
        accent: { name: "Jaune Doré", hex: "#FDB913", role: "Optimisme & highlight (10%)" },
        dark: { name: "Noir Charbon", hex: "#1A1A1A", role: "Ancrage & fonds sombres" },
        light: { name: "Blanc Cassé", hex: "#F0F2F5", role: "Respiration & fonds clairs" },
      },
      typography: {
        brand: "ITC Bauhaus",
        headings: "Montserrat / Sora",
        body: "Geist Sans / Inter",
        code: "Geist Mono / JetBrains Mono",
      },
    };

    const blob = new Blob([JSON.stringify(brandKitData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "picsell-brand-kit-guidelines.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-6 bg-radial-vignette text-white border-b border-white/5">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Origin Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#fdb913] mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(253,185,19,0.15)]">
          <span className="w-2 h-2 rounded-full bg-[#fdb913] animate-pulse" />
          <span>BRAND IDENTITY GUIDELINES &bull; VERSION 1.0</span>
        </div>

        {/* Main Title */}
        <SplitTextReveal
          as="h1"
          trigger="mount"
          stagger={0.03}
          duration={0.7}
          flavor="clockwork"
          className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] font-sora"
        >
          L&apos;Identité Visuelle &amp; les Standards de la Marque.
        </SplitTextReveal>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
          La référence officielle de l&apos;identité visuelle, de la palette chromatique, des déclinaisons du logo et du système typographique de <strong className="text-white">Picsell Agency</strong>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton
            href="#palette-chromatique"
            strength={0.3}
            textStrength={0.15}
            className="px-7 py-3.5 rounded-full text-sm font-bold bg-[#fdb913] text-slate-950 hover:bg-[#e5a60e] hover:shadow-[0_0_25px_rgba(253,185,19,0.4)] transition-all shadow-lg"
          >
            Explorer la Palette Chromatique ↓
          </MagneticButton>

          <button
            onClick={handleDownloadBrandKit}
            className="px-7 py-3.5 rounded-full text-sm font-bold border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/40 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <Download className="w-4 h-4 text-[#3dbcc7]" />
            <span>Télécharger le Brand Kit (JSON)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
