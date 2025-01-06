import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { earnCoin, initSize, setRunAuto } from "@redux/coinSlice";
import FireworksEffect from "./FireworksEffect";
import CoinGround from "./CoinGround";
import ExpireGround from "./ExpireGround";
import PointSender from "./PointSender";
import DailyBooster from "./DailyBooster";
import ChestBox from "./airdrop/ChestBox";
import AirDrop from "./airdrop";
import Auto from "./Auto";
import Catcher from "@helper/Catcher";

const TouchPad = () => {
  const dispatch = useDispatch();
  const { yesPac, airdrop, runAuto } = useSelector((state) => state.coin);
  const [auto, setAuto] = useState(false);
  const touchRef = useRef(null);

  useEffect(() => setAuto(runAuto), [runAuto]);

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
    if (yesPac === 0) {
      dispatch(setRunAuto(false));
    } else {
      dispatch(setRunAuto(!auto));
    }
  }, [auto, yesPac, dispatch]);

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
              <AutoIcon auto={auto} click={handleClickAuto} />
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

const AutoIcon = ({ auto, click }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let timerEater = null;
    const canvas = canvasRef.current;
    const parentElement = canvas.parentElement;
    const rect = parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext("2d");
    const catcher = new Catcher(ctx);
    catcher.size = 15;
    catcher.x = 16;
    catcher.y = 16;
    catcher.color = "white";
    catcher.eyeColor = "blue";
    catcher.strokeColor = "cyan";

    if (auto) {
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        catcher.show();
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
      timerEater = setInterval(() => {
        catcher.mouthOpen = !catcher.mouthOpen;
      }, 150);
    } else {
      catcher.show();
    }
    return () => {
      if (timerEater) clearInterval(timerEater);
      cancelAnimationFrame(animationRef.current);
    };
  }, [auto]);

  return (
    <div
      onClick={click}
      className={clsx(
        "z-10 absolute bottom-0 right-9 w-8 h-8 p-[2px] rounded-full border border-white hover:bg-blue-600 transition-all flex justify-center items-center cursor-pointer",
        {
          "bg-[#367cff]": !auto,
          "bg-blue-800": auto,
        }
      )}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};
