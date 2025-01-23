import React from "react";
import bgbutton from "./../../images/Group.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import newsImg from "../../images/newsImg.png";
import { LuEye } from "react-icons/lu";
import Button from "../../pages/home/components/Button_ukm/Button";

const EventsCom = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-col font-rubik px-[120px] py-[40px] gap-[40px] mt-0">
        <div className="w-full flex justify-between">
          <h1 className="text-[36px] text-[#3A3C3A]">Мероприятия</h1>
          <Button />
        </div>
      </div>
      <div className="relative mb-[40px]">
        <Swiper
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={50} // Add some space between slides
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index} className="custom-slide">
              <div
                className={`slide-box ${
                  index === 0 ? "active" : ""
                } flex items-end relative`}
              >
                <img
                  className="w-full absolute z-0 top-0 right-0"
                  src={newsImg}
                  alt=""
                />
                <div className="w-full z-[2] relative inset-0 bg-gradient-to-b from-transparent via-[#3D3E3D] to-[#3D3E3D] p-4 text-white">
                  <p className="text-[16px] font-bold">Lorem ipsum</p>
                  <p className="text-[12px]">
                    Lorem ipsum dolor sit Nec id lacus ullamcorper enim
                    maecenas. Sed et leo lorem senectu amet consectetur. Nec id
                    lacus ullamcorper enim maecenas. Sed et leo lorem senectus.
                  </p>
                  <div className="flex justify-end items-center mt-[0px] gap-[25px]">
                    <span className="border-[.5px] flex-1 border-[#FFFFFF70]"></span>
                    <p className="text-[#ffffff] text-[12px]">12.01.2024</p>
                    <span className="flex items-center gap-[5px] text-[12px]">
                      22 <LuEye className="text-[16px]" />
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventsCom;
