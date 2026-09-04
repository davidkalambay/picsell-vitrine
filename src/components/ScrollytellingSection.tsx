"use client";

import React, { useRef, useState } from "react";
import { ScrollytellingEngine } from "./ScrollytellingEngine";
import { ScrollTrigger, useGSAP } from "@/lib/gsap-config";

type SectionType = "marketing" | "automation" | "development" | "data" | null;

export const ScrollytellingSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<SectionType>(null);

    useGSAP(() => {
        const sections = [
            { id: "marketing" },
            { id: "automation" },
            { id: "development" },
            { id: "data" }
        ];

        sections.forEach(({ id }) => {
            const el = document.getElementById(`story-${id}`);
            if (el) {
                ScrollTrigger.create({
                    trigger: el,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveSection(id as SectionType),
                    onEnterBack: () => setActiveSection(id as SectionType),
                    onLeave: () => {
                        if (id === "data") setActiveSection(null);
                    },
                    onLeaveBack: () => {
                        if (id === "marketing") setActiveSection(null);
                    }
                });
            }
        });

    }, { scope: containerRef });

    return (
        <section id="scrollytelling-section" ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 pb-40">
            {/* Desktop Layout: Grid. Mobile Layout: Stacked */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                
                {/* Visual side (Sticky) */}
                <div className="w-full h-full order-first lg:order-none z-0">
                    <div className="w-full lg:sticky lg:top-24 flex flex-col items-center justify-center py-6 lg:py-16 lg:h-[80vh]">
                        <div className="w-full h-full relative flex items-center justify-center">
                            <ScrollytellingEngine activeSection={activeSection} />
                        </div>
                        
                        {/* Status text (Glassmorphism Pill Badge) */}
                        <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-xs font-bold tracking-[0.18em] uppercase text-slate-300 font-sora">
                                {activeSection ? `${['marketing', 'automation', 'development', 'data'].indexOf(activeSection) + 1}/4 modules engagés` : "0/4 modules engagés"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Text side (Scrollable Glassmorphic Cards) */}
                <div className="w-full flex flex-col gap-12 lg:gap-20 z-10">
                    {/* Spacer to push first section down on desktop */}
                    <div className="hidden lg:block h-[20vh]"></div>

                    {/* Section 1: Marketing Card */}
                    <div
                        id="story-marketing"
                        className={`min-h-[70vh] flex flex-col justify-center p-8 sm:p-12 rounded-3xl backdrop-blur-2xl transition-all duration-700 relative overflow-hidden border ${
                            activeSection === 'marketing'
                                ? 'bg-gradient-to-br from-[rgba(243,112,33,0.1)] via-white/[0.04] to-transparent border-[var(--pic-orange,#f37021)]/40 shadow-[0_20px_50px_rgba(243,112,33,0.15)] opacity-100 translate-y-0 scale-100'
                                : 'bg-white/[0.02] border-white/[0.06] opacity-30 translate-y-4 scale-[0.98]'
                        }`}
                    >
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--pic-orange,#f37021)]/20 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--pic-orange,#f37021)] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--pic-orange,#f37021)]"></span>
                                Digital Marketing
                            </p>
                            <p className="text-5xl sm:text-6xl font-black text-white/10 font-sora">01</p>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white leading-tight font-sora">
                            Une présence qui convertit, pas seulement qui existe.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                            Stratégie de contenu, acquisition et image de marque pensées pour le marché congolais et la diaspora francophone.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-orange,#f37021)]/40 bg-[var(--pic-orange,#f37021)]/10 text-[var(--pic-orange,#f37021)] backdrop-blur-md shadow-[0_0_12px_rgba(243,112,33,0.2)]">Stratégie</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-orange,#f37021)]/40 bg-[var(--pic-orange,#f37021)]/10 text-[var(--pic-orange,#f37021)] backdrop-blur-md shadow-[0_0_12px_rgba(243,112,33,0.2)]">Contenu</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-orange,#f37021)]/40 bg-[var(--pic-orange,#f37021)]/10 text-[var(--pic-orange,#f37021)] backdrop-blur-md shadow-[0_0_12px_rgba(243,112,33,0.2)]">Acquisition</span>
                        </div>
                    </div>

                    {/* Section 2: Automation Card */}
                    <div
                        id="story-automation"
                        className={`min-h-[70vh] flex flex-col justify-center p-8 sm:p-12 rounded-3xl backdrop-blur-2xl transition-all duration-700 relative overflow-hidden border ${
                            activeSection === 'automation'
                                ? 'bg-gradient-to-br from-[rgba(61,188,199,0.1)] via-white/[0.04] to-transparent border-[var(--pic-turquoise,#3dbcc7)]/40 shadow-[0_20px_50px_rgba(61,188,199,0.15)] opacity-100 translate-y-0 scale-100'
                                : 'bg-white/[0.02] border-white/[0.06] opacity-30 translate-y-4 scale-[0.98]'
                        }`}
                    >
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--pic-turquoise,#3dbcc7)]/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--pic-turquoise,#3dbcc7)] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--pic-turquoise,#3dbcc7)]"></span>
                                Automation
                            </p>
                            <p className="text-5xl sm:text-6xl font-black text-white/10 font-sora">02</p>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white leading-tight font-sora">
                            Vos process tournent, même quand vous dormez.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                            Workflows automatisés, intégrations et outils sur-mesure pour éliminer les tâches répétitives de vos équipes.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-turquoise,#3dbcc7)]/40 bg-[var(--pic-turquoise,#3dbcc7)]/10 text-[var(--pic-turquoise,#3dbcc7)] backdrop-blur-md shadow-[0_0_12px_rgba(61,188,199,0.2)]">Workflows</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-turquoise,#3dbcc7)]/40 bg-[var(--pic-turquoise,#3dbcc7)]/10 text-[var(--pic-turquoise,#3dbcc7)] backdrop-blur-md shadow-[0_0_12px_rgba(61,188,199,0.2)]">Intégrations</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-turquoise,#3dbcc7)]/40 bg-[var(--pic-turquoise,#3dbcc7)]/10 text-[var(--pic-turquoise,#3dbcc7)] backdrop-blur-md shadow-[0_0_12px_rgba(61,188,199,0.2)]">Gain de temps</span>
                        </div>
                    </div>

                    {/* Section 3: Development Card */}
                    <div
                        id="story-development"
                        className={`min-h-[70vh] flex flex-col justify-center p-8 sm:p-12 rounded-3xl backdrop-blur-2xl transition-all duration-700 relative overflow-hidden border ${
                            activeSection === 'development'
                                ? 'bg-gradient-to-br from-[rgba(0,137,208,0.1)] via-white/[0.04] to-transparent border-[var(--pic-blue,#0089d0)]/40 shadow-[0_20px_50px_rgba(0,137,208,0.15)] opacity-100 translate-y-0 scale-100'
                                : 'bg-white/[0.02] border-white/[0.06] opacity-30 translate-y-4 scale-[0.98]'
                        }`}
                    >
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--pic-blue,#0089d0)]/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--pic-blue,#0089d0)] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--pic-blue,#0089d0)]"></span>
                                Development
                            </p>
                            <p className="text-5xl sm:text-6xl font-black text-white/10 font-sora">03</p>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white leading-tight font-sora">
                            Des produits robustes, du prototype à l'échelle.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                            Applications web et mobiles sur Next.js, Node.js et PostgreSQL — de la carte de visite digitale aux plateformes SaaS complètes.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-blue,#0089d0)]/40 bg-[var(--pic-blue,#0089d0)]/10 text-[var(--pic-blue,#0089d0)] backdrop-blur-md shadow-[0_0_12px_rgba(0,137,208,0.2)]">Web & Mobile</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-blue,#0089d0)]/40 bg-[var(--pic-blue,#0089d0)]/10 text-[var(--pic-blue,#0089d0)] backdrop-blur-md shadow-[0_0_12px_rgba(0,137,208,0.2)]">API</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-blue,#0089d0)]/40 bg-[var(--pic-blue,#0089d0)]/10 text-[var(--pic-blue,#0089d0)] backdrop-blur-md shadow-[0_0_12px_rgba(0,137,208,0.2)]">Scalabilité</span>
                        </div>
                    </div>

                    {/* Section 4: Data Intelligence Card */}
                    <div
                        id="story-data"
                        className={`min-h-[70vh] flex flex-col justify-center p-8 sm:p-12 rounded-3xl backdrop-blur-2xl transition-all duration-700 relative overflow-hidden border ${
                            activeSection === 'data'
                                ? 'bg-gradient-to-br from-[rgba(253,185,19,0.1)] via-white/[0.04] to-transparent border-[var(--pic-gold,#fdb913)]/40 shadow-[0_20px_50px_rgba(253,185,19,0.15)] opacity-100 translate-y-0 scale-100'
                                : 'bg-white/[0.02] border-white/[0.06] opacity-30 translate-y-4 scale-[0.98]'
                        }`}
                    >
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--pic-gold,#fdb913)]/20 rounded-full blur-3xl pointer-events-none" />

                        <div className="flex items-center justify-between mb-4">
                            <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--pic-gold,#fdb913)] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--pic-gold,#fdb913)]"></span>
                                Data Intelligence
                            </p>
                            <p className="text-5xl sm:text-6xl font-black text-white/10 font-sora">04</p>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white leading-tight font-sora">
                            Décidez avec des chiffres, pas des intuitions.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                            Tableaux de bord, reporting et modèles prédictifs pour transformer vos données en décisions stratégiques.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-gold,#fdb913)]/40 bg-[var(--pic-gold,#fdb913)]/10 text-[var(--pic-gold,#fdb913)] backdrop-blur-md shadow-[0_0_12px_rgba(253,185,19,0.2)]">Dashboards</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-gold,#fdb913)]/40 bg-[var(--pic-gold,#fdb913)]/10 text-[var(--pic-gold,#fdb913)] backdrop-blur-md shadow-[0_0_12px_rgba(253,185,19,0.2)]">Reporting</span>
                            <span className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-[var(--pic-gold,#fdb913)]/40 bg-[var(--pic-gold,#fdb913)]/10 text-[var(--pic-gold,#fdb913)] backdrop-blur-md shadow-[0_0_12px_rgba(253,185,19,0.2)]">Prédiction</span>
                        </div>
                    </div>

                    {/* Spacer at the bottom so we can scroll past the last item safely */}
                    <div className="h-[20vh]"></div>
                </div>

            </div>
        </section>
    );
};
