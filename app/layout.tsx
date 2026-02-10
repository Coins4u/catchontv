import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SetLang } from "./components/SetLang";
import ThirdPartyScripts from "./components/ThirdPartyScripts";
import "./globals.css";
import "./catchontv-style.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Catchon TV IPTV | Best IPTV Service 2026",
  description:
    "Catchon TV (catchon tv) offers premium IPTV service 4K, anti-freeze tech, and no buffering IPTV streams for Firestick, Kodi & Smart IPTV.",
  keywords:
    "IPTV service, IPTV providers, Premium IPTV subscription, IPTV stream, IPTV server, Smart IPTV, Xtream IPTV, M3U IPTV playlist, IPTV list, IPTV channels, IPTV on Firestick, IPTV on Kodi, Best IPTV player for Firestick, USA IPTV, UK IPTV, IPTV in the UK, IPTV Smarters Pro, 4K IPTV streaming, Live IPTV channels, IPTV VOD, IPTV EPG, affordable IPTV, reliable IPTV provider",
  alternates: {
    canonical: "https://catchontvapp.com/",
    languages: {
      en: "https://catchontvapp.com/",
      fr: "https://catchontvapp.com/fr/",
      de: "https://catchontvapp.com/de/",
      it: "https://catchontvapp.com/it/",
      nl: "https://catchontvapp.com/nl/",
      pt: "https://catchontvapp.com/pt/",
      "x-default": "https://catchontvapp.com/",
    },
  },
  openGraph: {
    type: "website",
    url: "https://catchontvapp.com/",
    title: "Catchon TV IPTV | Best IPTV Service 2026",
    description:
      "Catchon TV (catch on tv, catchontv) delivers premium IPTV service 4K, anti-freeze IPTV tech, and no buffering IPTV streams.",
    images: ["https://catchontvapp.com/img/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    url: "https://catchontvapp.com/",
    title: "Catchon TV IPTV | Best IPTV Service 2026",
    description:
      "Catchon TV (catchon tv) is a premium IPTV provider with 4K live TV streaming, anti-freeze IPTV, and no buffering IPTV streams.",
    images: ["https://catchontvapp.com/img/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/img/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://catchontvapp.com/",
              name: "Catchon TV",
              url: "https://catchontvapp.com/",
              logo: "https://catchontvapp.com/img/logo.png",
              description:
                "Catchon TV is a premium IPTV provider offering anti-freeze IPTV, IPTV service 4K, and no buffering IPTV streams for Firestick, Kodi, Smart IPTV, and M3U IPTV playlists.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-579-3893-759",
                contactType: "customer service",
                email: "support@catchontvapp.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Catchon TV IPTV Subscription | Best IPTV Service 2026",
              description:
                "Catchon TV IPTV subscription with 47,000+ live channels, IPTV streams, M3U IPTV playlists, and 4K quality. Premium IPTV provider with anti-freeze IPTV for Firestick, Kodi, and Smart IPTV.",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "EUR",
                lowPrice: "13.97",
                highPrice: "69.97",
                offerCount: "3",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "1250",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Amelie P.",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "Setup was a breeze! The interface is slick, and the streaming quality is flawless. Best IPTV 2026 for sure.",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How to install IPTV?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Getting set up is incredibly fast and simple! 1. Pick your device (Smart TV, Android Box, Firestick, etc.). 2. Download our recommended IPTV player app. 3. Enter the subscription credentials we provide. 4. Launch the app and immediately start watching!",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is IPTV legal to use?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, IPTV is legal when the service provider strictly adheres to copyright laws and possesses the correct licensing for all the content they distribute. To stay protected and compliant, always choose established, reputable providers who operate within legal guidelines.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What internet speed do I need for IPTV?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To guarantee the best viewing experience, we recommend: 10 Mbps for Standard Definition (SD), 20 Mbps for High Definition (HD), and 30+ Mbps for stunning Ultra HD (4K). However, remember that stability is even more crucial than raw speed—a consistent connection is key!",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do I need a VPN to use IPTV?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While a VPN is not mandatory, we strongly recommend using one, especially depending on your region. A VPN enhances your online privacy, helps you bypass frustrating geo-restrictions, and prevents your Internet Service Provider (ISP) from deliberately slowing down (throttling) your streaming speed. It ensures a safer, smoother, and completely unrestricted streaming experience.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={outfit.variable}>
        <SetLang />
        <ThirdPartyScripts />
        {children}
      </body>
    </html>
  );
}
