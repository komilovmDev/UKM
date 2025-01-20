import UstavHeader from '../Ustav/components/UstavHeader';
import UstavDocsImage from "../../images/ustav/infoUstav.png";

export default function Struktura() {
    return (
      <div className="Ustav w-full h-full flex justify-start items-center font-rubik px-[120px] py-[60px] gap-[40px] bg-[#3D3E3D]">
        <div className="UstavContainer flex flex-col gap-[32px] w-full">
          <UstavHeader title={"Структура"}/>
          <div className="UstavMain">
            <div className="UstavDocsContainer relative w-full">
              <div
                className="UstavDocs flex justify-start items-center gap-[40px] w-full overflow-x-auto overflow-y-hidden scrollbar-top"
                style={{ transform: "rotateX(180deg)", direction: "ltr" }}
              >
                  <img
                    src={UstavDocsImage}
                    alt=""
                    className="w-full h-auto"
                    style={{ transform: "rotateX(180deg)" }}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  