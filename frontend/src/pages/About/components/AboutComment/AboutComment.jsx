import React from "react";
import razvitya from '../img/razvitya.svg'
import checkWhite from '../../../../images/Ok.svg'
import masterImg from '../../../../images/master.svg'
import stanokImage from '../../../../images/stanok.svg'

const AboutComment = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-[32px] w-full h-auto">
        <h1
          className="text-[120px] h-auto font-bold text-transparent px-[120px]"
          style={{ WebkitTextStroke: "1px #fff" }}
        >
          Развития
        </h1>
        <img className="w-full" src={razvitya} alt="" />
      </div>
      <div className="w-[1200px] relative pb-28" style={{ margin: '0 auto' }}>
        <img className="w-[250px] absolute bottom-[-50px] right-[0]" src={masterImg} alt="" />
        <img src={checkWhite} alt="" />
        <h1 className="text-[32px] text-[#FFFFFF] mt-5">В результате роста объема производства </h1>
        <div className="flex flex-col gap-5">
          <p className="before:content-['•'] before:mr-2 text-[20px] text-[#fff] w-2/3">Создаются новые рабочие места, на которые привлекаются молодые люди, закончившие технические ВУЗы.</p>
          <p className="before:content-['•'] before:mr-2 text-[20px] text-[#fff] w-2/3">Завод имеет при себе нижеследующие дочерние предприятия:</p>
        </div>
        <div className="flex mt-6 gap-16 ml-10">
          <ul>
            <li className="text-[20px] text-[#ffffff]">Жасмин</li>
            <li className="text-[20px] text-[#ffffff]">Лит</li>
            <li className="text-[20px] text-[#ffffff]">Маш</li>
          </ul>
          <ul>
            <li className="text-[20px] text-[#ffffff]">Ургенчский</li>
            <li className="text-[20px] text-[#ffffff]">Технологический</li>
            <li className="text-[20px] text-[#ffffff]">Университет RANCH</li>
          </ul>
        </div>
      </div>
      <div className="w-[1200px] flex items-center" style={{margin: '0 auto'}}>
        <div className="w-1/2">
          <img src={checkWhite} alt="" />
          <h1 className="text-[32px] text-[#FFFFFF] mt-5">На заводе имеется участки</h1>
          <ul>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Кузнечно-прессовый</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Механический</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Сварочный</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Инструментальный</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Сборочные</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Подъёмно-крановыми механизмами </li>
          </ul>
          <h1 className="text-[32px] text-[#FFFFFF] mt-5">На эксплуатации находятся</h1>
          <ul className="">
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Гидравлические прессы</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Кривошипные</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Винторезные и гидропрессы усилием до 500тонн</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Токарные</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Фрезерные</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Сверлильные</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Гайконарезные</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Шлифовальные станки разной модификации</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Сварочное оборудования</li>
            <li className="list-disc list-inside text-[20px] text-[#ffffff]">Компрессоры </li>
          </ul>
        </div>
        <div className="w-1/2 flex items-end justify-end">
          <img className="w-full" src={stanokImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutComment;