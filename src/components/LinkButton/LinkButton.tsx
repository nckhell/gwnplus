import { FC } from "react";

interface LinkButtonProps {
  href: string;
  label: string;
  newTab?: boolean;
}

export const LinkButton: FC<LinkButtonProps> = ({ href, label, newTab }) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : undefined}
      className="group text-slate-600 inline-block py-3 items-center overflow-hidden border border-slate-300 px-3.5 text-sm transition-all duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-white"
    >
      <span className="relative flex items-center">
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="relative h-4 w-4 translate-x-1 duration-300 group-hover:translate-x-2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </a>
  );
};
