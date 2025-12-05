import React from "react";
import Button from "../Button_ukm/Button";
import fullExport from "./../../../../images/fullExport.svg";
import bgAbout from "./../../../../images/bgAbout.svg"; // это было в CSS как background-image

const AboutUs = () => {
  return (
    <section className="w-full">
      {/* ======= aboutHome_bg (1в1 CSS: height 620, padding-top 200, overlay+blur) ======= */}
      <div
        className={[
          "relative w-full h-[620px]",
          "bg-no-repeat",
          "flex items-center justify-center",
          "pt-[200px]",
        ].join(" ")}
        style={{ backgroundImage: `url(${bgAbout})` }}
      >
        {/* overlay (как ::after) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#3a3c3aa8] to-[#3a3c3aa5] backdrop-blur-[10px]" />

        {/* h1 (как в CSS: position absolute top 100, width 40%, centered) */}
        <h1 className="absolute top-[100px] z-[2] w-[40%] text-[36px] text-center text-[#FFFFFF]">
          Производственная мощность и экспорт продукции
        </h1>

        {/* img (как в CSS: width 100%, height 700, z 3) */}
        <img
          className="relative z-[3] w-full h-[700px] object-contain"
          src={fullExport}
          alt="Background"
          draggable={false}
        />
      </div>

      {/* ======= ниже блок — оставил твой стиль, добавил responsive только по padding/раскладке ======= */}
      <div className="w-full h-full flex flex-col font-rubik px-4 sm:px-6 lg:px-[120px] py-0 gap-[50px] bg-[#3D3E3D]">
        <div className="w-full flex justify-between">
          {/* ОГРОМНЫЙ текст "О нас" — на мобилке уменьшаем, на lg как у тебя */}
          <h1
            className="text-[84px] sm:text-[140px] lg:text-[256px] h-auto lg:h-[190px] flex justify-center items-center font-bold text-transparent"
            style={{ WebkitTextStroke: "1px #FFFFFF" }}
          >
            О нас
          </h1>
        </div>

        {/* контент + кнопка: на мобилке в колонку */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0 pb-10">
          <div className="w-full lg:w-[85%] flex flex-col sm:flex-row gap-4">
            <p className="border-l-[3px] border-[#F0CD51] p-3 text-[#FFFFFF]">
              Ургенчский завод кормоуборочных машин был организован в сентябре
              <b> 1981 года</b> на базе Люберецкого ПО
              <b> «завода им.Ухтомского»</b> г. Люберцы Московкой области.
            </p>

            <p className="border-l-[3px] border-[#F0CD51] p-3 text-[#FFFFFF]">
              Занимаемая площадь -<b> 7,46 га.</b> В <b>1987 году</b> введены в
              эксплуатацию новые производственные корпуса с новым оборудованием,
              производственная площадь которых составляет <b>16160 кв.м.</b>
            </p>
          </div>

          <div className="shrink-0">
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
