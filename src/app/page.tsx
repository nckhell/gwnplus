"use client";

import { Header } from "@/components/Layout/Header";
import { Nav } from "@/components/Layout/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mt-6 lg:mt-12">
        <Header />
      </div>
    </>
  );
}
