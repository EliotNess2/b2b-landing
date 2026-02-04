import { NextResponse } from "next/server";

type QuotePayload = {
  name?: string;
  email?: string;
  projectType?: string;
  goal?: string;
  details?: string;
};

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as QuotePayload;

  // Validation légère (SEA landing: rapide)
  if (!body?.name || !body?.email || !body?.goal) {
    return NextResponse.json(
      { message: "Champs manquants (nom, email, objectif)." },
      { status: 400 }
    );
  }

  // Ici tu brancheras: email (Resend), CRM, Sheet, Notion, etc.
  // Pour l’exercice: on simule juste un OK.
  return NextResponse.json({ ok: true }, { status: 200 });
}
