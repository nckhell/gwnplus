import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Layout/Nav";
import { Footer } from "@/components/Layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JSONLD } from "@/components/SEO/JSONLD";

const jsonld = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: "Gwen Jansen (GWN+)",
  image:
    "https://www.gwnplus.be/_next/image?url=%2Fgwen_jansen.JPG&w=3840&q=75",
  telephone: "0473 25 53 33",
  email: "gwen@gwnplus.be",
  employee: "Gwen Jansen",
  founder: "Gwen Jansen",
  keywords: "Loopbaanbegeleiding, loopbaancoaching",
  legalName: "GWN+",
  logo: "https://www.gwnplus.be/_next/image?url=%2Flogo.png&w=1080&q=75",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Witvrouwenveldstraat 7",
    addressLocality: "Kontich",
    postalCode: "2550",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.131380066373,
    longitude: 4.444895037545555,
  },
};

export const metadata: Metadata = {
  title: "Gwen Jansen (GWN+) | Loopbaancoach in Kontich",
  description:
    "Gwen Jansen (GWN+) uit Kontich ondersteunt je als loopbaancoach met loopbaanbegeleiding door het ontdekken, plannen en ontwikkelen van loopbaanbeslissingen.",
  alternates: {
    canonical: "https://www.gwnplus.be/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="bg-white">
        <JSONLD data={jsonld} />
        <Nav />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-K761TPNK4R" />
      <Script
        strategy="beforeInteractive"
        src="https://cdn-cookieyes.com/client_data/24bb444260d505f1e73255fb/script.js"
      />
    </html>
  );
}
