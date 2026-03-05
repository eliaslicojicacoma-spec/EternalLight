import Container from "@/components/layout/Container";

export default function Privacy({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">Privacy</h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Texto legal vem depois. Agora é só placeholder bonito e válido."
            : "Legal text later. For now, a clean placeholder."}
        </p>
      </section>
    </Container>
  );
}
