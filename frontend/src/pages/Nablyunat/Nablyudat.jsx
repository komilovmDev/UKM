import React, { useState } from "react";
import UstavHeader from "../Ustav/components/UstavHeader";
import UstavCatalog from "../Ustav/components/UstavCatalog";

export default function Nablyudat() {
  const [catalog, setCatalog] = useState([
    { id: 1, info: `Состав исполнительного органа АО "Урганчкорммаш".` },
    { id: 2, info: `Состав Наблюдательного совета АО "Урганчкорммаш` },
  ]);

  const [selectedCatalogId, setSelectedCatalogId] = useState(1);

  // Данные для таблиц
  const tableData = {
    1: [
      { id: 1, name: "Документ 1", description: "Описание документа 1" },
      { id: 2, name: "Документ 2", description: "Описание документа 2" },
    ],
    2: [
      { id: 3, name: "Документ 3", description: "Описание документа 3" },
      { id: 4, name: "Документ 4", description: "Описание документа 4" },
    ],
    3: [
      { id: 5, name: "Документ 5", description: "Описание документа 5" },
      { id: 6, name: "Документ 6", description: "Описание документа 6" },
    ],
    // Добавьте данные для других годов
  };

  const handleCatalogClick = (id) => {
    setSelectedCatalogId(id);
  };

  return (
    <div className="Ustav w-full h-full flex justify-start items-center font-rubik px-[120px] py-[60px] gap-[40px] bg-[#3D3E3D]">
      <div className="UstavContainer flex flex-col gap-[32px] w-full">
        <UstavHeader title={"Наблюдательный совет"} />
        <div className="UstavMain">
          <div className="UstavCatalogs flex justify-start items-center gap-[8px] w-full pb-2 overflow-x-auto overflow-y-hidden">
            {catalog.map((item) => (
              <UstavCatalog
                key={item.id}
                item={item}
                handleCatalogClick={handleCatalogClick}
                catalogId={selectedCatalogId}
              />
            ))}
          </div>
          <div className="relative w-full ">
            {/* Таблица */}
            <table className="w-full border-collapse border-spacing-0 overflow-hidden">
              <thead>
                <tr>
                  <th className="border border-[#D2DBE1] p-2 text-left">ID</th>
                  <th className="border border-[#D2DBE1] p-2 text-left">
                    Ф.И.Ш.
                  </th>
                  <th className="border border-[#D2DBE1] p-2 text-left">
                    Позиция
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData[selectedCatalogId]?.length > 0 ? (
                  tableData[selectedCatalogId].map((row) => (
                    <tr key={row.id}>
                      {Object.values(row).map((cell, index) => (
                        <td key={index} className="border border-[#D2DBE1] p-2">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center p-4">
                      Нет данных для выбранного года.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
