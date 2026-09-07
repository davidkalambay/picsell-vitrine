"use client";

import React, { useState, useEffect } from "react";

export function ArticleReadingProgress({ themeColor = "#fdb913" }: { themeColor?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 z-50 bg-black/40 pointer-events-none"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progression de lecture de l'article"
    >
      <div
        className="h-full transition-all duration-150 ease-out shadow-[0_0_10px_currentColor]"
        style={{
          width: `${progress}%`,
          backgroundColor: themeColor,
          color: themeColor,
        }}
      />
    </div>
  );
}
