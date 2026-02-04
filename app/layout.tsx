import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devis développement web | Agence / équipe dev",
  description:
    "Demandez un devis de développement web (site, app, API). Réponse sous 24h. Next.js, React, TypeScript, intégrations.",
  robots: { index: false, follow: false }, // landing SEA dédiée (souvent noindex)
  openGraph: {
    title: "Devis développement web",
    description: "Demandez un devis. Réponse sous 24h.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;

{GA_ID ? (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
    <Script id="gtag-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
        ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}
      `}
    </Script>
  </>
) : null}
{children}</body>
    </html>
  );
}
