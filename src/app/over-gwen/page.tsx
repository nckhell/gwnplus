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
            className="blob-image w-3/5 lg:w-auto max-w-[340px] mx-auto"
            priority
          />
        </div>
        <div className="lg:w-3/5">
          <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl lg:leading-snug">
            Een mix van{" "}
            <span className="text-orange-500">
              passie voor loopbaancoaching
            </span>{" "}
            en de drang om iets bij te dragen aan de{" "}
            <span className="text-orange-500">community.</span>
          </h2>
          <div className="text-xl text-slate-600 mt-8 flex flex-col gap-y-4">
            <p>
              Hi there! Ik ben Gwen, een {age}-jarige enthousiasteling die
              oprecht voldoening haalt uit het bijdragen aan het succes van
              anderen. Het liefst geniet ik stilletjes, achter de schermen. Na
              mijn studie Office Management - Human Resources heeft mijn
              loopbaan al enkele interessante paden bewandeld, niet altijd de
              beste keuzes, maar elke omweg bracht waardevolle lessen en dieper
              zelfinzicht. Nu ik een duidelijk zicht heb op o.a. mijn
              competenties, in welke werkomgeving ik het beste functioneer en
              wat mij veel energie geeft, ben ik me veel bewuster van
              loopbaankeuzes die het beste bij me passen.
            </p>
            <p>
              Ik ben begonnen aan de Gecertificeerd Loopbaancoach-opleiding bij
              Delavie omdat ik weet dat ik mezelf moet blijven uitdagen en graag
              nieuwe dingen uitprobeer. En eerlijk, ik krijg echt een kick van
              mensen helpen hun loopbaanpad te ontdekken. Zo kan ik naast mijn
              job ook nog eens energie halen uit het bijstaan van anderen.
            </p>
            <p>
              Op dit moment ben ik fulltime actief als Technical Recruiter, waar
              mijn dagen gevuld zijn met het luisteren naar kandidaten, hun
              behoeften begrijp en ontdek wat hen motiveert.
            </p>
            <p>
              Wat ik nog meer doe? In mijn vrije tijd ben ik vrijwilliger bij
              het Rode Kruis. Je kunt me vinden bij evenementen als
              Eventhulpverlener - denk aan Rock Werchter, Graspop,
              voetbalmatchen of zelfs wielerkoersen. Maar ook in het
              opvangcentrum, waar ik mensen help met cv&apos;s maken en
              Nederlands leren.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-orange-100 mt-24 py-16">
        <div className="container-gwen text-xl text-slate-600">
          <div className="lg:w-4/5">
            <h2 className="text-3xl font-semibold text-[#B16452] sm:text-4xl lg:text-5xl lg:leading-snug">
              Het stuur is in jouw handen
            </h2>
          </div>
          <div className="lg:w-4/5 flex flex-col gap-y-4 mt-4">
            <p>
              <strong>
                En ik zit maar al te graag in de passagierstoel om jou te
                begeleiden!
              </strong>{" "}
              Ik geloof sterk in een op maat gemaakte aanpak, afgestemd op jouw
              behoeften en op jouw eigen tempo. Samen leggen we een fundering
              voor een praktisch actieplan met haalbare stappen om jouw loopbaan
              weer vorm te geven op een manier die jou inspireert en motiveert.
            </p>
            <p>Waar ik je in help:</p>
            <ul className="flex flex-col gap-y-4 list-disc ml-6 pl-4">
              <li>
                <strong className="text-orange-500">Zelfinzicht:</strong> We
                onderzoeken samen jouw sterke punten, vaardigheden, interesses
                en wat je echt belangrijk vindt in een loopbaan.{" "}
              </li>
              <li>
                <strong className="text-orange-500">Doelbepaling:</strong> We
                stellen heldere doelen op en identificeren wat je wilt bereiken
                in jouw loopbaan.{" "}
              </li>
              <li>
                <strong className="text-orange-500">Actieplan:</strong> Op basis
                van jouw doelen ontwikkelen we een praktisch en haalbaar
                actieplan met stappen om deze doelen te bereiken.{" "}
              </li>
              <li>
                <strong className="text-orange-500">Begeleiding:</strong> Ik
                fungeer als jouw gids en supporter tijdens de uitvoering van het
                actieplan. We bespreken eventuele obstakels en passen het plan
                aan indien nodig.{" "}
              </li>
              <li>
                <strong className="text-orange-500">Jobexploratie:</strong>{" "}
                Indien relevant, kunnen we samen mogelijke carrière-opties en
                jobkansen verkennen.
              </li>
              <li>
                <strong className="text-orange-500">Zelfmanagement:</strong> Ik
                help je bij het ontwikkelen van zelfmanagementvaardigheden,
                zoals tijdsbeheer, stressmanagement en het versterken van
                zelfvertrouwen.
              </li>
            </ul>
            <p>
              Samengevat ben ik er als loopbaancoach om je te{" "}
              <strong>ondersteunen</strong> bij elke fase van{" "}
              <strong>jouw loopbaanontwikkeling</strong>, met als doel dat je
              met <strong>meer voldoening</strong> en <strong>succes</strong>{" "}
              jouw professionele doelen bereikt.
            </p>
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="container-gwen text-center">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl lg:leading-snug">
            Laten we <span className="text-orange-500">kennismaken</span>!
          </h1>
          <p className="text-xl text-slate-600 mt-8 max-w-[580px] mx-auto">
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
