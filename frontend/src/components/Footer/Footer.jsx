import React, { useEffect, useRef } from "react";
import Logo from "./img/Logo.png";
import FooterBg from "./img/Group.png";
import { RiTelegram2Fill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import Comment from "./img/Announcement.png";

const YA_MAP_SRC =
  "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac3ecc95ecf1c989239c78db4d5db6d52a3ce47c94cb31646065547c53d79e950&amp;width=600&amp;height=400&amp;lang=ru_RU&amp;scroll=true";

const Footer = () => {
  const buttons = [
    { id: 1, icon: <RiTelegram2Fill /> },
    { id: 2, icon: <AiFillInstagram /> },
  ];

  const infoSections = [
    { id: 1, text: "Почта:", heading: "oao_ukm_uz@mail.ru" },
    { id: 2, text: "Контакты:", heading: "+998 (90) 433-00-10" },
  ];

  const mapRef = useRef(null);
  const isScriptAdded = useRef(false);

  useEffect(() => {
    if (isScriptAdded.current) return;
    if (!mapRef.current) return;

    const already = mapRef.current.querySelector('script[data-yamap="1"]');
    if (already) {
      isScriptAdded.current = true;
      return;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.charset = "utf-8";
    script.src = YA_MAP_SRC;
    script.setAttribute("data-yamap", "1");
    mapRef.current.appendChild(script);

    isScriptAdded.current = true;
  }, []);

  return (
    <footer className="w-full">
      {/* TOP */}
      <div className="bg-[#2D2D2D] px-4 sm:px-6 lg:px-[66.36px] pt-[64px] sm:pt-[76px] lg:pt-[88px]">
        <div
          className="relative flex flex-col gap-[24px] sm:gap-[28px] lg:gap-[32px] px-4 sm:px-6 lg:px-[53.64px]"
          style={{
            backgroundImage: `url(${FooterBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* HEADER ROW */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 relative top-[-24px] sm:top-[-28px] lg:top-[-32px]">
            <img src={Logo} alt="Logo" className="h-auto w-auto" />

            <div className="flex flex-wrap items-center gap-[12px] sm:gap-[16px]">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  type="button"
                  className={[
                    "bg-[#FFFFFF] bg-opacity-15",
                    "w-[56.25px] h-[56.25px]",
                    "flex justify-center items-center",
                    "text-[#FFFFFF] text-[30px]",
                    "rounded-2xl",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0CD51] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D2D2D]",
                  ].join(" ")}
                >
                  {button.icon}
                </button>
              ))}

              <button
                type="button"
                className={[
                  "h-[56.25px] px-[18px] sm:px-[24px]",
                  "bg-[#F0CD51]",
                  "text-[#3A3C3A] text-[14px] sm:text-[16px]",
                  "font-rubik font-medium",
                  "rounded-2xl",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0CD51] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2D2D2D]",
                ].join(" ")}
              >
                Скачать презентацию
              </button>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 pb-[28px] sm:pb-[36px] lg:pb-[44px]">
            {/* INFO */}
            <div className="flex flex-col gap-[24px] sm:gap-[28px] lg:gap-[32px]">
              {infoSections.map((section) => (
                <div
                  className="flex flex-col gap-[10px] sm:gap-[12px] lg:gap-[16px]"
                  key={section.id}
                >
                  <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#FFFFFF] font-rubik">
                    {section.text}
                  </p>
                  <h2 className="text-[18px] sm:text-[19px] lg:text-[20px] font-rubik font-bold text-[#ABBA27]">
                    {section.heading}
                  </h2>
                </div>
              ))}
            </div>

            {/* MAP */}
            <div
              ref={mapRef}
              className={[
                "w-full",
                "h-[320px] sm:h-[380px] lg:h-[440px]",
                "rounded-2xl overflow-hidden",
                "lg:w-[797px]",
              ].join(" ")}
            />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full bg-[#000000] px-4 sm:px-6 lg:px-[120px] py-[20px]">
        <p className="text-[12px] font-rubik text-[#FFFFFF]">
          © Все права защищены АО “УргенчКорммаш”.
        </p>

        <div className="mt-3 flex items-start gap-[18px]">
          {/* ЖЕЛЕЗОБЕТОН: фикс 24x24 + внутри авто, перебивает global img {width:100%;height:100%} */}
          <span className="shrink-0 w-[24px] h-[24px] flex items-center justify-center">
            <img
              src={Comment}
              alt=""
              draggable={false}
              className="!w-auto !h-auto max-w-full max-h-full object-contain"
            />
          </span>

          <p className="text-[#FFFFFF] text-[12px] leading-[1.5]">
            ПРИ ИСПОЛЬЗОВАНИИ МАТЕРИАЛОВ ЭТОГО САЙТА, ​​ПОЛНОСТЬЮ ИЛИ ЧАСТИ,
            САЙТ ДОЛЖЕН БЫТЬ УКАЗАН В ССЫЛКЕ ИЛИ ПРИЗНАН В качестве ИСТОЧНИКА.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
