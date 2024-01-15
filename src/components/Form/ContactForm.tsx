import { FC, useImperativeHandle, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "../Button";
import { submitContactForm } from "./actions/submitContactForm";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  body: string;
};

export const ContactForm: FC = () => {
  const [success, setSuccess] = useState<null | boolean>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    const res = await submitContactForm(data);
    setIsLoading(false);

    if (res.error) {
      setSuccess(false);
    }

    if (res.success) {
      setSuccess(true);
    }
  };

  const { ref, ...rest } = register("body", { required: true });

  useImperativeHandle(ref, () => bodyRef.current);

  const reSizeTextArea = () => {
    if (bodyRef.current) {
      if (bodyRef.current !== undefined && bodyRef.current !== null) {
        bodyRef.current.style.height = "inherit";
        let newHeight = bodyRef.current.scrollHeight * 1;
        bodyRef.current.style.height = `${newHeight}px`;
      }
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-[32px] lg:mb-[50px]">
        <label
          htmlFor="name"
          className="text-xl text-[#B16452] font-semibold block h5 mb-2"
        >
          Naam
          <span className="text-red-500">*</span>
          {errors.name && (
            <span className="text-sm text-red-500 font-normal pl-4">
              dit veld is verplicht
            </span>
          )}
        </label>
        <div className="relative w-full">
          <input
            id="name"
            type="text"
            placeholder="Voornaam Achternaam"
            disabled={success === true ? true : false}
            className="disabled:cursor-not-allowed bg-transparent text-lg text-slate-600 w-full py-[16px] border-b border-slate-900 transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 focus:border-[#B16452] placeholder:text-slate-400"
            {...register("name", { required: true })}
          />
        </div>
      </div>
      <div className="mb-[32px] lg:mb-[50px]">
        <label
          htmlFor="email"
          className="text-xl text-[#B16452] font-semibold block h5 mb-2"
        >
          E-mailadres
          <span className="text-red-500">*</span>
          {errors.email && (
            <span className="text-sm text-red-500 font-normal pl-4">
              dit veld is verplicht
            </span>
          )}
        </label>
        <div className="relative w-full">
          <input
            id="name"
            type="email"
            placeholder="email@gmail.com"
            disabled={success === true ? true : false}
            className="disabled:cursor-not-allowed bg-transparent text-lg text-slate-600 w-full py-[16px] border-b border-slate-900 transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 focus:border-[#B16452] placeholder:text-slate-400"
            {...register("email", { required: true })}
          />
        </div>
      </div>
      <div className="mb-[32px] lg:mb-[50px]">
        <label
          htmlFor="phone"
          className="text-xl text-[#B16452] font-semibold block h5 mb-2"
        >
          Telefoon
        </label>
        <div className="relative w-full">
          <input
            id="phone"
            type="text"
            placeholder="0412 34 56 78"
            disabled={success === true ? true : false}
            className="disabled:cursor-not-allowed bg-transparent text-lg text-slate-600 w-full py-[16px] border-b border-slate-900 transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 focus:border-[#B16452] placeholder:text-slate-400"
            {...register("phone")}
          />
        </div>
      </div>
      <div className="mb-[32px] lg:mb-[50px]">
        <label
          htmlFor="body"
          className="text-xl text-[#B16452] font-semibold block h5 mb-2"
        >
          Jouw vraag
          <span className="text-red-500">*</span>
          {errors.body && (
            <span className="text-sm text-red-500 font-normal pl-4">
              dit veld is verplicht
            </span>
          )}
        </label>
        <div className="relative w-full">
          <textarea
            id="body"
            placeholder="Ik wil weten of loopbaancoaching iets voor mij is.&#10;Kunnen we telefonisch contact opnemen?"
            className="disabled:cursor-not-allowed bg-transparent text-lg text-slate-600 w-full py-[16px] border-b border-slate-900 transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 placeholder:text-slate-400 focus:border-[#B16452]"
            disabled={success === true ? true : false}
            {...rest}
            ref={bodyRef}
            onChange={reSizeTextArea}
          />
        </div>
      </div>
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
          {success === true ? (
            <div className="flex">
              <svg
                className="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-green-500 text-sm pl-2">
                Vraag goed ontvangen!
              </span>
            </div>
          ) : (
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Even geduld..." : "Verstuur"}
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};
