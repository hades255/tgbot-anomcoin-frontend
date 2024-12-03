import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeErasedItem } from "@redux/coinSlice";

const ExpireItem = ({ coin, multiValue }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeErasedItem(coin.key));
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [coin, dispatch]);

  return (
    <div
      className={`no-select ${
        visible ? "expireitem-visible" : "expireitem-hidden"
      }`}
      style={{
        position: "absolute",
        left: coin.x + 25,
        top: coin.type === "airdrop" ? coin.y + 40 : coin.y + 192,
      }}
    >
      <span className="text-white text-[32px] font-comicneue-bold text-shadow-expire-item">
        +{coin.type === "airdrop" ? (multiValue + 1) * 2 : multiValue + 1}
      </span>
    </div>
  );
};

export default ExpireItem;
