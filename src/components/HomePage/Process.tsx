import { process } from "../../content/home";

export default function Process() {
  return (
    <section id="services" className="home-section scroll-mt-24 bg-surface-muted">
      <div className="home-container">
        <p className="home-section-kicker">Услуги</p>
        <h2 className="home-section-heading">{process.title}</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {process.steps.map((step) => (
            <div
              key={step.n}
              className="home-card-dark rounded-xl border-white/10 p-5"
            >
              <span className="text-2xl font-bold text-accent">{step.n}</span>
              <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
