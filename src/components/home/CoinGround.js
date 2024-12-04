import React from "react";
import { useSelector } from "react-redux";
import CoinItem from "./CoinItem";

const CoinGround = () => {
  const { coins, height, width, countperpage, multiValue, progress } =
    useSelector((state) => state.coin);

  return (
    <>
      <span className="absolute top-0 left-0 text-white">
        {height + "," + width + "," + countperpage},{coins.length},{multiValue},
        {progress}
      </span>
      {coins.map((item) => (
        <CoinItem key={item.key} coin={item} />
      ))}
    </>
  );
};

export default CoinGround;
