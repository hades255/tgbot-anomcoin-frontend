import React from "react";
import { useSelector } from "react-redux";
import Boosters from "@build/Boosters";
import RocketIcon from "@icons/build/Rocket";

const Bulid = () => {
  const { point } = useSelector((state) => state.coin);
  return (
    <>
      <div className="flex flex-col mb-28">
        <div className="flex justify-center">
          <span className="pt-9 text-white font-sf-pro-text text-lg">
            Balance
          </span>
        </div>
        <div className="flex justify-center">
          <span className="pt-2 text-white font-sf-pro-text text-[32px] font-bold">
            {point.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-center">
          <RocketIcon />
        </div>
        <div className="flex justify-center">
          <span className="pb-9 text-white font-sf-pro-text text-lg font-bold">
            Boost
          </span>
        </div>
        <div className="px-8 pb-2 text-white font-sf-pro-text text-lg font-bold">
          Boosters
        </div>
        <Boosters />
      </div>
    </>
  );
};

export default Bulid;
