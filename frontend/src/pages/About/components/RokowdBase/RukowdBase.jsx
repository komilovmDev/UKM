import React from "react";
import Djuratbek from "./../img/Top menu bar.png";
import Dilmurad from "./../img/Dilmurod.png";
import Igor from "./../img/Igor.png";
import Tolik from "./../img/tolik.png";

const RukowdBase = () => {
  const rukowodData = [
    {
      id: 1,
      name: "Атажонов Журъатбек Атаваевич",
      position: "Генеральный директор",
      image: Djuratbek,
    },
    {
      id: 2,
      name: "Рахимов Дилмурод Худайназарович",
      position: "Финансовый директор",
      image: Dilmurad,
    },
    {
      id: 3,
      name: "Кучкаров Игорь Эгамбердиевич",
      position: "Директор по производству",
      image: Igor,
    },
    {
      id: 4,
      name: "Ли Анатолий Ирламович ",
      position: "Советник",
      image: Tolik,
    },
  ];

  return (
    <div className="flex gap-[48px] justify-center">
      {rukowodData.map((rukowod) => (
        <div
          className="flex flex-col items-center text-center w-[264px]  gap-[16px]"
          key={rukowod.id}
        >
          <div>
            <img src={rukowod.image} alt={rukowod.name} />
          </div>
          <div className="flex flex-col items-center text-center gap-[10px]">
            <h1 className="text-[20px] font-rubik font-medium text-[#ABBA27] leading-[1.3] w-[230px]">{rukowod.name}</h1>
            <h3 className="text-[16px] font-medium text-[#fff] font-rubik">{rukowod.position}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RukowdBase;
