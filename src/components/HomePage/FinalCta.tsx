import ContactSocialRow from "../Shared/ContactSocialRow";
import { finalCta } from "../../content/home";

export default function FinalCta() {
  return (
    <section className="home-section border-t border-white/10 bg-surface py-12 md:py-14 lg:py-16">
      <div className="home-container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-8 xl:gap-12">
          <h2 className="text-accent min-w-0 max-w-xl text-balance text-left text-xl font-bold uppercase leading-snug tracking-wide sm:text-2xl lg:max-w-[min(100%,22rem)] lg:text-[clamp(1.125rem,2.1vw,1.625rem)] xl:max-w-md xl:text-3xl">
            {finalCta.title}
          </h2>

          <ContactSocialRow />
        </div>
      </div>
    </section>
  );
}
