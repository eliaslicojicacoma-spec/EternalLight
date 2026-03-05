import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Home({ params }: { params: { locale: string } }) {
  const locale = params.locale;

  return (
    <Container>
      <section className="card p-6 md:p-10">
        <div className="text-xs uppercase tracking-[0.2em] opacity-70">
          {locale === "pt" ? "Espiritualidade & Sociedade" : "Spirituality & Society"}
        </div>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
          EternalLight
        </h1>

        <p className="mt-4 max-w-2xl text-base opacity-80 md:text-lg">
          {locale === "pt"
            ? "Conectando fé e sociedade com clareza bíblica e aplicação prática."
            : "Connecting faith and society with biblical clarity and practical application."}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center justify-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--fg))] px-5 py-3 text-sm font-semibold text-[rgb(var(--bg))] hover:opacity-90"
          >
            {locale === "pt" ? "Explorar Artigos" : "Explore Articles"}
          </Link>

          <Link
            href={`/${locale}/verse-of-day`}
            className="inline-flex items-center justify-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-5 py-3 text-sm font-semibold hover:opacity-90"
          >
            {locale === "pt" ? "Versículo do Dia" : "Verse of the Day"}
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              t: locale === "pt" ? "Biblioteca" : "Library",
              d: locale === "pt" ? "Livros e recursos organizados." : "Books and organized resources.",
              href: `/${locale}/library`,
            },
            {
              t: locale === "pt" ? "Sociedade" : "Society",
              d: locale === "pt" ? "Temas atuais com visão cristã." : "Current topics with a Christian lens.",
              href: `/${locale}/sociedade`,
            },
            {
              t: locale === "pt" ? "Adventista" : "Adventist",
              d: locale === "pt" ? "Crenças, estudos e história." : "Beliefs, studies and history.",
              href: `/${locale}/adventist`,
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="card p-5 hover:opacity-90">
              <div className="font-semibold">{c.t}</div>
              <div className="mt-2 text-sm opacity-70">{c.d}</div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
