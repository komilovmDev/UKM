import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductComponent.css";
import bgbutton from "./../../../images/Group.png";

const ProductComponent = ({ id, name, desc, img }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/product/${id}`);
  };

  const TruncatedText = ({ desc }) => {
    const truncatedDesc = desc.length > 512 ? desc.substring(0, 512) + "..." : desc;
    return (
      <div className="flex justify-center items-start w-[558px] h-auto px-[24px] border-l border-white">
        <p className="product-description w-[518px] h-auto text-[16px] text-[#ffffff] text-opacity-50 leading-[1.2]">
          {truncatedDesc}
        </p>
      </div>
    );
  };

  const articleStyle = {
    padding: id % 3 ? "32px" : "0",
  };

  const imgStyle = {
    objectFit: id % 3 ? "cover" : "contain",
  };

  return (
    <article className="flex w-full h-[371.5px] gap-[55px] rounded-[16px] p-[32px] relative bg-white bg-opacity-10" >
      <div className="flex flex-col gap-[24px] justify-between">
        <div className="flex flex-col gap-[16px]">
          <h1 className="font-rubik text-[32px] text-white">{name}</h1>
          <TruncatedText desc={desc} />
        </div>
        <div className="flex gap-[16px] ">
          <button
            className="bg-white bg-opacity-10 rounded-[8px] font-semibold text-[#ABBA27] px-[16px] py-[8px] border border-[#ABBA27] flex justify-center items-center"
            style={{
              backgroundImage: `url(${bgbutton})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            onClick={handleDetailsClick}
          >
            Подробнее
          </button>
          <button className=" bg-[#ABBA27] rounded-[8px] font-semibold text-white px-[16px] py-[8px] flex justify-center items-center transition" >
            Заказать
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center min-w-[499px] min-h-[299px] max-w-[499px] max-h-[299px] overflow-hidden absolute right-0 top-[50%] transform -translate-y-1/2
" style={articleStyle}>
        <img src={img} alt={name || "Product image"} className="w-full h-full object-cover" style={imgStyle} />
      </div>
    </article>
  );
};

export default ProductComponent;
