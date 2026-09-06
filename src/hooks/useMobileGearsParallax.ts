import { useEffect, useRef } from "react";

export const useMobileGearsParallax = () => {
  const scrollytellingRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    scrollytellingRef.current = document.getElementById("scrollytelling-section");
    const gearEngineSvg = document.getElementById("scrollytelling-gear-engine");
    const gearEngineContainer = gearEngineSvg?.parentElement;

    if (!gearEngineContainer || !scrollytellingRef.current) return;

    // Make central gear engine with 4 colored satellites sticky on mobile when scrolling into scrollytelling section
    const handleScroll = () => {
      if (!scrollytellingRef.current || !gearEngineContainer) return;

      const scrollyRect = scrollytellingRef.current.getBoundingClientRect();

      const scrollyInView = scrollyRect.top < window.innerHeight * 0.5;

      if (scrollyInView) {
        gearEngineContainer.style.position = "fixed";
        gearEngineContainer.style.top = "50%";
        gearEngineContainer.style.left = "50%";
        gearEngineContainer.style.transform = "translate(-50%, -50%)";
        gearEngineContainer.style.pointerEvents = "none";
        gearEngineContainer.style.zIndex = "40";
      } else {
        gearEngineContainer.style.position = "relative";
        gearEngineContainer.style.top = "auto";
        gearEngineContainer.style.left = "auto";
        gearEngineContainer.style.transform = "none";
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
