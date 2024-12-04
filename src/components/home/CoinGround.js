import React from "react";
import { useSelector } from "react-redux";
import CoinItem from "./CoinItem";

const CoinGround = () => {
  const coins = useSelector((state) => state.coin.coins);

  return (
    <>
      <span className="absolute top-0 left-0 text-white">
        {coins ? coins.length : "X"}
      </span>
      {coins.map((item) => (
        <CoinItem key={item.key} coin={item} />
      ))}
    </>
  );
};

export default CoinGround;
