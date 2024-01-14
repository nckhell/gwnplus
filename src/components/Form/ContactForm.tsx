import { FC, FormEvent } from "react";
import { Input, TextArea } from "./atoms";
import Link from "next/link";
import { Button } from "../Button";

export const ContactForm: FC = () => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("To do");
  };

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <Input
        label="Naam"
        id="naam"
        placeholder="Margriet Hermans"
        type="text"
        required
      />
      <Input
        label="E-mailadres"
        id="email"
        placeholder="Margriet.Hermans@gmail.com"
        type="email"
        required
      />
      <TextArea
        label="Jouw vraag"
        id="vraag"
        placeholder="Ik wil weten of loopbaancoaching iets voor mij is.&#10;Kunnen we telefonisch contact opnemen?"
        required
      />
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <p className="text-slate-600">
          Bekijk de{" "}
          <Link
            className="inline-block underline"
            href="/privacyverklaring.pdf"
            title="Privacyverklaring"
            target="_blank"
          >
            privacyverklaring
          </Link>
          .
        </p>
        <div className="mt-6 lg:mt-0">
          <Button type="submit">Verstuur</Button>
        </div>
      </div>
    </form>
  );
};
