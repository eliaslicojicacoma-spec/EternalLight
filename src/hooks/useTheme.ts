"use client";

import { useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "eternallight_theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Theme | null;
    const initial = saved ?? getSystemTheme();
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const api = useMemo(() => {
    const set = (t: Theme) => {
      setTheme(t);
      if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, t);
      document.documentElement.classList.toggle("dark", t === "dark");
    };

    const toggle = () => set(theme === "dark" ? "light" : "dark");

    return { theme, set, toggle };
  }, [theme]);

  return api;
}
