import { FC } from "react";
import { MobileMenuItem } from "./atoms";
import clsx from "clsx";
import { menu } from "@/config/menu";

interface MobileMenuProps {
  open: boolean;
  activePath: string;
}

export const MobileMenu: FC<MobileMenuProps> = ({ open, activePath }) => {
  return (
    <div
      id="navlinks"
      className={clsx(
        "fixed inset-0 z-20 h-full w-full items-center justify-center bg-white/90 backdrop-blur-3xl lg:static lg:block lg:h-auto lg:w-auto lg:bg-transparent lg:backdrop-blur-none",
        open ? "flex" : "hidden"
      )}
    >
      <ul className="group flex flex-col items-center gap-6 text-lg text-stone-600 dark:text-stone-300 lg:flex-row lg:gap-0 lg:text-sm">
        {menu.map((menuItem) => (
          <MobileMenuItem
            key={menuItem.url}
            label={menuItem.label}
            url={menuItem.url}
            active={activePath == menuItem.url}
          />
        ))}
      </ul>
    </div>
  );
};
