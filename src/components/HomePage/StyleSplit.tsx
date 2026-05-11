import Link from "next/link";

import { styleSplit } from "../../content/home";

export default function StyleSplit() {
  return (
    <section id="collections" className="home-section scroll-mt-24 bg-surface">
      <div className="home-container">
        <p className="home-section-kicker">Коллекции</p>
        <h2 className="home-section-heading">{styleSplit.title}</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-2xl border border-white/10 bg-surface-muted p-8 md:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
              {styleSplit.premium.name}
            </span>
            <p className="mt-4 text-lg text-slate-200">{styleSplit.premium.lead}</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {styleSplit.premium.bullets.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/catalog" className="home-btn-accent">
                {styleSplit.premium.cta}
              </Link>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-stone-400/30 bg-gradient-to-br from-stone-200 to-stone-300 p-8 text-stone-900 md:p-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-700">
              {styleSplit.orange.name}
            </span>
            <p className="mt-4 text-lg font-medium">{styleSplit.orange.lead}</p>
            <ul className="mt-6 space-y-3 text-stone-800">
              {styleSplit.orange.bullets.map((line) => (
                <li key={line} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-600" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center rounded-md border border-stone-800 bg-stone-900 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:bg-stone-800"
              >
                {styleSplit.orange.cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
