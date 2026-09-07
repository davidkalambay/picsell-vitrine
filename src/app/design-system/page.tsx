"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Button,
  Badge,
  Card,
  CardTitle,
  CardDescription,
  Input,
  Textarea,
  Switch,
  SegmentedControl,
  Progress,
  Separator,
  Dialog,
  Logo,
} from "@/components/ui";
import { CODE_COLORS, SERVICE_MODULES } from "@/lib/design-system/tokens";

export default function DesignSystemPage() {
  // State for interactive sandbox
  const [activeTab, setActiveTab] = useState<"sally" | "amelia" | "winston">("sally");
  const [switchGpu, setSwitchGpu] = useState(true);
  const [switchEco, setSwitchEco] = useState(false);
  const [switchParallax, setSwitchParallax] = useState(true);
  const [progressRatio, setProgressRatio] = useState(85);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [activeModulePreview, setActiveModulePreview] = useState<
    "marketing" | "automation" | "development" | "data"
  >("marketing");

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const triggerTestLoading = () => {
    setButtonLoading(true);
    setTimeout(() => setButtonLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#06070a] text-[#f4f4f6] selection:bg-[var(--pic-turquoise,#3dbcc7)]/20 selection:text-[var(--pic-turquoise,#3dbcc7)]">
      {/* Top Navbar matching the site Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#090a0f]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo className="h-8 w-auto group-hover:rotate-45 transition-transform duration-500" />
              <div>
                <span className="font-quicksand font-bold text-lg tracking-[-0.02em] text-white">
                  Picsell Agency
                </span>
                <span className="ml-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-[var(--pic-turquoise,#3dbcc7)]">
                  DESIGN SYSTEM ENGINE
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="slate-border" size="sm" className="text-white border-white/20">
                ← Retour au site
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Hero Section matching the Daylight / Sunlit Hero of the site */}
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <div className="flex justify-center">
            <Badge variant="hero">Agence digitale — Kinshasa, RDC</Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-sora tracking-tight leading-[1.08] text-white">
            Design System du{" "}
            <span className="bg-gradient-to-r from-[var(--pic-blue,#0089d0)] via-[var(--pic-turquoise,#3dbcc7)] to-[var(--pic-orange,#f37021)] bg-clip-text text-transparent">
              Moteur Horloger Live
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-quicksand font-normal">
            Extraction 100% fidèle des tokens, composants, boutons magnétiques, cartes scrollytelling
            et micro-interactions du code de production Picsell Agency.
          </p>

          <div className="flex justify-center">
            <Badge variant="hud">
              <span>SYS_ID // PICSELL_HQ</span>
              <span className="opacity-40">•</span>
              <span>GEO // KINSHASA (4.32°S 15.30°E)</span>
              <span className="opacity-40">•</span>
              <span className="text-[var(--pic-turquoise,#3dbcc7)] font-bold">
                PRECISION // 100%
              </span>
            </Badge>
          </div>
        </section>

        <Separator variant="dashed" label="01. COULEURS DU CODE & MODULES HORLOGERS" />

        {/* 1. PALETTE DU CODE EXISTANT */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2">
            <div>
              <h2 className="text-2xl font-black font-sora text-white">
                Variables CSS & Piliers Satellites
              </h2>
              <p className="text-xs text-slate-400">
                Variables réelles utilisées dans <code className="text-slate-300 font-mono">gears.config.ts</code> et <code className="text-slate-300 font-mono">globals.css</code>.
              </p>
            </div>
            {copiedColor && (
              <span className="text-xs font-mono text-[var(--pic-turquoise,#3dbcc7)] animate-pulse">
                Copié dans le presse-papier : {copiedColor}
              </span>
            )}
          </div>

          {/* Core Colors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Orange Marketing */}
            <div
              onClick={() => copyToClipboard(CODE_COLORS.orange.DEFAULT)}
              className="group p-5 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-[var(--pic-orange,#f37021)] transition-all cursor-pointer relative overflow-hidden"
            >
              <div
                className="h-20 w-full rounded-2xl mb-4 flex items-end p-2.5 shadow-inner"
                style={{ backgroundColor: CODE_COLORS.orange.DEFAULT }}
              >
                <span className="text-white font-mono text-xs font-bold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {CODE_COLORS.orange.DEFAULT}
                </span>
              </div>
              <h3 className="font-bold text-sm font-sora text-white">--pic-orange</h3>
              <p className="text-xs text-slate-400 mt-1 font-quicksand">
                Digital Marketing (12 dents • Ratio 1.5)
              </p>
            </div>

            {/* Turquoise Automation */}
            <div
              onClick={() => copyToClipboard(CODE_COLORS.turquoise.DEFAULT)}
              className="group p-5 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-[var(--pic-turquoise,#3dbcc7)] transition-all cursor-pointer relative overflow-hidden"
            >
              <div
                className="h-20 w-full rounded-2xl mb-4 flex items-end p-2.5 shadow-inner"
                style={{ backgroundColor: CODE_COLORS.turquoise.DEFAULT }}
              >
                <span className="text-white font-mono text-xs font-bold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {CODE_COLORS.turquoise.DEFAULT}
                </span>
              </div>
              <h3 className="font-bold text-sm font-sora text-white">--pic-turquoise</h3>
              <p className="text-xs text-slate-400 mt-1 font-quicksand">
                Process Automation (10 dents • Ratio 1.8)
              </p>
            </div>

            {/* Blue Development */}
            <div
              onClick={() => copyToClipboard(CODE_COLORS.blue.DEFAULT)}
              className="group p-5 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-[var(--pic-blue,#0089d0)] transition-all cursor-pointer relative overflow-hidden"
            >
              <div
                className="h-20 w-full rounded-2xl mb-4 flex items-end p-2.5 shadow-inner"
                style={{ backgroundColor: CODE_COLORS.blue.DEFAULT }}
              >
                <span className="text-white font-mono text-xs font-bold bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {CODE_COLORS.blue.DEFAULT}
                </span>
              </div>
              <h3 className="font-bold text-sm font-sora text-white">--pic-blue</h3>
              <p className="text-xs text-slate-400 mt-1 font-quicksand">
                Modern Engineering (14 dents • Ratio 1.28)
              </p>
            </div>

            {/* Gold Data */}
            <div
              onClick={() => copyToClipboard(CODE_COLORS.gold.DEFAULT)}
              className="group p-5 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-[var(--pic-gold,#fdb913)] transition-all cursor-pointer relative overflow-hidden"
            >
              <div
                className="h-20 w-full rounded-2xl mb-4 flex items-end p-2.5 shadow-inner"
                style={{ backgroundColor: CODE_COLORS.gold.DEFAULT }}
              >
                <span className="text-black font-mono text-xs font-bold bg-white/70 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {CODE_COLORS.gold.DEFAULT}
                </span>
              </div>
              <h3 className="font-bold text-sm font-sora text-white">--pic-gold</h3>
              <p className="text-xs text-slate-400 mt-1 font-quicksand">
                Data Intelligence (16 dents • Ratio 1.125)
              </p>
            </div>
          </div>
        </section>

        <Separator variant="dashed" label="02. BOUTONS & EFFETS MAGNÉTIQUES GSAP" />

        {/* 2. BOUTONS DU SITE */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-black font-sora text-white">Composants Button</h2>
            <p className="text-xs text-slate-400">
              Boutons arrondis <code className="text-slate-300 font-mono">rounded-full</code> avec répulsion & attraction magnétique inertielle double-couche GSAP.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
                Boutons Principaux du Hero & Vitrine
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="slate-dark" magnetic>
                  Découvrir nos expertises ↓
                </Button>
                <Button variant="slate-border" magnetic>
                  Contact & Brief ↗
                </Button>
                <Button variant="orange" magnetic>
                  Action Marketing
                </Button>
                <Button variant="turquoise" magnetic>
                  Automation Flow
                </Button>
                <Button variant="blue" magnetic>
                  Modern Code
                </Button>
                <Button variant="gold" magnetic>
                  Data Insights
                </Button>
                <Button variant="glass">
                  ⚙️ Réglages Studio
                </Button>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
                Tailles & États Interactifs
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm" variant="slate-dark">
                  Small (Hero HUD)
                </Button>
                <Button size="md" variant="slate-dark">
                  Medium (Standard)
                </Button>
                <Button size="lg" variant="slate-dark">
                  Large (CTA Callout)
                </Button>
                <Button
                  variant="orange"
                  loading={buttonLoading}
                  onClick={triggerTestLoading}
                >
                  {buttonLoading ? "Traitement..." : "Simuler Loading (2s)"}
                </Button>
                <Button variant="slate-dark" disabled>
                  Désactivé
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator variant="dashed" label="03. BADGES & PILLULES AVEC EFFET SHIMMER" />

        {/* 3. BADGES */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-black font-sora text-white">Composants Badge</h2>
            <p className="text-xs text-slate-400">
              Pillules interactives avec vague de lumière au survol (shimmer wave) et points pulsés.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="marketing" pulseDot>
                Campagnes AEO & SEA
              </Badge>
              <Badge variant="automation" pulseDot>
                Workflows n8n & IA
              </Badge>
              <Badge variant="development" pulseDot>
                Next.js 16 & Turbopack
              </Badge>
              <Badge variant="data" pulseDot>
                BigQuery & Télémétrie
              </Badge>
              <Badge variant="hero">Kinshasa 4.32°S</Badge>
              <Badge variant="hud">PRECISION // 100%</Badge>
              <Badge variant="glass">Studio BMAD</Badge>
            </div>
          </div>
        </section>

        <Separator variant="dashed" label="04. CARTES SCROLLYTELLING DU SITE" />

        {/* 4. CARTES DU SCROLLYTELLING */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-2">
            <div>
              <h2 className="text-2xl font-black font-sora text-white">
                Cartes Scrollytelling & Numéros Réactifs
              </h2>
              <p className="text-xs text-slate-400">
                Cartes <code className="text-slate-300 font-mono">rounded-3xl backdrop-blur-2xl</code> avec gradients dynamiques et auras lumineuses au scroll.
              </p>
            </div>

            {/* Selector to switch active card preview */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Aperçu Pilier :</span>
              <div className="flex gap-1 bg-white/5 p-1 rounded-full border border-white/10">
                {(["marketing", "automation", "development", "data"] as const).map((mod) => (
                  <button
                    key={mod}
                    onClick={() => setActiveModulePreview(mod)}
                    className={`px-3 py-1 text-[10px] font-bold font-sora uppercase rounded-full transition-all ${
                      activeModulePreview === mod
                        ? "bg-white text-black shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {mod}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Card Preview */}
            <Card module={activeModulePreview} active={true}>
              <CardTitle>
                {activeModulePreview === "marketing" && "Marketing Digital & AEO"}
                {activeModulePreview === "automation" && "Automatisation de Processus"}
                {activeModulePreview === "development" && "Ingénierie Web & Mobile"}
                {activeModulePreview === "data" && "Intelligence Data & IT"}
              </CardTitle>
              <CardDescription>
                Système modulaire connecté cinématiquement au moteur horloger central. Chaque rotation est synchronisée au pixel près pour maximiser vos conversions digitales.
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant={activeModulePreview}>Moteur Actif</Badge>
                <Badge variant="hud">RATIO: {SERVICE_MODULES[activeModulePreview].teeth} DENTS</Badge>
              </div>
            </Card>

            {/* Inactive Card Preview */}
            <Card module={activeModulePreview === "marketing" ? "automation" : "marketing"} active={false}>
              <CardTitle>État Hors-Champ (Opacité 40%)</CardTitle>
              <CardDescription>
                Les cartes inactives adoptent une transparence subtile et réduisent leur aura lumineuse pour concentrer l&apos;attention sur le module actuellement actif.
              </CardDescription>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="glass">Standby</Badge>
              </div>
            </Card>
          </div>
        </section>

        <Separator variant="dashed" label="05. RÉGLAGES STUDIO, TERMINAUX & CONTRÔLES" />

        {/* 5. RÉGLAGES & FORMULAIRES */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-black font-sora text-white">
              Studio de Réglages & Contrôles
            </h2>
            <p className="text-xs text-slate-400">
              Contrôles extraits du tiroir de réglages <code className="text-slate-300 font-mono">SettingsDrawer.tsx</code> et des terminaux d&apos;ingénierie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Settings Controls Card */}
            <div className="p-8 rounded-3xl bg-[#090a10]/95 border border-white/10 backdrop-blur-2xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-2xl bg-[var(--pic-gold,#fdb913)]/10 border border-[var(--pic-gold,#fdb913)]/30 flex items-center justify-center text-[var(--pic-gold,#fdb913)]">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold font-sora text-white">
                      Onglets de Profils
                    </h3>
                    <p className="text-xs text-slate-400 font-quicksand">
                      Sally (Design) • Amélia (GSAP) • Winston (Perf)
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <SegmentedControl
                options={[
                  { value: "sally", label: "Sally", icon: "🎨", count: 10, color: "var(--pic-orange,#f37021)" },
                  { value: "amelia", label: "Amélia", icon: "👩‍💻", count: 10, color: "var(--pic-turquoise,#3dbcc7)" },
                  { value: "winston", label: "Winston", icon: "📐", count: 10, color: "#10b981" },
                ]}
                value={activeTab}
                onChange={setActiveTab}
              />

              {/* Switches */}
              <div className="space-y-1 pt-2">
                <Switch
                  checked={switchGpu}
                  onCheckedChange={setSwitchGpu}
                  label="Accélération GPU & Compositing"
                  description="Force translate3d et GPU layers sur tous les SVG"
                  color="turquoise"
                />

                <Switch
                  checked={switchEco}
                  onCheckedChange={setSwitchEco}
                  label="Mode Éco-responsable (Battery Saver)"
                  description="Allège les filtres de flou et décharge le processeur graphique"
                  color="orange"
                />

                <Switch
                  checked={switchParallax}
                  onCheckedChange={setSwitchParallax}
                  label="Parallaxe Multicouche 3D"
                  description="Déplace les pillules à des vitesses différenciées"
                  color="blue"
                />
              </div>

              {/* Progress Slider */}
              <div className="space-y-3 pt-2">
                <Progress
                  value={progressRatio}
                  label="Synchronisation Horlogère 60 FPS"
                  color="gradient"
                  ticks
                />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setProgressRatio(Math.max(10, progressRatio - 15))}
                  >
                    -15%
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setProgressRatio(Math.min(100, progressRatio + 15))}
                  >
                    +15%
                  </Button>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="slate-dark"
                  fullWidth
                  onClick={() => setIsDialogOpen(true)}
                >
                  Ouvrir la Fenêtre Modale de Confirmation
                </Button>
              </div>
            </div>

            {/* Inputs & Form Sample */}
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl space-y-5">
              <h3 className="text-base font-extrabold font-sora text-white">
                Champs de Formulaire
              </h3>
              <Input
                label="Nom de votre entreprise ou projet"
                placeholder="ex: Trust Merchant Bank (TMB)"
                helperText="Utilisé pour calibrer le moteur de conversion"
              />
              <Input
                label="Token ou Identifiant Télémétrique"
                placeholder="PICSELL_ENGINE_98412"
                mono
                rightIcon={<span className="text-[10px] font-mono text-slate-400">ACTIVE</span>}
              />
              <Textarea
                label="Objectifs de Conversion & Croissance"
                placeholder="Décrivez vos besoins en développement web, acquisition ou automatisation IA..."
                rows={3}
              />
            </div>
          </div>
        </section>

        {/* Demo Dialog Modal */}
        <Dialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="Précision Validée — Moteur 100% Harmonisé"
          description="Votre composant s'aligne exactement sur le code de production du site Picsell."
          footer={
            <>
              <Button
                variant="slate-border"
                size="sm"
                className="text-white border-white/20"
                onClick={() => setIsDialogOpen(false)}
              >
                Fermer
              </Button>
              <Button
                variant="slate-dark"
                size="sm"
                onClick={() => setIsDialogOpen(false)}
              >
                Appliquer
              </Button>
            </>
          }
        >
          <div className="space-y-3 text-xs font-quicksand text-slate-300">
            <p>
              Toutes les dimensions, les classes Tailwind, les physiques GSAP et les gradients
              correspondent fidèlement aux composants réels du site Picsell Agency.
            </p>
            <div className="p-4 bg-black/40 rounded-2xl border border-white/10 font-mono text-[11px] text-[var(--pic-turquoise,#3dbcc7)] space-y-1">
              <div>⚙️ GEAR_ENGINE // ACTIVE</div>
              <div>⚡ FPS // 60.0 STABLE</div>
              <div>📐 CLS // 0.00 ZERO SHIFT</div>
            </div>
          </div>
        </Dialog>
      </main>
    </div>
  );
}
