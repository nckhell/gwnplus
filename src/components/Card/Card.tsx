import { FC, ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}

export const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <div className="h-full bg-orange-100 p-8 rounded-xl text-xl text-slate-600">
      <h2 className="text-xl font-semibold text-slate-900 lg:text-2xl lg:leading-snug">
        {title}
      </h2>
      <div className="text-lg">{children}</div>
    </div>
  );
};
