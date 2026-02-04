export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <header className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
      </header>
      <div className="mt-8">{children}</div>
    </section>
  );
}
