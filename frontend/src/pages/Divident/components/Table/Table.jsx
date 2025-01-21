import React from "react";

const ColumnHeaderWithSubHeaders = ({ header, subHeaders }) => (
  <div className="w-full justify-between font-bold flex flex-col h-[68px] text-center border-b border-white bg-[#757A5A]">
    {/* Основной заголовок */}
    <h1 className="text-[14px] font-rubik font-normal h-[34px] flex items-center justify-center text-white">
      {header}
    </h1>
    {/* SubHeaders с верхней границей */}
    {subHeaders && (
      <div className="w-full text-white flex justify-center border-t border-white h-[34px]">
        {subHeaders.map((subHeader, index) => (
          <h1
            key={index}
            className="w-[50%] text-white border-r border-[#fff] text-[14px] font-rubik font-normal h-full flex items-center justify-center"
          >
            {subHeader}
          </h1>
        ))}
      </div>
    )}
  </div>
);

const Table = () => {
  const tableData = [
    {
      header: "№",
      content: ["1", "2", "3", "4"],
    },
    {
      header:
        "Орган, принявший решение о выплате дивидендов, дата принятия решения",
      content: [
        "Общее годовое собрание акционеров, 28 июня 2019 года",
        "Общее годовое собрание акционеров, 30 сентября 2020 года",
        "Общее годовое собрание акционеров, 30 июня 2021 года",
        "Общее годовое собрание акционеров, 29 июня 2022 года",
      ],
    },
    {
      header: "Размер дивиденда, начисленный на одну акцию",
      content: ["1415,94 сум", "351,7249 сум", "1160,7 сум", "1341,17 сум"],
    },
    {
      header: "Год, по итогам которого начислен дивиденд",
      content: ["2018 год", "2019 год", "2020 год", "2021 год"],
    },
    {
      header: "Дата выплаты дивиденда",
      subHeaders: ["Начало", "Конец"],
      content: [
        { start: "01.01.2018", end: "31.12.2018" },
        { start: "01.01.2019", end: "31.12.2019" },
        { start: "01.01.2020", end: "31.12.2020" },
        { start: "01.01.2021", end: "31.12.2021" },
      ],
    },
    {
      header: "Информация об исполнении обязательств по выплате дивидендов",
      content: [
        "дивиденды выплачены ",
        "Дивиденды выплачены частично",
        "Дивиденды выплачены частично",
        "Дивиденды выплачены частично",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center text-white">
      <div className="flex border border-white overflow-hidden rounded-2xl relative ">
        {tableData.map((column, index) => (
          <div
            key={index}
            className={`flex flex-col top-0 ${
              index === 0
                ? "min-w-[64px] max-w-[64px]" // Первый столбец
                : "min-w-[227.2px] max-w-[227.2px]"
            } ${index !== tableData.length - 1 ? "border-r border-white" : ""}`}
          >
            {/* Рендеринг заголовка столбца */}
            {column.subHeaders ? (
              <ColumnHeaderWithSubHeaders
                header={column.header}
                subHeaders={column.subHeaders}
              />
            ) : (
              <div
                className={`font-bold border-b border-white bg-[#757A5A] h-[68px] flex items-center px-[16px] text-white ${
                  index === 1 ? "px-[16px]" : "text-center"
                }`}
              >
                <h1 className="text-[14px] font-normal leading-[1.2]">
                  {column.header}
                </h1>
              </div>
            )}

            {/* Содержимое столбца */}
            <div className="flex flex-col">
              {column.content.map((item, contentIndex) => (
                <div
                  key={contentIndex}
                  className={`h-[68px] bg-[#3E3E39] flex items-center border-b border-white ${
                    index === 0
                      ? "justify-center text-center"
                      : index === 1
                      ? "justify-start text-start px-[16px]"
                      : "justify-center text-center"
                  }`}
                >
                  {column.subHeaders ? (
                    <>
                      <p className="w-[50%] flex justify-center items-center h-full border-r text-[14px] font-rubik font-normal leading-[1.2]">
                        {item.start}
                      </p>
                      <p className="w-[50%] text-[14px] font-rubik font-normal leading-[1.2]">
                        {item.end}
                      </p>
                    </>
                  ) : (
                    <p
                      className={`text-[14px] font-rubik font-normal leading-[1.2] ${
                        index === 5 ? "text-start px-[16px]"  : ""
                      }`}
                    >
                      {item}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
