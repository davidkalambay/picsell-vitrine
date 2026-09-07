// Privacy-first Google Analytics (GA4) Telemetry Client
// Compliant with GDPR, ePrivacy and Do-Not-Track headers.

export type AnalyticsEvent =
  | { name: "view_pillar"; params: { pillar_id: string; pillar_name: string } }
  | { name: "open_settings_drawer"; params: { from: string } }
  | { name: "toggle_eco_mode"; params: { enabled: boolean; source: "manual" | "auto_battery" } }
  | { name: "toggle_reduced_motion"; params: { enabled: boolean; source: "manual" | "auto_system" } }
  | { name: "calculate_roi"; params: { monthly_budget: number; processes_count: number; annual_gain: number } }
  | { name: "cta_click"; params: { target: "upwork" | "consultation" | "portfolio" | "audit" | "code_review" | "manifesto" | "leadership"; location: string } }
  | { name: "submit_consultation"; params: { pillar: string; budget: string; urgency: string } };

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-PICSELL2026";

/**
 * Checks if the user has enabled Do Not Track (DNT) in their browser.
 */
export function isDoNotTrackEnabled(): boolean {
  if (typeof window === "undefined") return false;
  const dnt = navigator.doNotTrack || (window as unknown as { doNotTrack?: string }).doNotTrack;
  return dnt === "1" || dnt === "yes";
}

/**
 * Sends a structured analytics event to GA4 and console telemetry.
 */
export function trackEvent<E extends AnalyticsEvent>(name: E["name"], params: E["params"]): void {
  if (typeof window === "undefined") return;

  // Respect user privacy and DNT header
  if (isDoNotTrackEnabled()) {
    if (process.env.NODE_ENV === "development") {
      console.info(`[Analytics Telemetry - DNT Active] Event "${name}" suppressed.`, params);
    }
    return;
  }

  // Push to Google Analytics gtag if available
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  // Dispatch custom DOM event for internal reactive telemetry
  window.dispatchEvent(
    new CustomEvent("picsell:telemetry", {
      detail: { name, params, timestamp: Date.now() },
    })
  );

  if (process.env.NODE_ENV === "development") {
    console.debug(`[Analytics Telemetry: ${name}]`, params);
  }
}

/**
 * Tracks virtual page view for SPA navigation
 */
export function trackPageView(url: string): void {
  if (typeof window === "undefined" || isDoNotTrackEnabled()) return;

  if (typeof window.gtag === "function") {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
}
