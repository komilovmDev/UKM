import React from 'react'
import tenImg from './../../images/tender/image 3118.png'
const Tender = () => {
  return (
    <div className='w-full h-[70vh] flex bg-[#3D3E3D] relative'>
        <p className='text-[16px] text-[#F0CD51] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] font-rubik '>Скоро..</p>
        <img className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]' src={tenImg} alt="" />
    </div>
  )
}

export default Tender