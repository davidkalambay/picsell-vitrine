"use client";

import React from "react";
import { useMobileNav } from "@/context/MobileNavContext";

export const HamburgerButton: React.FC = () => {
  const { isOpen, toggleMenu } = useMobileNav();

  return (
    <button
      onClick={toggleMenu}
      aria-label="Navigation menu"
      aria-expanded={isOpen}
      aria-controls="mobile-nav-drawer"
      className="fixed top-4 right-4 z-[100] flex flex-col justify-center items-center w-12 h-12 md:hidden"
      style={{
        gap: "6px",
      }}
    >
      {/* Top line */}
      <span
        className="w-6 h-0.5 bg-current transition-all duration-300"
        style={{
          transform: isOpen ? "rotate(45deg) translateY(11px)" : "rotate(0deg)",
        }}
      />

      {/* Middle line */}
      <span
        className="w-6 h-0.5 bg-current transition-all duration-300"
        style={{
          opacity: isOpen ? 0 : 1,
        }}
      />

      {/* Bottom line */}
      <span
        className="w-6 h-0.5 bg-current transition-all duration-300"
        style={{
          transform: isOpen ? "rotate(-45deg) translateY(-11px)" : "rotate(0deg)",
        }}
      />
    </button>
  );
};
