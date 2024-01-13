import { FC } from "react";

interface MenuItemProps {
  label: string;
  url: string;
  active?: boolean;
}

export const MobileMenuItem: FC<MenuItemProps> = ({ label, url, active }) => {
  return (
    <li className="font-bold uppercase tracking-widest text-slate-500 hover:text-orange-400 transition-colors">
      <a
        aria-current={active === true ? "page" : undefined}
        href={url}
        className="block px-6 py-1 hover:text-primary"
      >
        {label}
      </a>
    </li>
  );
};
