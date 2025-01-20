import React from "react";

const AboutComment = ({ imgSrc, title, paragraphs }) => {
  return (
    <div className="flex gap-[32px] w-full h-[344px]">
      <div className="w-[513px] h-[344px] ">
        <img className="w-full h-full object-cover" src={imgSrc} alt="About" />
      </div>
      <div className="flex flex-col gap-[16px] w-[655px]">
        <h1 className="text-[20px] text-[#ABBA27] font-bold">{title}</h1>
        <div className="flex flex-col gap-[16px] text-[16px] text-white leading-[1.2]">
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutComment;
