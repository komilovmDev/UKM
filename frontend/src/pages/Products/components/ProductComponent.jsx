import React, { useRef, useEffect, useState } from "react";
import "./ProductComponent.css";

const ProductComponent = ({
  name,
  desc,
  img,
  onDetailsClick,
  onOrderClick,
}) => {
  const TruncatedText = ({ desc }) => {
    const textRef = useRef(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
      if (textRef.current.scrollHeight > 166) {
        setIsTruncated(true);
      }
    }, []);

    return (
      <div className="flex justify-center items-start w-[558px] h-[166px] px-[24px] border-l border-white overflow-hidden">
        <p
          ref={textRef}
          className={`product-description w-[518px] h-[160px] text-[16px] text-[#ffffff] text-opacity-50 leading-[1.2] ${
            isTruncated ? "line-clamp-[10] overflow-hidden text-ellipsis" : ""
          }`}
        >
          {desc}
        </p>
      </div>
    );
  };

  return (
    <article className="flex w-full h-[371.5px] gap-[55px] bg-white bg-opacity-10 rounded-[16px] p-[32px]">
      <div className="flex flex-col gap-[24px]">
        <h1 className="font-rubik text-[32px] text-white h-[32px]">{name}</h1> 
        <TruncatedText desc={desc} />
        <div className="product-buttons flex gap-[16px] mt-[24px]">
          <button
            className="product-button bg-white bg-opacity-10 rounded-[8px] text-white px-[16px] py-[8px] hover:bg-opacity-20 transition"
            onClick={onDetailsClick}
          >
            Подробнее
          </button>
          <button
            className="product-button bg-blue-500 rounded-[8px] text-white px-[16px] py-[8px] hover:bg-blue-600 transition"
            onClick={onOrderClick}
          >
            Заказать
          </button>
        </div>
      </div>
      <div className="product-image-container flex justify-center items-center">
        <img
          src={img}
          alt={name || "Product image"}
          className="product-image w-[150px] h-[150px] object-cover rounded-[8px]"
        />
      </div>
    </article>
  );
};

export default ProductComponent;
