import "./nav.css";
import logo from "../../images/navLogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

export default function Navbar() {
  const [isopen, setIsOpen] = useState("Русский");

  const ToggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const buttons = [
    { text: "О нас", url: "/" },
    { text: "Продукты", url: "/about" },
    { text: "Тренды", url: "/services" },
    { text: "Новости", url: "/contact" },
    { text: "Услуги", url: "/vacancy" },
    { text: "Контакты", url: "/order" }, 
  ];

  return (
    <nav className="flex items-center w-full h-[80px] justify-between px-[24px] font-rubik text-[14px]">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex items-center gap-[12px]">
        <div className="flex gap-[12px] text-black">
          {buttons.map((button, index) => (
            <Link key={index} to={button.url}>
              <button className="px-[12px] h-[40px]">{button.text}</button>
            </Link>
          ))}
        </div>
        <div>
          <button onClick={ToggleOpen} className="flex items-center px-[16px] h-[40px] bg-[#F7F7F7] rounded-[12px] gap-[10px]"><p>Русский</p><span><IoChevronDownSharp /></span></button>
          {isopen && (
            <div>

            </div>
          )}
        </div>
        <div className="flex gap-[12px] text-white">
          <button className="flex items-center px-[16px] h-[40px] bg-[#F0CD51] rounded-[12px] gap-[10px]"><p>Вакансии</p><span></span></button>
          <button className="flex items-center px-[16px] h-[40px] bg-[#ABBA27] rounded-[12px] gap-[10px]"><p>Заказать</p><span></span> </button>
        </div>
      </div>
    </nav>
  );
}
