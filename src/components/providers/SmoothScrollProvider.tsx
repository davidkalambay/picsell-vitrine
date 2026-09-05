"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap-config";
import { useSiteSettings } from "@/context/SettingsContext";

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
    const { settings } = useSiteSettings();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        if (!settings.lenisSmoothScroll || settings.reducedMotion) {
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
            return;
        }

        // Initialize high performance Lenis smooth scrolling instance
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 1.5,
        });

        lenisRef.current = lenis;

        // Synchronize Lenis with GSAP ScrollTrigger
        const onLenisScroll = () => {
            ScrollTrigger.update();
        };

        lenis.on("scroll", onLenisScroll);

        const updateTicker = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(updateTicker);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(updateTicker);
            lenis.off("scroll", onLenisScroll);
            lenis.destroy();
            lenisRef.current = null;
        };
    }, [settings.lenisSmoothScroll]);

    return <>{children}</>;
};
