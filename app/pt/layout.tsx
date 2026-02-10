import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catchon TV IPTV Portugal | Melhor IPTV em Portugal",
  description:
    "Catchon TV (catch on tv) oferece IPTV Portugal 4K, playlists M3U e streaming estável. Opção legal e simples para Portugal.",
  alternates: {
    canonical: "https://catchontvapp.com/pt/",
  },
  openGraph: {
    type: "website",
    url: "https://catchontvapp.com/pt/",
    title: "Catchon TV IPTV Portugal | Melhor IPTV em Portugal",
    description:
      "Catchon TV (catchontv): IPTV Portugal 4K, playlists M3U e listas IPTV estáveis.",
    images: ["https://catchontvapp.com/img/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catchon TV IPTV Portugal | Melhor IPTV em Portugal",
    description:
      "Catchon TV (catch on iptv): IPTV Portugal 4K, playlists M3U e listas estáveis.",
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
