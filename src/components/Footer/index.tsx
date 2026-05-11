"use client";

import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import cs from "classnames";

import icon from "../../../public/logo.png";
import { contact, paths, showroomHours } from "../../constants";

const footerLinkGroups = [
  {
    title: "Категории",
    links: [
      { label: "Межкомнатные двери", href: "/catalog" },
      { label: "Скрытые двери", href: "/catalog" },
      { label: "Алюминиевые перегородки", href: "/catalog" },
    ],
  },
  {
    title: "Клиентам",
    links: [
      { label: "Каталог", href: "/catalog" },
      { label: "Портфолио", href: "/#portfolio" },
      { label: "Контакты", href: "/#contacts" },
    ],
  },
  {
    title: "Информация",
    links: [
      { label: "О компании", href: "/#about" },
      { label: "Услуги", href: "/#services" },
    ],
  },
] as const;

const Footer: FC = () => {
  const pathname = usePathname();

  if (pathname === `/${paths.admin}`) return null;

  const isHome = pathname === "/";

  return (
    <footer
      className={cs(
        "border-t border-white/10 bg-surface text-slate-300",
        isHome ? "mt-0" : "mt-auto",
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src={icon}
                width={100}
                height={50}
                alt="Profil Doors"
                className="brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Официальный салон Profil Doors в Гродно. Подбор дверей, монтаж и сервис.
            </p>
            <a
              href={contact.phoneHref}
              className="mt-4 inline-block text-lg font-semibold text-white hover:text-accent"
            >
              {contact.phoneNumber}
            </a>
            <p className="mt-1 text-xs text-slate-500">{showroomHours}</p>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Profil Doors, Гродно. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
