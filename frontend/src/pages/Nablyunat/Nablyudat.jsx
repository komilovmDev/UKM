import React, { useState } from "react";
import UstavHeader from "../Ustav/components/UstavHeader";
import UstavCatalog from "../Ustav/components/UstavCatalog"; 

export default function Nablyudat() {
  const [catalog, setCatalog] = useState([
    { id: 1, info: "2017" },
    { id: 2, info: "2018" },
    { id: 3, info: "2019" },
    { id: 4, info: "2020" },
    { id: 5, info: "2021" },
    { id: 6, info: "2022" },
    { id: 7, info: "2023" },
    { id: 8, info: "2024" },
    { id: 9, info: "2025" },
  ]);

  const [selectedCatalogId, setSelectedCatalogId] = useState(1);

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
          <div className="relative w-full р border border-[#D2DBE1] overflow-hidden rounded-2xl">
            {/* Таблица */} 
          </div>
        </div>
      </div>
    </div>
  );
}
