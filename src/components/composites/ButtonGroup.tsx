import React from "react";
import { RiArrowRightUpLine } from "react-icons/ri";

interface ButtonGroupProps {
  children: React.ReactNode;
  color?: boolean;
}

const ButtonGroup = ({ children, color }: ButtonGroupProps) => {
  return (
    <button
      className={`pl-[10px] p-[5px] flex items-center justify-between min-w-[200px] ${
        color ? "bg-accent" : "bg-white"
      } group`}
    >
      <div
        className={`flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase ${
          color && "text-white"
        }`}
      >
        {children}
      </div>
      <div className="w-11 h-11 grid place-items-center">
        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default ButtonGroup;
