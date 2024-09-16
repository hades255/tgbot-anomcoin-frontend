import React from "react";
import { useSelector } from "react-redux";
import LeafIcon from "../../assets/icons/Leaf";
import AnomGreyIcon from "../../assets/icons/AnomGrey";
import GreenEnergyIcon from "../../assets/icons/GreenEnergy";

const Progress = () => {
  const { progress, totalprogress } = useSelector((state) => state.coin);

  return (
    <div className="flex items-center justify-between mt-1">
      <div className="flex items-center">
        <div className="w-36 h-[18px] rounded-s-[20px] bg-white flex justify-start items-center px-[2px]">
          <div
            className="bg-time-progress-bar h-[16px] rounded-[20px]"
            style={{ width: (progress / totalprogress) * 128 }}
          ></div>
        </div>
        <div className="-ml-9">
          <AnomGreyIcon width={74} height={80} />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex justify-center items-center h-[59px] w-[59px] hover:cursor-pointer bg-navbar-item rounded shadow-navbar-item">
          <div className="flex justify-center items-center h-[55px] w-[55px] bg-[#00040C] rounded">
            <GreenEnergyIcon width={39} height={45} />
          </div>
        </div>
        <div className="flex justify-center items-center h-[59px] w-[59px] hover:cursor-pointer bg-navbar-item rounded shadow-navbar-item">
          <div className="flex justify-center items-center h-[55px] w-[55px] bg-[#00040C] rounded">
            <LeafIcon width={39} height={45} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
