"use client";

import { Links } from "@/data";
import { Link as ScrollLing } from "react-scroll";

interface LinkProps {
  onClick?: () => void;
}

const NavLinks = ({ onClick }: LinkProps) => {
  return (
    <ul className="flex flex-col lg:flex-row gap-10 xl:gap-0 items-center text-center">
      {Links.map((item, index) => {
        const Icon = item.icon;

        return (
          <li
            key={index}
            className=" text-white xl:text-sm uppercase font-primary font-medium xl:font-bold tracking-[1.2px] xl:after:content-['/'] xl:after:text-chart-1 xl:after:mx-4 last:after:content-none whitespace-nowrap flex"
          >
            <ScrollLing
              to={item.path}
              smooth
              spy
              className="cursor-pointer flex"
              activeClass="text-chart-1"
              onClick={onClick}
            >
              {item.name} {Icon && <Icon size={20} />}
            </ScrollLing>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
