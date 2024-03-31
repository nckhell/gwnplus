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
          <h2 className="text-3xl font-semibold text-[#B16452] sm:text-4xl lg:text-4xl lg:leading-snug">
            Loopbaanbegeleiding
          </h2>
          <div className="lg:w-4/5">
            <p className="text-lg text-slate-600 mt-8">
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
      <section className="bg-slate-50 py-24">
        <div className="container-gwen">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-4xl lg:leading-snug text-center mb-8">
            Wat anderen over mij zeggen
          </h2>
          <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
              <div className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-slate-600">
                  <p>
                    “⁠Ik vond dat Gwen het op een luchtige, leuke manier
                    aanpakte en ze stelde mij op vele vlakken gerust. Ze stelde
                    vragen over zowel werk als privé, wat mij in beide nieuwe
                    inzichten gaf. Het huiswerk dat ik mee kreeg gaf me een
                    frisse inkijk in mijn leven. Ze zocht ook mee naar tips en
                    tricks waarvoor dank! Ik zou het iedereen aanraden, niet
                    alleen werkzoekenden maar ook mensen die twijfelen over hun
                    loopbaan.”
                  </p>
                </blockquote>
                <div className="mt-4 flex items-center gap-x-6">
                  <div className="text-base">
                    <div className="font-semibold text-orange-500">— Britt</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
              <div className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-slate-600">
                  <p>
                    “⁠Loopbaanbegeleiding bij Gwen heeft mij geholpen om in te
                    zien welke mogelijkheden er allemaal zijn en wat ik echt
                    leuk vind. De stap naar iets nieuws was een uitdaging voor
                    mij, maar Gwen heeft mij dat duwtje gegeven dat ik nodig
                    had. Als je van job wilt veranderen maar je weet niet zo
                    goed wat je zou willen doen, raad ik aan om zeker een
                    loopbaan traject bij haar te volgen”
                  </p>
                </blockquote>
                <div className="mt-4 flex items-center gap-x-6">
                  <div className="text-base">
                    <div className="font-semibold text-orange-500">— Inge</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="my-24">
        <div className="container-gwen text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-4xl lg:leading-snug">
            Hoe kan ik jou <span className="text-orange-500">helpen?</span>
          </h2>
          <p className="text-lg text-slate-600 mt-8 max-w-[580px] mx-auto">
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
