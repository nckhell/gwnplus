import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Layout/Nav";
import { Footer } from "@/components/Layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GWN+ | Loopbaanbegeleiding",
  description:
    "Gwen Jansen (GWN+) uit Kontich coacht en ondersteunt individuen bij het ontdekken, plannen en ontwikkelen van loopbaanbeslissingen en het maximaliseren van hun professionele potentieel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Nav />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-K761TPNK4R" />
      <Script
        strategy="beforeInteractive"
        src="https://cdn-cookieyes.com/client_data/24bb444260d505f1e73255fb/script.js"
      />
    </html>
  );
}
