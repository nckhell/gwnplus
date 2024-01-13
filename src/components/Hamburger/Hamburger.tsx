import clsx from "clsx";
import { FC } from "react";

interface HamburgerProps {
  open: boolean;
  onClick: () => void;
}

export const Hamburger: FC<HamburgerProps> = ({ open, onClick }) => {
  return (
    <button
      aria-label="humburger"
      id="hamburger"
      className={clsx("group -mr-6 p-6", open ? "open" : "")}
      onClick={() => onClick()}
    >
      <div
        aria-hidden="true"
        className="m-auto h-0.5 w-6 rounded bg-slate-600 group-hover:bg-orange-500 transition duration-300"
      ></div>
      <div
        aria-hidden="true"
        className="m-auto mt-2 h-0.5 w-6 rounded bg-slate-600 group-hover:bg-orange-500 transition duration-300"
      ></div>
    </button>
  );
};
