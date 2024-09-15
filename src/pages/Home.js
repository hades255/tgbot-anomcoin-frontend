import React from "react";
import UserIcon from "../assets/icons/User";
import AnomIcon from "../assets/icons/Anom";
import AnomGreyIcon from "../assets/icons/AnomGrey";
import GreenEnergyIcon from "../assets/icons/GreenEnergy";
import LeafIcon from "../assets/icons/Leaf";

const Home = () => {
  return (
    <div className="p-4">
      <div className="bg-home-profile w-full h-20 rounded flex justify-center items-center">
        <div className="w-[calc(100%_-_6px)] h-[calc(100%_-_6px)] bg-[#000000EF] px-2 py-[11px]">
          <div className="flex justify-between">
            <div className="flex">
              <div className="bg-profile-image-border w-[50px] h-[50px] flex justify-center items-center rounded-lg mr-3">
                <div className="bg-profile-image w-12 h-12 flex justify-center items-center rounded-[6px] overflow-hidden">
                  <UserIcon width={56} height={49} color={"custom"} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] text-white font-comicneue-bold">
                  LVL 1 - 10X BOOST
                </span>
                <button className="text-[16px] text-white font-comicneue-bold bg-[#14A1FF] w-full max-w-[104px] h-7 rounded">
                  0Xplay1
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <AnomIcon width={56} height={56} />
              <span className="text-[23px] text-white font-bold font-comic-sans-ms spaced-text-1">
                811,079
              </span>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Home;
