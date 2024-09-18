import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  earnCoin,
  initSize,
  onMouseDown,
  onMouseUp,
} from "../../redux/coinSlice";
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
    (event) =>
      dispatch(
        earnCoin({
          x: event.clientX - 16,
          y: event.clientY - 188,
        })
      ),
    [dispatch]
  );

  const handleMouseDown = useCallback(
    (event) =>
      dispatch(
        onMouseDown({
          x: event.clientX - 16,
          y: event.clientY - 188,
        })
      ),
    [dispatch]
  );

  const handleMouseUp = useCallback(() => dispatch(onMouseUp()), [dispatch]);

  const handleTouchMove = useCallback(
    (event) =>
      dispatch(
        earnCoin({
          x: event.touches[0].clientX - 16,
          y: event.touches[0].clientY - 188,
        })
      ),
    [dispatch]
  );

  const handleTouchStart = useCallback(
    (event) =>
      dispatch(
        onMouseDown({
          x: event.touches[0].clientX - 16,
          y: event.touches[0].clientY - 188,
        })
      ),
    [dispatch]
  );

  const handleTouchEnd = useCallback(() => dispatch(onMouseUp()), [dispatch]);

  return (
    <div className="mt-4 h-[calc(100vh_-_352px)] w-full relative">
      {coins.map((item) => (
        <CoinItem key={item.key} coin={item} />
      ))}
      <div
        className="mt-4 h-[calc(100vh_-_352px)] w-full absolute top-0 left-0"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};

export default CoinGround;
