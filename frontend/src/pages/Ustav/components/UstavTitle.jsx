import React from "react";
import { Icons } from "../../../images/icon";

export default function UstavTitle({title}) {
  return (
    <h1 className="text-[36px] text-[#ABBA27] flex justify-start items-center gap-5 font-medium leading-[63px]">
      <Icons.UstavIconLeft /> {title}
    </h1>
  );
}
