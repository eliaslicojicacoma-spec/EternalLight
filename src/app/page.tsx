import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { internationalConfig } from "@/config/internationalConfig";

async function pickLocaleFromRequest(): Promise<string> {
  const cookieStore = await cookies();
  const headerStore = await headers();

  const cookieLocale = cookieStore.get("locale")?.value;
  if (cookieLocale && internationalConfig.locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const accept = headerStore.get("accept-language") || "";
  const lower = accept.toLowerCase();

  if (lower.includes("pt")) return "pt";
  if (lower.includes("en")) return "en";

  return internationalConfig.defaultLocale;
}

export default async function RootPage() {
  const locale = await pickLocaleFromRequest();
  redirect(`/${locale}`);
}
