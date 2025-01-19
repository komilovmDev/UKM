import React from "react";
import RukowdBase from "../components/RokowdBase/RukowdBase";
import Atavayata from "./../../../images/tender/Screenshot 2024-11-12 at 11.58.01 1.png";

const Rukowod = () => {
  const rukdata = [
    {
      id: 1,
      name: "Атажонов Атавай Атажонович",
      position: "Основатель",
      image: Atavayata,
      bio: [
        "Родился в 1949 году в Шаватском районе Хорезмской области. В 1973 году окончил Ташкентский Политехнический Институт, по специальности инженер-механик. В 1989 году вступил на должность директора «Ургенчкорммаш», которую занимал до 2014 года. С 2014 года и до последних дней своей жизни он являлся советником «АО Ургенчкорммаш».",
        "Атавай Атажонович был дальновидным. справедливым и внимательным руководителем. Во многом именно благодаря ему была запущена основная производственная часть завода, которая послужила трамплином для того, чтобы на сегодняшний день «Ургенчкорммаш» стал узнаваемым и конкурентноспособным предприятием на международном рынке.",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-[48px] w-full h-auto">
      {rukdata.map((data) => (
        <div
          key={data.id}
          className="flex items-center gap-[40px] rounded-t-[32px] rounded-bl-[160px] bg-white bg-opacity-10 rounded-br-[32px] px-[16px] min-h-[370px]"
        >
          <div className="min-w-[300px] max-w-[300px] h-[338px] rounded-b-full overflow-hidden  rounded-t-[22px]">
            <img
              className="w-full h-full object-cover"
              src={data.image}
              alt={data.name}
            />
          </div>
          <div>
            <h1 className="text-[32px] font-rubik font-medium text-[#ABBA27]">
              {data.name}
            </h1>
            <h3 className="text-[16px] font-rubik font-medium text-white mb-4">
              {data.position}
            </h3>
            <div className="flex flex-col gap-[24px]">
              {data.bio.map((paragraph, index) => (
                <p className='text-white font-rubik text-[16px] ' key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div>
        <RukowdBase />
      </div>
    </div>
  );
};

export default Rukowod;
