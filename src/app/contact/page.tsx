import { ContactForm } from "@/components/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GWN+ | Contact voor Loopbaancoaching",
  description:
    "Contacteer GWN+ voor professionele loopbaancoaching en -begeleiding. Hier vindt u mijn contactgegevens.",
  alternates: {
    canonical: "https://www.gwnplus.be/contact",
  },
};

export default function NotFound() {
  return (
    <div className="container-gwen md:flex md:justify-between md:gap-x-32 mb-24">
      <div className="md:w-2/5 text-left">
        <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl lg:leading-snug">
          Mijn gegevens
        </h1>
        <div className="mt-8 text-left col-span-4 lg:col-span-6 lg:col-start-4">
          <ul className="text-lg text-slate-600 flex flex-col gap-y-1">
            <li>Gwen Jansen</li>
            <li>gwen@gwnplus.be</li>
            <li>
              <a
                href="tel:0473 25 53 33"
                target="_blank"
                className="transition duration-300 hover:text-gwen-dark"
                title="Telefoonnummer"
              >
                0473 25 53 33
              </a>
            </li>
            <li>Centrum Kontich</li>
          </ul>
        </div>
      </div>
      <div className="md:w-3/5 text-left">
        <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl lg:leading-snug">
          Stuur mij een <span className="text-gwen-dark">berichtje</span>
        </h1>
        <p className="text-lg text-slate-600 mt-8">
          Zoek je begeleiding of heb je vragen over loopbaanbegeleiding? Vul
          mijn contactformulier in, en ik beantwoord al je vragen.
        </p>
        <div className="mt-12 text-left col-span-4 lg:col-span-6 lg:col-start-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
