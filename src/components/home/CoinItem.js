import React, { useEffect, useState } from "react";
import DefaultCoin from "@icons/coins/Default";
import Coin1Icon from "@icons/coins/Coin1";
import Coin2Icon from "@icons/coins/Coin2";
import Coin7Icon from "@icons/coins/Coin7";
import Coin3Icon from "@icons/coins/Coin3";
import Coin4Icon from "@icons/coins/Coin4";
import Coin5Icon from "@icons/coins/Coin5";
import Coin6Icon from "@icons/coins/Coin6";
import "./CoinItem.css";

const CoinItem = ({ coin }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={visible ? "coinitem-visible" : "coinitem-hidden"}
      style={{ position: "absolute", left: coin.x, top: coin.y }}
    >
      {coin.type === 0 && <DefaultCoin />}
      {coin.type === 1 && <Coin1Icon />}
      {coin.type === 2 && <Coin2Icon />}
      {coin.type === 3 && <Coin3Icon />}
      {coin.type === 4 && <Coin4Icon />}
      {coin.type === 5 && <Coin5Icon />}
      {coin.type === 6 && <Coin6Icon />}
      {coin.type === 7 && <Coin7Icon />}
    </div>
  );
};

export default CoinItem;
