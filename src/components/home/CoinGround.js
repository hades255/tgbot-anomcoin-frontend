import React, { useCallback, useEffect, useState } from "react";
import { newCoin } from "../../helper/func";
import CoinItem from "./CoinItem";

const CoinGround = () => {
  const [height, setHeight] = useState(window.innerHeight - 360);
  const [width, setWidth] = useState(window.innerWidth - 24);

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - 360);
      setWidth(window.innerWidth - 24);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const createNewCoin = useCallback(() => {
    if (coins.length >= 10) return;
    setCoins([...coins, newCoin(width, height, 10)]);
  }, [height, width, coins]);

  useEffect(() => {
    const timer = setInterval(() => {
      createNewCoin();
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [createNewCoin]);

  return (
    <div className="mt-4 h-[calc(100vh_-_360px)] w-full bg-[#3333] relative">
      <span className="text-white">
        {width} {height}
      </span>
      {coins.map((item, index) => (
        <CoinItem key={index} coin={item} />
      ))}
    </div>
  );
};

export default CoinGround;
