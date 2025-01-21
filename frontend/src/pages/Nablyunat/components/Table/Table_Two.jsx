import React from "react";
import "./../TableComponent/Table.css";

function Table_Two() {
    const headers = ["№", "Ф.И.Ш.", "Позиция"];
    const data = [
        ["1", "Рахимов Шухрат", "Заместитель начальника Хорезмского территориального управления Агентства по управлению государственным имуществом"],
        ["1", "Атаев Азад", "Начальник Хорезмского территориального управления Агентства по управлению государственными активами"],
        ["1", "Атажанов Ўлмасбек", "Независимый член"],
        ["1", "Машарибов Жахонгир", "Директор ООО «Жасмин Лит Маш»"],
        ["1", "Атажанов Жамоладдин", "Акционер"],
    ];

    return (
        <div className="  w-full h-[408px] flex justify-center items-center border border-white rounded-2xl overflow-hidden relative">
            <table className="w-[101%] h-[100%] table-auto border-0 border-gray-900 border-collapse overflow-hidden absolute">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="Table_th border border-white px-4    bg-[#757A5A] font-normal text-[22px] text-white"
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
                                    className="Table_td  h-[68px] text-[14px]  text-[#fff] font-rubik border border-white px-4 "
                                >
                                    <p className=" leading-[.9] ">{cell}</p>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table_Two;
