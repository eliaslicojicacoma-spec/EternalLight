import Container from "@/components/layout/Container";

export default function AdventistSlugPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;

  return (
    <Container>
      <section className="card p-6 md:p-10">
        <div className="text-sm opacity-70">{locale === "pt" ? "Adventista" : "Adventist"}</div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{slug}</h1>
        <p className="mt-4 opacity-75">
          {locale === "pt"
            ? "Página dinâmica pronta."
            : "Dynamic page ready."}
        </p>
      </section>
    </Container>
  );
}
