import Container from "@/components/layout/Container";

export default function Terms({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">Terms</h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Texto legal vem depois. Placeholder clean."
            : "Legal text later. Clean placeholder."}
        </p>
      </section>
    </Container>
  );
}
