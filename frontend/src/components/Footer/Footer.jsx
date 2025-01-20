import React, { useEffect, useRef } from "react";
import Logo from "./img/Logo.png";
import FooterBg from "./img/Group.png";
import { RiTelegram2Fill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import Comment from "./img/Announcement.png";

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
  const isScriptAdded = useRef(false); // Флаг, чтобы избежать повторного добавления скрипта

  useEffect(() => {
    if (!isScriptAdded.current) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.charset = "utf-8";
      script.src =
        "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac3ecc95ecf1c989239c78db4d5db6d52a3ce47c94cb31646065547c53d79e950&amp;width=600&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
      mapRef.current.appendChild(script);
      isScriptAdded.current = true; // Устанавливаем флаг после добавления скрипта
    }
  }, []);

  return (
    <div>
      <div className="bg-[#2D2D2D] px-[66.36px] pt-[88px]">
        <footer
          className="flex flex-col gap-[32px] px-[53.64px] relative"
          style={{
            backgroundImage: `url(${FooterBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="h-[80px] flex justify-between items-center relative top-[-32px]">
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className="flex items-center gap-[16px]">
              {buttons.map((button) => (
                <button
                  className="bg-white bg-opacity-15 w-[56.25px] h-[56.25px] flex justify-center items-center text-white text-[30px] rounded-2xl"
                  key={button.id}
                >
                  {button.icon}
                </button>
              ))}
              <button className="h-[56.25px] px-[24px] bg-[#F0CD51] text-[#3A3C3A] text-[16px] font-rubik font-medium rounded-2xl">
                Скачать презентацию
              </button>
            </div>
          </div>
          <div className="flex justify-between pb-[44px]">
            <div className="flex flex-col gap-[32px] justify-start">
              {infoSections.map((section) => (
                <div className="flex flex-col gap-[16px]" key={section.id}>
                  <p className="text-[16px] text-white font-rubik h-[16px]">
                    {section.text}
                  </p>
                  <h1 className="text-[20px] font-rubik font-bold text-[#ABBA27] h-[20px]">
                    {section.heading}
                  </h1>
                </div>
              ))}
            </div>
            <div
              className="w-[797px] h-[440px] rounded-2xl overflow-hidden"
              ref={mapRef}
            ></div>
          </div>
        </footer>
      </div>
      <div className=" flex flex-col justify-center w-full bg-black h-[88px] px-[120px] py-[20px] text-start">
        <div>
          <p className=" text-[12px] font-rubik text-[#fff]">
            © Все права защищены АО “УргенчКорммаш”.
          </p>
        </div>
        <div className="flex items-center flex gap-[18px]">
          <span>
            <img src={Comment} alt="" />
          </span>
          <p className="text-white text-[12px]">
            ПРИ ИСПОЛЬЗОВАНИИ МАТЕРИАЛОВ ЭТОГО САЙТА, ​​ПОЛНОСТЬЮ ИЛИ ЧАСТИ,
            САЙТ ДОЛЖЕН БЫТЬ УКАЗАН В ССЫЛКЕ ИЛИ ПРИЗНАН В качестве ИСТОЧНИКА.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
