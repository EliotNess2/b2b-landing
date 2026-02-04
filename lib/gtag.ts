export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;
export const ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_ADS_CONVERSION_LABEL;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(action: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  if (!window.gtag) return;
  window.gtag("event", action, params);
}

export function trackAdsConversion() {
  if (!ADS_ID || !ADS_CONVERSION_LABEL) return;
  if (typeof window === "undefined") return;
  if (!window.gtag) return;

  window.gtag("event", "conversion", {
    send_to: `${ADS_ID}/${ADS_CONVERSION_LABEL}`,
  });
}
