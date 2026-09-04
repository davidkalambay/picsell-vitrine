"use client";

import React, { useRef, useState } from "react";
import { ScrollytellingEngine } from "./ScrollytellingEngine";
import { EngineeringTerminal } from "./EngineeringTerminal";
import { CircularProgressRing } from "./CircularProgressRing";
import { ScrollTrigger, useGSAP } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

type SectionType = "marketing" | "automation" | "development" | "data" | null;

export const ScrollytellingSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { settings } = useSiteSettings();
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

    const renderNumber = (num: string, sectionId: SectionType, colorHex: string) => {
        const isActive = activeSection === sectionId;

        // Visual Clipping Mask Mode (Sally's Idea 07)
        if (settings.clippingMaskNumbers) {
            // Textures dynamically tailored per service module
            const maskBackgrounds: Record<string, string> = {
                marketing: "linear-gradient(135deg, #f37021 0%, #fdb913 50%, #ff3b00 100%)",
                automation: "linear-gradient(135deg, #3dbcc7 0%, #0089d0 50%, #00ffa2 100%)",
                development: "linear-gradient(135deg, #0089d0 0%, #7c3aed 50%, #3dbcc7 100%)",
                data: "linear-gradient(135deg, #fdb913 0%, #f37021 50%, #ffea79 100%)",
            };

            const bgStyle = maskBackgrounds[sectionId || ''] || "linear-gradient(135deg, #ffffff, #888888)";

            return (
                <div className="relative inline-block select-none group">
                    <p
                        className={`text-5xl sm:text-6xl font-black font-sora transition-all duration-700 ${
                            isActive ? "scale-108" : "scale-100 opacity-25"
                        }`}
                        style={{
                            backgroundImage: bgStyle,
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            WebkitTextStroke: isActive ? `1.2px ${colorHex}` : "1.2px rgba(255, 255, 255, 0.15)",
                            filter: isActive ? `drop-shadow(0 0 25px ${colorHex}88)` : "none",
                        }}
                    >
                        {num}
                    </p>
                    {/* Micro Technical Sub-label in Clipping Mode */}
                    <span
                        className={`absolute -bottom-2 right-0 text-[8px] font-mono tracking-widest uppercase transition-opacity duration-500 ${
                            isActive ? "opacity-90" : "opacity-0"
                        }`}
                        style={{ color: colorHex }}
                    >
                        {sectionId === 'marketing' && "GROWTH_SYS"}
                        {sectionId === 'automation' && "AUTO_FLOW"}
                        {sectionId === 'development' && "STACK_V4"}
                        {sectionId === 'data' && "INSIGHTS"}
                    </span>
                </div>
            );
        }

        if (!settings.reactiveOutline) {
            return (
                <p className={`text-5xl sm:text-6xl font-black font-sora transition-all duration-500 ${isActive ? 'text-white' : 'text-white/10'}`}>
                    {num}
                </p>
            );
        }

        return (
            <p
                className="text-5xl sm:text-6xl font-black font-sora transition-all duration-700 select-none inline-block"
                style={{
                    WebkitTextStroke: isActive ? `1.5px ${colorHex}` : "1.5px rgba(255, 255, 255, 0.22)",
                    color: isActive ? colorHex : "transparent",
                    textShadow: isActive ? `0 0 30px ${colorHex}` : "none",
                    transform: isActive ? "scale(1.08)" : "scale(1)",
                }}
            >
                {num}
            </p>
        );
    };

    const renderBadge = (label: string, colorVar: string, colorHex: string) => {
        const isInteractive = settings.badgeMicroInteractions;
        return (
            <span
                key={label}
                className={`group/badge relative overflow-hidden text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 select-none ${
                    isInteractive
                        ? "cursor-pointer hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg hover:border-white/60 hover:text-white"
                        : ""
                }`}
                style={{
                    borderColor: `${colorHex}66`,
                    backgroundColor: `${colorHex}18`,
                    color: colorHex,
                    boxShadow: isInteractive ? undefined : `0 0 12px ${colorHex}33`,
                }}
            >
                {/* Light Sweep / Shimmer Wave on Hover */}
                {isInteractive && (
                    <span
                        className="absolute inset-0 -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                        aria-hidden="true"
                    />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                    <span
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover/badge:scale-150 group-hover/badge:shadow-[0_0_8px_white]"
                        style={{ backgroundColor: colorVar }}
                    />
                    {label}
                </span>
            </span>
        );
    };

    return (
        <section id="scrollytelling-section" ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 pb-40">
            {/* Desktop Layout: Grid. Mobile Layout: Stacked */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                
                {/* Visual side (Sticky) */}
                <div className="w-full h-full order-first lg:order-none z-0">
                    <div className="sticky top-24 sm:top-28 flex flex-col items-center justify-center min-h-[450px] sm:min-h-[550px] lg:min-h-[620px] max-h-[85vh] w-full rounded-3xl p-4 sm:p-8">
                        {/* 80% Scale Engine Container */}
                        <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">
                            <ScrollytellingEngine activeSection={activeSection} />
                        </div>
                        
                        {/* Circular Progress Ring HUD (Sally's Idea 08) */}
                        <CircularProgressRing activeSection={activeSection} />
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
                            {renderNumber("01", "marketing", "var(--pic-orange, #f37021)")}
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white leading-tight font-sora">
                            Une présence qui convertit, pas seulement qui existe.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                            Stratégie de contenu, acquisition et image de marque pensées pour le marché congolais et la diaspora francophone.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {renderBadge("Stratégie", "var(--pic-orange, #f37021)", "#f37021")}
                            {renderBadge("Contenu", "var(--pic-orange, #f37021)", "#f37021")}
                            {renderBadge("Acquisition", "var(--pic-orange, #f37021)", "#f37021")}
                        </div>

                        {/* Engineering Code Terminal */}
                        <EngineeringTerminal
                            filename="pixel_attribution.ts"
                            language="typescript"
                            tagLabel="TS // TRACKING"
                            accentColor="#f37021"
                            lines={[
                                { text: "// Attribution & ROAS multi-canal haute fidélité" },
                                { text: "const campaign = await picsell.trackConversion({" },
                                { text: "  target: \"kinshasa_b2b\"," },
                                { text: "  channels: [\"meta\", \"google\", \"linkedin\"]," },
                                { text: "  roiTarget: \"340%\"" },
                                { text: "});" },
                            ]}
                        />
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
                            {renderNumber("02", "automation", "var(--pic-turquoise, #3dbcc7)")}
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white leading-tight font-sora">
                            Vos process tournent, même quand vous dormez.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                            Workflows automatisés, intégrations et outils sur-mesure pour éliminer les tâches répétitives de vos équipes.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {renderBadge("Workflows", "var(--pic-turquoise, #3dbcc7)", "#3dbcc7")}
                            {renderBadge("Intégrations", "var(--pic-turquoise, #3dbcc7)", "#3dbcc7")}
                            {renderBadge("Gain de temps", "var(--pic-turquoise, #3dbcc7)", "#3dbcc7")}
                        </div>

                        {/* Engineering Code Terminal */}
                        <EngineeringTerminal
                            filename="lead_pipeline.ts"
                            language="typescript"
                            tagLabel="TS // WORKFLOW"
                            accentColor="#3dbcc7"
                            lines={[
                                { text: "// Webhook instantané & sync CRM multi-outils" },
                                { text: "export async function onLeadCaptured(lead: Lead) {" },
                                { text: "  await crm.sync(lead, { enrichWithAI: true });" },
                                { text: "  await notifyTeam(\"#croissance\", lead.dealValue);" },
                                { text: "}" },
                            ]}
                        />
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
                            {renderNumber("03", "development", "var(--pic-blue, #0089d0)")}
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white leading-tight font-sora">
                            Des produits robustes, du prototype à l'échelle.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                            Applications web et mobiles sur Next.js, Node.js et PostgreSQL — de la carte de visite digitale aux plateformes SaaS complètes.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {renderBadge("Web & Mobile", "var(--pic-blue, #0089d0)", "#0089d0")}
                            {renderBadge("API", "var(--pic-blue, #0089d0)", "#0089d0")}
                            {renderBadge("Scalabilité", "var(--pic-blue, #0089d0)", "#0089d0")}
                        </div>

                        {/* Engineering Code Terminal */}
                        <EngineeringTerminal
                            filename="enterprise_app.tsx"
                            language="typescript"
                            tagLabel="TSX // SERVER"
                            accentColor="#0089d0"
                            lines={[
                                { text: "// Architecture Next.js 16 & Server Components" },
                                { text: "export default async function SaaSCore({ orgId }: Props) {" },
                                { text: "  const db = await connectPool({ latency: \"<15ms\" });" },
                                { text: "  return <EngineDashboard realTime={true} />;" },
                                { text: "}" },
                            ]}
                        />
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
                            {renderNumber("04", "data", "var(--pic-gold, #fdb913)")}
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-4 text-white leading-tight font-sora">
                            Décidez avec des chiffres, pas des intuitions.
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                            Tableaux de bord, reporting et modèles prédictifs pour transformer vos données en décisions stratégiques.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {renderBadge("Dashboards", "var(--pic-gold, #fdb913)", "#fdb913")}
                            {renderBadge("Reporting", "var(--pic-gold, #fdb913)", "#fdb913")}
                            {renderBadge("Prédiction", "var(--pic-gold, #fdb913)", "#fdb913")}
                        </div>

                        {/* Engineering Code Terminal */}
                        <EngineeringTerminal
                            filename="predictive_scoring.sql"
                            language="sql"
                            tagLabel="SQL // ML_MODEL"
                            accentColor="#fdb913"
                            lines={[
                                { text: "-- Modèle d'attrition & prédiction de LTV" },
                                { text: "SELECT cohort, ltv_forecast, churn_risk" },
                                { text: "FROM analytics.ml_scoring" },
                                { text: "WHERE confidence_score >= 0.985" },
                                { text: "ORDER BY ltv_forecast DESC;" },
                            ]}
                        />
                    </div>

                    {/* Spacer at the bottom so we can scroll past the last item safely */}
                    <div className="h-[20vh]"></div>
                </div>

            </div>
        </section>
    );
};
