import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

export default function Undfound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Uzur, Bunday page mavjud emas."
      extra={
        <Link to={"/"}>
          <Button type="primary" style={{background:"#ABBA27"}}> Bosh sahifaga qaytish </Button>
        </Link>
      }
    />
  );
}
