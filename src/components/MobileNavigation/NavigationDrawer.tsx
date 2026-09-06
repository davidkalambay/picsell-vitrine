"use client";

import React, { useEffect, useRef } from "react";
import { useMobileNav } from "@/context/MobileNavContext";
import { useSiteSettings } from "@/context/SettingsContext";

interface NavigationLink {
  id: string;
  label: string;
  href: string;
}

export const NavigationDrawer: React.FC = () => {
  const { isOpen, closeMenu } = useMobileNav();
  const { setIsDrawerOpen } = useSiteSettings();
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  const navigationLinks: NavigationLink[] = [
    { id: "marketing", label: "Marketing", href: "#story-marketing" },
    { id: "automation", label: "Automation", href: "#story-automation" },
    { id: "development", label: "Development", href: "#story-development" },
    { id: "data", label: "Data", href: "#story-data" },
  ];

  // Handle scroll to section
  const handleNavigationClick = (href: string) => {
    closeMenu();
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Handle settings toggle
  const handleSettingsToggle = () => {
    setIsDrawerOpen(true);
    closeMenu();
  };

  // Handle contact CTA
  const handleContactClick = () => {
    closeMenu();
    const contactElement = document.querySelector("[data-contact-cta]");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Keyboard handling: ESC to close, Tab focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          "button, a, [tabindex]"
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement?.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement?.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Set initial focus when drawer opens
  useEffect(() => {
    if (isOpen && firstFocusableRef.current) {
      setTimeout(() => firstFocusableRef.current?.focus(), 100);
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-opacity duration-300 animate-fade-in md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Navigation Drawer */}
      <div
        ref={drawerRef}
        onClick={(e) => e.stopPropagation()}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        data-lenis-prevent="true"
        data-lenis-prevent-wheel="true"
        data-lenis-prevent-touch="true"
        id="mobile-nav-drawer"
        className={`fixed top-0 left-0 right-0 h-screen w-full bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 z-[100] p-6 flex flex-col overflow-y-auto overscroll-contain shadow-2xl transition-transform duration-300 ease-out text-white md:hidden ${
          isOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
        }`}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-600/30 flex items-center justify-center text-blue-500 text-lg">
              ☰
            </div>
            <div>
              <h2 className="text-lg font-bold font-sora tracking-tight">Navigation</h2>
              <p className="text-xs text-slate-400">Explorez nos services</p>
            </div>
          </div>

          <button
            ref={firstFocusableRef}
            onClick={closeMenu}
            aria-label="Fermer le menu"
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-3 mb-8 flex-1">
          {navigationLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigationClick(link.href)}
              className="w-full text-left py-3 px-4 rounded-xl bg-white/[0.03] hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-semibold transition-all duration-200 group"
            >
              <span className="flex items-center justify-between">
                {link.label}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-white/10 my-6" />

        {/* Secondary Actions */}
        <div className="space-y-3">
          {/* Settings Toggle */}
          <button
            onClick={handleSettingsToggle}
            className="w-full py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/15 hover:border-white/25 text-sm font-semibold text-slate-200 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>⚙️</span>
            Réglages Studio
          </button>

          {/* Contact CTA */}
          <button
            ref={lastFocusableRef}
            onClick={handleContactClick}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(59,188,199,0.3)] hover:shadow-[0_0_30px_rgba(59,188,199,0.5)] transition-all duration-300"
          >
            Nous Contacter
          </button>
        </div>

        {/* Footer Info */}
        <div className="pt-6 border-t border-white/10 mt-8 text-center">
          <p className="text-[10px] text-slate-500 font-mono">
            Picsell Agency • Navigation Mobile v1.0
          </p>
        </div>
      </div>
    </>
  );
};
