import React from 'react';
import bgbutton from './../../images/Group.png';
import imgNews from '../../images/newsImg.png'
import { LuEye } from "react-icons/lu";

const NewsCom = () => {
    return (
        <div>
            <div className='w-full h-full flex flex-col font-rubik px-[120px] py-[60px] gap-[40px] mt-0'>
                <div className="w-full flex justify-between">
                    <h1 className="text-[36px] text-[#3A3C3A]">Новости</h1>
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
                <div>
                    <div className='w-[50%] border border-[#C4C5D0] rounded-[16px] overflow-hidden'>
                        <img className='w-[100%]' src={imgNews} alt="" />
                        <div className='p-[16px]'>
                            <p className='text-[#3D3E3D] text-[16px] font-[600]'>Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et leo lorem senectus.</p>
                            <p className='text-[#3D3E3D] text-[12px] mt-[16px]'>Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et leo lorem senectus.Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et leo lorem senectus.Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et leo lorem senectus.Lorem ipsum dolor sit amet consectetur. Nec id lacus ullamcorper enim maecenas. Sed et leo lorem senectus.</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-[#3D3E3D] text-[12px] font-[600]'>12.01.2024</p>
                                <span className='flex items-center gap-[5px] text-[12px]'>22 <LuEye /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCom;