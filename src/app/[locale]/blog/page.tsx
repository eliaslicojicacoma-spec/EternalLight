import Container from "@/components/layout/Container";

export default function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">{locale === "pt" ? "Blog" : "Blog"}</h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Aqui vão aparecer os artigos (vamos ligar ao src/content/blog/articles.ts já já)."
            : "Articles will appear here (we’ll connect src/content/blog/articles.ts next)."}
        </p>
      </section>
    </Container>
  );
}
