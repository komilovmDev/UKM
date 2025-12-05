import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../home/components/Button_ukm/Button";

const ProductComponent = ({ id, name, desc, img }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/product/${id}`);
  };

  const truncatedDesc = useMemo(() => {
    if (!desc) return "";
    return desc.length > 512 ? desc.substring(0, 512) + "..." : desc;
  }, [desc]);

  const imgObjectFit = id % 3 ? "cover" : "contain";
  const imgBoxPadding = id % 3 ? "p-[32px]" : "p-0";

  return (
    <article
      className={[
        "relative w-full",
        // desktop height как у тебя, на мобилке делаем авто
        "min-h-[420px] sm:min-h-[380px] lg:h-[371.5px]",
        "rounded-[16px] bg-[#4E504E]",
        // padding как у тебя, на мобилке чуть меньше
        "p-[16px] sm:p-[24px] lg:p-[32px]",
        // layout
        "flex flex-col lg:flex-row",
        "gap-[18px] sm:gap-[24px] lg:gap-[55px]",
        "overflow-hidden",
      ].join(" ")}
    >
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-between gap-[18px] lg:gap-[24px] w-full">
        <div className="flex flex-col gap-[12px] lg:gap-[16px]">
          <h1 className="font-rubik text-[22px] sm:text-[26px] lg:text-[32px] text-[#FFFFFF] leading-tight">
            {name}
          </h1>

          {/* desc block (в CSS было: w 558 / border-left) */}
          <div className="flex justify-center items-start w-full lg:w-[558px] h-auto lg:px-[24px] lg:border-l lg:border-[#FFFFFF]">
            <p className="w-full lg:w-[518px] h-auto text-[14px] sm:text-[15px] lg:text-[16px] text-[#FFFFFF] opacity-50 leading-[1.2]">
              {truncatedDesc}
            </p>
          </div>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[16px]">
          <Link to={`/product/${id}`} className="shrink-0">
            <Button />
          </Link>

          <button
            type="button"
            onClick={handleDetailsClick}
            className={[
              "bg-[#ABBA27] rounded-[8px] font-semibold text-[#FFFFFF]",
              "px-[16px] py-[8px]",
              "flex justify-center items-center",
              "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ABBA27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#4E504E]",
            ].join(" ")}
          >
            Заказать
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className={[
          // на мобилке картинка снизу обычным блоком
          "relative lg:absolute",
          "w-full lg:w-[499px]",
          "h-[220px] sm:h-[260px] lg:h-[299px]",
          "lg:right-0 lg:top-1/2 lg:-translate-y-1/2",
          "overflow-hidden",
          imgBoxPadding,
        ].join(" ")}
      >
        <img
          src={img}
          alt={name || "Product image"}
          className="w-full h-full"
          style={{ objectFit: imgObjectFit }}
          draggable={false}
        />
      </div>
    </article>
  );
};

export default ProductComponent;
