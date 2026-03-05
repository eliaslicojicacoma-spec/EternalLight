import Container from "@/components/layout/Container";

export default function About({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">
          {locale === "pt" ? "Sobre" : "About"}
        </h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Página pronta. Depois metemos a tua história + missão."
            : "Page ready. Next we add your story + mission."}
        </p>
      </section>
    </Container>
  );
}
