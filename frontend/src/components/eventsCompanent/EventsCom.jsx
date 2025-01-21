import React from 'react';
import bgbutton from './../../images/Group.png';
import { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import newsImg from '../../images/newsImg.png'
import {LuEye} from 'react-icons/lu'


const EventsCom = () => {
    return (
        <div>
            <div className='w-full h-full flex flex-col font-rubik px-[120px] py-[60px] gap-[40px] mt-0'>
                <div className="w-full flex justify-between">
                    <h1 className="text-[36px] text-[#3A3C3A]">Мероприятия</h1>
                    <button
                        className="bg-white bg-opacity-10 rounded-[8px] font-semibold text-[#ABBA27] px-[26px] py-[8px] border border-[#ABBA27] flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${bgbutton})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        Подробнее
                    </button>
                </div>
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='w-[588px] h-[381px] border rounded-[16px]' style={{
                            backgroundImage: `url(${newsImg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            backgroundPosition: 'center',
                            objectFit: 'contain',
                            background: ''
                        }}>
                            <p>Lorem ipsum</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et leo lorem senectus.Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et leo lorem senectus.</p>
                            <div className='flex justify-between items-center mt-[10px]'>
                                <p className='text-[#000] text-[12px]'>12.01.2024</p>
                                <span className='flex items-center gap-[5px] text-[12px]'>22 <LuEye className='text-[16px]' /></span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default EventsCom;