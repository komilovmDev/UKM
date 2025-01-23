import React from "react";
import bgbutton from "./../../images/Group.png";
import imgNews from "../../images/newsImg.png";
import { LuEye } from "react-icons/lu";
import Button from "../../pages/home/components/Button_ukm/Button";

const NewsCom = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col font-rubik px-[120px] py-[60px] gap-[40px] mt-0">
        <div className="w-full flex justify-between">
          <h1 className="text-[36px] text-[#3A3C3A]">Новости</h1>
          <Button />
        </div>
        <div className="flex gap-[24px]">
          <div className="w-[50%] border border-[#C4C5D0] rounded-[16px] overflow-hidden">
            <img className="w-[100%]" src={imgNews} alt="" />
            <div className="p-[16px]">
              <p className="text-[#3D3E3D] text-[16px] font-[600]">
                Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper
                enim maecenas. Sed et leo lorem senectus.
              </p>
              <p className="text-[#3D3E3D] text-[12px] mt-[16px]">
                Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper
                enim maecenas. Sed et leo lorem senectus.Lorem ipsum dolor sit
                amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et
                leo lorem senectus.Lorem ipsum dolor sit amet consectetur. Nec
                id lacus ullamcorper enim maecenas. Sed et leo lorem
                senectus.Lorem ipsum dolor sit amet consectetur. Nec id lacus
                ullamcorper enim maecenas. Sed et leo lorem senectus.
              </p>
              <div className="flex justify-between items-center mt-[16px]">
                <p className="text-[#000] text-[12px]">12.01.2024</p>
                <span className="flex items-center gap-[5px] text-[12px]">
                  22 <LuEye className="text-[16px]" />
                </span>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-[16px]">
            <div className="flex border border-[#C4C5D0] rounded-[16px] overflow-hidden">
              <img
                className="w-[200px] h-[180px] object-cover"
                src={imgNews}
                alt=""
              />
              <div className="p-[12px]">
                <p className="w-full text-[#3D3E3D] text-[16px] font-[600]">
                  Lorem ipsum dolor sit amet consectetur. Nec id lacus
                  ullamcorper enim maecenas. Sed et leo lorem senectus.
                </p>
                <p className="w-[100%] text-[#3D3E3D] text-[12px] mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur. Sed et leo lorem
                  senectus.Lorem ipsum dolor sit...
                </p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="text-[#000] text-[12px]">12.01.2024</p>
                  <span className="flex items-center gap-[5px] text-[12px]">
                    22 <LuEye className="text-[16px]" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex border border-[#C4C5D0] rounded-[16px] overflow-hidden">
              <img
                className="w-[200px] h-[180px] object-cover"
                src={imgNews}
                alt=""
              />
              <div className="p-[12px]">
                <p className="text-[#3D3E3D] text-[16px] font-[600]">
                  Lorem ipsum dolor sit amet consectetur. Nec id lacus
                  ullamcorper enim maecenas. Sed et leo lorem senectus.
                </p>
                <p className="w-[100%] text-[#3D3E3D] text-[12px] mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur. Sed et leo lorem
                  senectus.Lorem ipsum dolor sit...
                </p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="text-[#000] text-[12px]">12.01.2024</p>
                  <span className="flex items-center gap-[5px] text-[12px]">
                    22 <LuEye className="text-[16px]" />
                  </span>
                </div>
              </div>
            </div>
            <div className="flex border border-[#C4C5D0] rounded-[16px] overflow-hidden">
              <img
                className="w-[200px] h-[180px] object-cover"
                src={imgNews}
                alt=""
              />
              <div className="p-[12px]">
                <p className="text-[#3D3E3D] text-[16px] font-[600]">
                  Lorem ipsum dolor sit amet consectetur. Nec id lacus
                  ullamcorper enim maecenas. Sed et leo lorem senectus.
                </p>
                <p className="w-[100%] text-[#3D3E3D] text-[12px] mt-[10px]">
                  Lorem ipsum dolor sit amet consectetur. Sed et leo lorem
                  senectus.Lorem ipsum dolor sit...
                </p>
                <div className="flex justify-between items-center mt-[10px]">
                  <p className="text-[#000] text-[12px]">12.01.2024</p>
                  <span className="flex items-center gap-[5px] text-[12px]">
                    22 <LuEye className="text-[16px]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCom;
