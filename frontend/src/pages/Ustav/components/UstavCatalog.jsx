import React from "react";
import "../ustav.css";

export default function UstavCatalog({ item, handleCatalogClick, catalogId }) {
  const isSelected = item.id === catalogId;

  return (
    <div
      className={`min-w-[242px] min-h-[68px] pl-2 py-2 pr-6  gap-2 rounded-[80px] flex justify-between items-center cursor-pointer ${
        isSelected ? "bg-[#F0CD51]" : "bg-[#505150]"
      }`}
      onClick={() => handleCatalogClick(item.id)}
    >
      <span
        className={`w-[52px] h-[52px] rounded-full text-[16px] font-bold flex justify-center items-center ${
          isSelected ? "bg-[#3D3E3D] text-[#F0CD51]" : "bg-[#3D3E3D] text-[#FFFFFF]"
        }`}
      >
        {item.id}
      </span>
      <p
        className={`text-[16px] font-normal leading-[18.96px] ${
          isSelected ? "text-[#505150]" : "text-[#FFFFFF]"
        }`}
      >
        {item.info}
      </p>
    </div>
  );
}
