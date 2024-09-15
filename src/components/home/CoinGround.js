import React, { useCallback, useEffect, useState } from "react";
import { newCoin } from "../../helper/func";
import CoinItem from "./CoinItem";

const CoinGround = () => {
  const [height, setHeight] = useState(window.innerHeight - 360);
  const [width, setWidth] = useState(window.innerWidth - 32);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - 360);
      setWidth(window.innerWidth - 32);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const createNewCoin = useCallback(() => {
    if (coins.length >= 100) return;
    setCoins([...coins, newCoin(width, height, 7)]);
  }, [height, width, coins]);

  useEffect(() => {
    const timer = setInterval(() => {
      createNewCoin();
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, [createNewCoin]);

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
    if (remaining.length !== coins.length) setCoins(remaining);
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
