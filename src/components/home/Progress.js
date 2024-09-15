import React from "react";
import AnomGreyIcon from "../../assets/icons/AnomGrey";
import GreenEnergyIcon from "../../assets/icons/GreenEnergy";
import LeafIcon from "../../assets/icons/Leaf";

const Progress = () => {
  return (
    <div className="flex items-center justify-between mt-1">
      <div className="flex items-center">
        <div className="w-36 h-[18px] rounded-s-[20px] bg-white flex justify-start items-center px-[2px]">
          <div className="bg-time-progress-bar w-24 h-[16px] rounded-[20px]"></div>
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
