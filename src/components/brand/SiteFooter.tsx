import React from "react";

/** FR20 — Tagline au footer */
export function SiteFooter() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 flex flex-col items-center gap-2 pb-[4vh] pt-4 px-6 text-center bg-gradient-to-t from-pic-bg-light via-pic-bg-light/95 to-transparent">
      <p className="font-heading font-semibold text-pic-charcoal text-base md:text-lg m-0 tracking-tight">
        Precision in every pixel
      </p>
      <p className="font-sans text-pic-charcoal/55 text-xs m-0">
        Vitrine en finalisation — disponible prochainement.
      </p>
    </footer>
  );
}
