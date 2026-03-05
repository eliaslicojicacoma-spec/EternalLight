import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { internationalConfig } from "@/config/internationalConfig";
import type { ReactNode } from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  return internationalConfig.locales.map((locale) => ({ locale }));
}

type LayoutProps = {
  children: ReactNode;
  // Em alguns ambientes (Vercel/Next), params pode vir como Promise.
  params: { locale: string } | Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale ?? internationalConfig.defaultLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen">
        <div className="bg-hero min-h-screen">
          <Header locale={locale} />
          <main className="pt-8">{children}</main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
