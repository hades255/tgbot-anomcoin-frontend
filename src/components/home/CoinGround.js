import React from "react";
import { useSelector } from "react-redux";
import CoinItem from "./CoinItem";

const CoinGround = () => {
  const { coins } = useSelector((state) => state.coin);

  return (
    <>
      {coins.map((item) => (
        <CoinItem key={item.key} coin={item} />
      ))}
    </>
  );
};

export default CoinGround;
