import React from "react";
import UstavBtn from "./UstavBtn";
import UstavTitle from "./UstavTitle";

export default function UstavHeader({ title }) {
  return (
    <div className="UstavHeader flex justify-between items-center w-full">
      <UstavTitle title={title} />
      <UstavBtn />
    </div>
  );
}
