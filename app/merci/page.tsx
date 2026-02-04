import { ThankYouTracker } from "@/components/ThankYouTracker";
export default function MerciPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ThankYouTracker />

      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          Demande envoyée
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Merci — on revient vers vous sous 24h.
        </h1>
        <p className="mt-3 text-slate-600">
          Prochaine étape : on vous envoie une estimation + un planning, ou on propose un call rapide si besoin.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="/"
            className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
          >
            Retour landing
          </a>
          <a
            href="#"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Ajouter un créneau (option)
          </a>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          (Tip SEA) Cette page peut déclencher la conversion Google Ads.
        </p>
      </div>
    </main>
  );
}
