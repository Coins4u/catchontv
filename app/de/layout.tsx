import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catchon TV IPTV – bester IPTV Anbieter Deutschland",
  description:
    "Catchon TV (catch on tv) ist Ihr deutscher IPTV Anbieter: 4K, Anti‑Freeze, stabile IPTV Streams, Firestick & Kodi.",
  alternates: {
    canonical: "https://catchontvapp.com/de/",
  },
  openGraph: {
    type: "website",
    url: "https://catchontvapp.com/de/",
    title: "Catchon TV IPTV – bester IPTV Anbieter Deutschland",
    description:
      "Catchon TV (catchontv) bietet deutsches IPTV: 4K, Anti‑Freeze IPTV und IPTV Streams ohne Pufferung.",
    images: ["https://catchontvapp.com/img/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://catchontvapp.com/de/",
    title: "Catchon TV IPTV – bester IPTV Anbieter Deutschland",
    description:
      "Catchon TV (catch on tv) ist ein deutscher IPTV Anbieter mit 4K, Anti‑Freeze und IPTV Streams ohne Pufferung.",
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
