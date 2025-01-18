import React from "react";
import VacancyButtons from "./components/VakancyButtons/VacancyButtons";
import Bg from "./../../images/Frame.png";
import VakancyDocument from "./components/VakancyDocument/VakancyDocument";

const Vakancy = () => {
  const vacancyData = [
    { title: "мастер", available: 1 },
    { title: "Секретар", available: 1 },
    { title: "Токарь", available: 4 },
    { title: "Сверловщик", available: 3 },
    { title: "Разнорабочий", available: 16 },
    { title: "Сварщик", available: 14 },
    { title: "Фрезеровщик", available: 1 },
    { title: "Сл-сборщик", available: 1 },
    { title: "Щофер", available: 1 },
    { title: "Уборщица", available: 1 },
    { title: "Маляр", available: 2 },
    { title: "Сторож", available: 2 },
  ];

  return (
    <div
      className="px-[120px] py-[50px] flex flex-col gap-[24px] relative overflow-hidden"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-[0px] left-[0px] bg-gradient-s w-full h-[150%] z-[0]"></div>
      <div>
        <h1 className="text-[#ABBA27] text-[36px] font-rubik font-medium h-auto">
          Вакансии
        </h1>
      </div>
      <div className="flex flex-col gap-[48px] relative z-10">
        <VacancyButtons vacancies={vacancyData} />
        <VakancyDocument />
      </div>
    </div>
  );
};

export default Vakancy;
