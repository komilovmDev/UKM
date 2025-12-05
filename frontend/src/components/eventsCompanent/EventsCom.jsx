import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import newsImg from "../../images/newsImg.png";
import { LuEye } from "react-icons/lu";
import Button from "../../pages/home/components/Button_ukm/Button";

const EventsCom = () => {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="w-full h-full flex flex-col font-rubik px-4 sm:px-6 lg:px-[120px] py-[30px] sm:py-[36px] lg:py-[40px] gap-[24px] sm:gap-[32px] lg:gap-[40px] mt-0">
        <div className="w-full flex items-center justify-between gap-4">
          <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] text-[#3A3C3A]">
            Мероприятия
          </h1>
          <div className="shrink-0">
            <Button />
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="relative mb-[40px]">
        <Swiper
          slidesPerView={1.15}
          centeredSlides
          spaceBetween={18}
          loop
          grabCursor
          simulateTouch
          allowTouchMove
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1.25, spaceBetween: 24 },
            1024: { slidesPerView: 1.5, spaceBetween: 50 },
          }}
          className="!pb-10"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide
              key={index}
              className={[
                "w-full h-full relative flex justify-center transition-transform duration-500 ease-in-out",
                "opacity-70 scale-90",
                "[&.swiper-slide-active]:opacity-100 [&.swiper-slide-active]:scale-100 [&.swiper-slide-active]:z-10",
              ].join(" ")}
            >
              {/* slide-box */}
              <div
                className={[
                  "relative w-full",
                  "h-[320px] sm:h-[380px] lg:h-[381px]", // твой slide height
                  "rounded-[32px] overflow-hidden",
                  "flex items-end",
                ].join(" ")}
              >
                <img
                  className="absolute inset-0 z-0 w-full h-full object-cover"
                  src={newsImg}
                  alt=""
                  draggable={false}
                />

                <div className="w-full z-[2] relative bg-gradient-to-b from-transparent via-[#3D3E3D] to-[#3D3E3D] p-4 text-[#FFFFFF]">
                  <p className="text-[16px] font-bold">Lorem ipsum</p>
                  <p className="text-[12px] leading-[1.6]">
                    Lorem ipsum dolor sit Nec id lacus ullamcorper enim
                    maecenas. Sed et leo lorem senectu amet consectetur. Nec id
                    lacus ullamcorper enim maecenas. Sed et leo lorem senectus.
                  </p>

                  <div className="flex justify-end items-center mt-[0px] gap-[25px]">
                    <span className="border-[.5px] flex-1 border-[#FFFFFF70]" />
                    <p className="text-[#FFFFFF] text-[12px]">12.01.2024</p>
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
    </section>
  );
};

export default EventsCom;
