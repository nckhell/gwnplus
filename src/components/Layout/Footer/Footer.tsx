"use client";

import { menu } from "@/config/menu";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MenuItem } from "../Nav/atoms/MenuItem";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#B16452]">
      <div className="mx-auto max-w-7xl divide-y divide-amber-900 px-4 sm:px-12 lg:px-8 xl:px-16">
        <div className="flex flex-col items-center justify-between gap-6 pb-6 md:flex-row">
          <Link
            href="/"
            className="inline-block bg-white p-3 rounded-full relative z-30"
          >
            <Image
              src="/logo.png"
              alt="Logo Gwen Jansen"
              width="500"
              height="500"
              className="max-w-[40px] lg:max-w-[50px]"
            />
          </Link>
          <ul className="flex-col space-y-4 md:flex-row flex-wrap mt-0 flex items-center md:space-y-0 md:space-x-10">
            {menu.map((menuItem) => (
              <li key={menuItem.url}>
                <a
                  href={menuItem.url}
                  className="text-slate-100 transition duration-300 hover:text-slate-300"
                >
                  {menuItem.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-between gap-4 py-6 text-sm text-slate-100 sm:flex-row sm:gap-6">
          <span className="order-last sm:order-first">
            Copyright © GWN+ {currentYear}
          </span>
          <ul className="order-first flex gap-6 sm:order-2">
            <li>Centrum Kontich</li>
            <li>
              <a
                href="tel:0473 25 53 33"
                target="_blank"
                className="transition duration-300 hover:text-stone-400"
              >
                0473 25 53 33
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
