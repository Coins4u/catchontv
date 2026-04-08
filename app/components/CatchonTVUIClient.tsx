"use client";

import { useCatchonTVUI } from "../hooks/useCatchonTVUI";
import OrderLeadModal from "./OrderLeadModal";
import type { CurrencyCode } from "../../lib/sellapp-config";

type Props = {
  /** "usd" for EN page, "eur" for de/fr/it/nl/pt */
  currency?: CurrencyCode;
};

export default function CatchonTVUIClient({ currency = "eur" }: Props) {
  useCatchonTVUI();
  return <OrderLeadModal currency={currency} />;
}
