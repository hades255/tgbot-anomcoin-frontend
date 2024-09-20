import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeErasedItem } from "../../redux/coinSlice";

const ExpireItem = ({ coin }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
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
        visible ? "expireitem-hidden" : "expireitem-visible"
      }`}
      style={{ position: "absolute", left: coin.x + 25, top: coin.y + 20 }}
    >
      <span className="text-white text-[32px] font-comicneue-bold text-shadow-expire-item">
        +1
      </span>
    </div>
  );
};

export default ExpireItem;
