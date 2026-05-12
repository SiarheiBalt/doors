import Image from "next/image";
import { process } from "../../content/home";

const ICONS = [
  "/images/process/process-icon-consultation.png",
  "/images/process/process-icon-measurement.png",
  "/images/process/process-icon-selection.png",
  "/images/process/process-icon-delivery.png",
  "/images/process/process-icon-installation.png",
  "/images/process/process-icon-finished.png",
] as const;

function IconToIconArrow() {
  return (
    <div
      className="ml-2 hidden h-12 min-w-0 flex-1 flex-row items-center gap-0.5 xl:flex"
      aria-hidden
    >
      <div className="h-px min-w-[12px] flex-1 border-t border-dashed border-slate-300" />
      <svg
        className="h-3.5 w-3.5 shrink-0 text-slate-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 12 12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.2}
          d="M2.5 3.5L7.5 6l-5 2.5"
        />
      </svg>
    </div>
  );
}

export default function Process() {
  return (
    <section
      id="services"
      className="home-section scroll-mt-24 bg-white text-slate-900"
      aria-labelledby="process-heading"
    >
      <div className="home-container">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-10 xl:gap-16">
          <div className="shrink-0 lg:max-w-[220px]">
            <h2
              id="process-heading"
              className="text-2xl font-bold uppercase leading-[1.1] tracking-tight text-slate-900 md:text-3xl"
            >
              <span className="block">{process.headingLine1}</span>
              <span className="block">{process.headingLine2}</span>
            </h2>
          </div>

          <ol className="flex min-w-0 flex-1 list-none flex-wrap gap-y-10 p-0 xl:flex-nowrap">
            {process.steps.map((step, i) => (
              <li
                key={step.n}
                className="flex w-1/2 min-w-0 flex-col pl-0 sm:w-1/3 lg:w-1/3 xl:flex-1 xl:basis-0 pr-2"
              >
                <span className="text-[11px] font-medium tabular-nums text-slate-400 pl-4">
                  {step.n}
                </span>
                <div className="mt-3 flex w-full items-center">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src={ICONS[i]}
                      alt=""
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain transform scale-150"
                    />
                  </div>
                  {i < process.steps.length - 1 ? <IconToIconArrow /> : null}
                </div>
                <p className="mt-4 text-xs font-bold uppercase leading-snug tracking-wide text-slate-900">
                  {step.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
