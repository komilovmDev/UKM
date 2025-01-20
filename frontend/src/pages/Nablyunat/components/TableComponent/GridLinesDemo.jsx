import React from "react";
import "./Table.css";

function Table() {
    const headers = ["№", "Ф.И.Ш.", "Позиция"];
    const data = [
        ["1", "Атажанов Жуъратбек Атаваевич", "Бош директор"],
    ];

    return (
        <div className="  w-full h-[136px] flex justify-center items-center border border-white rounded-2xl overflow-hidden relative">
            <table className="w-[101%] h-[102%] table-auto border-0 border-gray-900 border-collapse overflow-hidden absolute">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="Table_th border border-white px-4 py-2  bg-[#757A5A] font-normal text-[22px] text-white"
                            >
                                {header}
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
                                    className="Table_td text-[14px]  text-[#fff] font-rubik border border-white px-4 py-2"
                                >
                                    {cell}
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
