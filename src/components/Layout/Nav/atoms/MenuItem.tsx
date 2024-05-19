import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface MenuItemProps {
  label: string;
  alt: string;
  url: string;
  active?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({ label, url, active, alt }) => {
  return (
    <li>
      <Link
        aria-current={active === true ? "page" : undefined}
        href={url}
        className={clsx(
          "text-sm lg:text-base font-bold uppercase tracking-widest hover:text-gwen-dark transition-colors",
          active == true ? "underline text-gwen-dark" : "text-slate-500"
        )}
        title={alt}
      >
        {label}
      </Link>
    </li>
  );
};
