import Link from "next/link";

type Item = { href: string; label: string };

export default function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-2 opacity-80">
        {items.map((it, idx) => (
          <li key={it.href} className="flex items-center gap-2">
            {idx > 0 && <span className="opacity-40">/</span>}
            <Link className="hover:opacity-100 hover:underline" href={it.href}>
              {it.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
