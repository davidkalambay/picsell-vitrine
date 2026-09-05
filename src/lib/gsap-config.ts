"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

/**
 * Winston 09: SSR Isolation & Isomorphic Lifecycle Management
 * Guarantees zero-FOUC (Flash of Unstyled Content), safe plugin registration
 * and controlled post-hydration layout synchronization.
 */

let pluginsRegistered = false;

export function ensureGsapPluginsRegistered() {
    if (typeof window === "undefined" || pluginsRegistered) return;

    try {
        gsap.registerPlugin(ScrollTrigger);

        // Global GSAP defaults - Winston 02: 100% GPU Hardware Acceleration
        gsap.config({
            force3D: true,
            autoSleep: 60,
            nullTargetWarn: false, // Suppress console warnings during rapid SSR/client switches
        });

        gsap.defaults({
            ease: "power1.inOut",
            duration: 1,
            force3D: true,
        });

        // Anti-FOUC initialization flag on DOM
        if (typeof document !== "undefined") {
            document.documentElement.classList.add("gsap-ready");
        }

        pluginsRegistered = true;
    } catch (err) {
        console.warn("[GSAP Config] Plugin registration deferred:", err);
    }
}

// Initial registration in browser context
if (typeof window !== "undefined") {
    ensureGsapPluginsRegistered();
}

/**
 * Safe ScrollTrigger Refresh
 * Debounced refresh after layout or dynamic font load
 */
export function safeScrollTriggerRefresh(delay = 100) {
    if (typeof window === "undefined") return;

    setTimeout(() => {
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
        });
    }, delay);
}

export { gsap, ScrollTrigger, useGSAP, useIsomorphicLayoutEffect };
