import Link from "next/link";

import { contactsMapUi } from "../../content/contacts";
import { showroomHours } from "../../constants";
import type { ShowroomLocation } from "../../constants";

type Props = {
  location: ShowroomLocation;
};

/** Карточка с адресом салона и встроенной картой — для страницы контактов и при необходимости с главной. */
export default function HomeMap({ location }: Props) {
  return (
    <article className="home-card-dark flex h-full flex-col overflow-hidden bg-surface-card/80 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.75)]">
      <div className="px-5 py-5 md:px-6 md:py-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex rounded-md border border-accent/35 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
            {location.badge}
          </span>
          <span className="text-xs text-slate-500">{showroomHours}</span>
        </div>
        <h2 className="mt-4 text-xl font-bold tracking-tight text-white md:text-2xl">
          {location.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {location.description}
        </p>
        <p className="mt-4 text-sm font-medium text-slate-200">{location.addressLine}</p>
        <Link
          href={location.mapOpenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex text-xs font-semibold text-accent underline-offset-4 transition hover:text-accent-hover hover:underline"
        >
          {contactsMapUi.openInGoogleMaps}
        </Link>
      </div>
      <div className="relative flex-1 bg-black/40">
        <iframe
          title={`Карта — ${location.title}, ${location.addressLine}`}
          src={location.mapEmbedUrl}
          className="block h-[min(52vh,400px)] min-h-[240px] w-full border-0 md:h-[min(48vh,380px)]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </article>
  );
}
