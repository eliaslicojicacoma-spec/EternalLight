import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { internationalConfig } from "@/config/internationalConfig";

export const dynamicParams = false;

export function generateStaticParams() {
  return internationalConfig.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale ?? internationalConfig.defaultLocale;

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
