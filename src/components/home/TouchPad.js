import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  earnCoin,
  initSize,
  onMouseDown,
  onMouseUp,
} from "../../redux/coinSlice";
import FireworksEffect from "./FireworksEffect";
import CoinGround from "./CoinGround";
import ExpireGround from "./ExpireGround";
import PointSender from "./PointSender";
import Auto from "./Auto";
import DailyBooster from "./DailyBooster";
import AirDrop from "./airdrop";
import ChestBox from "./airdrop/ChestBox";

const TouchPad = () => {
  const dispatch = useDispatch();
  const { yesPac, airdrop } = useSelector((state) => state.coin);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        initSize({
          width: window.innerWidth - 32,
          height: window.innerHeight - 336,
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

  // const handleMouseDown = useCallback(
  //   (event) =>
  //     dispatch(
  //       onMouseDown({
  //         x: event.clientX - 16,
  //         y: event.clientY - 188,
  //       })
  //     ),
  //   [dispatch]
  // );

  // const handleMouseUp = useCallback(() => dispatch(onMouseUp()), [dispatch]);

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

  const handleClickAuto = useCallback(() => {
    if (yesPac === 0) setAuto(false);
    else setAuto(!auto);
  }, [auto, yesPac]);

  return (
    <>
      <FireworksEffect />
      {!airdrop && (
        <>
          <div className="pt-44 px-2">
            <div className="h-[calc(100vh_-_316px)] w-full relative">
              <CoinGround />
              {auto && (
                <div className="w-full h-full">
                  <Auto auto={auto} />
                </div>
              )}
              <div
                onClick={handleClickAuto}
                className={classNames(
                  "z-10 absolute bottom-0 right-8 w-6 h-6 rounded-[12px] hover:bg-blue-600 transition-all flex justify-center items-center cursor-pointer",
                  {
                    "bg-white": !auto,
                    "bg-blue-400": auto,
                    "bg-black": yesPac === 0,
                  }
                )}
              >
                A
              </div>
              <DailyBooster />
            </div>
          </div>
          <div
            className="w-screen h-screen fixed top-0 left-0"
            onMouseMove={handleMouseMove}
            // onMouseDown={handleMouseDown}
            // onMouseUp={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
          <ChestBox />
        </>
      )}
      {airdrop && <AirDrop />}
      <ExpireGround />
      <PointSender />
    </>
  );
};

export default TouchPad;
