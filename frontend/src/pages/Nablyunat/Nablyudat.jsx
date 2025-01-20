import React, { useState } from "react";
import UstavHeader from "../Ustav/components/UstavHeader";
import UstavCatalog from "../Ustav/components/UstavCatalog";
import Table from "./components/Table/Table";
import Table_Two from "./components/Table/Table_Two";

export default function Nablyudat() {
  const [catalog, setCatalog] = useState([
    {
      id: 1,
      info: `Состав исполнительного органа АО "Урганчкорммаш".`,
    },
    {
      id: 2,
      info: `Состав Наблюдательного совета АО "Урганчкорммаш"`,
    },
  ]);

  const [selectedCatalogId, setSelectedCatalogId] = useState(1);

  // Функция, которая обновляет selectedCatalogId
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

          <div className="mt-[20px]">
            {selectedCatalogId === 1 && (
              <div>
                <Table />
              </div>
            )}

            {selectedCatalogId === 2 && (
              <div>
                <Table_Two />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
