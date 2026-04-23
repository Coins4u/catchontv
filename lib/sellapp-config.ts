/**
 * Checkout URLs per tier (DOM order: standard 1mo–12mo, then premium 1mo–12mo).
 * Update these when G2G offer links change. USD and EUR use the same URL.
 */
export type CurrencyCode = "usd" | "eur";

export type SellAppTier = {
  /** Stable id for debugging / analytics */
  id: string;
  sellAppUrlUsd: string;
  sellAppUrlEur: string;
};

const G2G_STD_1M =
  "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776945010505AC?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=Usopp7z";
const G2G_STD_3M =
  "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776945180122MY?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=Usopp7z";
const G2G_STD_6M =
  "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776945241101FO?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=Usopp7z";
const G2G_STD_12M =
  "https://www.g2g.com/categories/dino-iptv-accounts/offer/G1776945322940VL?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=Usopp7z";
const G2G_PREM_1M =
  "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776945528798UP?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=Usopp7z";
const G2G_PREM_3M =
  "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776945585974AK?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=Usopp7z";
const G2G_PREM_6M =
  "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776945662340BS?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=Usopp7z";
const G2G_PREM_12M =
  "https://www.g2g.com/categories/strng-iptv-8k-accounts/offer/G1776945715792GW?region_id=0f76ac42-3267-4d77-9fba-f9d9d719dac9&seller=Usopp7z";

export const SELLAPP_TIERS: SellAppTier[] = [
  {
    id: "std-1m",
    sellAppUrlUsd: G2G_STD_1M,
    sellAppUrlEur: G2G_STD_1M,
  },
  {
    id: "std-3m",
    sellAppUrlUsd: G2G_STD_3M,
    sellAppUrlEur: G2G_STD_3M,
  },
  {
    id: "std-6m",
    sellAppUrlUsd: G2G_STD_6M,
    sellAppUrlEur: G2G_STD_6M,
  },
  {
    id: "std-12m",
    sellAppUrlUsd: G2G_STD_12M,
    sellAppUrlEur: G2G_STD_12M,
  },
  {
    id: "prem-1m",
    sellAppUrlUsd: G2G_PREM_1M,
    sellAppUrlEur: G2G_PREM_1M,
  },
  {
    id: "prem-3m",
    sellAppUrlUsd: G2G_PREM_3M,
    sellAppUrlEur: G2G_PREM_3M,
  },
  {
    id: "prem-6m",
    sellAppUrlUsd: G2G_PREM_6M,
    sellAppUrlEur: G2G_PREM_6M,
  },
  {
    id: "prem-12m",
    sellAppUrlUsd: G2G_PREM_12M,
    sellAppUrlEur: G2G_PREM_12M,
  },
];

export function getSellAppLinkForTier(
  tierIndex: number,
  currency: CurrencyCode,
): string | undefined {
  const tier = SELLAPP_TIERS[tierIndex];
  if (!tier) return undefined;
  return currency === "usd" ? tier.sellAppUrlUsd : tier.sellAppUrlEur;
}
