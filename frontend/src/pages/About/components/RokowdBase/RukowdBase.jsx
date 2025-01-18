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
    <div className="flex gap-[48px]">
      {rukowodData.map((rukowod) => (
        <div
          className="flex flex-col items-center text-center w-[264px] h-[407px]"
          key={rukowod.id}
        >
          <div>
            <img src={rukowod.image} alt={rukowod.name} />
          </div>
          <div>
            <h1>{rukowod.name}</h1>
            <h3>{rukowod.position}</h3> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default RukowdBase;
