import Container from "@/components/layout/Container";

export default function LibrarySlugPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  return (
    <Container>
      <section className="card p-6 md:p-10">
        <div className="text-sm opacity-70">{locale === "pt" ? "Biblioteca" : "Library"}</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{slug}</h1>
        <p className="mt-4 opacity-75">
          {locale === "pt"
            ? "Detalhe do recurso (vamos ligar ao books.ts depois)."
            : "Resource detail (we’ll connect to books.ts next)."}
        </p>
      </section>
    </Container>
  );
}
