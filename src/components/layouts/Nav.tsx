import React from "react";
import NavLinks from "../composites/NavLinks";
import Logo from "../composites/Logo";
import NavMobile from "../composites/NavMobile";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Logo />
      <div className="hidden lg:block">
        <NavLinks />
      </div>
      <div className="lg:hidden">
        <NavMobile />
      </div>
    </div>
  );
};

export default Nav;
