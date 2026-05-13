import Image from "next/image";
import Link from "next/link";

import { styleSplit } from "../../content/home";

export default function StyleSplit() {
  return (
    <section id="collections" className="home-section scroll-mt-24 bg-surface">
      <div className="home-container">
        <p className="home-section-kicker">Коллекции</p>
        <h2 className="home-section-heading">{styleSplit.title}</h2>

        <div className="mt-12 grid md:grid-cols-2">
          <article className="group relative flex min-h-[min(52vh,460px)] flex-col overflow-hidden">
            <Image
              src="/style-split-premium.webp"
              alt="PREMIUM"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-black/88 via-black/55 to-black/35"
              aria-hidden
            />
            <div className="relative flex flex-1 flex-col p-8 md:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-white">{styleSplit.premium.name}</h2>
              <p className="mt-4 max-w-xs text-lg text-slate-100/95">{styleSplit.premium.lead}</p>
              <ul className="mt-6 space-y-3">
                {styleSplit.premium.bullets.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/catalog" className="home-btn-outline min-w-[200px]">
                  {styleSplit.premium.cta}
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-300">{styleSplit.premium.note.toUpperCase()}</p>
            </div>
          </article>

          <article className="group relative flex min-h-[min(52vh,460px)] flex-col overflow-hidden">
            <Image
              src="/style-split-orange.webp"
              alt="ORANGE"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-br from-stone-900/82 via-stone-900/45 to-black/25"
              aria-hidden
            />
            <div className="relative flex flex-1 flex-col p-8 md:p-10">
              <h2 className="text-2xl font-bold tracking-tight">{styleSplit.orange.name}</h2>
              <p className="mt-4 max-w-xs text-lg font-medium">{styleSplit.orange.lead}</p>
              <ul className="mt-6 space-y-3">
                {styleSplit.orange.bullets.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/catalog" className="home-btn-accent min-w-[200px]">
                  {styleSplit.orange.cta}
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-300">{styleSplit.orange.note.toUpperCase()}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
