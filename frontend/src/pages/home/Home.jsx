import "./home.css";
import { Link } from "react-router-dom";
import headerInfoImg from "../../images/homeImg/headerInfoImg.png";
import logoMini from "../../images/homeImg/logoMini.png";
import laser from "./../../images/productImg/Lazer.png";
import plug from "./../../images/productImg/plug.png";
import bma from "./../../images/productImg/Bma.png";
import ku from "./../../images/productImg/ku.png";
import bgbutton from "./../../images/Group.png";
import ProductComponent from "../Products/components/ProductComponent";
import bgLogo from "../../images/bgLogo.svg";
import VideoCompanent from "../../components/videoCompanent/VideoCompanent";
import turkmanistan from "../../images/turkman.png";
import pakistan from "../../images/pakistan.png";
import tajikstan from "../../images/tajikstan.png";
import { FaArrowRight } from "react-icons/fa6";
import Rukavodstva from "../../components/rukavodstva/Rukavodstva";
import NewsCom from "../../components/newsCompanent/NewsCom";
import EventsCom from "../../components/eventsCompanent/EventsCom";
import union from "../../images/Union.png";
import ProductionExportChart from "../../components/chartcompanent/ProductionExportChart";
import exportImg from "../../images/export.svg";
import chartPie from "../../images/charPie.svg";
import AboutUs from "./components/AboutUs/AboutUs";
import Button from "./components/Button_ukm/Button";
import DocumentCom from "../../components/documentCom/DocumentCom";
import masterImg from "../../images/master.svg"
import PartnersCom from "../../components/partnersCom/PartnersCom";

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
      desc: "Плуг оборотный навесной – пятикорпусный ПОН-4+1х40 предназначено для пахоты под зерновые и технические культуры на глубину 30…45 cm. Плуги используются на полях с ровным рельефом, где почва не засоренная камнями, с абсолютной влажностью 15..20 %, удельным сопротивлением не более 5.0 МPa,  твердостью 5,0 МPa. Плуг  оборотный навесной ПОН-4+1 агрегатируется тракторами с мощностью двигателя от 200 до 260 л.с. такие как  «CASE-MAGNUM»,  МХМ-240, МХМ-255, «New Holland»  Т-7060 PUMA",
      img: plug,
    },
    {
      id: 3,
      name: "Бороздоделатель БМА-9",
      desc: `Бороздоделатель модернизированный агрегатный девятирядный    БМА-9 предназначено для вырезания борозд по вспаханной и выровненной поле междурядьем  90 см.
             Бороздоделатель БМА- 9 агрегатируется с четырехколесным тракторами с мощностью двигателя от 135 до 170 л.с и выше такие как «New Holland»     Т - 6070, «CASE» МХМ - 140,             «CLAAS ARION 630C» и МТЗ 1523.`,
      img: bma,
    },
    {
      id: 4,
      name: "УНИВЕРСАЛЬНЫЙ ЧЕТЫРЕХРЯДНЫЙ КУ-4М",
      desc: `Культиватор - растениепитатель  универсальный  четырехрядный КУ-4М, предназначенный для выполнения в период вегетации основных видов междурядной обработки хлопчатника, кенафа, кукурузы и других высокостебельчатых пропашных культур с междурядьями 60,70 и 90 см, посеянных четырехрядными сеялками.
    Культиватор агрегатируется с тракторами МТЗ-80Х, ТТЗ-100КП, ТТЗ-60.11, Т28Х4М, Т28Х4М-А.`,
      img: ku,
    },
  ];

  return (
    <>
      <header>
        <div className="header_info">
          <div className="header_info_titls">
            <h2>Надежная агротехника для развития вашего бизнеса</h2>
            <p>
              Современные решения для аграрного бизнеса, которые помогают вам
              идти в ногу с инновациями и получать максимальную эффективность.
            </p>
          </div>
          <div className="header_info_imgBox">
            <div className="header_info_imgBox_infos">
              <b>Плуг оборотный навесной ПОН 4+1x40</b>
              <p>
                Предназначено для пахоты под зерновые и технические культуры на
                глубину 30…45 cm.{" "}
              </p>
            </div>
            <img src={headerInfoImg} alt="" />
          </div>
        </div>
      </header>
      <div className="senosti">
        <div className="senosti_con">
          <p className="senosti_title">Ценности компании</p>
          <div className="senosti_boxs">
            <div className="senosti_con_logo">
              <img src={logoMini} alt="" />
            </div>
            <div className="senosti_box">
              <h5>Готовность к переменам</h5>
              <p>
                Совершенствовать производство, внедрять самые современные
                технологии, повышать профессиональный уровень сотрудников.
              </p>
            </div>
            <div className="senosti_box">
              <h5>Вовлеченность</h5>
              <p>
                UKM стремится к тому, чтобы все сотрудники испытывали гордость и
                удовлетворение от достигаемых нами результатов.
              </p>
            </div>
            <div className="senosti_box">
              <h5>Клиентоориентированность</h5>
              <p>
                Умение слушать и понимать запросы наших клиентов является
                ключевым фактором в разработке инновационных решений.
              </p>
            </div>
            <div className="senosti_box">
              <h5>Преданность, открытость и честность</h5>
              <p>
                Мы привержены своим ценностям и преданы нашим клиентам. Мы
                работаем честно и открыто как друг с другом, так и с нашими
                клиентами и партнерами.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bgLogo bg-[#3A3C3A] rounded-bl-full rounded-br-full"
      // style={{
      //     backgroundImage: `url(${bgLogo})`,
      //     zIndex:'1',
      //     backgroundSize: "cover",
      //     backgroundRepeat: "no-repeat",
      //     backgroundSize: '95%',
      //     backgroundPosition: 'center',
      //     backgroundPositionY: '0'
      // }}
      >
        <div className="products">
          <div className="w-full h-full flex flex-col font-rubik px-[120px] py-[60px] gap-[40px]">
            <div className="w-full flex justify-between">
              <h1 className="text-[36px] text-[#ABBA27]">
                Почвообрабатывающая техника
              </h1>
              <Button />
            </div>
            <div className="flex flex-col gap-[32px] ">
              {productsData.map((product) => (
                <div className="relative flex items-center " key={product.id}>
                  <ProductComponent
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    desc={product.desc}
                    img={product.img}
                  />
                  <Link to={`/product/${product.id}`}>
                    <button className="bg-[#ffffff] w-[70px] h-[70px] flex items-center justify-center rounded-full border-[10px] border-[#3A3C3A] absolute right-[-40px] text-[#ABBA27]">
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="vidCompant">
          <div className="w-full h-[687px] flex flex-col items-center font-rubik px-[120px] py-[120px] gap-[20px]">
            <h1 className="text-[36px] text-center text-[#FFFFFF] z-[1]">
              Наши продукты сделают вас сильнее!
            </h1>
            <p className="z-[1]  text-[#FFFFFF]">
              Оставьте заявку и мы свяжемся с вами
            </p>
            <button
              className="bg-[#ABBA27] bg-opacity-10 rounded-[8px] font-semibold text-[#ABBA27] px-[26px] py-[8px] border border-[#ABBA27] flex justify-center items-center z-[1]"
              style={{
                backgroundImage: `url(${bgbutton})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              Оставить заявку
            </button>
            {/* <VideoCompanent /> */}
          </div>
        </div>
      </div>
      <VideoCompanent />
      <AboutUs />
      <Rukavodstva />
      <DocumentCom />
      <NewsCom />
      <EventsCom />
      <div className="relative w-full h-[687px] flex flex-col items-center font-rubik px-[120px] py-[120px] gap-[20px]">
        <h1 className="text-[36px] text-center text-[#3D3E3D] z-[1]">
          Наши продукты сделают вас сильнее!
        </h1>
        <p className="z-[1]  text-[#3D3E3D]">
          Оставьте заявку и мы свяжемся с вами
        </p>
        <button
          className="bg-[#ABBA27] bg-opacity-10 rounded-[8px] font-semibold text-[#ABBA27] px-[26px] py-[8px] border border-[#ABBA27] flex justify-center items-center z-[1]"
          style={{
            backgroundImage: `url(${bgbutton})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          Оставить заявку
        </button>
        <img className="absolute right-[120px] bottom-[10px]" src={masterImg} alt="" />
        {/* <VideoCompanent /> */}
      </div>
      <PartnersCom />
    </>
  );
}
