"use client";

import { trackEvent } from "@/lib/gtag";

export function CtaLink({
  href,
  children,
  location,
  className,
}: {
  href: string;
  children: React.ReactNode;
  location: string; // "header" | "hero" | "sticky" etc.
  className: string;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() =>
        trackEvent("cta_click", {
          location,
          href,
        })
      }
    >
      {children}
    </a>
  );
}
