import React from "react";
import VacancyButtons from "../Vakancy/components/VakancyButtons/VacancyButtons";
import Rukowod from "./Rukowod/Rukowod";
import AboutComment from "./components/AboutComment/AboutComment";

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

  const aboutData = {
    imgSrc: 'https://via.placeholder.com/150',
    title: 'About Us',
    paragraphs: [
      'This is the first paragraph.',
      'This is the second paragraph.',
      'Here comes the third paragraph!'
    ],
  };

  return (
    <div className="px-[120px] bg-[#3D3E3D] w-full h-auto">
      <div className="py-[50px] w-full flex flex-col gap-[32px]">
        <p className="text-[36px] text-[#ABBA27] font-rubik font-medium">О нас</p>
        <VacancyButtons vacancies={vacancyData} />
      </div>
      <div className="flex flex-col gap-[48px] py-[16px]">
        <p className="text-[36px] font-rubik font-medium text-[#ABBA27]">Рукаводство</p>
        <Rukowod />
      </div>
      <div>
        <AboutComment
          imgSrc={aboutData.imgSrc}
          title={aboutData.title}
          paragraphs={aboutData.paragraphs}
        />
      </div>
    </div>
  );
};

export default About;
