import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins centrally to ensure consistency and avoid SSR issues
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Global GSAP defaults - Winston 02: 100% GPU Hardware Acceleration
gsap.config({
    force3D: true,
    autoSleep: 60,
});

gsap.defaults({
    ease: "power1.inOut",
    duration: 1,
    force3D: true,
});

export { gsap, ScrollTrigger, useGSAP };
