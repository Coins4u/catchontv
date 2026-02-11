"use client";

import { useCatchonTVUI } from "../hooks/useCatchonTVUI";

type Props = {
  /** "usd" for EN page, "eur" for de/fr/it/nl/pt */
  currency?: "usd" | "eur";
};

export default function CatchonTVUIClient({ currency = "eur" }: Props) {
  useCatchonTVUI(currency);
  return null;
}
