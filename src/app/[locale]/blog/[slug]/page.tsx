import Container from "@/components/layout/Container";

export default function BlogSlugPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  return (
    <Container>
      <section className="card p-6 md:p-10">
        <div className="text-sm opacity-70">{locale === "pt" ? "Artigo" : "Article"}</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{slug}</h1>
        <p className="mt-4 opacity-75">
          {locale === "pt"
            ? "Página pronta. Próximo passo: buscar conteúdo real do articles.ts."
            : "Page ready. Next: load real content from articles.ts."}
        </p>
      </section>
    </Container>
  );
}
