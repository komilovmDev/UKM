import React from "react";
import Button from "../Button_ukm/Button";
import fullExport from "./../../../../images/fullExport.svg";

const AboutUs = () => {
  return (
    <div className="aboutHome">
      <div className="aboutHome_bg">
        <h1>Производственная мощность и экспорт продукции</h1>
        <img className="" src={fullExport} alt="Background" />
      </div>
      <div className="w-full h-full flex flex-col font-rubik px-[120px] py-[0px] gap-[50px] bg-[#3D3E3D]">
        <div className="w-full flex justify-between">
          <h1
            className="text-[256px] h-[190px] flex justify-center items-center font-bold text-transparent"
            style={{ WebkitTextStroke: "1px #fff" }}
          >
            О нас
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[85%] flex">
            <p className="border-l-[3px] border-[#F0CD51] p-3 text-[#ffffff]">
              Ургенчский завод кормоуборочных машин был организован в сентябре
              <b> 1981 года</b> на базе Люберецкого ПО
              <b> «завода им.Ухтомского»</b> г. Люберцы Московкой области.
            </p>
            <p className="border-l-[3px] border-[#F0CD51] p-3 text-[#ffffff]">
              Занимаемая площадь -<b> 7,46 га.</b> В <b>1987 году</b> введены в
              эксплуатацию новые производственные корпуса с новым оборудованием,
              производственная площадь которых составляет <b>16160 кв.м.</b>
            </p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
