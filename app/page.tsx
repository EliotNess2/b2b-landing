import { CtaLink } from "@/components/CtaLink";
import { Badge } from "@/components/Badge";
import { QuoteForm } from "@/components/QuoteForm";
import { Section } from "@/components/Section";
import { StickyCta } from "@/components/StickyCta";
import { KEYWORD, faqs, proofPoints, techBadges } from "@/lib/landing";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <StickyCta />

      {/* Header minimal (pas une home) */}
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight">WebDev Team</div>
          <CtaLink
  href="#devis"
  location="header"
  className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
>
  Demander un devis
</CtaLink>

        </div>
      </header>

      {/* HERO : cohérence annonce -> H1 -> CTA */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>SEA landing</Badge>
              <Badge>Réponse 24h</Badge>
              <Badge>Mobile-first</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              {KEYWORD} — réponse sous 24h
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              On développe votre landing, site ou web app avec un objectif unique :{" "}
              <span className="font-medium text-slate-900">transformer le clic en demande de devis</span>.
              Stack moderne, perf rapide, tracking prêt.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CtaLink
  href="#devis"
  location="hero"
  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
>
  Demander un devis
</CtaLink>

              <a
                href="#preuve"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Voir la preuve
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Un seul objectif • CTA clair • Pas de page d’accueil • Chargement rapide
            </p>
          </div>

          {/* Bloc “Trust + KPI” : preuve immédiate */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-xl border bg-white p-4">
                <div className="text-xs text-slate-500">Ce que vous obtenez</div>
                <div className="mt-2 text-base font-semibold">
                  Landing cohérente annonce → page, orientée conversion
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
                  <li>Message unique + preuve + CTA</li>
                  <li>Formulaire devis (1 min)</li>
                  <li>Perf & mobile en priorité</li>
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {proofPoints.map((p) => (
                  <div key={p.label} className="rounded-xl border bg-white p-4">
                    <div className="text-2xl font-semibold">{p.kpi}</div>
                    <div className="mt-1 text-xs text-slate-500">{p.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border bg-white p-4">
                <div className="text-xs text-slate-500">Tech</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {techBadges.slice(0, 6).map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="preuve"
        title="Preuve et rassurance"
        subtitle="Une landing performante réduit le doute : promesse claire + éléments concrets."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold">Cohérence annonce → landing</h3>
            <p className="mt-2 text-sm text-slate-600">
              Même mot-clé, même promesse, même CTA : vous augmentez la pertinence et la conversion.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold">UX centrée sur 1 action</h3>
            <p className="mt-2 text-sm text-slate-600">
              Pas de menu complexe, pas de distractions. Un chemin : preuve → formulaire.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold">Perf & mobile</h3>
            <p className="mt-2 text-sm text-slate-600">
              Pages légères, rendu rapide, formulaire simple. Idéal pour trafic Ads.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="tech"
        title="Technos"
        subtitle="Stack moderne pour livrer vite, bien, et maintenir facilement."
      >
        <div className="flex flex-wrap gap-2">
          {techBadges.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </Section>

      <Section
        id="devis"
        title="Demander un devis"
        subtitle="Remplissez en 1 minute. On répond sous 24h avec estimation + prochaines étapes."
      >
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <QuoteForm />
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold">Ce qu’on vous envoie</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
              <li>Fourchette de prix + options</li>
              <li>Planning (jalons)</li>
              <li>Recommandations conversion (SEA)</li>
              <li>Proposition technique (stack + perf)</li>
            </ul>

            <div className="mt-6 rounded-xl border bg-white p-4">
              <div className="text-xs text-slate-500">Bonnes pratiques SEA</div>
              <p className="mt-2 text-sm text-slate-600">
                Landing dédiée ≠ home. Un message, une preuve, un CTA. Et une page “merci” pour la conversion.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="faq" title="FAQ" subtitle="On répond aux objections classiques.">
        <div className="grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} WebDev Team</span>
          <span>Mentions • Confidentialité</span>
        </div>
      </footer>
    </main>
  );
}
