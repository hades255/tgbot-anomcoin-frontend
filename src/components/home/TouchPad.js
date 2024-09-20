import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  earnCoin,
  initSize,
  onMouseDown,
  onMouseUp,
} from "../../redux/coinSlice";
import FireworksEffect from "./FireworksEffect";
import CoinGround from "./CoinGround";
import ExpireGround from "./ExpireGround";

const TouchPad = () => {
  const dispatch = useDispatch();

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
    <div className="pt-44 px-2">
      <div className="h-[calc(100vh_-_332px)] w-full relative">
        <CoinGround />
        <ExpireGround />
        <div
          className="w-screen h-screen fixed top-0 left-0"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <FireworksEffect />
        </div>
      </div>
    </div>
  );
};

export default TouchPad;
