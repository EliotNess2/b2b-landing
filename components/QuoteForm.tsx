"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "Erreur serveur");
      }

      setState("success");
      // Rediriger vers page merci (meilleur suivi conversion)
      window.location.href = "/merci";
    } catch (err: any) {
      setState("error");
      setError(err?.message ?? "Une erreur est survenue.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-sm font-medium">Nom</span>
          <input
            name="name"
            required
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
            placeholder="Marie Dupont"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            required
            className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
            placeholder="marie@entreprise.com"
          />
        </label>
      </div>

      <label className="grid gap-1">
        <span className="text-sm font-medium">Type de projet</span>
        <select
          name="projectType"
          className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
          defaultValue="landing"
        >
          <option value="landing">Landing SEA</option>
          <option value="site">Site corporate</option>
          <option value="app">Web app</option>
          <option value="api">API / intégration</option>
          <option value="refonte">Refonte perf/SEO</option>
        </select>
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-medium">Objectif (1 phrase)</span>
        <input
          name="goal"
          required
          className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-slate-400"
          placeholder="Obtenir plus de demandes de devis via Google Ads."
        />
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-medium">Détails</span>
        <textarea
          name="details"
          rows={5}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
          placeholder="Pages attendues, contraintes, délais, exemples, intégrations…"
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === "loading"}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
        >
          {state === "loading" ? "Envoi..." : "Demander un devis"}
        </button>

        <div className="text-xs text-slate-500">
          Réponse sous 24h • Pas de spam • Objectif : devis
        </div>
      </div>

      {state === "error" ? (
        <p className="text-sm text-red-600">{error}</p>
      ) : null}
    </form>
  );
}
