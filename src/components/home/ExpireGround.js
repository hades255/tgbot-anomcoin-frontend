import React from "react";
import { useSelector } from "react-redux";
import ExpireItem from "./ExpireItem";

const ExpireGround = () => {
  const { erased, multiValue } = useSelector((state) => state.coin);

  return (
    <>
      {erased.map((item) => (
        <ExpireItem key={item.key} coin={item} multiValue={multiValue} />
      ))}
    </>
  );
};

export default ExpireGround;
