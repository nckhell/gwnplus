"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Form/atoms";
import { Footer } from "@/components/Layout/Footer";
import { Header } from "@/components/Layout/Header";
import { Nav } from "@/components/Layout/Nav";
import { LinkButton } from "@/components/LinkButton";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="mt-6 lg:mt-12">
        <Header />
      </div>
      <div className="bg-orange-100 mt-24 py-24">
        <div className="container-gwen">
          <h1 className="text-3xl font-semibold text-[#B16452] sm:text-4xl lg:text-5xl lg:leading-snug">
            Loopbaanbegeleiding
          </h1>
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
            <LinkButton href="#">Meer over loopbaanbegeleiding</LinkButton>
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="container-gwen text-center">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl lg:leading-snug">
            Hoe kan ik jou <span className="text-orange-500">helpen?</span>
          </h1>
          <p className="text-xl text-slate-600 mt-8 max-w-[580px] mx-auto">
            Zoek je begeleiding of heb je vragen over loopbaanbegeleiding? Vul
            mijn contactformulier in, en ik beantwoord al je vragen.
          </p>
          <div className="mt-12 text-left col-span-4 lg:col-span-6 lg:col-start-4 w-[500px] mx-auto">
            <form className="flex flex-col" data-gtm-form-interact-id={0}>
              <Input label="Naam" id="naam" type="text" required />
              <Input label="E-mailadres" id="email" type="email" required />
              <Input label="Jouw vraag" id="vraag" type="text" required />
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                <p className="text-slate-600">
                  Bekijk de{" "}
                  <a className="inline-block underline" href="/privacy-policy">
                    privacyverklaring
                  </a>{" "}
                  .
                </p>
                <Button type="submit">Verstuur</Button>
              </div>
              <p className="mt-[20px] text-[16px]" />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
