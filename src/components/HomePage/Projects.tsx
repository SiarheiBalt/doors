import Image from "next/image";

import { projects } from "../../content/home";
import cs from "classnames";

export default function Projects() {
  return (
    <section id="portfolio" className="home-section scroll-mt-24 bg-surface">
      <div className="home-container">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-left text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
              Портфолио
            </p>
            <h2 className="mt-3 text-left text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              {projects.title}
            </h2>
          </div>
          <a
            href="#portfolio"
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {projects.viewAll}
          </a>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {projects.cards.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/profil-doors-grodno-hero.webp"
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className={cs(
                      "inline-block rounded px-2 py-0.5 text-xs font-bold uppercase tracking-wider",
                      card.badge === "PREMIUM"
                        ? "bg-accent/90 text-stone-900"
                        : "bg-amber-200/90 text-stone-900",
                    )}
                  >
                    {card.badge}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{card.desc}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
                  >
                    {card.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
