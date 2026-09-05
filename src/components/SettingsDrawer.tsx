"use client";

import React from "react";
import { useSiteSettings, ThemeMode, GearSize } from "@/context/SettingsContext";

export const SettingsDrawer: React.FC = () => {
    const { settings, updateSetting, resetSettings, triggerDrawSvgReplay, triggerHeroIntroReplay, isDrawerOpen, setIsDrawerOpen } = useSiteSettings();

    return (
        <>
            {/* Floating Settings Button (Gear Icon) */}
            <button
                onClick={() => setIsDrawerOpen(true)}
                aria-label="Ouvrir les réglages du site"
                className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 px-4 py-3 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white backdrop-blur-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
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
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 animate-fade-in"
                />
            )}

            {/* Slide-over Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#090a10]/95 backdrop-blur-2xl border-l border-white/10 z-50 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl transition-transform duration-500 ease-out text-white ${
                    isDrawerOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
                }`}
            >
                <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[var(--pic-gold,#fdb913)]/10 border border-[var(--pic-gold,#fdb913)]/30 flex items-center justify-center text-[var(--pic-gold,#fdb913)]">
                                ⚙️
                            </div>
                            <div>
                                <h3 className="text-lg font-extrabold font-sora tracking-tight">Studio de Réglages</h3>
                                <p className="text-xs text-slate-400">Personnalisez votre expérience visuelle</p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsDrawerOpen(false)}
                            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="space-y-7">
                        {/* Option 1: Thème & Transition */}
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 block">
                                🌓 Mode d'ambiance
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { id: "scroll-dynamic", label: "Auto Scroll" },
                                    { id: "force-dark", label: "Dark Forcé" },
                                    { id: "force-light", label: "Light Forcé" },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => updateSetting("themeMode", item.id as ThemeMode)}
                                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                                            settings.themeMode === item.id
                                                ? "bg-[var(--pic-blue,#0089d0)]/20 border-[var(--pic-blue,#0089d0)] text-white shadow-[0_0_15px_rgba(0,137,208,0.3)]"
                                                : "bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/20"
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Option 2: Taille des Engrenages */}
                        <div>
                            <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 block">
                                📐 Échelle du Moteur Horloger
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { id: "standard", label: "Standard (60%)" },
                                    { id: "large", label: "Grand (80%)" },
                                    { id: "max", label: "Plein (95%)" },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => updateSetting("gearSize", item.id as GearSize)}
                                        className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                                            settings.gearSize === item.id
                                                ? "bg-[var(--pic-gold,#fdb913)]/20 border-[var(--pic-gold,#fdb913)] text-white shadow-[0_0_15px_rgba(253,185,19,0.3)]"
                                                : "bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/20"
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Option 3: Glassmorphism */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Cartes Glassmorphism</p>
                                <p className="text-xs text-slate-400">Effet verre dépoli & reflets colorés</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.glassmorphism}
                                onChange={(e) => updateSetting("glassmorphism", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 4: Neon Glow & Halos */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Néon & Halo Lumineux</p>
                                <p className="text-xs text-slate-400">Aura colorée réactive au module</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.neonGlow}
                                onChange={(e) => updateSetting("neonGlow", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 5: Typographie Outline Réactive */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Chiffres "Outline" Réactifs</p>
                                <p className="text-xs text-slate-400">Contour filaire qui s'illumine & se remplit</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.reactiveOutline}
                                onChange={(e) => updateSetting("reactiveOutline", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-gold,#fdb913)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 6: Clipping Mask Visuel */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Clipping Mask Texturé</p>
                                <p className="text-xs text-slate-400">Gradients vibrants découpés dans les chiffres</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.clippingMaskNumbers}
                                onChange={(e) => updateSetting("clippingMaskNumbers", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 7: Mini-Terminaux d'Ingénierie */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Terminaux d'Ingénierie</p>
                                <p className="text-xs text-slate-400">Aperçus de code source & pipelines dans les cartes</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.codeTerminals}
                                onChange={(e) => updateSetting("codeTerminals", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-blue,#0089d0)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 8: Anneau de Progression Circulaire */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Anneau de Progression Circulaire</p>
                                <p className="text-xs text-slate-400">Jauge HUD radiale 25% à 100% avec néon</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.progressRing}
                                onChange={(e) => updateSetting("progressRing", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-gold,#fdb913)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 9: Contrastes Typographiques Extrêmes */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Contrastes Typographiques</p>
                                <p className="text-xs text-slate-400">Titres Display gras + métadonnées Monospace</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.extremeTypography}
                                onChange={(e) => updateSetting("extremeTypography", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 10: CTA Flottant Contextuel */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Bouton Flottant Contextuel</p>
                                <p className="text-xs text-slate-400">CTA sticky morphing synchronisé au scroll</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.floatingCta}
                                onChange={(e) => updateSetting("floatingCta", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-blue,#0089d0)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 11: Scroll-Snap Magnétique GSAP (Amelia's Idea 02) */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-bold text-white">Scroll-Snap Magnétique (GSAP)</p>
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

                        {/* Option 12: SplitText / Text Reveal (Amelia's Idea 03) */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-bold text-white">SplitText Horloger (Text Reveal)</p>
                                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-gold,#fdb913)]/20 text-[var(--pic-gold,#fdb913)]">
                                        AMELIA #03
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400">Révélation mécanique mot par mot & frappe d'horlogerie</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.splitTextReveal}
                                onChange={(e) => updateSetting("splitTextReveal", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-gold,#fdb913)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 13: DrawSVG Tracé Initial (Amelia's Idea 04) */}
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-1.5">
                                        <p className="text-sm font-bold text-white">Tracé Initial DrawSVG</p>
                                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-blue,#0089d0)]/20 text-[var(--pic-blue,#0089d0)]">
                                            AMELIA #04
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-400">Dessin vectoriel des axes & assemblage mécanique</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={settings.drawSvgIntro}
                                    onChange={(e) => updateSetting("drawSvgIntro", e.target.checked)}
                                    className="w-5 h-5 accent-[var(--pic-blue,#0089d0)] rounded cursor-pointer"
                                />
                            </div>

                            {settings.drawSvgIntro && (
                                <button
                                    onClick={() => {
                                        triggerDrawSvgReplay();
                                        // Close drawer or give instant feedback
                                    }}
                                    className="w-full py-2 px-3 rounded-xl text-xs font-bold font-mono tracking-wider uppercase border border-[var(--pic-blue,#0089d0)]/40 bg-[var(--pic-blue,#0089d0)]/10 hover:bg-[var(--pic-blue,#0089d0)]/20 text-[var(--pic-blue,#0089d0)] hover:text-white flex items-center justify-center gap-2 transition-all"
                                >
                                    <span>▶</span> Rejouer l'assemblage DrawSVG
                                </button>
                            )}
                        </div>

                        {/* Option 14: Parallaxe sur Badges & Tags (Amelia's Idea 06) */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-bold text-white">Parallaxe Badges & Tags (3D)</p>
                                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-orange,#f37021)]/20 text-[var(--pic-orange,#f37021)]">
                                        AMELIA #06
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400">Vitesse décalée & profondeur multicouche au défilement</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.parallaxBadges}
                                onChange={(e) => updateSetting("parallaxBadges", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 15: Animation d'Entrée Mécanique du Hero (Amelia's Idea 07) */}
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
                                    <span>▶</span> Rejouer l'entrée du Hero
                                </button>
                            )}
                        </div>

                        {/* Option 16: Typing / Live Counter sur Data (Amelia's Idea 08) */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-bold text-white">Compteur Live Data (HUD)</p>
                                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-gold,#fdb913)]/20 text-[var(--pic-gold,#fdb913)]">
                                        AMELIA #08
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400">Télémétrie en direct & calcul d'odomètre haute vitesse</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.dataLiveCounter}
                                onChange={(e) => updateSetting("dataLiveCounter", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-gold,#fdb913)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 17: Attraction Magnétique des Boutons (Amelia's Idea 09) */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-bold text-white">Boutons Magnétiques (GSAP)</p>
                                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--pic-blue,#0089d0)]/20 text-[var(--pic-blue,#0089d0)]">
                                        AMELIA #09
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400">Attraction fluide du CTA et parallaxe du texte vers le curseur</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.magneticButtons}
                                onChange={(e) => updateSetting("magneticButtons", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-blue,#0089d0)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 18: Curseur Interactif Engrenage (Amelia's Idea 10) */}
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

                        {/* Option 19: Lenis Smooth Scrolling (Winston's Idea 01) */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <div className="flex items-center gap-1.5">
                                    <p className="text-sm font-bold text-white">Défilement Inertiel Lenis</p>
                                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-400">
                                        WINSTON #01
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400">Inertie ultra-fluide 60 FPS synchronisée avec GSAP ScrollTrigger</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.lenisSmoothScroll}
                                onChange={(e) => updateSetting("lenisSmoothScroll", e.target.checked)}
                                className="w-5 h-5 accent-emerald-400 rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 11: Bruit Texturé (Noise Overlay) */}
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-bold text-white">Grain Argentique (Noise)</p>
                                    <p className="text-xs text-slate-400">Texture éditoriale et subtil grain de film</p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={settings.noiseOverlay}
                                    onChange={(e) => updateSetting("noiseOverlay", e.target.checked)}
                                    className="w-5 h-5 accent-[var(--pic-turquoise,#3dbcc7)] rounded cursor-pointer"
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
                                                onClick={() => updateSetting("noiseIntensity", level.id as any)}
                                                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition-all ${
                                                    settings.noiseIntensity === level.id
                                                        ? "bg-[var(--pic-turquoise,#3dbcc7)]/20 border-[var(--pic-turquoise,#3dbcc7)] text-white shadow-[0_0_10px_rgba(61,188,199,0.3)]"
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

                        {/* Option 7: Lignes de Force & Grille Blueprint */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Grille Blueprint & Axes</p>
                                <p className="text-xs text-slate-400">Repères d'ingénierie & lignes de force</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.blueprintGrid}
                                onChange={(e) => updateSetting("blueprintGrid", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-blue,#0089d0)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 8: Micro-interactions sur les Badges */}
                        <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div>
                                <p className="text-sm font-bold text-white">Survol Réactif des Badges</p>
                                <p className="text-xs text-slate-400">Onde lumineuse & lévitation des tags</p>
                            </div>
                            <input
                                type="checkbox"
                                checked={settings.badgeMicroInteractions}
                                onChange={(e) => updateSetting("badgeMicroInteractions", e.target.checked)}
                                className="w-5 h-5 accent-[var(--pic-orange,#f37021)] rounded cursor-pointer"
                            />
                        </div>

                        {/* Option 9: Vitesse d'Inertie GSAP */}
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                            <div className="flex justify-between items-center mb-3">
                                <div>
                                    <p className="text-sm font-bold text-white">Inertie du Scroll (Scrubbing)</p>
                                    <p className="text-xs text-slate-400">Fluidité de rotation de l'engrenage</p>
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
                                className="w-full accent-[var(--pic-turquoise,#3dbcc7)] cursor-pointer"
                            />
                            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                                <span>0.3s (Instantané)</span>
                                <span>2.5s (Très fluide)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-8 border-t border-white/10 mt-8 space-y-3">
                    <button
                        onClick={resetSettings}
                        className="w-full py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 hover:text-white transition-all"
                    >
                        ↺ Réinitialiser par défaut
                    </button>
                    <p className="text-[11px] text-center text-slate-500">
                        💾 Vos préférences sont automatiquement mémorisées sur votre navigateur.
                    </p>
                </div>
            </div>
        </>
    );
};
