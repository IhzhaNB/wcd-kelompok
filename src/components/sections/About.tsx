import React from "react";
import Pretitle from "../composites/Pretitle";

const About = () => {
  return (
    <section id="about" className="my-10">
      <div className="container mx-auto py-10">
        {/* Title */}
        <div className="mb-20 text-center">
          <Pretitle kami>tentang</Pretitle>
        </div>

        {/* Content */}
        <div className="flex flex-wrap">
          <div className="lg:w-1/2 mb-10">
            <div className="w-full h-full pr-10 mb-10">
              <iframe
                className="w-full max-w-[560px] h-full max-h-[315px]"
                src="https://www.youtube.com/embed/BWSQpcwCxak?si=S3gf4v_omuGY9cga"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8">
            <h1 className="h1 capitalize! text-accent!">
              SDIT Muhammadiyah Bireuen
            </h1>
            <p className="font-bold">
              Assalamu&#39;alaikum Warahmatullah Wabarakatuh
            </p>
            <p className="text-secondary">
              <span className="text-primary font-bold">
                SDIT Muhammadiyah Bireuen
              </span>{" "}
              adalah lembaga pendidikan dasar yang berlandaskan nilai-nilai
              Islam dan berkomitmen untuk mencetak generasi yang cerdas,
              berakhlak mulia, serta memiliki keterampilan abad ke-21. Berlokasi
              di Kemayoran, Bireuen Pusat, sekolah ini telah menjadi bagian dari
              sistem pendidikan Muhammadiyah yang terkenal dengan standar
              akademik yang tinggi serta pembinaan karakter Islami yang kuat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
