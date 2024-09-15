import React from "react";
import DefaultCoin from "../../assets/icons/coins/Default";

const CoinItem = ({ coin }) => {
  return (
    <div style={{ position: "absolute", left: coin.x, top: coin.y }}>
      <DefaultCoin />
    </div>
  );
};

export default CoinItem;
