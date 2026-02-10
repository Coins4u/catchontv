import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catchon TV IPTV Nederland | Beste IPTV kopen",
  description:
    "Catchon TV (catch on tv) biedt Nederlandse IPTV: IPTV met abonnement, 4K zonder haperingen, M3U lijsten en IPTV kastje opties.",
  alternates: {
    canonical: "https://catchontvapp.com/nl/",
  },
  openGraph: {
    type: "website",
    url: "https://catchontvapp.com/nl/",
    title: "Catchon TV IPTV Nederland | Beste IPTV kopen",
    description:
      "Catchon TV (catchontv): Nederlandse IPTV, IPTV met abonnement, 4K, M3U lijsten en stabiele streams.",
    images: ["https://catchontvapp.com/img/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catchon TV IPTV Nederland | Beste IPTV kopen",
    description:
      "Catchon TV (catch on iptv): Nederlandse IPTV met abonnement, 4K en M3U lijsten.",
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
