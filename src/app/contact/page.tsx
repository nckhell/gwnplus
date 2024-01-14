import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GWN+ | Contact",
  description:
    "Contacteer GWN+ voor loopbaancoaching en -begeleiding. Hier kan u mijn contactgegevens vinden.",
};

export default function NotFound() {
  return (
    <div className="text-center mt-24 mb-40">
      <h2 className='className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-5xl lg:leading-snug"'>
        We werken nog aan deze pagina
      </h2>
    </div>
  );
}
