"use client";

import React, { useState } from "react";
import { useSiteSettings } from "@/context/SettingsContext";
import { BatteryWarning, X } from "lucide-react";

export function EcoModeNotification() {
  const { settings, batteryInfo, updateSetting } = useSiteSettings();
  const [dismissed, setDismissed] = useState(false);

  const showToast = batteryInfo.isLowBattery && settings.ecoMode && !dismissed;

  if (!showToast) return null;

  return (
    <aside
      id="eco-mode-notification"
      role="status"
      aria-live="polite"
      className="fixed bottom-24 left-6 z-40 max-w-sm p-4 rounded-xl bg-[#0a0b12]/95 border border-[#fdb913]/40 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-md text-xs font-mono text-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#fdb913]/10 border border-[#fdb913]/30 flex items-center justify-center text-[#fdb913] shrink-0">
          <BatteryWarning className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-bold text-[#fdb913]">MODE ÉCO ACTIVÉ</span>
            <span className="text-[10px] text-slate-500">BATTERIE {batteryInfo.level}%</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-snug mb-2 font-sans">
            Fréquence des engrenages plafonnée à 30 FPS pour préserver votre autonomie.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                updateSetting("ecoMode", false);
                setDismissed(true);
              }}
              className="text-[10px] text-[#3dbcc7] hover:underline"
            >
              Désactiver le mode éco
            </button>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Fermer la notification du mode éco"
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
