"use client";

import { ContactForm } from "@/components/Form";
import { Header } from "@/components/Layout/Header";
import { LinkButton } from "@/components/LinkButton";

export default function Home() {
  return (
    <>
      <div className="mt-6 lg:mt-12">
        <Header />
      </div>
      <div className="bg-orange-100 mt-24 py-16">
        <div className="container-gwen">
          <h2 className="text-3xl font-semibold text-[#B16452] sm:text-4xl lg:text-5xl lg:leading-snug">
            Loopbaanbegeleiding
          </h2>
          <div className="lg:w-4/5">
            <p className="text-xl text-slate-600 mt-8">
              Of je nu nog zoekende bent aan het begin van je loopbaan of je
              bevindt in het midden van een carrièreswitch, ik sta klaar om je
              te begeleiden, te motiveren en te ondersteunen. We nemen de tijd
              om te ontdekken waar jij behoefte aan hebt. Voel je vrij om
              allerlei vragen te stellen, want samen gaan we op verkenning om te
              achterhalen wat voor jou écht belangrijk is.
            </p>
          </div>
          <div className="mt-6">
            <LinkButton
              href="/loopbaanbegeleiding"
              title="Wat is loopbaanbegeleiding?"
            >
              Meer over loopbaanbegeleiding
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="container-gwen text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl lg:leading-snug">
            Hoe kan ik jou <span className="text-orange-500">helpen?</span>
          </h2>
          <p className="text-xl text-slate-600 mt-8 max-w-[580px] mx-auto">
            Zoek je begeleiding of heb je vragen over loopbaanbegeleiding? Vul
            mijn contactformulier in, en ik beantwoord al je vragen.
          </p>
          <div className="mt-12 text-left col-span-4 lg:col-span-6 lg:col-start-4 max-w-[500px] mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
