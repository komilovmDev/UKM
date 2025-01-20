import React from "react";

const ProductInTheWorld = ({
  title,
  description,
  imgSrc,
  altText,
  extraTitle,
  extraDescriptions,
  extraSecondDescriptions,
}) => {
  return (
    <div className="flex flex-col gap-[32px]">
      {/* Первая секция */}
      <div className="flex flex-col gap-[50px] justify-center ">
        <div className="flex flex-col gap-[24px] text-center w-full items-center">
          <h1 className="text-white font-rubik text-[48px] h-[48px]">{title}</h1>
          <p className="font-rubik text-[16px] text-white w-[70%] leading-[1.2]">{description}</p>
        </div>
        <div>
          <img src={imgSrc} alt={altText} />
        </div>
      </div>

      {/* Вторая секция */}
      <div className="flex flex-col gap-[16px] pb-[112px]">
        <h1 className="font-rubik font-bold text-[20px] text-[#ABBA27] h-[20px]">{extraTitle}</h1>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col">
            {extraDescriptions.map((text, index) => (
              <p className="font-rubik text-[16px] text-white" key={index}>{text}</p>
            ))}
          </div>
          <div>
            {extraSecondDescriptions.map((text, index) => (
              <p className="font-rubik text-[16px] text-white" key={index}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInTheWorld;
