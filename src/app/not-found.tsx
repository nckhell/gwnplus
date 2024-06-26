import { LinkButton } from "@/components/LinkButton";

export default function NotFound() {
  return (
    <div className="text-center mt-24 mb-40">
      <h2 className='className="text-3xl font-semibold text-slate-900 sm:text-4xl lg:text-4xl lg:leading-snug"'>
        Pagina niet gevonden
      </h2>
      <div className="mt-6">
        <LinkButton href="/" title="Terug naar Home">
          Terug naar Home
        </LinkButton>
      </div>
    </div>
  );
}
