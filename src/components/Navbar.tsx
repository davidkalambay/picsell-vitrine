"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MagneticButton } from "@/components/interactions/MagneticButton";
import { ChevronDown, Sparkles, ExternalLink, ArrowRight, Menu, X, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface NavbarProps {
    isDark?: boolean;
}

interface ExpertiseItem {
    num: string;
    action: string;
    title: string;
    href: string;
    color: string;
    badge: string;
    desc: string;
}

const EXPERTISES: ExpertiseItem[] = [
    {
        num: "01",
        action: "ACQUÉRIR",
        title: "Digital Marketing",
        href: "/#story-marketing",
        color: "var(--pic-orange, #f37021)",
        badge: "GROWTH",
        desc: "Acquisition ciblée, ROAS prédictif et image de marque haute fidélité.",
    },
    {
        num: "02",
        action: "ACCÉLÉRER",
        title: "Automatisation & IA",
        href: "/#story-automation",
        color: "var(--pic-turquoise, #3dbcc7)",
        badge: "WORKFLOW",
        desc: "Agents autonomes, suppression des tâches répétitives et gain de temps.",
    },
    {
        num: "03",
        action: "BÂTIR",
        title: "Développement Web & Cloud",
        href: "/#story-development",
        color: "var(--pic-blue, #0089d0)",
        badge: "DEV STACK",
        desc: "Applications SaaS Next.js 16, PostgreSQL et architectures résilientes.",
    },
    {
        num: "04",
        action: "PILOTER",
        title: "Data Intelligence",
        href: "/#story-data",
        color: "var(--pic-gold, #fdb913)",
        badge: "INSIGHTS",
        desc: "Tableaux de bord prédictifs, scoring client et visibilité trésorerie temps réel.",
    },
];

const NavbarComponent: React.FC<NavbarProps> = ({ isDark = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Scroll listener for compact navbar effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Dropdown hover helpers
    const handleMouseEnter = () => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
    };

    return (
        <>
            <header
                id="main-header"
                role="banner"
                className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-500`}
            >
                <nav
                    aria-label="Navigation principale"
                    className={`relative w-full h-[62px] md:h-[68px] flex items-center justify-between rounded-full px-4 sm:px-6 md:px-8 backdrop-blur-2xl transition-all duration-500 border ${
                        isDark || isScrolled
                            ? "bg-[#080910]/85 border-white/15 text-white shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
                            : "bg-white/90 border-slate-200/90 text-slate-900 shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
                    }`}
                >
                    {/* Brand Logo & Name */}
                    <Link
                        href="/"
                        aria-label="Picsell Agency — Retour à l'accueil"
                        className="flex items-center gap-2.5 sm:gap-3.5 no-underline group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pic-turquoise,#3dbcc7)] rounded-full py-1 pr-2"
                    >
                        <svg
                            className="h-[28px] sm:h-[34px] w-auto transition-transform duration-300 group-hover:rotate-12"
                            viewBox="0 0 2481 3508"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}
                            aria-hidden="true"
                        >
                            <g id="Page-1" transform="matrix(4.166667,0,0,4.166667,0,0)">
                                <rect x="0" y="0" width="595.28" height="841.89" style={{ fill: "none" }} />
                                <g id="Calque-1">
                                    <g transform="matrix(1,0,0,1,297.64,821.4851)">
                                        <path
                                            d="M0,-266.866L-266.866,-266.866C-266.866,-119.48 -147.386,0 0,0L0,-266.866Z"
                                            style={{ fill: "rgb(26,26,26)", fillRule: "nonzero" }}
                                        />
                                    </g>
                                    <g transform="matrix(1,0,0,1,0,-0.482)">
                                        <rect x="30.774" y="287.753" width="266.866" height="266.866" style={{ fill: "rgb(0,137,208)" }} />
                                    </g>
                                    <g transform="matrix(1,0,0,1,297.64,20.4049)">
                                        <path
                                            d="M0,266.866L266.866,266.866C266.866,119.48 147.386,0 0,0L0,266.866Z"
                                            style={{ fill: "rgb(253,185,19)", fillRule: "nonzero" }}
                                        />
                                    </g>
                                    <g transform="matrix(1,0,0,1,297.64,20.4049)">
                                        <path
                                            d="M0,266.866L-266.866,266.866C-266.866,119.48 -147.386,0 0,0L0,266.866Z"
                                            style={{ fill: "rgb(61,188,199)", fillRule: "nonzero" }}
                                        />
                                    </g>
                                    <g transform="matrix(1,0,0,1,297.64,554.1369)">
                                        <path
                                            d="M0,-266.866L266.866,-266.866C266.866,-119.48 147.386,0 0,0L0,-266.866Z"
                                            style={{ fill: "rgb(243,112,33)", fillRule: "nonzero" }}
                                        />
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span className="font-quicksand font-bold text-sm sm:text-base md:text-lg tracking-[-0.02em] text-current whitespace-nowrap">
                            Picsell Agency
                        </span>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {/* Accueil */}
                        <Link
                            href="/"
                            className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                        >
                            Accueil
                        </Link>

                        {/* Dropdown Menu: Expertises */}
                        <div
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button
                                type="button"
                                aria-expanded={isDropdownOpen}
                                aria-haspopup="true"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                    isDropdownOpen
                                        ? "text-[var(--pic-turquoise,#3dbcc7)] bg-white/10"
                                        : "text-slate-300 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                <span>Expertises</span>
                                <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                                        isDropdownOpen ? "rotate-180 text-[var(--pic-turquoise,#3dbcc7)]" : ""
                                    }`}
                                />
                            </button>

                            {/* Mega Dropdown Panel */}
                            {isDropdownOpen && (
                                <div
                                    role="menu"
                                    aria-label="Sous-menu des expertises"
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[460px] p-3 rounded-2xl bg-[#090a12]/95 border border-white/15 backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-in fade-in zoom-in-95 duration-200"
                                >
                                    <div className="grid grid-cols-2 gap-2">
                                        {EXPERTISES.map((item) => (
                                            <a
                                                key={item.num}
                                                href={item.href}
                                                role="menuitem"
                                                onClick={() => setIsDropdownOpen(false)}
                                                className="group p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/15 transition-all text-left flex flex-col justify-between"
                                            >
                                                <div>
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span
                                                            className="text-[10px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded"
                                                            style={{
                                                                color: item.color,
                                                                backgroundColor: "rgba(255,255,255,0.06)",
                                                            }}
                                                        >
                                                            {item.num} // {item.action}
                                                        </span>
                                                        <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                                    </div>
                                                    <div className="text-xs font-bold text-white font-sora group-hover:text-[var(--pic-turquoise,#3dbcc7)] transition-colors">
                                                        {item.title}
                                                    </div>
                                                </div>
                                                <p className="text-[10px] text-slate-400 line-clamp-2 mt-1 leading-snug font-sans">
                                                    {item.desc}
                                                </p>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between px-2 text-[10px] font-mono text-slate-400">
                                        <span>4 COMPLICATIONS HORLOGÈRES</span>
                                        <span className="text-[var(--pic-gold,#fdb913)] font-bold">100% INTÉGRÉ</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Preuves / Cas Réels */}
                        <a
                            href="/#portfolio-garde-temps"
                            className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                        >
                            Preuves d&apos;Exécution
                        </a>

                        {/* Simulateur ROI */}
                        <a
                            href="/#roi-dashboard-showcase"
                            className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                        >
                            Simulateur ROI
                        </a>

                        {/* À Propos */}
                        <a
                            href="/a-propos"
                            className="px-3 py-1.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                        >
                            À Propos
                        </a>
                    </div>

                    {/* Desktop Right Action: Quick Consultation CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <MagneticButton
                            href="/#footer-contact"
                            strength={0.25}
                            className="px-4 py-2 rounded-full text-xs font-bold bg-white text-slate-950 hover:bg-[var(--pic-gold,#fdb913)] hover:text-slate-950 transition-all shadow-sm flex items-center gap-1.5"
                            onClick={() => {
                                trackEvent("cta_click", { target: "consultation", location: "navbar" });
                            }}
                        >
                            <span>Cadrage Stratégique</span>
                            <Sparkles className="w-3.5 h-3.5" />
                        </MagneticButton>
                    </div>

                    {/* Mobile Hamburger Toggle Button */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-navigation-drawer"
                            aria-label={isMobileMenuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
                            className="min-h-[44px] min-w-[44px] p-2 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pic-turquoise,#3dbcc7)]"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Fullscreen Navigation Overlay & Drawer */}
            {isMobileMenuOpen && (
                <div
                    id="mobile-navigation-drawer"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu de navigation mobile"
                    className="fixed inset-0 z-40 bg-[#06070a]/95 backdrop-blur-3xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-6 animate-in fade-in duration-300"
                >
                    <div className="space-y-6 max-h-[75vh] overflow-y-auto">
                        <div className="text-[10px] font-mono tracking-widest text-[#fdb913] uppercase flex items-center gap-2 border-b border-white/10 pb-2">
                            <span className="w-2 h-2 rounded-full bg-[#fdb913] animate-pulse" />
                            NAVIGATION // SYSTÈME PICSELL
                        </div>

                        {/* Navigation Links List */}
                        <div className="flex flex-col space-y-3 font-sora">
                            <Link
                                href="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="min-h-[44px] flex items-center justify-between text-lg font-bold text-white hover:text-[var(--pic-turquoise,#3dbcc7)] transition-colors border-b border-white/5 pb-2"
                            >
                                <span>00. Accueil</span>
                                <ArrowRight className="w-4 h-4 text-slate-500" />
                            </Link>

                            <div className="space-y-2 pt-1">
                                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                                    01. Nos 4 Expertises :
                                </div>
                                <div className="grid grid-cols-1 gap-2 pl-2">
                                    {EXPERTISES.map((item) => (
                                        <a
                                            key={item.num}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="min-h-[44px] flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-sm font-semibold text-slate-200 hover:text-white"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-mono font-bold" style={{ color: item.color }}>
                                                    {item.num}
                                                </span>
                                                <span>{item.action} — {item.title}</span>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-400">{item.badge}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <a
                                href="/#portfolio-garde-temps"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="min-h-[44px] flex items-center justify-between text-lg font-bold text-white hover:text-[var(--pic-turquoise,#3dbcc7)] transition-colors border-b border-white/5 py-2"
                            >
                                <span>02. Preuves d&apos;Exécution</span>
                                <ArrowRight className="w-4 h-4 text-slate-500" />
                            </a>

                            <a
                                href="/#roi-dashboard-showcase"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="min-h-[44px] flex items-center justify-between text-lg font-bold text-white hover:text-[var(--pic-turquoise,#3dbcc7)] transition-colors border-b border-white/5 py-2"
                            >
                                <span>03. Simulateur ROI</span>
                                <ArrowRight className="w-4 h-4 text-slate-500" />
                            </a>

                            <a
                                href="/a-propos"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="min-h-[44px] flex items-center justify-between text-lg font-bold text-white hover:text-[var(--pic-turquoise,#3dbcc7)] transition-colors border-b border-white/5 py-2"
                            >
                                <span>04. À Propos de l&apos;Agence</span>
                                <ArrowRight className="w-4 h-4 text-slate-500" />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Bottom CTAs */}
                    <div className="pt-6 border-t border-white/10 space-y-3">
                        <MagneticButton
                            href="/#footer-contact"
                            strength={0.2}
                            className="w-full min-h-[44px] py-3.5 px-6 rounded-xl font-bold text-sm bg-[var(--pic-gold,#fdb913)] text-slate-950 flex items-center justify-center gap-2"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                trackEvent("cta_click", { target: "consultation", location: "mobile_menu" });
                            }}
                        >
                            <span>Demander un Cadrage Stratégique</span>
                            <ArrowRight className="w-4 h-4" />
                        </MagneticButton>

                        <a
                            href="https://www.upwork.com/freelancers/~017c699933b93f7734"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="min-h-[44px] w-full py-2.5 px-4 rounded-xl border border-white/15 bg-white/5 text-xs font-mono text-slate-300 flex items-center justify-center gap-2"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                trackEvent("cta_click", { target: "upwork", location: "mobile_menu" });
                            }}
                        >
                            <ShieldCheck className="w-4 h-4 text-[#3dbcc7]" />
                            <span>Contrat Upwork Escrow (David Kalambay)</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

const Navbar = React.memo(
    NavbarComponent,
    (prevProps, nextProps) => prevProps.isDark === nextProps.isDark
);

export default Navbar;
export { Navbar };
