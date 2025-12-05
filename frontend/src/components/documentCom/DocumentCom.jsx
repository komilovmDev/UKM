import React from "react";
import Button from "../../pages/home/components/Button_ukm/Button";

import ustav from "./icons/ustav.png";
import taskList from "./icons/Task list.png";
import Structure from "./icons/Structure.png";
import PieChart from "./icons/Pie chart.png";
import Observation from "./icons/Observation.png";
import Maths from "./icons/Maths.png";
import Listing from "./icons/Listing.png";
import Dividend from "./icons/Dividend.png";
import Checkmsrk from "./icons/Check mark.png";
import Checklist from "./icons/Check list.png";
import Analysis from "./icons/Analysis.png";

const buttonData = [
  { src: ustav, label: "Устав" },
  { src: Structure, label: "Структура" },
  { src: Checklist, label: "Структура" },
  { src: Observation, label: "Наблюдательный совет" },
  { src: Listing, label: "Список аффилированных лиц" },
  { src: Checkmsrk, label: "Существенные факты" },
  { src: taskList, label: "Протоколы акционеров" },
  { src: Analysis, label: "Ежеквартальные отчеты" },
  { src: PieChart, label: "Годовые отчеты" },
  { src: Dividend, label: "Выплаченные дивиденды" },
  { src: Maths, label: "Аудиторский отчет" },
];

const DocumentCom = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-[50px] gap-8 pb-12">
      {/* Header */}
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-[120px]">
        <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] text-[#3A3C3A]">
          Нормативные документы
        </h1>
        <div className="shrink-0">
          <Button />
        </div>
      </div>

      {/* Horizontal scroll list (без CSS .scroll-hide) */}
      <div
        className={[
          "w-full flex gap-4",
          "px-4 sm:px-6 lg:px-[120px]",
          "overflow-x-auto overflow-y-hidden",
          "scroll-smooth",
          // scroll-hide аналог:
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          // приятнее свайп/drag
          "overscroll-x-contain",
        ].join(" ")}
      >
        {buttonData.map((button, index) => (
          <button
            key={index}
            type="button"
            className={[
              // Важно: не сжимать элементы, чтобы был горизонтальный скролл
              "shrink-0",
              "h-[164px] w-[220px] sm:w-[240px]",
              "px-[48px] py-[32px]",
              "bg-[#EEEEEE] rounded-2xl",
              "flex flex-col items-center justify-center gap-[24px]",
              // мелкие улучшения (без новых цветов)
              "transition-transform duration-200",
              "hover:scale-[1.02] active:scale-[0.98]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3A3C3A] focus-visible:ring-offset-2",
            ].join(" ")}
            aria-label={button.label}
          >
            <img className="w-[52px]" src={button.src} alt={button.label} />
            <span className="text-[#3A3C3A] text-[14px] sm:text-[15px] text-center">
              {button.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default DocumentCom;
