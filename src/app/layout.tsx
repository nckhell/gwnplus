import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GWN+",
  description:
    "GWN+ coacht en ondersteunt individuen bij het ontdekken, plannen en ontwikkelen van loopbaanbeslissingen en het maximaliseren van hun professionele potentieel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
