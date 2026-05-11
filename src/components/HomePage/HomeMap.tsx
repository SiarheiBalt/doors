import { showroom } from "../../constants";

export default function HomeMap() {
  return (
    <section id="contacts" className="scroll-mt-24 border-t border-white/10 bg-surface-muted py-12">
      <div className="home-container">
        <p className="home-section-kicker">Контакты</p>
        <h2 className="home-section-heading">Как нас найти</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-slate-400">
          {showroom.venueName}, {showroom.addressLine}
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="home-card-dark overflow-hidden rounded-xl">
          <iframe
            title={`Карта — ${showroom.venueName}, ${showroom.addressLine}`}
            src={showroom.mapEmbedUrl}
            className="block h-[min(70vh,480px)] min-h-[280px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
