import { whyUs } from "../../content/home";

function IconBadgeCheck() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="9" strokeWidth={1.25} />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M8.5 12l2 2 4.5-4.5" />
    </svg>
  );
}

function IconHardHat() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M12 4v2M8 6c0-1.1.9-2 2-2h4a2 2 0 012 2v1H8V6zM6 11h12l-1 7a2 2 0 01-2 1.9H9a2 2 0 01-2-1.9L6 11zM4 11c0-1.66 1.34-3 3-3h10c1.66 0 3 1.34 3 3"
      />
    </svg>
  );
}

function IconCardCheck() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M8 7h11a2 2 0 012 2v2.5M6 10V9a2 2 0 012-2h1.5M6 18h4.5M6 14c0-1.66 1.34-3 3-3h.5"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M14.5 14l1.5 1.5 3-3" />
      <rect x="3" y="12" width="8" height="9" rx="1.5" strokeWidth={1.25} />
    </svg>
  );
}

function IconPackageCheck() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.25}
        d="M4 8l8-3 8 3v10l-8 3-8-3V8zM4 8l8 3 8-3M12 11v10"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25} d="M9.5 6.5l1.5 1 2.5-2" />
    </svg>
  );
}

const icons = [IconBadgeCheck, IconHardHat, IconCardCheck, IconPackageCheck];

export default function WhyUs() {
  return (
    <section id="about" className="home-section scroll-mt-24 bg-white text-slate-900">
      <div className="home-container">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-2 xl:gap-6">
          <h2 className="max-w-[200px] text-2xl font-bold uppercase leading-tight tracking-tight text-slate-900 md:text-3xl">
            {whyUs.title}
          </h2>

          <ul className="grid flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.items.map((item, i) => {
              const Icon = icons[i] ?? IconBadgeCheck;
              return (
                <li key={item.title} className="flex flex-col border-l border-solid border-l-black/10 pl-4 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-14 flex justify-center items-center">
                      <Icon />
                    </div>
                    <h3 className="text-sm font-bold uppercase leading-snug tracking-wide text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
