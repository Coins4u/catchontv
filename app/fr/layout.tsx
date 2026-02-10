import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catchon TV IPTV | Meilleur abonnement IPTV France",
  description:
    "Catchon TV (catch on tv) propose un abonnement IPTV premium en France : 4K, anti‑coupure, chaînes françaises et apps IPTV Smarters Pro.",
  alternates: {
    canonical: "https://catchontvapp.com/fr/",
  },
  openGraph: {
    type: "website",
    url: "https://catchontvapp.com/fr/",
    title: "Catchon TV IPTV | Meilleur abonnement IPTV France",
    description:
      "Catchon TV (catchontv) : abonnement IPTV premium, 4K, anti‑coupure, chaînes françaises et internationales.",
    images: ["https://catchontvapp.com/img/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://catchontvapp.com/fr/",
    title: "Catchon TV IPTV | Meilleur abonnement IPTV France",
    description:
      "Catchon TV (catch on tv) : abonnement IPTV premium, 4K, anti‑coupure et chaînes françaises.",
    images: ["https://catchontvapp.com/img/logo.png"],
  },
};

export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
