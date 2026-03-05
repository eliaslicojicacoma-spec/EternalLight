import Container from "@/components/layout/Container";

export default function SocietyPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">
          {locale === "pt" ? "Sociedade" : "Society"}
        </h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Secção pronta. Vamos ligar cards e artigos em src/content/society/."
            : "Section ready. We’ll connect cards & articles in src/content/society/."}
        </p>
      </section>
    </Container>
  );
}
