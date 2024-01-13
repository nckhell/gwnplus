import { FC } from "react";

interface MenuItemProps {
  label: string;
  url: string;
  active?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({ label, url, active }) => {
  return (
    <li>
      <a
        aria-current={active === true ? "page" : undefined}
        href={url}
        className="text-sm lg:text-base font-bold uppercase tracking-widest text-slate-500 hover:text-orange-400 transition-colors"
      >
        {label}
      </a>
    </li>
  );
};
