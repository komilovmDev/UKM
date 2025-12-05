import osnavatelImg from "../../images/osnavatelFoto.png";
import derektorImg from "../../images/ja.png";
import dilmurodrahimov from "../../images/dr.png";
import igorkuvhkarov from "../../images/ki.png";
import lianatoly from "../../images/la.png";

export default function Rukavodstva() {
  return (
    <section className="w-full bg-[#3D3E3D] font-rubik">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-[120px] pt-[80px] pb-[80px] flex flex-col gap-[20px]">
        {/* ===== История ===== */}
        <div className="w-full flex justify-between">
          <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] text-[#FFFFFF]">
            История
          </h1>
        </div>

        {/* История карточка */}
        <div className="bg-[#ffffff10] w-full rounded-[32px] rounded-bl-[160px] flex flex-col lg:flex-row p-[15px] gap-[20px] lg:gap-[40px]">
          <img
            src={osnavatelImg}
            alt=""
            className="w-full lg:w-auto max-w-full lg:max-w-[360px] rounded-[22px] object-cover"
            draggable={false}
          />

          <div className="flex flex-col justify-center gap-0">
            <h1 className="text-[22px] sm:text-[26px] lg:text-[32px] text-[#ABBA27] font-medium p-0 m-0 leading-tight">
              Атажонов Атавай Атажонович
            </h1>
            <label className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#FFFFFF] font-medium p-0 m-0">
              Основатель
            </label>

            <p className="text-[#FFFFFF] mt-[16px] lg:mt-[20px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.65]">
              Родился в 1949 году в Шаватском районе Хорезмской области. В 1973
              году окончил Ташкентский Политехнический Институт, по
              специальности инженер-механик. В 1989 году вступил на должность
              директора «Ургенчкорммаш», которую занимал до 2014 года. С 2014
              года и до последних дней своей жизни он являлся советником «АО
              Ургенчкорммаш».
            </p>

            <p className="text-[#FFFFFF] mt-[16px] lg:mt-[20px] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.65]">
              Атавай Атажонович был дальновидным. справедливым и внимательным
              руководителем. Во многом именно благодаря ему была запущена
              основная производственная часть завода, которая послужила
              трамплином для того, чтобы на сегодняшний день «Ургенчкорммаш»
              стал узнаваемым и конкурентноспособным предприятием на
              международном рынке.
            </p>
          </div>
        </div>

        {/* ===== Руководство ===== */}
        <div className="w-full flex justify-between mt-[10px]">
          <h1 className="text-[26px] sm:text-[32px] lg:text-[36px] text-[#FFFFFF]">
            Рукаводство
          </h1>
        </div>

        {/* Сетка карточек руководства */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] lg:gap-[48px] justify-items-center">
          {/* card */}
          <div className="flex flex-col w-full max-w-[264px] h-auto lg:h-[407px] items-center gap-2">
            <img
              className="w-full rounded-[22px] rounded-bl-[222px] rounded-br-[222px] object-cover"
              src={derektorImg}
              alt=""
              draggable={false}
            />
            <p className="text-[18px] lg:text-[20px] text-[#ABBA27] font-[600] text-center leading-snug">
              Атажонов Журъатбек Атаваевич
            </p>
            <p className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-[600] text-center">
              Генеральный директор
            </p>
          </div>

          <div className="flex flex-col w-full max-w-[264px] h-auto lg:h-[407px] items-center gap-2">
            <img
              className="w-full rounded-[22px] rounded-bl-[222px] rounded-br-[222px] object-cover"
              src={dilmurodrahimov}
              alt=""
              draggable={false}
            />
            <p className="text-[18px] lg:text-[20px] text-[#ABBA27] font-[600] text-center leading-snug">
              Рахимов Дилмурод Худайназарович
            </p>
            <p className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-[600] text-center">
              Финансовый директор
            </p>
          </div>

          <div className="flex flex-col w-full max-w-[264px] h-auto lg:h-[407px] items-center gap-2">
            <img
              className="w-full rounded-[22px] rounded-bl-[222px] rounded-br-[222px] object-cover"
              src={igorkuvhkarov}
              alt=""
              draggable={false}
            />
            <p className="text-[18px] lg:text-[20px] text-[#ABBA27] font-[600] text-center leading-snug">
              Кучкаров Игорь Эгамбердиевич
            </p>
            <p className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-[600] text-center">
              Директор по производству
            </p>
          </div>

          <div className="flex flex-col w-full max-w-[264px] h-auto lg:h-[407px] items-center gap-2">
            <img
              className="w-full rounded-[22px] rounded-bl-[222px] rounded-br-[222px] object-cover"
              src={lianatoly}
              alt=""
              draggable={false}
            />
            <p className="text-[18px] lg:text-[20px] text-[#ABBA27] font-[600] text-center leading-snug">
              Ли Анатолий
              <br /> Ирламович
            </p>
            <p className="text-[14px] lg:text-[16px] text-[#FFFFFF] font-[600] text-center">
              Советник
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
