import React from "react";
import bgbutton from "./../../../../images/Group.png";

const Button = () => {
  return (
    <div>
      <button
        className="bg-white bg-opacity-10 rounded-[8px] font-semibold text-[#ABBA27] px-[26px] py-[8px] border border-[#ABBA27] flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgbutton})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        Подробнее
      </button>
    </div>
  );
};

export default Button;
