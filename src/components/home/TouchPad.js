import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { earnCoin, initSize } from "@redux/coinSlice";
import FireworksEffect from "./FireworksEffect";
import CoinGround from "./CoinGround";
import ExpireGround from "./ExpireGround";
import PointSender from "./PointSender";
import DailyBooster from "./DailyBooster";
import ChestBox from "./airdrop/ChestBox";
import AirDrop from "./airdrop";
import Auto from "./Auto";

const TouchPad = () => {
  const dispatch = useDispatch();
  const { yesPac, airdrop } = useSelector((state) => state.coin);
  const [auto, setAuto] = useState(false);
  const touchRef = useRef(null);

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

  // const handleTouchStart = useCallback(
  //   (event) =>
  //     dispatch(
  //       onMouseDown({
  //         x: event.touches[0].clientX - 16,
  //         y: event.touches[0].clientY - 188,
  //       })
  //     ),
  //   [dispatch]
  // );

  // const handleTouchEnd = useCallback(() => dispatch(onMouseUp()), [dispatch]);

  const handleClickAuto = useCallback(() => {
    if (yesPac === 0) setAuto(false);
    else setAuto(!auto);
  }, [auto, yesPac]);

  useEffect(() => {
    const touchpad = touchRef.current;
    if (touchpad && !airdrop) {
      touchpad.addEventListener("mousemove", handleMouseMove);
      touchpad.addEventListener("touchmove", handleTouchMove);

      return () => {
        touchpad.removeEventListener("mousemove", () => {});
        touchpad.removeEventListener("touchmove", () => {});
      };
    }
  }, [handleMouseMove, handleTouchMove, airdrop]);

  return (
    <>
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
                className={clsx(
                  "z-10 absolute bottom-0 right-9 w-8 h-8 rounded-full border hover:bg-blue-600 transition-all flex justify-center items-center cursor-pointer",
                  {
                    "bg-[#58A9E8]": !auto,
                    "bg-blue-700": auto,
                  }
                )}
              >
                ▶
              </div>
              <DailyBooster />
            </div>
          </div>
          <ChestBox />
        </>
      )}
      <FireworksEffect />
      {airdrop && <AirDrop />}
      {!airdrop && (
        <div
          ref={touchRef}
          className="fixed top-0 left-0 w-screen h-screen"
        ></div>
      )}
      <ExpireGround />
      <PointSender />
    </>
  );
};

export default TouchPad;
