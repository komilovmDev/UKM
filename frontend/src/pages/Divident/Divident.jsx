import React from "react";
import UstavHeader from "../Ustav/components/UstavHeader";
import Table from "./components/Table/Table";

const Divident = () => {
  return (
    <div className=" px-[120px] py-[50px] flex flex-col gap-[32px] bg-[#3d3d3d]">
      <div>
        <UstavHeader title={"Выплаченные дивиденды"} />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default Divident;
