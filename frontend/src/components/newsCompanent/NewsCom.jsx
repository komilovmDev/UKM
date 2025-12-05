import React from "react";
import imgNews from "../../images/newsImg.png";
import { LuEye } from "react-icons/lu";
import Button from "../../pages/home/components/Button_ukm/Button";

const NewsCom = () => {
  return (
    <section className="w-full">
      <div className="w-full h-full flex flex-col font-rubik px-4 sm:px-6 lg:px-[120px] py-[40px] sm:py-[50px] lg:py-[60px] gap-[24px] sm:gap-[32px] lg:gap-[40px] mt-0">
        {/* Header */}
        <div className="w-full flex items-center justify-between gap-4">
          <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] text-[#3A3C3A]">
            Новости
          </h1>
          <div className="shrink-0">
            <Button />
          </div>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[20px] lg:gap-[24px]">
          {/* LEFT BIG */}
          <div className="w-full lg:w-1/2 border border-[#C4C5D0] rounded-[16px] overflow-hidden bg-[#FFFFFF]">
            <img className="w-full h-[220px] sm:h-[280px] lg:h-auto object-cover" src={imgNews} alt="" />

            <div className="p-[14px] sm:p-[16px]">
              <p className="text-[#3D3E3D] text-[14px] sm:text-[16px] font-[600]">
                Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper
                enim maecenas. Sed et leo lorem senectus.
              </p>

              <p className="text-[#3D3E3D] text-[12px] mt-[12px] sm:mt-[16px] leading-[1.6]">
                Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper
                enim maecenas. Sed et leo lorem senectus.Lorem ipsum dolor sit
                amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et
                leo lorem senectus.Lorem ipsum dolor sit amet consectetur. Nec
                id lacus ullamcorper enim maecenas. Sed et leo lorem
                senectus.Lorem ipsum dolor sit amet consectetur. Nec id lacus
                ullamcorper enim maecenas. Sed et leo lorem senectus.
              </p>

              <div className="flex justify-between items-center mt-[12px] sm:mt-[16px]">
                <p className="text-[#000] text-[12px]">12.01.2024</p>
                <span className="flex items-center gap-[5px] text-[12px] text-[#000]">
                  22 <LuEye className="text-[16px]" />
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT LIST */}
          <div className="w-full lg:w-1/2 flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[16px]">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row border border-[#C4C5D0] rounded-[16px] overflow-hidden bg-[#FFFFFF]"
              >
                <img
                  className="w-full sm:w-[200px] h-[180px] object-cover"
                  src={imgNews}
                  alt=""
                />

                <div className="p-[12px] flex-1">
                  <p className="text-[#3D3E3D] text-[14px] sm:text-[16px] font-[600]">
                    Lorem ipsum dolor sit amet consectetur. Nec id lacus
                    ullamcorper enim maecenas. Sed et leo lorem senectus.
                  </p>

                  <p className="text-[#3D3E3D] text-[12px] mt-[8px] sm:mt-[10px] leading-[1.6]">
                    Lorem ipsum dolor sit amet consectetur. Sed et leo lorem
                    senectus.Lorem ipsum dolor sit...
                  </p>

                  <div className="flex justify-between items-center mt-[8px] sm:mt-[10px]">
                    <p className="text-[#000] text-[12px]">12.01.2024</p>
                    <span className="flex items-center gap-[5px] text-[12px] text-[#000]">
                      22 <LuEye className="text-[16px]" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCom;
