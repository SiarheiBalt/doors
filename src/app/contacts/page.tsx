import type { Metadata } from "next";

import ContactSocialRow from "../../components/Shared/ContactSocialRow";
import HomeMap from "../../components/HomePage/HomeMap";
import { contactsMeta, contactsPage } from "../../content/contacts";
import { showroomLocations } from "../../constants";

export const metadata: Metadata = {
  title: contactsMeta.title,
  description: contactsMeta.description,
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-surface text-slate-100">
      <div className="border-b border-white/10 bg-gradient-to-b from-surface-muted to-surface pt-28 pb-14 md:pt-32 md:pb-16">
        <div className="home-container text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
            {contactsPage.kicker}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.5rem]">
            {contactsPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            {contactsPage.intro.before}
            <span className="text-slate-300">{contactsPage.intro.premium}</span>
            {contactsPage.intro.mid}
            <span className="text-slate-300">{contactsPage.intro.orange}</span>
            {contactsPage.intro.after}
          </p>

          <div className="max-w-4xl mt-6 text-left">
            <ContactSocialRow />
          </div>
        </div>
      </div>

      <div className="home-container py-14 md:py-20">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          {contactsPage.maps.kicker}
        </p>
        <h2 className="home-section-heading mt-3 text-balance">
          {contactsPage.maps.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-400">
          {contactsPage.maps.lead}
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6 lg:items-stretch">
          <HomeMap location={showroomLocations.premium} />
          <HomeMap location={showroomLocations.orange} />
        </div>
      </div>
    </div>
  );
}
