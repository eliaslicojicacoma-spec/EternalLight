import { redirect } from "next/navigation";
import { internationalConfig } from "@/config/internationalConfig";

function pickLocaleFromRequest(): string {
  // 1) Cookie manual (se no futuro guardarmos preferências)
  const cookieLocale = cookies().get("locale")?.value;
  if (cookieLocale && internationalConfig.locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2) Accept-Language do browser (pt, pt-PT, en, en-US...)
  const accept = headers().get("accept-language") || "";
  const lower = accept.toLowerCase();

  // prioridade: pt se aparecer, senão en, senão default
  if (lower.includes("pt")) return "pt";
  if (lower.includes("en")) return "en";

  return internationalConfig.defaultLocale;
}

export default function RootPage() {
  redirect(`/${internationalConfig.defaultLocale}`);
}
