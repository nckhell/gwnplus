"use client";

import { Hamburger } from "@/components/Hamburger/Hamburger";
import { FC, useCallback, useEffect, useState } from "react";
import { MenuItem } from "./atoms/MenuItem";
import { MobileMenu } from "../MobileMenu";
import { menu } from "@/config/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav: FC = () => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen),
    []
  );

  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  return (
    <nav className="container-gwen py-8 sm:py-12 xl:py-24">
      <div className="flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="router-link-active router-link-exact-active relative z-30"
          >
            <Image
              src="/logo.png"
              alt="Logo Gwen Jansen"
              width="500"
              height="500"
              className="max-w-[100px] lg:max-w-[120px]"
              priority
            />
          </Link>
        </div>
        <ul className="hidden flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-x-10 md:space-y-0">
          {menu.map((menuItem) => (
            <MenuItem
              key={menuItem.url}
              label={menuItem.label}
              url={menuItem.url}
              active={pathname == menuItem.url}
              alt={menuItem.alt}
            />
          ))}
        </ul>
        <div className="md:hidden relative z-30">
          <Hamburger open={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </div>
      <div className="md:hidden">
        <MobileMenu open={isMobileMenuOpen} activePath={pathname ?? ""} />
      </div>
    </nav>
  );
};
