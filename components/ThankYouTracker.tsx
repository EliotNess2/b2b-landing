"use client";

import { useEffect } from "react";
import { trackAdsConversion, trackEvent } from "@/lib/gtag";

export function ThankYouTracker() {
  useEffect(() => {
    // GA4 lead event
    trackEvent("generate_lead", { page: "merci" });

    // Google Ads conversion
    trackAdsConversion();
  }, []);

  return null;
}
