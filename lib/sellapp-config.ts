/**
 * SellApp checkout URLs per tier (DOM order: standard 1mo–12mo, then premium 1mo–12mo).
 * Update these when SellApp product links change.
 */
export type CurrencyCode = "usd" | "eur";

export type SellAppTier = {
  /** Stable id for debugging / analytics */
  id: string;
  sellAppUrlUsd: string;
  sellAppUrlEur: string;
};

export const SELLAPP_TIERS: SellAppTier[] = [
  {
    id: "std-1m",
    sellAppUrlUsd: "https://uicomponent.mysellauth.com/product/starter-kit",
    sellAppUrlEur: "https://uicomponent.mysellauth.com/product/starter-kit",
  },
  {
    id: "std-3m",
    sellAppUrlUsd: "https://datadraft.mysellauth.com/product/elite-vault",
    sellAppUrlEur: "https://datadraft.mysellauth.com/product/elite-vault",
  },
  {
    id: "std-6m",
    sellAppUrlUsd: "https://datadraft.mysellauth.com/product/business-suite",
    sellAppUrlEur: "https://datadraft.mysellauth.com/product/business-suite",
  },
  {
    id: "std-12m",
    sellAppUrlUsd:
      "https://datadraft.mysellauth.com/product/enterprise-ledger",
    sellAppUrlEur:
      "https://datadraft.mysellauth.com/product/enterprise-ledger",
  },
  {
    id: "prem-1m",
    sellAppUrlUsd: "https://uicomponent.mysellauth.com/product/pro-workflow",
    sellAppUrlEur: "https://uicomponent.mysellauth.com/product/pro-workflow",
  },
  {
    id: "prem-3m",
    sellAppUrlUsd:
      "https://uicomponent.mysellauth.com/product/premium-interface-pack",
    sellAppUrlEur:
      "https://uicomponent.mysellauth.com/product/premium-interface-pack",
  },
  {
    id: "prem-6m",
    sellAppUrlUsd:
      "https://datadraft.mysellauth.com/product/premium-toolkit",
    sellAppUrlEur:
      "https://datadraft.mysellauth.com/product/premium-toolkit",
  },
  {
    id: "prem-12m",
    sellAppUrlUsd:
      "https://datadraft.mysellauth.com/product/ultimate-data-infrastructure",
    sellAppUrlEur:
      "https://datadraft.mysellauth.com/product/ultimate-data-infrastructure",
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
