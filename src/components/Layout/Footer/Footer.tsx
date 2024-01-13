import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="pt-6 bg-[#B16452]">
      <div className="mx-auto max-w-7xl divide-y divide-white px-4 sm:px-12 lg:px-8 xl:px-16">
        <div className="flex flex-col items-center justify-between gap-6 pb-6 sm:flex-row">
          <a href="/" className="block w-max">
            GWN+
          </a>
          <ul className="group items-center justify-center gap-0 text-center text-sm text-stone-200 sm:flex lg:gap-0">
            <li className="transition duration-500 group-hover:text-stone-300">
              <a href="pages/about.html" className="block px-3 py-1">
                About me
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col flex-wrap items-center justify-between gap-4 py-6 text-sm text-stone-200 sm:flex-row sm:gap-6">
          <span className="order-last sm:order-first">
            Copyright © Aria 2019 - Present
          </span>
          <ul className="order-first flex gap-6 sm:order-2">
            <li>
              <a
                href="#"
                target="_blank"
                className="transition duration-300 hover:text-stone-400"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="transition duration-300 hover:text-stone-400"
              >
                Behance
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                className="transition duration-300 hover:text-stone-400"
              >
                Instagram
              </a>
            </li>
          </ul>
          <a
            href="/pages/privacy.html"
            className="order-2 transition duration-300 hover:text-stone-400 sm:order-last"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
