import React from "react";

const Table = () => {
  const rows = 5;
  const columns = [
    "МОДЕЛИ",
    "Длина, м",
    "Рабочая ширина, м",
    "Масса,кг",
    "Требуемая мощность, л.с",
  ]; 
  const data = [
    {
      model: "ЛП-3",
      price: "5",
      color: "3",
      year: 2350,
      status: "90-100",
    },
    {
      model: "ЛП-3,5",
      price: "5",
      color: "3,5",
      year: 2400,
      status: "110-120",
    },
    {
      model: "ЛП-4",
      price: "5",
      color: "4",
      year: 2450,
      status: "120-130",
    },
    {
      model: "ЛП-4,5",
      price: "5",
      color: "4,5",
      year: 2500,
      status: "130-140",
    },
    {
      model: "ЛП-5",
      price: "5",
      color: "5",
      year: 2550,
      status: "140-150",
    },
  ];

  return (
    <div>
      <table className="w-full flex flex-col">
        <thead>
          <tr className="w-full flex border border-b-0 rounded-t-[8px] overflow-hidden">
            {columns.map((columns, index) => (
              <th key={index} className=" bg-[#757A5A] text-left w-full border-x h-[100px] text-[22px] font-rubik font-thin px-[16px] text-white flex items-center justify-start">
                {columns}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full border rounded-b-[8px] overflow-hidden">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="flex w-full">
              {Object.values(row).map((cell, colIndex) => (
                <td key={colIndex} className="bg-[#3E3E39] font-rubik font-thin text-white text-[14px] flex items-center justify-start px-[16px] w-full border h-[100px]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  );
};

export default Table;
