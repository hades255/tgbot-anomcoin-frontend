import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
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
    <motion.div
      className={`absolute no-select text-white text-[32px] font-comicneue-bold text-shadow-expire-item ${
        visible ? "expireitem-visible" : "expireitem-hidden"
      }`}
      style={{
        left: coin.x + 25,
        top: coin.type === "airdrop" ? coin.y + 40 : coin.y + 192,
      }}
    >
      +{coin.type === "airdrop" ? (multiValue + 1) * 2 : multiValue + 1}
    </motion.div>
  );
};

export default ExpireItem;
