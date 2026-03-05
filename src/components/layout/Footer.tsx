import Link from "next/link";
import Container from "./Container";
import { contactConfig } from "@/config/contactConfig";

export default function Footer({ locale }: { locale: string }) {
  return (
    <footer className="mt-16 border-t border-[rgb(var(--border))]">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          <div>
            <div className="font-semibold tracking-tight">EternalLight</div>
            <p className="mt-2 text-sm opacity-70">
              {locale === "pt"
                ? "Conectando fé e sociedade com clareza bíblica e aplicação prática."
                : "Connecting faith and society with biblical clarity and practical application."}
            </p>
          </div>

          <div className="text-sm">
            <div className="font-medium opacity-80">
              {locale === "pt" ? "Explorar" : "Explore"}
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <Link className="opacity-75 hover:opacity-100" href={`/${locale}/blog`}>
                {locale === "pt" ? "Blog" : "Blog"}
              </Link>
              <Link className="opacity-75 hover:opacity-100" href={`/${locale}/library`}>
                {locale === "pt" ? "Biblioteca" : "Library"}
              </Link>
              <Link className="opacity-75 hover:opacity-100" href={`/${locale}/sociedade`}>
                {locale === "pt" ? "Sociedade" : "Society"}
              </Link>
              <Link className="opacity-75 hover:opacity-100" href={`/${locale}/adventist`}>
                {locale === "pt" ? "Adventista" : "Adventist"}
              </Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-medium opacity-80">
              {locale === "pt" ? "Contacto" : "Contact"}
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <a className="opacity-75 hover:opacity-100" href={`mailto:${contactConfig.email}`}>
                {contactConfig.email}
              </a>
              <a className="opacity-75 hover:opacity-100" href={contactConfig.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="opacity-75 hover:opacity-100" href={contactConfig.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a className="opacity-75 hover:opacity-100" href={contactConfig.youtube} target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[rgb(var(--border))] py-6 text-xs opacity-70 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} EternalLight.</div>
          <div className="flex gap-4">
            <Link href={`/${locale}/privacy`} className="hover:opacity-100">Privacy</Link>
            <Link href={`/${locale}/terms`} className="hover:opacity-100">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
