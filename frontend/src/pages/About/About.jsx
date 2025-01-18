import React from "react";
import VacancyButtons from "../Vakancy/components/VakancyButtons/VacancyButtons";
import Rukowod from "./Rukowod/Rukowod";

const About = () => {
  const vacancyData = [
    { title: "Устав", available: 1 },
    { title: "Структура", available: 2 },
    { title: "Бизнес планы", available: 3 },
    { title: "Наблюдательный совет", available: 4 },
    { title: "Список аффилированныхлиц", available: 5 },
    { title: "Существенные факты", available: 6 },
    { title: "Протоколы акционеров", available: 7 },
    { title: "Ежеквартальные отчеты", available: 8 },
    { title: "Годовые отчеты", available: 9 },
    { title: "Выплаченные дивиденды", available: 10 },
    { title: "Аудиторский отчет", available: 11 }, 
  ];

  return (
    <div className="px-[120px] bg-[#3D3E3D]">
      <div className="py-[50px] w-full flex flex-col gap-[32px]">
        <p className="text-[36px] text-[#ABBA27] font-rubik font-medium">О нас</p>
        <VacancyButtons vacancies={vacancyData} />
      </div>
      <div className="flex flex-col gap-[48px] py-[16px]">
        <p className="text-[36px] font-rubik font-medium text-[#ABBA27]">Рукаводство</p>
        <Rukowod/>
      </div>
    </div>
  );
};

export default About;
