import React from "react";

const VacancyButtons = ({ vacancies }) => {
  return (
    <div className="flex gap-[8px] flex-wrap">
      {vacancies.map((vacancy, index) => (
        <div key={index} className="flex flex-col items-center">
          <button className="flex flex-row gap-[8px] items-center bg-[#505150] rounded-[30px] text-white pr-[24px] pl-[8px] py-[8px]">
            <span className="rounded-full w-[52px] h-[52px] bg-[#3D3E3D] flex justify-center items-center text-[16px] font-rubik font-bold">
              {vacancy.available}
            </span>
            <p className="text-[16px] font-rubik ">
              {vacancy.title}
            </p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default VacancyButtons;
