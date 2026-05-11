"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cs from "classnames";

import icon from "../../../public/logo.png";
import { usePathname } from "next/navigation";
import { contact, paths, showroomHours } from "../../constants";

const nav = [
  { label: "Каталог", href: "/catalog" },
  { label: "Коллекции", href: "/#collections" },
  { label: "Портфолио", href: "/#portfolio" },
  { label: "О компании", href: "/#about" },
  { label: "Услуги", href: "/#services" },
  { label: "Контакты", href: "/#contacts" },
] as const;

type Props = object;

const Header: FC<Props> = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (pathname === `/${paths.admin}`) return null;

  // const isHome = pathname === "/";
  const isHome = true;

  return (
    <header
      className={cs(
        "fixed top-0 z-50 w-full border-b transition-colors",
        isHome
          ? "border-white/10 bg-surface/85 backdrop-blur-md text-white"
          : "border-transparent bg-white shadow-md text-primary",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="shrink-0">
          <Image
            src={icon}
            width={100}
            height={50}
            alt="Profil Doors — салон в Гродно"
            className={cs(isHome && "brightness-0 invert")}
          />
        </Link>

        <nav
          className={cs(
            "hidden flex-1 flex-wrap items-center justify-center gap-6 text-sm font-medium md:flex lg:gap-8",
            isHome ? "text-white/90" : "text-primary",
          )}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cs(
                "transition hover:text-accent",
                !isHome && "hover:text-secondary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          className={cs(
            "hidden shrink-0 flex-col items-end gap-1 text-right text-sm md:flex",
            isHome ? "text-white" : "text-primary",
          )}
        >
          <a
            href={contact.phoneHref}
            className="font-semibold hover:text-accent md:hover:text-accent"
          >
            {contact.phoneNumber}
          </a>
          <span
            className={cs(
              "text-xs",
              isHome ? "text-slate-400" : "text-secondary",
            )}
          >
            {showroomHours}
          </span>
        </div>

        <button
          type="button"
          className={cs("md:hidden", isHome ? "text-white" : "text-primary")}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          className={cs(
            "border-t px-4 py-4 md:hidden",
            isHome ? "border-white/10 bg-surface text-white" : "border-gray-100 bg-white text-primary",
          )}
        >
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href={contact.phoneHref} className="mt-4 block font-semibold">
            {contact.phoneNumber}
          </a>
          <span className="mt-1 block text-xs opacity-70">{showroomHours}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
