"use client";

import React, { useState } from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { Check, Copy } from "lucide-react";

interface ColorItem {
  hex: string;
  name: string;
  role: string;
  proportion: string;
  usage: string;
  isLight?: boolean;
}

const BRAND_COLORS: ColorItem[] = [
  {
    hex: "#0089D0",
    name: "Bleu Picsell",
    role: "Couleur Principale",
    proportion: "60% (avec Blanc Cassé)",
    usage: "Logo, titres, boutons principaux, accents structurels et éléments de confiance.",
  },
  {
    hex: "#3DBCC7",
    name: "Turquoise",
    role: "Couleur Secondaire",
    proportion: "30% (avec Orange)",
    usage: "Sous-titres, icônes tech, accents frais, tags de code et télémétrie IA.",
  },
  {
    hex: "#F37021",
    name: "Orange Énergie",
    role: "Couleur d'Action",
    proportion: "Action & CTA",
    usage: "Boutons d'appel à l'action majeurs, badges d'alerte, soulignements actifs.",
  },
  {
    hex: "#FDB913",
    name: "Jaune Doré",
    role: "Couleur Optimisme",
    proportion: "10% Accent",
    usage: "Mise en avant, reflets d'horlogerie, badges de certification et étoiles.",
    isLight: true,
  },
  {
    hex: "#1A1A1A",
    name: "Noir Charbon",
    role: "Couleur d'Ancrage",
    proportion: "Ancrage & Dark Mode",
    usage: "Corps de texte sur fond clair, fonds sombres profonds, structures d'interface.",
  },
  {
    hex: "#F0F2F5",
    name: "Blanc Cassé",
    role: "Couleur de Fond",
    proportion: "Respiration",
    usage: "Fonds neutres, cards contrastées, zones de respiration et documentation.",
    isLight: true,
  },
];

export function InteractiveColorPalette() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 2000);
  };

  return (
    <section id="palette-chromatique" className="py-24 md:py-36 px-6 bg-[#040507] text-white border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#0089d0] mb-4">
            <span>SYSTÈME CHROMATIQUE OFFICIEL</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            La Palette Chromatique Interactive
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Construite autour de quatre teintes vives tirées du logo et complétée par deux neutres structurants. Cliquez sur une carte pour copier son code HEX.
          </p>
        </div>

        {/* Colors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BRAND_COLORS.map((color) => {
            const isCopied = copiedHex === color.hex;

            return (
              <div
                key={color.hex}
                onClick={() => copyToClipboard(color.hex)}
                className="rounded-3xl border border-white/10 bg-white/[0.02] hover:border-white/30 transition-all p-6 cursor-pointer group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Color Swatch Header */}
                <div
                  className="h-32 rounded-2xl w-full mb-6 p-4 flex items-end justify-between transition-transform duration-300 group-hover:scale-[1.02] shadow-lg"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className={`font-mono text-xs font-black px-2.5 py-1 rounded-md backdrop-blur-md shadow ${
                      color.isLight ? "text-slate-950 bg-black/10" : "text-white bg-black/30"
                    }`}
                  >
                    {color.hex}
                  </span>

                  <button
                    aria-label={`Copier le code HEX de ${color.name}`}
                    className={`p-2 rounded-full transition-all backdrop-blur-md ${
                      isCopied
                        ? "bg-emerald-500 text-white"
                        : color.isLight
                        ? "bg-black/20 text-slate-900 hover:bg-black/30"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold font-sora text-white group-hover:text-[#fdb913] transition-colors">
                      {color.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {color.proportion}
                    </span>
                  </div>

                  <p className="text-xs font-mono font-semibold text-[#3dbcc7] mb-3">
                    {color.role}
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {color.usage}
                  </p>
                </div>

                {/* Copy feedback */}
                <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-500">
                    {isCopied ? "✓ Code HEX copié !" : "Cliquer pour copier"}
                  </span>
                  <span className="text-slate-400 uppercase">Picsell Palette</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 60-30-10 Rule Banner */}
        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div>
            <h4 className="font-sora font-bold text-white text-lg mb-1">Règle de Répartition 60 / 30 / 10</h4>
            <p className="text-xs text-slate-400 max-w-xl">
              60% Primaire (Bleu &amp; Blancs) &bull; 30% Secondaire (Turquoise &amp; Orange) &bull; 10% Accent (Jaune Doré &amp; Noir).
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-8 h-3 rounded-full bg-[#0089d0]" title="60% Primaire" />
            <span className="w-5 h-3 rounded-full bg-[#3dbcc7]" title="30% Secondaire" />
            <span className="w-3 h-3 rounded-full bg-[#fdb913]" title="10% Accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
