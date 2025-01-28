import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'tailwindcss/tailwind.css';

import krone from "./image/krone.png";
import marchesin from './image/marchesin.png';
import cayirova from './image/cayirova.png';
import agors from './image/agros.png';
import uysal from './image/uysal.png';
import mtron from './image/mtron.png';
import Button from '../../pages/home/components/Button_ukm/Button';

const PartnersCom = () => {
    const images = [krone, marchesin, cayirova, agors, uysal, mtron];

    return (
        <div className="mx-auto py-8 flex flex-col gap-[48px] mb-11">
            <div className="w-[1200px] flex justify-between margin-[0 auto] px-[120px]">
                <h1 className="text-[36px] text-[#3A3C3A]">
                    Наши партнеры
                </h1>
            </div>
            <Swiper
                className='w-[100%]'
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={5}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="flex items-center">
                        <img src={image} alt={`Slide ${index}`} className="w-[200px] h-[100%]" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PartnersCom;
