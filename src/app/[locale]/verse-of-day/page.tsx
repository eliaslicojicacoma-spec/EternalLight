import Container from "@/components/layout/Container";

export default function VerseOfDay({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">
          {locale === "pt" ? "Versículo do Dia" : "Verse of the Day"}
        </h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Em seguida ligamos ao src/content/devocionais/verses.ts."
            : "Next we’ll connect to src/content/devocionais/verses.ts."}
        </p>
      </section>
    </Container>
  );
}
