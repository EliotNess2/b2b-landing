import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devis développement web | WebDev Team",
  description:
    "Demandez un devis de développement web (landing SEA, site, app, API). Réponse sous 24h.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // ✅ Définis les variables ICI, dans la fonction
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  const ADS_ID = process.env.NEXT_PUBLIC_ADS_ID;

  return (
    <html lang="fr">
      <body>
        {children}

        {/* ✅ Scripts gtag : dans le return, après children */}
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
      </body>
    </html>
  );
}
