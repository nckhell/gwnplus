import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface MenuItemProps {
  label: string;
  url: string;
  active?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({ label, url, active }) => {
  return (
    <li>
      <Link
        aria-current={active === true ? "page" : undefined}
        href={url}
        className={clsx(
          "text-sm lg:text-base font-bold uppercase tracking-widest hover:text-orange-400 transition-colors",
          active == true ? "underline text-orange-400" : "text-slate-500"
        )}
        title={label}
      >
        {label}
      </Link>
    </li>
  );
};
