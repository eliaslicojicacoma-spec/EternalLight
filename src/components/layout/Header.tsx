"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import { useTheme } from "@/hooks/useTheme";

type Props = { locale: string };

export default function Header({ locale }: Props) {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const nav = useMemo(
    () => [
      { href: "/blog", pt: "Blog", en: "Blog" },
      { href: "/sociedade", pt: "Sociedade", en: "Society" },
      { href: "/adventist", pt: "Adventista", en: "Adventist" },
      { href: "/library", pt: "Biblioteca", en: "Library" },
      { href: "/verse-of-day", pt: "Versículo", en: "Verse" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-40 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] font-black">
              EL
            </span>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">EternalLight</div>
              <div className="text-xs opacity-70">
                {locale === "pt" ? "Espiritualidade & Sociedade" : "Spirituality & Society"}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={`/${locale}${i.href}`}
                className="rounded-2xl px-3 py-2 text-sm hover:bg-[rgb(var(--card))] hover:shadow-[0_10px_30px_rgba(0,0,0,.06)]"
              >
                {locale === "pt" ? i.pt : i.en}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-2 text-sm hover:opacity-90"
              aria-label="Toggle theme"
              title={locale === "pt" ? "Alternar tema" : "Toggle theme"}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            <Link
              href={`/${locale}/subscribe`}
              className="hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2 text-sm font-medium hover:opacity-90 md:inline-flex"
            >
              {locale === "pt" ? "Subscrever" : "Subscribe"}
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-2 text-sm hover:opacity-90 md:hidden"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} locale={locale} />
    </header>
  );
}
