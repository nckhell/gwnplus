import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Layout/Nav";
import { Footer } from "@/components/Layout/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
    </html>
  );
}
