"use client";

import Link from "next/link";
import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  locale: string;
};

const links = [
  { href: "", label: { pt: "Início", en: "Home" } },
  { href: "/blog", label: { pt: "Blog", en: "Blog" } },
  { href: "/sociedade", label: { pt: "Sociedade", en: "Society" } },
  { href: "/adventist", label: { pt: "Adventista", en: "Adventist" } },
  { href: "/library", label: { pt: "Biblioteca", en: "Library" } },
  { href: "/verse-of-day", label: { pt: "Versículo do Dia", en: "Verse of the Day" } },
  { href: "/about", label: { pt: "Sobre", en: "About" } },
  { href: "/subscribe", label: { pt: "Subscrever", en: "Subscribe" } },
];

export default function MobileMenu({ open, onClose, locale }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        aria-label="Close menu"
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-[rgb(var(--bg))] border-l border-[rgb(var(--border))] p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold tracking-tight">EternalLight</div>
          <button
            onClick={onClose}
            className="rounded-xl border border-[rgb(var(--border))] px-3 py-2 text-sm hover:opacity-80"
          >
            {locale === "pt" ? "Fechar" : "Close"}
          </button>
        </div>

        <nav className="mt-4 flex flex-col gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={`/${locale}${l.href}`}
              onClick={onClose}
              className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3 hover:opacity-90"
            >
              {locale === "pt" ? l.label.pt : l.label.en}
            </Link>
          ))}
        </nav>

        <div className="mt-6 text-xs opacity-70">
          {locale === "pt"
            ? "Dica: podes fechar com ESC 😉"
            : "Tip: you can close with ESC 😉"}
        </div>
      </div>
    </div>
  );
}
