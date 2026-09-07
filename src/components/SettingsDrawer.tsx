"use client";

import React, { useState } from "react";
import { useSiteSettings, ThemeMode, GearSize, NoiseIntensity } from "@/context/SettingsContext";

type SettingsTab = "sally" | "amelia" | "winston" | "all";

export const SettingsDrawer: React.FC = () => {
    const {
        settings,
        updateSetting,
        resetSettings,
        triggerDrawSvgReplay,
        triggerHeroIntroReplay,
        isDrawerOpen,
        setIsDrawerOpen,
        batteryInfo,
    } = useSiteSettings();

    const [activeTab, setActiveTab] = useState<SettingsTab>("sally");

    // Lock background window scroll when drawer is open
    React.useEffect(() => {
        if (typeof document === "undefined") return;
        if (isDrawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isDrawerOpen]);

    const tabs: { id: SettingsTab; label: string; icon: string; count: number; color: string }[] = [
        { id: "sally", label: "Sally (Design)", icon: "🎨", count: 10, color: "var(--pic-orange,#f37021)" },
        { id: "amelia", label: "Amélia (GSAP)", icon: "👩‍💻", count: 10, color: "var(--pic-turquoise,#3dbcc7)" },
        { id: "winston", label: "Winston (Perf)", icon: "📐", count: 10, color: "#10b981" },
        { id: "all", label: "Tout (30)", icon: "⚙️", count: 30, color: "var(--pic-gold,#fdb913)" },
    ];

    return (
        <>
            {/* Floating Settings Button (Gear Icon) */}
            <button
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Ouvrir les réglages du site"
                className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3 px-4 py-3 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
                {/* Spinning Gear SVG */}
                <svg
                    className="w-5 h-5 text-[var(--pic-gold,#fdb913)] group-hover:rotate-90 transition-transform duration-700 ease-out"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
                <span className="text-xs font-bold tracking-wider font-sora hidden sm:inline-block">
                    Réglages
                </span>
            </button>

            {/* Backdrop */}
            {isDrawerOpen && (
                <div
                    onClick={() => setIsDrawerOpen(false)}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] transition-opacity duration-300 animate-fade-in"
                />
            )}

            {/* Slide-over Drawer */}
            <div
                onClick={(e) => e.stopPropagation()}
                onWheel={(e) => e.stopPropagation()}
                onTouchMove={(e) => e.stopPropagation()}
                data-lenis-prevent="true"
                data-lenis-prevent-wheel="true"
                data-lenis-prevent-touch="true"
                className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-[#090a10]/95 backdrop-blur-2xl border-l border-white/10 z-[80] p-5 sm:p-7 flex flex-col justify-between overflow-y-auto overscroll-contain shadow-2xl transition-transform duration-500 ease-out text-white ${
                    isDrawerOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
                }`}
            >
                <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[var(--pic-gold,#fdb913)]/10 border border-[var(--pic-gold,#fdb913)]/30 flex items-center justify-center text-[var(--pic-gold,#fdb913)]">
                                ⚙️
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold font-sora tracking-tight">Studio de Réglages</h3>
                                <p className="text-xs text-slate-400">Personnalisez votre expérience visuelle BMAD</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsDrawerOpen(false)}
                            aria-label="Fermer le studio de réglages"
                            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Domain Tabs Navigation (Sally, Amelia, Winston) */}
                    <div className="grid grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`min-h-[44px] py-2 px-1.5 rounded-xl text-[11px] font-bold flex flex-col items-center justify-center gap-1 transition-all ${
                                        isActive
                                            ? "bg-white/15 text-white shadow-lg border border-white/20"
                                            : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                                    }`}
                                >
                                    <span className="text-xs">{tab.icon}</span>
                                    <span className="truncate max-w-full text-[10px] font-sora">{tab.label.split(" ")[0]}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Domain Header Description */}
                    <div className="mb-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5">
                        <span className="text-lg">
                            {activeTab === "sally" && "🎨"}
                            {activeTab === "amelia" && "👩‍💻"}
                            {activeTab === "winston" && "📐"}
                            {activeTab === "all" && "✨"}
                        </span>
                        <div>
                            <p className="text-xs font-bold text-white font-sora">
                                {activeTab === "sally" && "Sally — Direction Artistique & UI/UX"}
                                {activeTab === "amelia" && "Amélia — Mouvements & Animations GSAP"}
                                {activeTab === "winston" && "Winston — Architecture & Performance"}
                                {activeTab === "all" && "Vue d'ensemble complète (30 idées BMAD)"}
                            </p>
                            <p className="text-[10px] text-slate-400">
                                {activeTab === "sally" && "Identité de marque, thèmes, néon, contrastes et grilles"}
                                {activeTab === "amelia" && "Cinétique horlogère, SplitText, DrawSVG, curseur et inertie"}
                                {activeTab === "winston" && "60 FPS GPU, Lenis, MatchMedia, mode éco et hydratation"}
                                {activeTab === "all" && "Tous les modules activables en direct"}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {/* ========================================================= */}
                        {/* 🎨 SALLY'S TAB — UI / UX & DIRECTION ARTISTIQUE          */}
                        {/* ========================================================= */}
                        {(activeTab === "sally" || activeTab === "all") && (
                            <div className="space-y-5">
                                {activeTab === "all" && (
                                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                                        <span className="text-sm">🎨</span>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--pic-orange,#f37021)] font-mono">
                                            Sally — UI/UX & Direction Artistique
                                        </h4>
                                    </div>
                                )}

                                {/* Sally 01: Thème & Transition */}
                                <div>
                                    <div className="flex justify-between items-center mb-2.5">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
                                            🌓 Mode d&apos;ambiance
                                        </label>
                                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                            SALLY #01
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            { id: "scroll-dynamic", label: "Auto Scroll" },
                                            { id: "force-dark", label: "Dark Forcé" },
                                            { id: "force-light", label: "Light Forcé" },
                                        ].map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => updateSetting("themeMode", item.id as ThemeMode)}
                                                className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                                                    settings.themeMode === item.id
                                                        ? "bg-[var(--pic-orange,#f37021)]/20 border-[var(--pic-orange,#f37021)] text-white shadow-[0_0_15px_rgba(243,112,33,0.3)]"
                                                        : "bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/20"
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Sally 02: Glassmorphism */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Cartes Glassmorphism</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #02
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Effet verre dépoli & reflets colorés</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.glassmorphism}
                                        onChange={(e) => updateSetting("glassmorphism", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Sally 03: Typographie Outline Réactive */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Chiffres &quot;Outline&quot; Réactifs</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #03
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Contour filaire qui s&apos;illumine &amp; se remplit</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.reactiveOutline}
                                        onChange={(e) => updateSetting("reactiveOutline", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Sally 04: Bruit Texturé (Noise Overlay) */}
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <p className="text-sm font-bold text-white">Grain Argentique (Noise)</p>
                                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                    SALLY #04
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-400">Texture éditoriale et subtil grain de film</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={settings.noiseOverlay}
                                            onChange={(e) => updateSetting("noiseOverlay", e.target.checked)}
                                            className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                        />
                                    </div>

                                    {settings.noiseOverlay && (
                                        <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2 animate-fade-in">
                                            <span className="text-[11px] text-slate-400 font-medium">Intensité :</span>
                                            <div className="flex gap-1.5">
                                                {[
                                                    { id: "subtle", label: "Subtil" },
                                                    { id: "medium", label: "Moyen" },
                                                    { id: "cinema", label: "Cinéma" },
                                                ].map((level) => (
                                                    <button
                                                        key={level.id}
                                                        onClick={() => updateSetting("noiseIntensity", level.id as NoiseIntensity)}
                                                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                                                            settings.noiseIntensity === level.id
                                                                ? "bg-[var(--pic-orange,#f37021)]/20 border-[var(--pic-orange,#f37021)] text-white shadow-[0_0_10px_rgba(243,112,33,0.3)]"
                                                                : "bg-white/5 border-white/10 text-slate-400 hover:border-white/20"
                                                        }`}
                                                    >
                                                        {level.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Sally 05: Lignes de Force & Grille Blueprint */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Grille Blueprint & Axes</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #05
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Repères d&apos;ingénierie &amp; lignes de force</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.blueprintGrid}
                                        onChange={(e) => updateSetting("blueprintGrid", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Sally 06: Micro-interactions sur les Badges */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Survol Réactif des Badges</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #06
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Onde lumineuse & lévitation des tags</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.badgeMicroInteractions}
                                        onChange={(e) => updateSetting("badgeMicroInteractions", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Sally 07: Clipping Mask Visuel */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Clipping Mask Texturé</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #07
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Gradients vibrants découpés dans les chiffres</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.clippingMaskNumbers}
                                        onChange={(e) => updateSetting("clippingMaskNumbers", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Sally 07-B: Mini-Terminaux d'Ingénierie */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Terminaux d&apos;Ingénierie</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #07
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Aperçus de code source & pipelines dans les cartes</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.codeTerminals}
                                        onChange={(e) => updateSetting("codeTerminals", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Sally 08: Anneau de Progression Circulaire */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Anneau de Progression (HUD)</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #08
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Jauge HUD radiale 25% à 100% avec néon</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.progressRing}
                                        onChange={(e) => updateSetting("progressRing", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Sally 09: Contrastes Typographiques Extrêmes */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Contrastes Typographiques</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #09
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Titres Display gras + métadonnées Monospace</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.extremeTypography}
                                        onChange={(e) => updateSetting("extremeTypography", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Sally 10: CTA Flottant Contextuel */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Bouton Flottant Contextuel</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                                SALLY #10
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">CTA sticky morphing synchronisé au scroll</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.floatingCta}
                                        onChange={(e) => updateSetting("floatingCta", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                                    />
                                </div>
                            </div>
                        )}

                        {/* ========================================================= */}
                        {/* 👩‍💻 AMELIA'S TAB — ANIMATIONS & GSAP                      */}
                        {/* ========================================================= */}
                        {(activeTab === "amelia" || activeTab === "all") && (
                            <div className="space-y-5">
                                {activeTab === "all" && (
                                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                                        <span className="text-sm">👩‍💻</span>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--pic-turquoise,#3dbcc7)] font-mono">
                                            Amélia — Mouvements & Animations GSAP
                                        </h4>
                                    </div>
                                )}

                                {/* Amelia 02: Scroll-Snap Magnétique GSAP */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Scroll-Snap Magnétique</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                AMELIA #02
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Centrage doux et magnétique sur chaque carte de service</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.scrollSnap}
                                        onChange={(e) => updateSetting("scrollSnap", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Amelia 03: SplitText / Text Reveal */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">SplitText Horloger</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                AMELIA #03
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Révélation mécanique mot par mot &amp; frappe d&apos;horlogerie</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.splitTextReveal}
                                        onChange={(e) => updateSetting("splitTextReveal", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Amelia 04: DrawSVG Tracé Initial */}
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <p className="text-sm font-bold text-white">Tracé Initial DrawSVG</p>
                                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                    AMELIA #04
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-400">Dessin vectoriel des axes & assemblage mécanique</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={settings.drawSvgIntro}
                                            onChange={(e) => updateSetting("drawSvgIntro", e.target.checked)}
                                            className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                        />
                                    </div>

                                    {settings.drawSvgIntro && (
                                        <button
                                            onClick={() => triggerDrawSvgReplay()}
                                            className="w-full py-2 px-3 rounded-xl text-xs font-bold font-mono tracking-wider uppercase border border-[var(--pic-turquoise,#3dbcc7)]/40 bg-[var(--pic-turquoise,#3dbcc7)]/10 hover:bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)] hover:text-white flex items-center justify-center gap-2 transition-all"
                                        >
                                            <span>▶</span> Rejouer l&apos;assemblage DrawSVG
                                        </button>
                                    )}
                                </div>

                                {/* Amelia 05: Néon & Halo Lumineux */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Néon & Halo Dynamique</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                AMELIA #05
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Aura colorée réactive au module actif</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.neonGlow}
                                        onChange={(e) => updateSetting("neonGlow", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Amelia 06: Parallaxe sur Badges & Tags */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Parallaxe Badges & Tags (3D)</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                AMELIA #06
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Vitesse décalée & profondeur multicouche</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.parallaxBadges}
                                        onChange={(e) => updateSetting("parallaxBadges", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Amelia 07: Animation d'Entrée Mécanique du Hero */}
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <p className="text-sm font-bold text-white">Entrée Mécanique Hero</p>
                                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                    AMELIA #07
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-400">Emboîtement horloger des mots & rouages filigranes</p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={settings.heroMechanicalIntro}
                                            onChange={(e) => updateSetting("heroMechanicalIntro", e.target.checked)}
                                            className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                        />
                                    </div>

                                    {settings.heroMechanicalIntro && (
                                        <button
                                            onClick={() => {
                                                triggerHeroIntroReplay();
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }}
                                            className="w-full py-2 px-3 rounded-xl text-xs font-bold font-mono tracking-wider uppercase border border-[var(--pic-turquoise,#3dbcc7)]/40 bg-[var(--pic-turquoise,#3dbcc7)]/10 hover:bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)] hover:text-white flex items-center justify-center gap-2 transition-all"
                                        >
                                            <span>▶</span> Rejouer l&apos;entrée du Hero
                                        </button>
                                    )}
                                </div>

                                {/* Amelia 08: Typing / Live Counter sur Data */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Compteur Live Data (HUD)</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                AMELIA #08
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Télémétrie en direct &amp; calcul d&apos;odomètre haute vitesse</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.dataLiveCounter}
                                        onChange={(e) => updateSetting("dataLiveCounter", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Amelia 09: Attraction Magnétique des Boutons */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Boutons Magnétiques (GSAP)</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                AMELIA #09
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Attraction fluide du CTA et parallaxe vers le curseur</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.magneticButtons}
                                        onChange={(e) => updateSetting("magneticButtons", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Amelia 10: Curseur Interactif Engrenage */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Curseur Engrenage (Custom)</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-turquoise,#3dbcc7)]/20 text-[var(--pic-turquoise,#3dbcc7)]">
                                                AMELIA #10
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Mini-engrenage rotatif réactif, cible de précision & aura</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.gearCursor}
                                        onChange={(e) => updateSetting("gearCursor", e.target.checked)}
                                        className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                    />
                                </div>

                                {/* Scrubbing Speed Slider */}
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div className="flex justify-between items-center mb-3">
                                        <div>
                                            <p className="text-sm font-bold text-white">Inertie du Scroll (Scrubbing)</p>
                                            <p className="text-xs text-slate-400">Fluidité de rotation de l&apos;engrenage</p>
                                        </div>
                                        <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-white/10 text-[var(--pic-turquoise,#3dbcc7)]">
                                            {settings.scrubSpeed}s
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0.3"
                                        max="2.5"
                                        step="0.2"
                                        value={settings.scrubSpeed}
                                        onChange={(e) => updateSetting("scrubSpeed", parseFloat(e.target.value))}
                                        className="w-full accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                                    />
                                    <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                                        <span>0.3s (Instantané)</span>
                                        <span>2.5s (Très fluide)</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ========================================================= */}
                        {/* 📐 WINSTON'S TAB — ARCHITECTURE & PERFORMANCE            */}
                        {/* ========================================================= */}
                        {(activeTab === "winston" || activeTab === "all") && (
                            <div className="space-y-5">
                                {activeTab === "all" && (
                                    <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                                        <span className="text-sm">📐</span>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                                            Winston — Architecture & Performance
                                        </h4>
                                    </div>
                                )}

                                {/* Winston 10: Mode Éco-responsable & Batterie */}
                                <div className={`p-4 rounded-2xl border transition-all ${
                                    settings.ecoMode
                                        ? "bg-emerald-950/30 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                                        : "bg-white/[0.03] border-white/10"
                                }`}>
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="space-y-0.5">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-bold text-white">Mode Éco-responsable</p>
                                                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400">
                                                    WINSTON #10
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-400">
                                                Limite le Ticker GSAP à 30 FPS & simplifie les calculs GPU
                                            </p>
                                        </div>
                                        <input
                                            type="checkbox"
                                            checked={settings.ecoMode}
                                            onChange={(e) => updateSetting("ecoMode", e.target.checked)}
                                            className="w-5 h-5 accent-emerald-400 rounded cursor-pointer"
                                        />
                                    </div>

                                    {/* Live Battery & Hardware Status Pill */}
                                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                                        <div className="flex items-center gap-1.5">
                                            <span className={`w-2 h-2 rounded-full ${
                                                batteryInfo.charging
                                                    ? "bg-emerald-400 animate-pulse"
                                                    : batteryInfo.isLowBattery
                                                    ? "bg-rose-400 animate-ping"
                                                    : "bg-amber-400"
                                            }`} />
                                            <span className="text-slate-300">
                                                {batteryInfo.supported && batteryInfo.level !== null
                                                    ? `Batterie: ${batteryInfo.level}% ${batteryInfo.charging ? "(⚡ En charge)" : "(Sur batterie)"}`
                                                    : "Mode Autonomie / 60Hz Actif"}
                                            </span>
                                        </div>
                                        <span className={`text-[9px] px-2 py-0.5 rounded font-bold ${
                                            settings.ecoMode
                                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                                : "bg-white/10 text-slate-400"
                                        }`}>
                                            {settings.ecoMode ? "30 FPS // ÉCO" : "60 FPS // MAX"}
                                        </span>
                                    </div>
                                </div>

                                {/* Winston 01: Lenis Smooth Scrolling */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Défilement Inertiel Lenis</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400">
                                                WINSTON #01
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Inertie ultra-fluide 60 FPS synchronisée avec GSAP</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.lenisSmoothScroll}
                                        onChange={(e) => updateSetting("lenisSmoothScroll", e.target.checked)}
                                        className="w-5 h-5 accent-emerald-400 rounded cursor-pointer"
                                    />
                                </div>

                                {/* Winston 02: Accélération 100% GPU */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Accélération 100% GPU</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400">
                                                WINSTON #02
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Isolation des couches, zéro Repaint et force3D matériel</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.gpuAcceleration}
                                        onChange={(e) => updateSetting("gpuAcceleration", e.target.checked)}
                                        className="w-5 h-5 accent-emerald-400 rounded cursor-pointer"
                                    />
                                </div>

                                {/* Winston 03: GSAP MatchMedia Responsive */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">GSAP MatchMedia (Responsive)</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400">
                                                WINSTON #03
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Adaptation des timelines Desktop / Tablette / Mobile</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.matchMediaResponsive}
                                        onChange={(e) => updateSetting("matchMediaResponsive", e.target.checked)}
                                        className="w-5 h-5 accent-emerald-400 rounded cursor-pointer"
                                    />
                                </div>

                                {/* Winston 04: Respect prefers-reduced-motion */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Mouvements Réduits (Accessibilité)</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400">
                                                WINSTON #04
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Désactivation des cinétiques intenses (système & manuel)</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.reducedMotion}
                                        onChange={(e) => updateSetting("reducedMotion", e.target.checked)}
                                        className="w-5 h-5 accent-emerald-400 rounded cursor-pointer"
                                    />
                                </div>

                                {/* Winston 05: Lazy Loading & Progressive Hydration */}
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5">
                                            <p className="text-sm font-bold text-white">Hydratation Progressive</p>
                                            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400">
                                                WINSTON #05
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">Chargement asynchrone des terminaux & HUD (FCP instantané)</p>
                                    </div>
                                    <input
                                        type="checkbox"
                                        checked={settings.lazyHydration}
                                        onChange={(e) => updateSetting("lazyHydration", e.target.checked)}
                                        className="w-5 h-5 accent-emerald-400 rounded cursor-pointer"
                                    />
                                </div>

                                {/* Winston 06: Taille des Engrenages */}
                                <div>
                                    <div className="flex justify-between items-center mb-2.5">
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 block">
                                            📐 Échelle du Moteur Horloger
                                        </label>
                                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400">
                                            WINSTON #06
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            { id: "standard", label: "Standard (60%)" },
                                            { id: "large", label: "Grand (80%)" },
                                            { id: "max", label: "Plein (95%)" },
                                        ].map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => updateSetting("gearSize", item.id as GearSize)}
                                                className={`py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                                                    settings.gearSize === item.id
                                                        ? "bg-emerald-500/20 border-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                                        : "bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/20"
                                                }`}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-6 border-t border-white/10 mt-8 space-y-3">
                    <button
                        onClick={resetSettings}
                        className="w-full py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                        <span>↺</span> Réinitialiser tous les réglages par défaut
                    </button>
                    <p className="text-[10px] text-center text-slate-400 font-mono">
                        Picsell Studio Config v1.0 • Sauvegarde auto en local
                    </p>
                </div>
            </div>
        </>
    );
};
