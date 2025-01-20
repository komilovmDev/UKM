import React, { useState } from "react";
import UstavDocsImage from "../../images/ustav/ustav.png";
import "./ustav.css";
import UstavHeader from "./components/UstavHeader";

export default function Ustav() {
  const [ustav, setUstav] = useState([
    {
      id: 1,
      image: UstavDocsImage,
    },
    {
      id: 2,
      image: UstavDocsImage,
    },
    {
      id: 3,
      image: UstavDocsImage,
    },
    {
      id: 4,
      image: UstavDocsImage,
    },
    {
      id: 5,
      image: UstavDocsImage,
    },
  ]);

  return (
    <div className="Ustav w-full h-full flex justify-start items-center font-rubik px-[120px] py-[60px] gap-[40px] bg-[#3D3E3D]">
      <div className="UstavContainer flex flex-col gap-[32px] w-full">
        <UstavHeader title={"Устав"} />
        <div className="UstavMain">
          {/* Scrollbar container */}
          <div className="UstavDocsContainer relative w-full">
            <div
              className="UstavDocs flex justify-start items-center gap-[40px] w-full overflow-x-scroll overflow-y-hidden scrollbar-top"
              style={{ transform: "rotateX(180deg)", direction: "ltr" }}
            >
              {ustav.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt=""
                  className="w-[493px] h-auto"
                  style={{ transform: "rotateX(180deg)" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
