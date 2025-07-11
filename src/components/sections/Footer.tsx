import React from "react";
import Socials from "../composites/Socials";
import InfoLine from "../composites/InfoLine";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import Image from "next/image";
import { imageFooter } from "@/data";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="h-[70vh] bg-footerh-screen bg-footer bg-no-repeat bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto pt-28 flex items-center">
        <div className="flex justify-between gap-10 w-full">
          {/* right */}
          <div className="z-20 text-white w-2/5">
            <p className="mb-9 font-bold text-xl">Tentang Kami</p>
            <div className="flex flex-col gap-4">
              <p className="font-light">
                Jl. Geulanggang Teungoh, Kec. Kota Juang, Kabupaten Bireuen,
                Aceh 24251, Indonesia
              </p>
              <div className="flex flex-col gap-4">
                <InfoLine icon={<RiPhoneFill />} noColor>
                  (021) 922677
                </InfoLine>
                {/* Frame Mail */}
                <InfoLine icon={<RiMailFill />} noColor>
                  admin@sditmuhbireuen.id
                </InfoLine>
              </div>
            </div>
          </div>

          {/* left */}
          <div className="z-20 text-white w-1/3">
            <p className="mb-9 font-bold text-xl">Gallery</p>
            <div className="flex flex-wrap gap-2">
              {imageFooter.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item}
                    alt={`Foto ke ${index + 1}`}
                    width={74}
                    height={41}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
