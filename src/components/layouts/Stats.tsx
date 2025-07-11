"use client";

import React, { useRef } from "react";
import Pretitle from "../composites/Pretitle";
import { statsData } from "@/data";
import { useInView } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      id="stats"
      className="bg-stats h-[450px] sm:h-[386px] bg-no-repeat bg-cover bg-center relative py-10"
    >
      <div className="container mx-auto h-full">
        <div className="text-center">
          <div className="mb-4">
            <Pretitle>Data & Fakta</Pretitle>
          </div>
          <p className="text-white mb-10">
            Berdiri sejak 2004 membuat SDN Muhammadiyah 4 Terpadu mencetak
            generasi muda Islam yang unggul
          </p>
        </div>
        <div className="text-white flex flex-wrap justify-between gap-4 text-center xl:text-left">
          {statsData.map((item, index) => (
            <div className="p-4 flex items-center" key={index}>
              <div className="w-[53px] h-[49px] mr-2">
                <Image src={item.image} alt={"gambar"} width={53} height={49} />
              </div>
              <div>
                <div className="text-3xl font-semibold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={item.endCountNum}
                      delay={0.2}
                      duration={3}
                    />
                  )}
                </div>
                <p className="text-base">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
