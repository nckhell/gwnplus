import { Hamburger } from "@/components/Hamburger/Hamburger";
import { FC, useCallback, useState } from "react";
import { MenuItem } from "./atoms/MenuItem";
import { MobileMenu } from "../MobileMenu";
import { menu } from "@/config/menu";

export const Nav: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen),
    []
  );

  return (
    <nav className="container-gwen py-6 sm:py-12 xl:py-24">
      <div className="flex items-center justify-between">
        <div>
          <a
            aria-current="page"
            href="/"
            className="router-link-active router-link-exact-active relative z-30"
          >
            GWNPLUS
          </a>
        </div>
        <ul className="hidden flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-x-10 md:space-y-0">
          {menu.map((menuItem) => (
            <MenuItem
              key={menuItem.url}
              label={menuItem.label}
              url={menuItem.url}
            />
          ))}
        </ul>
        <div className="md:hidden relative z-30">
          <Hamburger open={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </div>
      <div className="md:hidden">
        <MobileMenu open={isMobileMenuOpen} />
      </div>
    </nav>
  );
};
