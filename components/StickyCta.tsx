"use client";

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/90 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="text-sm">
          <div className="font-semibold text-slate-900">Demander un devis</div>
          <div className="text-xs text-slate-500">Réponse sous 24h</div>
        </div>
        <a
          href="#devis"
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        >
          CTA
        </a>
      </div>
    </div>
  );
}
