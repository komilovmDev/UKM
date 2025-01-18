import React from "react";

const VakancyDocument = () => {
  const documents = [
    "Паспорт копия",
    "Диплом копия",
    "3х4 рис.",
    "ИНН",
    "ИНПС",
    "Мед. справка",
    "Резюме",
  ];

  const requirements = ["25-30 лет", "Опыт работы (с должностью*)"];

  const contactInfo = "+998 (90) 433-00-10";

  return (
    <div className="flex gap-[56px] relative">
      <div className="flex flex-col gap-[16px]">
        <p className="text-[20px] font-rubik text-[#F0CD51]">
          Необходимые документы
        </p>
        <div className="pl-[16px] border-l-[2px] border-[#F0CD51] h-[125px] leading-[1.15] flex flex-col justify-start">
          {documents.map((doc, index) => (
            <p className="text-[16px] text-white font-rubik" key={index}>
              - {doc}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <p className="text-[20px] font-rubik text-[#F0CD51]">Требования</p>
        <div className="pl-[16px] border-l-[2px] border-[#F0CD51] h-auto leading-[1.15] flex flex-col justify-start">
          {requirements.map((req, index) => (
            <p className="text-[16px] text-white font-rubik" key={index}>
              - {req}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[16px]">
        <p className="text-[20px] font-rubik text-[#F0CD51]">
          Для дополнительной информации
        </p>
        <div className="pl-[16px] border-l-[2px] border-[#F0CD51] h-auto leading-[1.15] flex flex-col justify-start">
          <p className="text-[16px] text-white font-rubik">{contactInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default VakancyDocument;
