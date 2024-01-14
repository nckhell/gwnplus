import { FC } from "react";

interface InputProps extends React.ComponentProps<"input"> {
  label: string;
}

export const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-[32px] lg:mb-[50px]">
      <label
        htmlFor={props.id}
        className="text-xl text-[#B16452] font-semibold block h5 mb-2"
      >
        {label}
        {props.required ? <span className="text-red-500">*</span> : ""}
      </label>
      <div className="relative w-full">
        <input
          id={props.id}
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className="bg-transparent text-lg text-slate-600 w-full py-[16px] border-b border-slate-900 transition-colors duration-500 ease-in-out focus:border-purple focus:outline-none border-opacity-20 focus:border-[#B16452] placeholder:text-slate-400"
        />
      </div>
    </div>
  );
};
