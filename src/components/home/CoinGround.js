import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { earnCoin, initSize } from "../../redux/coinSlice";
import CoinItem from "./CoinItem";

const CoinGround = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coin.coins);

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        initSize({
          width: window.innerWidth - 32,
          height: window.innerHeight - 352,
        })
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const handleMouseMove = useCallback(
    (event) => {
      dispatch(
        earnCoin({
          x: event.clientX - 16,
          y: event.clientY - 188,
        })
      );
    },
    [dispatch]
  );

  return (
    <div
      className="mt-4 h-[calc(100vh_-_352px)] w-full relative"
      onMouseMove={handleMouseMove}
    >
      {coins.map((item) => (
        <CoinItem key={item.key} coin={item} />
      ))}
    </div>
  );
};

export default CoinGround;
