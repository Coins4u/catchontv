import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catchon TV IPTV Italia | Miglior servizio IPTV",
  description:
    "Catchon TV (catch on tv) offre IPTV Italia 4K senza buffering, canali TV italiani, liste M3U aggiornate e IPTV Smarters Italia.",
  alternates: {
    canonical: "https://catchontvapp.com/it/",
  },
  openGraph: {
    type: "website",
    url: "https://catchontvapp.com/it/",
    title: "Catchon TV IPTV Italia | Miglior servizio IPTV",
    description:
      "Catchon TV (catchontv): abbonamenti IPTV, canali TV italiani, sport in 4K e streaming stabile senza buffering.",
    images: ["https://catchontvapp.com/img/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catchon TV IPTV Italia | Miglior servizio IPTV",
    description:
      "Catchon TV (catch on iptv): abbonamenti IPTV, canali italiani, 4K e streaming senza buffering.",
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
