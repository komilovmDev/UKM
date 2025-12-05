import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import headerInfoImg from "../../images/homeImg/headerInfoImg.png";
import homeHeaderBg from "../../images/homeImg/homeHeaderBg.svg";
import logoMini from "../../images/homeImg/logoMini.png";

import laser from "../../images/productImg/Lazer.png";
import plug from "../../images/productImg/plug.png";
import bma from "../../images/productImg/Bma.png";
import ku from "../../images/productImg/ku.png";

import bgbutton from "../../images/Group.png";
import union from "../../images/Union.png";
import masterImg from "../../images/master.svg";

import ProductComponent from "../Products/components/ProductComponent";
import VideoCompanent from "../../components/videoCompanent/VideoCompanent";
import Rukavodstva from "../../components/rukavodstva/Rukavodstva";
import NewsCom from "../../components/newsCompanent/NewsCom";
import EventsCom from "../../components/eventsCompanent/EventsCom";
import AboutUs from "./components/AboutUs/AboutUs";
import Button from "./components/Button_ukm/Button";
import DocumentCom from "../../components/documentCom/DocumentCom";
import PartnersCom from "../../components/partnersCom/PartnersCom";

const Container = ({ className = "", children }) => (
  <div
    className={[
      "w-full max-w-[1200px] mx-auto",
      "px-4 sm:px-6 lg:px-0",
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

const GradientBorderCard = ({ gradientClass, children }) => (
  <div className={["p-[1px] rounded-[10px]", gradientClass].join(" ")}>
    <div className="h-[230px] rounded-[10px] bg-[#4c4f4d] flex flex-col items-center justify-center text-center px-[24px] sm:px-[30px] gap-[10px]">
      {children}
    </div>
  </div>
);

export default function Home() {
  const productsData = [
    {
      id: 1,
      name: "Лазерный планировщик",
      desc: "Лазерные планировщики почвы LTM применяются в сельском хозяйстве для создания ровной поверхности, которая может быть горизонтальной (рисовое поле), либо с одним или двумя наклонами в зависимости от возделываемой культуры (например, при возделывании культур, не требующих большого количества воды, когда необходимо обеспечить отвод излишней влаги), для закладки садов, подготовки участков под теплицы, в промышленности, при строительстве дорог, спортивных сооружений, производственных корпусов, площадей, аэропортов.",
      img: laser,
    },
    {
      id: 2,
      name: "Плуг оборотный навесной ПОН 4+1x40",
      desc: "Плуг оборотный навесной – пятикорпусный ПОН-4+1х40 предназначено для пахоты под зерновые и технические культуры на глубину 30…45 cm. Плуги используются на полях с ровным рельефом, где почва не засоренная камнями, с абсолютной влажностью 15..20 %, удельным сопротивлением не более 5.0 МPa, твердостью 5,0 МPa. Плуг оборотный навесной ПОН-4+1 агрегатируется тракторами с мощностью двигателя от 200 до 260 л.с. такие как «CASE-MAGNUM», МХМ-240, МХМ-255, «New Holland» Т-7060 PUMA",
      img: plug,
    },
    {
      id: 3,
      name: "Бороздоделатель БМА-9",
      desc: `Бороздоделатель модернизированный агрегатный девятирядный БМА-9 предназначено для вырезания борозд по вспаханной и выровненной поле междурядьем 90 см.
Бороздоделатель БМА-9 агрегатируется с четырехколесным тракторами с мощностью двигателя от 135 до 170 л.с и выше такие как «New Holland» Т-6070, «CASE» МХМ-140, «CLAAS ARION 630C» и МТЗ 1523.`,
      img: bma,
    },
    {
      id: 4,
      name: "УНИВЕРСАЛЬНЫЙ ЧЕТЫРЕХРЯДНЫЙ КУ-4М",
      desc: `Культиватор - растениепитатель универсальный четырехрядный КУ-4М, предназначенный для выполнения в период вегетации основных видов междурядной обработки хлопчатника, кенафа, кукурузы и других высокостебельчатых пропашных культур с междурядьями 60,70 и 90 см, посеянных четырехрядными сеялками.
Культиватор агрегатируется с тракторами МТЗ-80Х, ТТЗ-100КП, ТТЗ-60.11, Т28Х4М, Т28Х4М-А.`,
      img: ku,
    },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={[
          "w-full min-h-screen",
          "bg-no-repeat bg-bottom",
          // responsive background scale
          "bg-[length:170%] sm:bg-[length:140%] md:bg-[length:120%] lg:bg-[length:100%]",
          "pt-6 lg:pt-0",
        ].join(" ")}
        style={{ backgroundImage: `url(${homeHeaderBg})` }}
      >
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-start gap-10">
            {/* titles */}
            <div className="w-full lg:w-[80%] flex flex-col gap-6 lg:gap-[44px] mt-0 lg:mt-[30px]">
              <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.08] text-black">
                Надежная агротехника для развития вашего бизнеса
              </h2>
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-black w-full lg:w-[80%] leading-[1.65]">
                Современные решения для аграрного бизнеса, которые помогают вам идти в ногу
                с инновациями и получать максимальную эффективность.
              </p>
            </div>

            {/* side card */}
            <div className="relative w-full max-w-[340px] lg:max-w-none lg:w-[298px] h-[298px] lg:mt-[30px] flex flex-col">
              <div className="flex flex-col p-[20px] gap-[5px] border border-black bg-white/75 backdrop-blur-[2px]">
                <b className="text-[16px]">Плуг оборотный навесной ПОН 4+1x40</b>
                <p className="text-[14px]">
                  Предназначено для пахоты под зерновые и технические культуры на глубину
                  30…45 cm.
                </p>
              </div>

              <img
                src={headerInfoImg}
                alt=""
                className="border border-black"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 29% 100%, 0 58%)",
                }}
              />

              {/* линия */}
              <div className="absolute bottom-0 z-[2] w-[100px] h-px bg-black rotate-[129deg] translate-y-[25px] translate-x-[30px]" />
              {/* glow */}
              <div className="absolute bottom-0 z-[2] w-px h-px bg-transparent rotate-[129deg] translate-y-[-6px] translate-x-[65px] shadow-[0_0_50px_50px_white]" />
            </div>
          </div>
        </Container>
      </header>

      {/* ================= ЦЕННОСТИ ================= */}
      <section className="w-full bg-[#3A3C3A]">
        <Container className="py-[60px] lg:py-0 lg:pb-[120px]">
          <p className="text-[28px] sm:text-[32px] lg:text-[36px] text-[#ABBA27] font-semibold text-center">
            Ценности компании
          </p>

          <div className="relative mt-8 lg:mt-[40px]">
            {/* Центр-лого на десктопе, на мобилке скрываем чтобы не мешал */}
            <div className="hidden lg:flex absolute left-[49%] top-[52%] -translate-x-1/2 -translate-y-1/2 z-[2] items-center justify-center">
              <div className="absolute w-[150px] h-[150px] rounded-full border-[15px] border-[rgba(255,255,255,0.138)] -translate-y-[15px]" />
              <img src={logoMini} alt="" />
            </div>

            {/* На мобилке — сетка 1 колонка, на lg — как было 2 колонки calc */}
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-[20px]">
              <div className="w-full lg:w-[calc(50%-20px)]">
                <GradientBorderCard gradientClass="bg-gradient-to-br from-[#3A3C3A] via-[#3A3C3A] to-[#ABBA27]">
                  <h5 className="text-[20px] lg:text-[24px] text-[#ABBA27]">
                    Готовность к переменам
                  </h5>
                  <p className="w-[90%] sm:w-[85%] text-[14px] lg:text-[16px] text-white leading-[22px]">
                    Совершенствовать производство, внедрять самые современные технологии,
                    повышать профессиональный уровень сотрудников.
                  </p>
                </GradientBorderCard>
              </div>

              <div className="w-full lg:w-[calc(50%-20px)]">
                <GradientBorderCard gradientClass="bg-gradient-to-br from-[#3A3C3A] via-[#3A3C3A] to-[#ABBA27]">
                  <h5 className="text-[20px] lg:text-[24px] text-[#ABBA27]">
                    Вовлеченность
                  </h5>
                  <p className="w-[90%] sm:w-[85%] text-[14px] lg:text-[16px] text-white leading-[22px]">
                    UKM стремится к тому, чтобы все сотрудники испытывали гордость и
                    удовлетворение от достигаемых нами результатов.
                  </p>
                </GradientBorderCard>
              </div>

              <div className="w-full lg:w-[calc(50%-20px)]">
                <GradientBorderCard gradientClass="bg-gradient-to-bl from-[#3A3C3A] via-[#3A3C3A] to-[#ABBA27]">
                  <h5 className="text-[20px] lg:text-[24px] text-[#ABBA27]">
                    Клиентоориентированность
                  </h5>
                  <p className="w-[90%] sm:w-[85%] text-[14px] lg:text-[16px] text-white leading-[22px]">
                    Умение слушать и понимать запросы наших клиентов является ключевым
                    фактором в разработке инновационных решений.
                  </p>
                </GradientBorderCard>
              </div>

              <div className="w-full lg:w-[calc(50%-20px)]">
                <GradientBorderCard gradientClass="bg-gradient-to-tr from-[#3A3C3A] via-[#3A3C3A] to-[#ABBA27]">
                  <h5 className="text-[20px] lg:text-[24px] text-[#ABBA27]">
                    Преданность, открытость и честность
                  </h5>
                  <p className="w-[90%] sm:w-[85%] text-[14px] lg:text-[16px] text-white leading-[22px]">
                    Мы привержены своим ценностям и преданы нашим клиентам. Мы работаем
                    честно и открыто как друг с другом, так и с нашими клиентами и партнерами.
                  </p>
                </GradientBorderCard>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ================= UNION BACKGROUND BLOCK ================= */}
      <section className="relative bg-[#3A3C3A] rounded-bl-full rounded-br-full overflow-hidden">
        {/* pseudo ::before */}
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-center bg-[length:95%] [background-position-y:95%]"
          style={{ backgroundImage: `url(${union})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />

        <div className="relative z-[1]">
          {/* PRODUCTS */}
          <Container className="py-[60px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h1 className="text-[22px] sm:text-[28px] lg:text-[36px] text-[#ABBA27]">
                Почвообрабатывающая техника
              </h1>
              <Button />
            </div>

            <div className="mt-[32px] flex flex-col gap-[32px]">
              {productsData.map((product) => (
                <div className="relative flex items-center" key={product.id}>
                  <ProductComponent
                    id={product.id}
                    name={product.name}
                    desc={product.desc}
                    img={product.img}
                  />

                  {/* На мобилке абсолютная кнопка мешает — делаем по-другому */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 lg:right-[-40px]">
                    <Link to={`/product/${product.id}`}>
                      <button
                        className={[
                          "bg-white w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[70px] lg:h-[70px]",
                          "flex items-center justify-center rounded-full",
                          "border-[8px] sm:border-[10px] border-[#3A3C3A]",
                          "text-[#ABBA27]",
                          "transition-transform duration-200 hover:scale-105 active:scale-95",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ABBA27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3A3C3A]",
                        ].join(" ")}
                        type="button"
                      >
                        <FaArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>

          {/* CTA */}
          <Container className="py-[90px] sm:py-[110px] lg:py-[120px]">
            <div className="w-full min-h-[520px] lg:h-[687px] flex flex-col items-center justify-center font-rubik gap-[20px] text-center">
              <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] text-white">
                Наши продукты сделают вас сильнее!
              </h1>
              <p className="text-white/90">Оставьте заявку и мы свяжемся с вами</p>

              <button
                className={[
                  "bg-[#ABBA27]/10 rounded-[8px] font-semibold text-[#ABBA27]",
                  "px-[26px] py-[8px] border border-[#ABBA27]",
                  "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ABBA27] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3A3C3A]",
                ].join(" ")}
                style={{
                  backgroundImage: `url(${bgbutton})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                type="button"
              >
                Оставить заявку
              </button>
            </div>
          </Container>
        </div>
      </section>

      {/* Остальное */}
      <VideoCompanent />
      <AboutUs />
      <Rukavodstva />
      <DocumentCom />
      <NewsCom />
      <EventsCom />

      {/* Нижний CTA */}
      <section className="relative w-full">
        <Container className="py-[80px] sm:py-[100px] lg:py-[120px]">
          <div className="relative w-full min-h-[520px] lg:h-[687px] flex flex-col items-center justify-center font-rubik gap-[20px] text-center overflow-hidden">
            <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] text-[#3D3E3D] z-[1]">
              Наши продукты сделают вас сильнее!
            </h1>
            <p className="text-[#3D3E3D]/90 z-[1]">
              Оставьте заявку и мы свяжемся с вами
            </p>

            <button
              className={[
                "bg-[#ABBA27]/10 rounded-[8px] font-semibold text-[#ABBA27]",
                "px-[26px] py-[8px] border border-[#ABBA27] z-[1]",
                "transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ABBA27] focus-visible:ring-offset-2",
              ].join(" ")}
              style={{
                backgroundImage: `url(${bgbutton})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              type="button"
            >
              Оставить заявку
            </button>

            <img
              className="absolute right-0 sm:right-[20px] lg:right-[120px] bottom-[10px] w-[240px] sm:w-[320px] md:w-[360px] lg:w-auto opacity-95 pointer-events-none select-none"
              src={masterImg}
              alt=""
              draggable={false}
            />
          </div>
        </Container>
      </section>

      <PartnersCom />
    </>
  );
}
