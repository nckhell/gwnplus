import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GWN+ | Over Gwen",
  description:
    "Gwen is Gecertificeerd Loopbaancoach en Technical Recruiter met een passie voor HR en vrijwilligerswerk bij het Rode Kruis.",
};

const _calculateAge = (birthday: Date) => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default function OverGwen() {
  const age = _calculateAge(new Date("1997-05-12"));

  return (
    <>
      <div className="container-gwen lg:flex lg:justify-between">
        <div className="lg:order-last lg:w-2/5 mb-12 lg:mb-0">
          <Image
            src="/gwen_jansen.JPG"
            alt="Gwen Jansen"
            width="2948"
            height="3025"
            className="blob-image w-3/5 lg:w-auto max-w-[340px] mx-auto lg:mt-16"
            priority
          />
        </div>
        <div className="lg:w-3/5">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl lg:leading-snug">
            Over GWN+
          </h2>
          <div className="text-lg text-slate-600 mt-8 flex flex-col gap-y-4">
            <p>
              Welkom bij GWN+, waar &apos;gewoon plus&apos; niet alleen een naam
              is, maar een filosofie. Een filosofie die de grenzen van het
              &apos;gewone&apos; doorbreekt en de horizon van jouw loopbaan
              verbreedt.
            </p>
            <p>
              <strong className="text-gwen-dark">
                Waarom vasthouden aan het bekende, als er zoveel meer te
                ontdekken valt?
              </strong>
              <br />
              Bij GWN+ geloven we dat er meer is dan alleen de gebaande paden en
              dat jouw potentieel verder reikt dan wat voor de hand ligt. We
              dagen je uit om verder te kijken, om te verkennen wat er nog meer
              mogelijk is en om te ontdekken waar jij nog meer uit kunt halen.
            </p>
            <p>
              GWN+ is opgestart in 2023 door mezelf, Gwen. Vragen als &apos;Hoe
              eng is het om iets te doen waarvan je de uitkomst niet kent?&apos;
              en &apos;Is dit echt de juiste stap voor mij?&apos; en &apos;Hoe
              kan ik weten of ik wel goed genoeg zou zijn voor die job?&apos;
              spookten vaak door mijn hoofd.
            </p>
            <p>
              Het werd me duidelijk dat ik niet de enige was die met deze
              gedachtes te maken had. In mijn directe omgeving zag ik mensen
              worstelen met hun loopbaan. Sommigen twijfelden aan hun keuzes,
              anderen durfden geen nieuwe stap te zetten, en weer anderen zaten
              vast in een baan waar ze eigenlijk niet gelukkig waren. Deze
              verhalen motiveerden me nog meer om er iets rond te doen.
            </p>
            <p>
              Daarom heb ik besloten om me te specialiseren in het ondersteunen
              van anderen die een duwtje in de rug nodig hebben bij het
              verkennen en ontwikkelen van hun loopbaan. Door mijn eigen
              ervaringen begrijp ik hoe belangrijk het is om de juiste
              ondersteuning te krijgen bij het nemen van de stap naar het
              onbekende.
            </p>
            <p>
              <strong className="text-gwen-dark">
                Mijn missie is dan ook om mensen te begeleiden bij het
                overwinnen van hun angsten en twijfels,
              </strong>{" "}
              zodat ze de professionele uitdagingen kunnen omarmen die echt bij
              hen passen en vol vertrouwen hun dromen kunnen najagen.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-orange-100 mt-24 py-16">
        <div className="container-gwen text-lg text-slate-600">
          <div className="lg:w-4/5">
            <h2 className="text-3xl font-semibold text-gwen-dark sm:text-4xl lg:text-4xl lg:leading-snug">
              Ik ben Gwen, een {age}-jarige enthousiasteling die voldoening
              haalt uit het bijdragen aan het succes van anderen.
            </h2>
          </div>
          <div className="lg:w-full">
            <div className="flex gap-12 flex-col lg:flex-row lg:gap-24">
              <div className="flex flex-col gap-y-4 mt-4">
                <p>
                  In het middelbaar had ik mijn loopbaanpad al lang voor ogen.
                  Ik wilde een stevig fundament leggen, dus stortte ik me eerst
                  op mijn Bachelor in Toerisme- en Recreatie Management in het
                  bruisende Mechelen. Een compleet nieuwe stad, nieuwe
                  gezichten, en een studierichting waarvan ik niet zeker wist of
                  ik het zou overleven. Dat is iets waar ik altijd al moeite mee
                  heb gehad: ‘Verandering’. Het liefst van al blijf ik binnen
                  mijn comfortzone, maar als ik daar was gebleven dan stond ik
                  niet waar ik nu sta.
                </p>
                <p>
                  Corona zorgde, net zoals bij velen, voor een hele grote
                  plottwist in mijn loopbaan. Ik verlegde mijn focus naar een
                  tweede bachelor in Human Resources, want ik was eigenlijk
                  gewoon heel graag bezig met mensen. Mijn eerste jobs hadden me
                  al veel geleerd, totdat de uitdaging voor mij was verdwenen en
                  ik mezelf steeds meer voelde vastlopen. Langzaam liepen de
                  dagen in elkaar over zonder dat ik echt het gevoel had dat ik
                  iets betekenisvols deed. Het was een moeilijke periode, waarin
                  ik merkte dat mijn energie en motivatie langzaam maar zeker
                  afnamen. Ik realiseerde me dat ik bijna in een bore-out
                  terechtkwam - niet door een teveel aan werk, maar juist door
                  een gebrek aan uitdaging en betekenis in mijn taken.
                </p>
              </div>
              <div className="lg:w-2/5 flex items-center">
                <Image
                  src="/gwen_2.jpg"
                  alt="Gwen Jansen"
                  width="800"
                  height="1067"
                  className="blob-image lg:w-auto max-w-[250px] mx-auto self-center"
                  priority
                />
              </div>
            </div>
            <div className="flex gap-12 flex-col lg:flex-row lg:gap-24 mt-16">
              <div className="lg:w-2/5 flex items-center order-last lg:order-first">
                <Image
                  src="/gwen_1.jpg"
                  alt="Gwen Jansen"
                  width="1440"
                  height="1920"
                  className="blob-image w-3/5 lg:w-auto max-w-[250px] mx-auto self-center"
                  priority
                />
              </div>
              <div className="flex flex-col gap-y-4 mt-4">
                <p>
                  Ik nam het heft in eigen handen en besloot op zoek te gaan
                  naar een nieuwe baan die me weer zou uitdagen en inspireren.
                  Angst en twijfel knaagden aan me, en ik vroeg me af of ik wel
                  de juiste keuze maakte. Maar diep van binnen wist ik dat ik
                  niet langer kon blijven stilstaan. Dus stapte ik uit mijn
                  comfortzone, op zoek naar iets dat beter bij mijn passies en
                  ambities zou passen.
                </p>
                <p>
                  Momenteel werk ik fulltime als Lead Technical Recruiter, waar
                  mijn dagen zijn gevuld met het luisteren naar kandidaten, hun
                  behoeften te begrijpen en te ontdekken wat hen motiveert. De
                  perfecte baan, die volledig buiten mijn comfortzone lag, bleek
                  precies te bieden wat ik nodig had.
                </p>
                <p>
                  In mijn vrije tijd ben ik een trotse vrijwilliger bij het Rode
                  Kruis. Je kunt me tegenkomen bij evenementen als
                  Eventhulpverlener - denk aan Rock Werchter, Graspop,
                  voetbalwedstrijden of zelfs wielerkoersen. Ook ben ik actief
                  in het opvangcentrum, waar ik mensen help met het maken van
                  cv&apos;s en het leren van Nederlands. Mijn passie samengevat:
                  het delen van positieve energie en anderen een duwtje in de
                  rug geven op hun eigen unieke pad!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="container-gwen text-center">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-4xl lg:leading-snug">
            Laten we <span className="text-gwen-dark">kennismaken</span>!
          </h1>
          <p className="text-lg text-slate-600 mt-8 max-w-[580px] mx-auto">
            Voilà, dat was mijn verhaal. Nu ben ik benieuwd naar dat van jou!
            Vertel me welke uitdagingen jij momenteel tegenkomt en laten we
            samen ontdekken of ik je daarbij kan helpen.
          </p>
          <div className="mt-8">
            <LinkButton href="/contact" title="Contacteer me">
              Contacteer me
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
}
