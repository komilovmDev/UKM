import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import krone from "./image/krone.png";
import marchesin from "./image/marchesin.png";
import cayirova from "./image/cayirova.png";
import agors from "./image/agros.png";
import uysal from "./image/uysal.png";
import mtron from "./image/mtron.png";

const PartnersCom = () => {
  const images = [krone, marchesin, cayirova, agors, uysal, mtron];

  return (
    <section className="w-full">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[120px] py-8 flex flex-col gap-[48px] mb-11">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] text-[#3A3C3A]">
            Наши партнеры
          </h1>
        </div>

        {/* Slider */}
        <Swiper
          className="w-full"
          modules={[Autoplay]}
          loop
          grabCursor
          simulateTouch
          allowTouchMove
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          spaceBetween={18}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="w-[160px] sm:w-[180px] lg:w-[200px] h-auto select-none"
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersCom;
