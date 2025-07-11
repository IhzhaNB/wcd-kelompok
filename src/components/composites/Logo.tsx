import Image from "next/image";
import Link from "next/link";
import React from "react";
import SchollName from "./SchollName";

const Logo = () => {
  return (
    <Link href="" className="flex gap-2">
      <Image
        src="/assets/img/logo_sdit.png"
        alt="LogoImg"
        height={58}
        width={46}
      />
      <SchollName />
    </Link>
  );
};

export default Logo;
