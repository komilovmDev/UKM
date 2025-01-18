import React from "react";
import { useParams } from "react-router-dom";
import laser from "./../../../../images/productImg/Lazer.svg";
import plug from "./../../../../images/productImg/plug.png";
import bma from "./../../../../images/productImg/Bma.png";
import ku from "./../../../../images/productImg/ku.png";
import Table from './../Table/Table.jsx';

const ProductDetails = () => {
  const { id } = useParams();

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
         Бороздоделатель БМА- 9 агрегатируется с четырехколесным тракторами с мощностью двигателя от 135 до 170 л.с и выше такие как «New Holland»     Т - 6070, «CASE» МХМ - 140, «CLAAS ARION 630C» и МТЗ 1523.`,
      img: bma,
    },
    {
      id: 4,
      name: "УНИВЕРСАЛЬНЫЙ ЧЕТЫРЕХРЯДНЫЙ КУ-4М",
      desc: `Культиватор - растениепитатель  универсальный  четырехрядный КУ-4М, предназначенный для выполнения в период вегетации основных видов междурядной обработки хлопчатника, кенафа, кукурузы и других высокостебельчатых пропашных культур с междурядьями 60,70 и 90 см, посеянных четырехрядными сеялками.
Культиватор агрегатируется с тракторами МТЗ- 80Х, ТТЗ - 100КП, ТТЗ - 60.11, Т28Х4М, Т28Х4М - А`,
      img: ku,
    },
  ];

  const product = productsData.find((product) => product.id === Number(id));

  if (!product) {
    return <h2>Продукт не найден</h2>;
  }

  return (
    <div className="flex flex-col justify-between w-full px-[120px] bg-[#3D3E3D] pt-[60px] font-rubik">
      <div className="flex justify-between items-center h-[40px] mb-[64px]">
        <h1 className="text-[36px] text-[#ABBA27] ">{product.name}</h1>
        <button className="px-[16px] h-[40px] text-[14px] rounded-[12px] bg-[#ABBA27] text-[white] font-semibold">
          Заказать
        </button>
      </div>
      <div className="w-full flex flex-col gap-[64px] mb-[64px]">
        <img src={product.img} alt={product.name} className="w-full h-full" />
        <p className="text-[24px] w-full text-[#fff] text-opacity-50 leading-[1.1]">
          {product.desc}
        </p>
      </div>
      <div>
        <Table />
      </div>
      <div className="mt-[64px] mb-[80px] w-full">
        <button className="w-full h-[64px] flex items-center justify-center rounded-[12px] bg-[#ABBA27] text-[24px] font-semibold text-white font-rubik">Заказать</button>
      </div>  
    </div>
  );
};

export default ProductDetails;
