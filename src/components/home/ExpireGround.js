import React from "react";
import { useSelector } from "react-redux";
import ExpireItem from "./ExpireItem";

const ExpireGround = () => {
  const erased = useSelector((state) => state.coin.erased);

  return (
    <>
      {erased.map((item) => (
        <ExpireItem key={item.key} coin={item} />
      ))}
    </>
  );
};

export default ExpireGround;
