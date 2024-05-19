"use client";

import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="container-gwen lg:flex lg:justify-between lg:items-center">
      <div className="lg:order-last lg:w-2/5 mb-12 lg:mb-0">
        <Image
          src="/gwen_jansen.JPG"
          alt="Gwen Jansen"
          width="2948"
          height="3025"
          className="blob-image w-3/5 lg:w-auto max-w-[340px] mx-auto"
          priority
        />
      </div>
      <div className="lg:w-3/5">
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-4xl lg:leading-snug">
          Klaar om de richting van{" "}
          <span className="text-gwen-dark font-bold">jouw loopbaan</span> te
          verkennen?
        </h1>
        <div className="flex space-y-4 flex-col mt-4 text-lg text-slate-600">
          <p>
            Als gecertificeerd loopbaancoach in Kontich sta ik te popelen om
            samen op ontdekking te gaan en de juiste route uit te stippelen voor
            jouw professionele reis. Mijn rol is om jou te ondersteunen, zodat
            je met zelfvertrouwen, vastberadenheid en de nodige kracht alle
            avonturen en uitdagingen in jouw loopbaan met succes kunt aangaan.
          </p>
          <p className="font-bold">
            Klaar om samen de deuren naar nieuwe mogelijkheden te openen?
          </p>
        </div>
        <div className="mt-6">
          <LinkButton href="/over-gwen" title="Meer over Gwen">
            Meer over Gwen
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
