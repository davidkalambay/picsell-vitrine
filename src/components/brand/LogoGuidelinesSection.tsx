"use client";

import React from "react";
import { SplitTextReveal } from "@/components/animations/SplitTextReveal";
import { Download } from "lucide-react";

export function LogoGuidelinesSection() {
  const downloadLogoSvg = () => {
    const svgContent = `<svg viewBox="0 0 2481 3508" xmlns="http://www.w3.org/2000/svg">
  <g transform="matrix(4.166667,0,0,4.166667,0,0)">
    <rect x="0" y="0" width="595.28" height="841.89" fill="none" />
    <g>
      <g transform="matrix(1,0,0,1,297.64,821.4851)">
        <path d="M0,-266.866L-266.866,-266.866C-266.866,-119.48 -147.386,0 0,0L0,-266.866Z" fill="#1A1A1A"/>
      </g>
      <g transform="matrix(1,0,0,1,0,-0.482)">
        <rect x="30.774" y="287.753" width="266.866" height="266.866" fill="#0089D0"/>
      </g>
      <g transform="matrix(1,0,0,1,297.64,20.4049)">
        <path d="M0,266.866L266.866,266.866C266.866,119.48 147.386,0 0,0L0,266.866Z" fill="#FDB913"/>
      </g>
      <g transform="matrix(1,0,0,1,297.64,20.4049)">
        <path d="M0,266.866L-266.866,266.866C-266.866,119.48 -147.386,0 0,0L0,266.866Z" fill="#3DBCC7"/>
      </g>
      <g transform="matrix(1,0,0,1,297.64,287.271)">
        <path d="M0,0L266.866,0C266.866,147.386 147.386,266.866 0,266.866L0,0Z" fill="#F37021"/>
      </g>
    </g>
  </g>
</svg>`;

    const blob = new Blob([svgContent], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "picsell-logo-official.svg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="logo-guidelines" className="py-24 md:py-36 px-6 bg-[#06070a] text-white border-b border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#f37021] mb-4">
            <span>LE LOGOTYPE OFFICIEL</span>
          </div>
          <SplitTextReveal
            as="h2"
            trigger="scroll"
            stagger={0.03}
            duration={0.6}
            flavor="clockwork"
            className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight font-sora"
          >
            Déclinaisons &amp; Règles d&apos;Usage du Logo
          </SplitTextReveal>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Le &ldquo;P&rdquo; stylisé de Picsell Agency s&apos;articule autour d&apos;un obturateur à quatre quadrants chromatiques. Il doit toujours être reproduit avec une clarté absolue.
          </p>
        </div>

        {/* 4 Logo Variations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* 1. Fond Sombre */}
          <div className="p-8 rounded-3xl bg-[#0d1117] border border-white/10 flex flex-col justify-between items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1.5 w-16 h-16">
                <div className="rounded-tl-lg bg-[#3dbcc7]" />
                <div className="rounded-tr-lg bg-[#0089d0]" />
                <div className="rounded-bl-lg bg-white/20" />
                <div className="rounded-br-lg bg-[#f37021]" />
              </div>
            </div>
            <div>
              <h3 className="font-sora font-bold text-sm text-white mb-1">Version Fond Sombre</h3>
              <p className="text-xs text-slate-400">Pour interfaces midnight &amp; fonds sombres.</p>
            </div>
          </div>

          {/* 2. Fond Clair */}
          <div className="p-8 rounded-3xl bg-[#f0f2f5] border border-slate-300 flex flex-col justify-between items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1.5 w-16 h-16">
                <div className="rounded-tl-lg bg-[#3dbcc7]" />
                <div className="rounded-tr-lg bg-[#0089d0]" />
                <div className="rounded-bl-lg bg-[#1a1a1a]" />
                <div className="rounded-br-lg bg-[#f37021]" />
              </div>
            </div>
            <div>
              <h3 className="font-sora font-bold text-sm text-slate-900 mb-1">Version Fond Clair</h3>
              <p className="text-xs text-slate-600">Usage standard print et web clair.</p>
            </div>
          </div>

          {/* 3. Monochrome Blanc */}
          <div className="p-8 rounded-3xl bg-[#0089d0] border border-white/20 flex flex-col justify-between items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1.5 w-16 h-16">
                <div className="rounded-tl-lg bg-white" />
                <div className="rounded-tr-lg bg-white/80" />
                <div className="rounded-bl-lg bg-white/40" />
                <div className="rounded-br-lg bg-white" />
              </div>
            </div>
            <div>
              <h3 className="font-sora font-bold text-sm text-white mb-1">Monochrome Blanc</h3>
              <p className="text-xs text-blue-100">Sur aplats colorés pleins.</p>
            </div>
          </div>

          {/* 4. Monochrome Noir */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-1.5 w-16 h-16">
                <div className="rounded-tl-lg bg-[#1a1a1a]" />
                <div className="rounded-tr-lg bg-[#1a1a1a]/80" />
                <div className="rounded-bl-lg bg-[#1a1a1a]/30" />
                <div className="rounded-br-lg bg-[#1a1a1a]" />
              </div>
            </div>
            <div>
              <h3 className="font-sora font-bold text-sm text-slate-900 mb-1">Monochrome Noir</h3>
              <p className="text-xs text-slate-600">Documents officiels &amp; tampons.</p>
            </div>
          </div>
        </div>

        {/* Protection Zone & Prohibited Usages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Clear Space Card */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <h3 className="font-sora font-bold text-xl text-white mb-4">
              Zone de Protection (Espace de Respiration)
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              Le logo doit toujours être entouré d&apos;un espace libre minimum équivalent à la hauteur de la boucle du &ldquo;P&rdquo;. Aucun texte ou élément parasite ne doit empiéter sur cet espace.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/20 text-center font-mono text-xs text-[#fdb913]">
              [ Zone de respiration minimale = 1x Hauteur de boucle ]
            </div>
          </div>

          {/* Prohibited Usages */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <h3 className="font-sora font-bold text-xl text-white mb-4">
              Usages Proscrits
            </h3>
            <ul className="space-y-2.5 text-xs font-mono text-slate-300">
              <li className="flex items-center gap-2 text-red-400">
                <span>✕</span>
                <span>Ne jamais étirer, comprimer ou déformer les proportions.</span>
              </li>
              <li className="flex items-center gap-2 text-red-400">
                <span>✕</span>
                <span>Ne jamais modifier les couleurs officielles des quadrants.</span>
              </li>
              <li className="flex items-center gap-2 text-red-400">
                <span>✕</span>
                <span>Ne jamais faire pivoter le logo (toujours horizontal).</span>
              </li>
              <li className="flex items-center gap-2 text-red-400">
                <span>✕</span>
                <span>Ne jamais appliquer d&apos;ombres portées fantaisistes.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SVG Download CTA */}
        <div className="text-center">
          <button
            onClick={downloadLogoSvg}
            className="px-8 py-4 rounded-full text-xs font-mono font-bold bg-[#f37021] text-white hover:bg-[#d95e14] hover:shadow-[0_0_25px_rgba(243,112,33,0.4)] transition-all inline-flex items-center gap-2 shadow-lg"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger le Logo Officiel (SVG Vectoriel)</span>
          </button>
        </div>
      </div>
    </section>
  );
}
