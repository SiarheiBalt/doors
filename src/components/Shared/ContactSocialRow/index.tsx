import { contact, showroomHours, social } from "../../../constants";
import Image from "next/image";

function IconPhone(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

const socialBtnClass =
  "inline-flex shrink-0 rounded-full transition-[filter] duration-200 ease-out brightness-75 hover:brightness-90";

/** Телефон, режим работы и иконки соцсетей — единый блок для CTA и подобных секций. */
export default function ContactSocialRow() {
  return (
    <div className="flex shrink-0 flex-col items-start gap-6 text-left lg:gap-8">
      <div className="flex flex-col gap-1">
        <a
          href={contact.phoneHref}
          className="inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-accent"
        >
          <IconPhone className="h-5 w-5 shrink-0 text-white/90" />
          <span>{contact.phoneNumber}</span>
        </a>
        <p className="mt-1 text-xs leading-snug text-slate-500">{showroomHours}</p>
      </div>

      <div className="flex items-center gap-3">
        <a
          href={social.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className={socialBtnClass}
          aria-label="Telegram"
        >
          <Image src="\images\social\telegram.svg" alt="Instagram" width={44} height={44} />
        </a>
        <a
          href={social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={socialBtnClass}
          aria-label="WhatsApp"
        >
          <Image src="\images\social\whatsapp.svg" alt="Instagram" width={44} height={44} />
        </a>
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={socialBtnClass}
          aria-label="Instagram"
        >
          <Image src="\images\social\instagram.svg" alt="Instagram" width={44} height={44} />
        </a>
      </div>
    </div>
  );
}
