import React, { useState } from "react";
import UstavHeader from "../Ustav/components/UstavHeader";
import UstavDocsImage from "../../images/ustav/biznes.png";
import UstavDocsImage2 from "../../images/ustav/ustav.png";
import UstavDocsImage3 from "../../images/ustav/Aksiya.png";
import UstavCatalog from "../Ustav/components/UstavCatalog";
export default function Aksiya() {
  const [biznes, setBiznes] = useState([
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

  const [ustav, setUstav] = useState([
    {
      id: 1,
      image: UstavDocsImage2,
    },
    {
      id: 2,
      image: UstavDocsImage2,
    },
    {
      id: 3,
      image: UstavDocsImage2,
    },
    {
      id: 4,
      image: UstavDocsImage2,
    },
    {
      id: 5,
      image: UstavDocsImage2,
    },
  ]);
  const [fakti, setFakti] = useState([
    {
      id: 1,
      image: UstavDocsImage3,
    },
    {
      id: 2,
      image: UstavDocsImage3,
    },
    {
      id: 3,
      image: UstavDocsImage3,
    },
    {
      id: 4,
      image: UstavDocsImage3,
    },
    {
      id: 5,
      image: UstavDocsImage3,
    },
  ]);
  const [catalog, setCatalog] = useState([
    {
      id: 1,
      info: `Протокол - 30.06.2021 г.`,
    },
    {
      id: 2,
      info: `Протокол - 30.06.2022 г.`,
    },
    {
      id: 3,
      info: `Протокол - 11.08.2023 г.`,
    },

  ]);
  const [currentDocs, setCurrentDocs] = useState(biznes);
  const [selectedCatalogId, setSelectedCatalogId] = useState(1);

  const handleCatalogClick = (id) => {
    setSelectedCatalogId(id);
    if (id === 1) {
      setCurrentDocs(fakti);
    } else if (id === 2) {
      setCurrentDocs(ustav);
    } else if (id === 3) {
      setCurrentDocs(biznes);
    }
  };

  return (
    <div className="Ustav w-full h-full flex justify-start items-center font-rubik px-[120px] py-[60px] gap-[40px] bg-[#3D3E3D]">
      <div className="UstavContainer flex flex-col gap-[32px] w-full">
        <UstavHeader title={"Протоколы акционеров"} />
        <div className="UstavMain">
          <div className="UstavCatalogs flex justify-start items-center gap-[8px] w-full pb-2 overflow-x-auto overflow-y-hidden ">
            {catalog.map((item) => (
              <UstavCatalog
                key={item.id}
                item={item}
                handleCatalogClick={handleCatalogClick}
                catalogId={selectedCatalogId}
              />
            ))}
          </div>
          <div className="UstavDocsContainer relative w-full">
            <div
              className="UstavDocs flex justify-start items-center gap-[40px] w-full overflow-x-scroll overflow-y-hidden scrollbar-top"
              style={{ transform: "rotateX(180deg)", direction: "ltr" }}
            >
              {currentDocs.map((item) => (
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
