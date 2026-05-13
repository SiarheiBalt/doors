import Image from "next/image";
import Link from "next/link";

import SalonBookingButton from "../Contacts/SalonBookingButton";
import { hero } from "../../content/home";

export default function Hero() {
  return (
    <section className="relative min-h-[min(100vh,900px)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/profil-doors-grodno-hero.webp"
          alt="Современные межкомнатные двери в интерьере — салон Profil Doors, Гродно"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-surface" />
      </div>

      <div className="relative z-10 flex min-h-[min(100vh,900px)] flex-col justify-center px-4 pt-28 home-container">
        <p className="text-left text-xs font-semibold uppercase tracking-[0.25em] text-accent max-w-xs break-normal">
          {hero.kicker}
        </p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold text-white md:text-5xl max-w-xs leading-none">
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-slate-200 md:text-lg max-w-xs">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/catalog" className="home-btn-accent min-w-[200px]">
            {hero.ctaCatalog}
          </Link>
          <SalonBookingButton className="home-btn-outline min-w-[200px]">
            {hero.ctaSalon}
          </SalonBookingButton>
        </div>

        <div>
          <div className="mt-16 flex gap-2 flex-wrap">
            {hero.trust.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border-white/10 p-2 w-fit"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          {/* <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/90 underline-offset-4 transition hover:text-white hover:underline"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            {hero.video}
          </a> */}
        </div>
      </div>
    </section>
  );
}
