import React from "react";
import InfoLine from "../composites/InfoLine";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import Socials from "../composites/Socials";

const Topbar = () => {
  return (
    <div id="home" className="bg-popover">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="hidden lg:flex items-center gap-8">
            <InfoLine icon={<RiPhoneFill />}>(021) 922677</InfoLine>
            {/* Frame Mail */}
            <InfoLine icon={<RiMailFill />}>admin@sditmuhbireuen.id</InfoLine>
          </div>

          {/* Socials */}
          <Socials
            containerStyle="flex items-center gap-8 mx-auto xl:mx-0"
            iconStyle="text-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
