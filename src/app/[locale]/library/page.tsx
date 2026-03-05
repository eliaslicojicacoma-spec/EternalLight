import Container from "@/components/layout/Container";

export default function LibraryPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">
          {locale === "pt" ? "Biblioteca" : "Library"}
        </h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Aqui vamos listar livros/recursos (src/content/books/books.ts)."
            : "We’ll list books/resources here (src/content/books/books.ts)."}
        </p>
      </section>
    </Container>
  );
}
