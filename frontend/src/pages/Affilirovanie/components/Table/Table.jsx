import React from "react";
import "./Table.css";

function Table() {
    const headers = ["№", "Ф.И.О. физического лица или полное наименование юридического лица", "Местонахождение (место жительство), (государство, область, город, район)", "Основание, по которому они признаются аффилированнми лицами", "Дата наступления оснований"];
    const data = [
        ["1", "Ўзбекистон Республикаси Давлат активларини бошқариш агентлиги", "Ўзбекистон, Тошкент ш., Амир Темур кўчаси, 6 уй", "Юр. лицо, которое владеет 20 и более процентами акций АО", "09.10.2020"],
        ["2", `ООО "JASMIN LIT MASH"`, "Республика Узбекистан, Хорезмская область, г.Шовот, улица Туркистон 76", "Юр. лицо, которое владеет 20 и более процентами акций АО", "20.02.2020"],
        ["3", "Атажанов Камоладдин Атабоевич", "г. Ташкент г. Ташкент", "Физ. лицо совместно с близкими родственниками, которое владеет 20 и более процентами акций АО", "29.06.2016"],
        ["4", "Рахимов Шухрат", "г. Ургенч", "Член НС", "09.10.2020"],
        ["5", "Машарибов Жахонгир", "г. Ургенч", "Член НС", "09.10.2020"],
        ["6", "Атажанов г Ўлмасбек", "г. Ургенч", "Член НС", "28.06.2019"],
        ["7", "Атаев Азад", "г. Ургенч", "Член НС", "11.08.2021"],
        ["8", "Атажанов Жамоладдин", "г. Ургенч", "Член НС", "28.06.2019"],
        ["9", "Атажанов Жуъратбек Атаваевич", "г. Ургенч", "Лицо, осуществляющее полномочия директора (председателя правления)", "29.06.2016"],
    ];

    return (
        <div className=" w-full h-[680px] flex justify-center items-center border border-white rounded-2xl overflow-hidden relative">
            <table className="w-[101%] h-[100%] table-auto border-0 border-gray-900 border-collapse overflow-hidden absolute">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className=" Affil_Table_Th border h-[68px] border-white px-4 bg-[#757A5A] font-normal text-[14px] text-white"
                            >
                                <p>{header}</p>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="overflow-hidden">
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="Affil_Table_Td  h-[68px] text-[14px]  text-[#fff] font-rubik border border-white px-4 "
                                >
                                    <p>{cell}</p>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
