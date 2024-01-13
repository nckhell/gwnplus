import { FC } from "react";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
}

export const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-[32px] lg:mb-[50px]">
      <label
        htmlFor={props.id}
        className="text-xl text-orange-500 font-semibold block h5 mb-2"
      >
        {label}
        {props.required === true ?? (
          <span className="text-purple text-[12px] inline-block ml-[10px] [vertical-align:super]">
            *
          </span>
        )}
      </label>
      <div className="relative w-full">
        <input
          id={props.id}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className="text-lg text-slate-600 w-full py-[16px] border-b border-slate-900 transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 placeholder:text-black placeholder:opacity-60 focus:border-orange-500"
        />
      </div>
    </div>
  );
};
