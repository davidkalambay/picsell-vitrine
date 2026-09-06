import { useEffect, useRef } from "react";

export const useMobileGearsParallax = () => {
  const scrollytellingRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    scrollytellingRef.current = document.getElementById("scrollytelling-section");
    const heroGearContainer = document.querySelector(".hero-gear-watermark")?.parentElement;

    if (!heroGearContainer || !scrollytellingRef.current) return;

    // Make gears sticky on mobile when scrolling into scrollytelling section
    const handleScroll = () => {
      if (!scrollytellingRef.current || !heroGearContainer) return;

      const scrollyRect = scrollytellingRef.current.getBoundingClientRect();
      const heroRect = heroGearContainer.getBoundingClientRect();

      const scrollyInView = scrollyRect.top < window.innerHeight * 0.5;

      if (scrollyInView) {
        heroGearContainer.style.position = "fixed";
        heroGearContainer.style.top = "50%";
        heroGearContainer.style.left = "50%";
        heroGearContainer.style.transform = "translate(-50%, -50%)";
        heroGearContainer.style.pointerEvents = "none";
        heroGearContainer.style.zIndex = "40";
      } else {
        heroGearContainer.style.position = "relative";
        heroGearContainer.style.top = "auto";
        heroGearContainer.style.left = "auto";
        heroGearContainer.style.transform = "none";
      }
    };

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return scrollytellingRef;
};
