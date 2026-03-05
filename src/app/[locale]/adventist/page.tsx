import Container from "@/components/layout/Container";

export default function AdventistPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">
          {locale === "pt" ? "Adventista" : "Adventist"}
        </h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Aqui entra conteúdo Adventista (cards e artigos)."
            : "Adventist content will live here (cards & articles)."}
        </p>
      </section>
    </Container>
  );
}
