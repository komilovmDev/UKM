import React from "react";
import "../ustav.css";

export default function UstavCatalog({ item, handleCatalogClick, catalogId }) {
  const isSelected = item.id === catalogId;

  return (
    <button
      className={`w-auto flex flex-row gap-[8px] items-center bg-[#505150] rounded-[30px] text-white pr-[24px] pl-[8px] py-[8px] ${
        isSelected ? "bg-[#F0CD51]" : "bg-[#505150]"
      }`}
      onClick={() => handleCatalogClick(item.id)}
    >
      <span
        className={`rounded-full min-w-[52px] h-[52px] bg-[#3D3E3D] flex justify-center items-center text-[16px] font-rubik font-bold${
          isSelected
            ? "bg-[#3D3E3D] text-[#F0CD51]"
            : "bg-[#3D3E3D] text-[#FFFFFF]"
        }`}
      >
        {item.id}
      </span>
      <p
        className={`min-w-[37px] max-w-[251px] text-start text-[16px] font-rubik ${
          isSelected ? "text-[#505150]" : "text-[#FFFFFF]"
        }`}
      >
        {" "}
        {item.info}
      </p>
    </button>
  );
}
