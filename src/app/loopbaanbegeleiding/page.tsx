import { LinkButton } from "@/components/LinkButton";
import Image from "next/image";

import type { Metadata } from "next";
import { Card } from "@/components/Card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GWN+ | Wat is loopbaanbegeleiding",
  description:
    "Verken je carrièrepotentieel met loopbaanbegeleiding: krijg inzicht in je talenten, stel doelen, en maak strategische keuzes, of je nu starter bent of een carrièreswitch overweegt.",
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
        <div className="lg:w-4/5">
          <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl lg:leading-snug">
            Wat is <span className="text-gwen-dark">loopbaanbegeleiding</span>?
          </h1>
          <div className="text-lg text-slate-600 mt-8 flex flex-col gap-y-4">
            <p>
              Bij loopbaanbegeleiding word je geholpen om beter inzicht te
              krijgen in je sterke punten, interesses en doelen, zodat je
              weloverwogen carri&egrave;rebeslissingen kan nemen. Ik bied je
              ondersteuning bij het vinden van passende loopbaanmogelijkheden,
              het overwinnen van hindernissen en het plannen van stappen voor
              professioneel succes en persoonlijke tevredenheid.
            </p>
            <p>
              Of je nu nog zoekende bent aan het begin van je loopbaan of je
              bevindt in het midden van een carri&egrave;reswitch, ik sta klaar
              om je te begeleiden, te motiveren en te ondersteunen. We nemen de
              tijd om te ontdekken waar jij behoefte aan hebt. Voel je vrij om
              allerlei vragen te stellen, want samen gaan we op verkenning om te
              achterhalen wat voor jou &eacute;cht belangrijk is.
            </p>
          </div>
        </div>
      </div>
      <div className="container-gwen mt-12 mb-24 w-full flex gap-y-8 flex-col lg:flex-row lg:gap-y-0 lg:gap-x-16">
        <div className="lg:w-1/2">
          <Card title="Loopbaanbegeleiding m&eacute;t VDAB Loopbaancheques">
            <div className="mt-4 flex flex-col gap-y-4 mb-6">
              <p>
                Wanneer je voldoet aan alle volgende voorwaarden, kun je gebruik
                maken van loopbaancheques:
              </p>
              <ul className="flex flex-col gap-y-2 list-disc ml-6 pl-4">
                <li>Je woont in Vlaanderen of Brussel.</li>
                <li>
                  Je hebt minimum 7 jaar werkervaring (of 2.555 dagen) in
                  loondienst of als zelfstandige opgebouwd over je hele
                  loopbaan.
                </li>
                <li>
                  Je werkt momenteel voltijds of deeltijds als werknemer of
                  zelfstandige (er is nog een arbeidscontract).
                </li>
                <li>
                  Je volgde de voorbije zes jaar nog geen loopbaanbegeleiding.
                </li>
                <li>
                  Je bent bereid om loopbaanbegeleiding te volgen bij een erkend
                  loopbaancentrum en in het Nederlands.
                </li>
              </ul>
              <p>
                Meer info kan je vinden op{" "}
                <a
                  href="https://www.vdab.be/loopbaancheques"
                  title="VDAB loopbaancheques"
                  target="_blank"
                  className="underline hover:text-gwen-dark"
                >
                  de website van VDAB.
                </a>
              </p>
              <p>
                <strong>De kostprijs van de cheques:</strong>
              </p>
              <ul className="flex flex-col gap-y-2 list-disc ml-6 pl-4">
                <li>Loopbaancheque 1: je betaalt 45 euro (4 uur coaching).</li>
                <li>Loopbaancheque 2: je betaalt 45 euro (3 uur coaching).</li>
              </ul>
              <p>
                Deze loopbaanbegeleiding is in samenwerking met erkend
                loopbaancenter Delavie.
              </p>
              <div className="sm:flex sm:justify-between sm:items-center mt-2">
                <figure className="w-1/2 text-center">
                  <Link
                    href="https://www.delavie.be/"
                    title="Delavie"
                    className="inline-block"
                  >
                    <Image
                      src="/delavie.png"
                      width="144"
                      height="144"
                      alt="Delavie"
                      className="w-[180px]"
                    />
                  </Link>
                </figure>
                <figure className="w-1/2 text-center">
                  <Link
                    href="https://www.delavie.be/"
                    title="Loopbaancheques"
                    className="inline-block"
                  >
                    <Image
                      src="/loopbaancheques.png"
                      width="653"
                      height="196"
                      alt="Loopbaancheques"
                      className="w-[180px]"
                    />
                  </Link>
                </figure>
              </div>
            </div>
            <LinkButton
              href="https://www-login.vdab.be/login/start?url=https:%2F%2Fwww.vdab.be%2Fprive%2Fapps%2Floopbaancheques%2Fbestellingen%3Fcontext%3Dloopbaancheques"
              target="_blank"
              title="Bestel hier je loopbaancheques"
            >
              Bestel hier je loopbaancheques
            </LinkButton>
          </Card>
        </div>
        <div className="lg:w-1/2">
          <Card title="Loopbaanbegeleiding zonder loopbaancheques">
            <div className="mt-4 flex flex-col gap-y-4 mb-6">
              <p>
                Wanneer je niet in aanmerking komt voor loopbaancheques, is het
                ook mogelijk om samen aan de slag te gaan met jouw
                loopbaanvraag. We maken een afspraak voor een voorafgaand
                gesprek om jouw specifieke behoeften en doelen te bespreken.
                Tijdens dat gesprek kunnen we het traject samenstellen, rekening
                houdend met jouw unieke situatie en gewenste resultaten.
              </p>
              <p>
                Voor begeleiding zonder loopbaancheques wordt er een uurtarief
                van €75 per uur gerekend.
              </p>
            </div>
          </Card>
        </div>
      </div>
      <div className="py-12 sm:py-16 bg-gwen-dark">
        <div className="container-gwen text-slate-100">
          <div className="lg:w-4/5">
            <h1 className="text-3xl font-semibold lg:text-4xl lg:leading-snug">
              Hoe verloopt een traject?
            </h1>
            <h2 className="mt-8 mb-2 text-2xl font-semibold text-amber-900 lg:text-3xl lg:leading-snug">
              GRATIS Kennismakingsgesprek
            </h2>
            <p className="text-lg">
              Elke loopbaantraject start met een{" "}
              <strong>GRATIS kennismakingsgesprek </strong>van een half uur
              waarin we kennismaken en gaan kijken naar jouw loopbaanvraag. Dit
              gesprek verloopt online of telefonisch. Je krijgt hierbij de kans
              om je situatie kort toe te lichten, om vragen te stellen en om af
              te stemmen of loopbaancoaching de juiste stap is voor jou.
            </p>
            <h2 className="mt-8 mb-2 text-2xl font-semibold text-amber-900 lg:text-3xl lg:leading-snug">
              Intake gesprek
            </h2>
            <p className="text-lg">
              Tijdens het <strong>intakegesprek</strong> gaan we dieper in op
              jouw specifieke loopbaanvraag.
              <br />
              Het is belangrijk dat jij je verhaal eens kwijt kan en dat er echt
              onbevooroordeeld naar jou geluisterd wordt. Zo kan ik een goed
              inzicht krijgen in je situatie: wat loopt moeilijk, waar bots je
              tegenaan, wat zou je graag anders zien in de toekomst. In deze
              sessie klaren we uit wat de loopbaanvraag is en waar we in eerste
              instantie aan gaan werken. Vaak zal je aan het einde van de sessie
              een opdracht krijgen om thuis te maken. Geen nood, deze opdrachten
              zijn op maat van jouw situatie, die passen bij de manier waarop
              jij graag leert of werkt, geen standaard werkboekje dus.
            </p>
            <h2 className="mt-8 mb-2 text-2xl font-semibold text-amber-900 lg:text-3xl lg:leading-snug">
              Verdiepende sessies
            </h2>
            <p className="text-lg">
              Na het intake gesprek gaan we over naar verdiepende sessies waarin
              we gericht actie ondernemen om jouw persoonlijke loopbaanvraag aan
              te pakken. Ik begeleid je in dit proces met diverse praktische
              opdrachten en oefeningen die niet alleen inzicht verschaffen, maar
              ook concrete actiestappen stimuleren.
            </p>
            <h2 className="mt-8 mb-2 text-2xl font-semibold text-amber-900 lg:text-3xl lg:leading-snug">
              Synthesegesprek
            </h2>
            <p className="text-lg">
              Uiteindelijk ronden we af met een laatste samenvattende sessie,
              waarin we samen de inzichten die je hebt opgedaan in kaart brengen
              en bespreken welke concrete stappen jij gaat zetten.
            </p>
            <p className="text-lg mt-4">
              Deze sessies kunnen online doorgaan <strong>of </strong>bij mijn
              praktijk in Kontich <strong>of </strong>bij jou thuis.
            </p>
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="container-gwen">
          <div className="lg:w-4/5">
            <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl lg:leading-snug">
              <span className="text-gwen-dark">
                Het stuur ligt in jouw handen
              </span>
              , en ik zit graag naast je om je te begeleiden!
            </h1>
            <div className="text-lg text-slate-600 mt-8 flex flex-col gap-y-4">
              <p>
                Ik begrijp hoe angstaanjagend verandering kan zijn, maar geloof
                sterk in een persoonlijke aanpak die jouw specifieke behoeften
                en tempo respecteert. Samen leggen we een stevige basis voor een
                praktisch actieplan met haalbare stappen om jouw loopbaan vorm
                te geven op een manier die jou inspireert en motiveert.
              </p>
            </div>
            <div className="mt-4">
              <ul className="flex text-lg text-slate-900 flex-col gap-y-2 list-disc ml-6 pl-4">
                <li>
                  <strong>Omgaan met verandering</strong>: We onderzoeken samen
                  jouw angsten en twijfels met betrekking tot verandering en
                  ontwikkelen strategieën om hiermee om te gaan.
                </li>
                <li>
                  <strong>Zelfinzicht</strong>: We verkennen jouw sterke punten,
                  vaardigheden, interesses en waarden in een loopbaan, en hoe
                  deze kunnen helpen bij het omarmen van verandering.
                </li>
                <li>
                  <strong>Doelbepaling</strong>: We stellen duidelijke doelen op
                  en identificeren wat je wilt bereiken, zelfs als dit betekent
                  dat je buiten je comfortzone moet stappen.
                </li>
                <li>
                  <strong>Actieplan</strong>: Op basis van jouw doelen maken we
                  een praktisch en haalbaar plan met stappen om deze te
                  bereiken, rekening houdend met jouw angst voor verandering.
                </li>
                <li>
                  <strong>Begeleiding</strong>: Ik sta naast je als gids en
                  supporter tijdens het uitvoeren van het plan. We bespreken
                  obstakels en passen het plan indien nodig aan, met extra
                  aandacht voor het omgaan met verandering.
                </li>
                <li>
                  <strong>Jobexploratie</strong>: Indien gewenst, verkennen we
                  samen carrière-opties en kansen, en hoe je deze angst voor
                  verandering kunt overwinnen.
                </li>
                <li>
                  <strong>Zelfmanagement</strong>: Ik help je bij het
                  ontwikkelen van vaardigheden zoals tijdsbeheer,
                  stressmanagement en zelfvertrouwen, die essentieel zijn bij
                  het omgaan met verandering.
                </li>
              </ul>
              <p className="mt-4 text-lg text-slate-900">
                Kortom, als loopbaancoach ondersteun ik je in elke fase van jouw
                loopbaanontwikkeling, inclusief het omgaan met verandering en
                het overwinnen van angst voor verandering, zodat je jouw
                professionele doelen met meer voldoening en succes kunt
                bereiken.
              </p>
            </div>
            <div className="mt-4">
              <LinkButton href="/contact" title="Contacteer me">
                Contacteer me
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
