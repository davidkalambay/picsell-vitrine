import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins centrally to ensure consistency and avoid SSR issues
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Global GSAP defaults
gsap.defaults({
    ease: "power1.inOut",
    duration: 1,
});

export { gsap, ScrollTrigger, useGSAP };
