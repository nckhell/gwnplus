import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface MobileMenuItemProps {
  label: string;
  alt: string;
  url: string;
  active?: boolean;
}

export const MobileMenuItem: FC<MobileMenuItemProps> = ({
  label,
  url,
  active,
  alt,
}) => {
  return (
    <li className="">
      <Link
        aria-current={active === true ? "page" : undefined}
        href={url}
        className={clsx(
          "block px-6 py-1 font-bold uppercase tracking-widest hover:text-orange-400 transition-colors",
          active == true ? "underline text-orange-400" : "text-slate-500"
        )}
        title={alt}
      >
        {label}
      </Link>
    </li>
  );
};
