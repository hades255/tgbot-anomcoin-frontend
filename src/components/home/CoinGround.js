import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addScore } from "../../redux/authSlice";
import { earnCoin, initSize } from "../../redux/coinSlice";
import { newCoin } from "../../helper/func";
import CoinItem from "./CoinItem";

const CoinGround = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coin.coins);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        initSize({
          width: window.innerWidth - 32,
          height: window.innerHeight - 360,
        })
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const handleMouseMove = useCallback((event) => {
    setMousePosition({
      x: event.clientX - 16,
      y: event.clientY - 196,
    });
  }, []);

  useEffect(() => {
    const remaining = coins.filter(
      (item) =>
        Math.abs(mousePosition.x - 42 - item.x) > 50 ||
        Math.abs(mousePosition.y - 32 - item.y) > 40
    );
    const diff = coins.length - remaining.length;
    if (diff > 0) {
      dispatch(earnCoin({ diff, remaining }));
      dispatch(addScore(diff));
    }
  }, [mousePosition, coins]);

  return (
    <div
      className="mt-4 h-[calc(100vh_-_360px)] w-full relative"
      onMouseMove={handleMouseMove}
    >
      {coins.map((item, index) => (
        <CoinItem key={index} coin={item} />
      ))}
    </div>
  );
};

export default CoinGround;
