"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const localeMap: Record<string, string> = {
  "/de": "de",
  "/fr": "fr",
  "/it": "it",
  "/nl": "nl",
  "/pt": "pt",
};

export function SetLang() {
  const pathname = usePathname();
  useEffect(() => {
    const segment = pathname?.split("/")[1];
    const lang = segment && localeMap["/" + segment] ? localeMap["/" + segment] : "en";
    document.documentElement.lang = lang;
  }, [pathname]);
  return null;
}
