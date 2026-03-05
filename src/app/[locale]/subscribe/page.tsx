import Container from "@/components/layout/Container";
import NewsletterForm from "@/newsletter/NewsletterForm";

export default function Subscribe({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <Container>
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl font-bold tracking-tight">
          {locale === "pt" ? "Subscrever" : "Subscribe"}
        </h1>
        <p className="mt-3 opacity-75">
          {locale === "pt"
            ? "Recebe novidades e novos recursos."
            : "Get updates and new resources."}
        </p>

        <div className="mt-6 max-w-lg">
          <NewsletterForm locale={locale} />
        </div>
      </section>
    </Container>
  );
}
