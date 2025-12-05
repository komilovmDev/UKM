import { Link, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

import logo from "../../images/navLogo.svg";
import vacansiyaIcon from "../../images/homeImg/vakansiyaIcon1.svg";
import zakasIcon from "../../images/homeImg/zakasIcon.svg";

export default function Navbar() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { pathname } = useLocation();

  const buttons = useMemo(
    () => [
      { text: "О нас", url: "/About" },
      { text: "Продукты", url: "/Products" },
      { text: "Тендеры", url: "/Tenders" },
      { text: "Документы", url: "/document" },
      { text: "Новости", url: "/news" },
      { text: "Услуги", url: "/vacancy" },
      { text: "Контакты", url: "/order" },
    ],
    []
  );

  const activeUrl = useMemo(() => {
    // чтобы подсветка работала и на вложенных путях типа /news/123
    const found = buttons.find(
      (b) => pathname === b.url || pathname.startsWith(b.url + "/")
    );
    return found?.url || "";
  }, [pathname, buttons]);

  const toggleLang = () => setIsLangOpen((p) => !p);
  const closeAll = () => {
    setIsLangOpen(false);
    setIsMobileOpen(false);
  };

  return (
    <nav className="w-full font-rubik text-[14px]">
      <div className="flex items-center justify-between h-[80px] px-[16px] sm:px-[24px]">
        {/* Logo */}
        <Link to="/" className="shrink-0" onClick={closeAll}>
          <img src={logo} alt="Logo" className="h-[28px] w-auto" />
        </Link>

        {/* Desktop: menu + actions */}
        <div className="hidden lg:flex items-center gap-[12px]">
          {/* Links */}
          <div className="flex gap-[12px] text-[#000]">
            {buttons.map((button) => (
              <Link key={button.url} to={button.url}>
                <button
                  type="button"
                  className={[
                    "px-[12px] h-[40px]",
                    "border-b-4",
                    activeUrl === button.url
                      ? "border-[#F0CD51]"
                      : "border-transparent",
                    "transition-[border-color] duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0CD51] focus-visible:ring-offset-2",
                  ].join(" ")}
                >
                  {button.text}
                </button>
              </Link>
            ))}
          </div>

          {/* Language */}
          <div className="relative">
            <button
              onClick={toggleLang}
              type="button"
              className={[
                "flex items-center px-[16px] h-[40px]",
                "bg-[#F7F7F7] rounded-[12px] gap-[10px]",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0CD51] focus-visible:ring-offset-2",
              ].join(" ")}
            >
              <p className="text-[#000]">Русский</p>
              <IoChevronDownSharp className="text-[#000]" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-[180px] rounded-[12px] bg-[#F7F7F7] border border-[#000] overflow-hidden z-50">
                <button
                  type="button"
                  className="w-full text-left px-4 py-3 text-[#000] hover:bg-[#F7F7F7]"
                  onClick={() => setIsLangOpen(false)}
                >
                  Русский
                </button>
                <button
                  type="button"
                  className="w-full text-left px-4 py-3 text-[#000] hover:bg-[#F7F7F7]"
                  onClick={() => setIsLangOpen(false)}
                >
                  O‘zbek
                </button>
                <button
                  type="button"
                  className="w-full text-left px-4 py-3 text-[#000] hover:bg-[#F7F7F7]"
                  onClick={() => setIsLangOpen(false)}
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-[12px] text-[#FFFFFF]">
            <Link to="/Vakancy">
              <button
                type="button"
                className={[
                  "flex items-center px-[16px] h-[40px]",
                  "bg-[#F0CD51] rounded-[12px] gap-[10px]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0CD51] focus-visible:ring-offset-2",
                ].join(" ")}
              >
                <p className="text-[#FFFFFF]">Вакансии</p>
                <img src={vacansiyaIcon} alt="" className="h-[18px] w-auto" />
              </button>
            </Link>

            <Link to="/order">
              <button
                type="button"
                className={[
                  "flex items-center px-[16px] h-[40px]",
                  "bg-[#ABBA27] rounded-[12px] gap-[10px]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F0CD51] focus-visible:ring-offset-2",
                ].join(" ")}
              >
                <p className="text-[#FFFFFF]">Заказать</p>
                <img src={zakasIcon} alt="" className="h-[18px] w-auto" />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile: actions + burger */}
        <div className="flex lg:hidden items-center gap-2">
          <Link to="/Vakancy" onClick={closeAll}>
            <button
              type="button"
              className="flex items-center px-[12px] h-[40px] bg-[#F0CD51] rounded-[12px] gap-[8px]"
            >
              <img src={vacansiyaIcon} alt="" className="h-[18px] w-auto" />
            </button>
          </Link>

          <Link to="/order" onClick={closeAll}>
            <button
              type="button"
              className="flex items-center px-[12px] h-[40px] bg-[#ABBA27] rounded-[12px] gap-[8px]"
            >
              <img src={zakasIcon} alt="" className="h-[18px] w-auto" />
            </button>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileOpen((p) => !p)}
            className="h-[40px] w-[44px] bg-[#F7F7F7] rounded-[12px] flex items-center justify-center"
            aria-label="Меню"
          >
            <div className="flex flex-col gap-[4px]">
              <span className="w-[18px] h-[2px] bg-[#000]" />
              <span className="w-[18px] h-[2px] bg-[#000]" />
              <span className="w-[18px] h-[2px] bg-[#000]" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {isMobileOpen && (
        <div className="lg:hidden px-[16px] pb-4">
          <div className="rounded-[16px] bg-[#F7F7F7] border border-[#000] overflow-hidden">
            {/* Links */}
            <div className="flex flex-col">
              {buttons.map((b) => (
                <Link key={b.url} to={b.url} onClick={closeAll}>
                  <div
                    className={[
                      "px-4 py-3 text-[#000] flex items-center justify-between",
                      activeUrl === b.url
                        ? "border-l-4 border-[#F0CD51]"
                        : "border-l-4 border-transparent",
                    ].join(" ")}
                  >
                    <span>{b.text}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Lang */}
            <div className="border-t border-[#000]">
              <button
                type="button"
                onClick={() => setIsLangOpen((p) => !p)}
                className="w-full px-4 py-3 text-[#000] flex items-center justify-between"
              >
                <span>Русский</span>
                <IoChevronDownSharp className="text-[#000]" />
              </button>

              {isLangOpen && (
                <div className="px-2 pb-2">
                  {["Русский", "O‘zbek", "English"].map((l) => (
                    <button
                      key={l}
                      type="button"
                      className="w-full text-left px-3 py-2 rounded-[12px] text-[#000] bg-[#F7F7F7]"
                      onClick={() => setIsLangOpen(false)}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
