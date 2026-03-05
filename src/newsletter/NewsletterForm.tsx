"use client";

import { useState } from "react";
import { useNewsletter } from "@/hooks/useNewsletter";

export default function NewsletterForm({ locale }: { locale: string }) {
  const [email, setEmail] = useState("");
  const { loading, status, subscribe } = useNewsletter();

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        subscribe(email);
      }}
    >
      <label className="text-sm font-medium opacity-80">
        {locale === "pt" ? "Email" : "Email"}
      </label>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={locale === "pt" ? "ex: teuemail@gmail.com" : "e.g. your@email.com"}
        className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3 outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]"
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--fg))] px-4 py-3 text-sm font-semibold text-[rgb(var(--bg))] hover:opacity-90 disabled:opacity-60"
      >
        {loading
          ? locale === "pt" ? "A enviar..." : "Sending..."
          : locale === "pt" ? "Subscrever" : "Subscribe"}
      </button>

      {status === "ok" && (
        <div className="text-sm opacity-80">
          {locale === "pt" ? "Inscrição recebida ✅" : "Subscription received ✅"}
        </div>
      )}
      {status === "error" && (
        <div className="text-sm opacity-80">
          {locale === "pt" ? "Falhou. Tenta novamente." : "Failed. Try again."}
        </div>
      )}
    </form>
  );
}
