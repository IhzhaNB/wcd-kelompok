import { SocialMedia } from "@/data";
import Link from "next/link";
import React from "react";

interface SocialsProps {
  containerStyle: string;
  iconStyle?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyle, iconStyle }) => {
  return (
    <div className={`${containerStyle}`}>
      {SocialMedia.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link href={item.path} key={index} className={`${iconStyle}`}>
            <Icon size={30} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
