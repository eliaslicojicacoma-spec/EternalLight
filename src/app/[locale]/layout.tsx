import "@/styles/globals.css";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { internationalConfig } from "@/config/internationalConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return internationalConfig.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  const safeLocale =
    locale === "pt" || locale === "en"
      ? locale
      : internationalConfig.defaultLocale;

  return (
    <html lang={safeLocale} suppressHydrationWarning>
      <body className="min-h-screen">
        <div className="bg-hero min-h-screen">
          <Header locale={safeLocale} />
          <main className="pt-8">{children}</main>
          <Footer locale={safeLocale} />
        </div>
      </body>
    </html>
  );
}
