import React from "react";
import ButtonGroup from "../composites/ButtonGroup";

const Hero = () => {
  return (
    <section className="h-screen bg-image-hero1 bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto h-full flex items-center">
        <div className="z-20 text-white xl:text-left mx-auto xl:mx-0 flex flex-col lg:items-center xl:items-start ">
          <h1 className="h1 text-white! capitalize! mb-4">
            Pelaksanaan Penilaian Akhir Semester 1 (PAS) SDIT Muhammadiyah
            Bireuen
          </h1>
          <p className="mb-9">Senin, 30 Nov 2024</p>
          <div>
            <ButtonGroup color>Selengkapnya</ButtonGroup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
