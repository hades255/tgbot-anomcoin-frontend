import React from "react";
import InviteBtn from "@frens/InviteBtn";
import FrensList from "@frens/FrensList";
import Info from "@frens/Info";
import UsersIcon from "@icons/invite/Users";
import RightAngleIcon from "@icons/RightAngle";
import AnomIcon from "@icons/Anom";

const Frens = () => {
  return (
    <div className="flex flex-col mb-28">
      <div className="flex justify-center">
        <span className="pt-9 text-white font-sf-pro-text text-lg">
          Total rewards
        </span>
      </div>
      <div className="flex justify-center">
        <span className="pt-2 text-white font-sf-pro-text text-[32px] font-bold">
          0
        </span>
      </div>
      <Info />
      <div className="my-6 flex flex-col">
        <p className="mb-2 mx-8 pl-1 text-white font-sf-pro-text text-lg font-bold">
          Extra bonus
        </p>
        <div className="px-8 pb-2 flex overflow-x-visible overflow-y-hidden gap-3">
          <div className="w-[calc(100vw_-_64px)] min-w-[calc(100vw_-_64px)] rounded-[20px] flex justify-between bg-discord-btn shadow-[inset_0_-2px_2px_#0000001A,0_4px_2px_#2436FD] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] py-2 px-6">
            <div className="flex items-center">
              <div className="w-12 min-w-12 h-12 min-h-12 rounded mr-3 flex justify-center items-center">
                <UsersIcon />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-white font-sf-pro-text font-semibold text-[16px]">
                  invite 1 friend
                </div>
                <div className="flex items-center text-white font-sf-pro-text font-semibold text-[16px]">
                  +10k
                  <AnomIcon />
                </div>
              </div>
            </div>
            <div className="h-full flex items-center">
              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-[12px]">
                <RightAngleIcon />
              </div>
            </div>
          </div>
          <div className="w-[calc(100vw_-_64px)] min-w-[calc(100vw_-_64px)] rounded-[20px] flex justify-between bg-discord-btn shadow-[inset_0_-2px_2px_#0000001A,0_4px_2px_#2436FD] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] py-2 px-6">
            <div className="flex items-center">
              <div className="w-12 min-w-12 h-12 min-h-12 rounded mr-3 flex justify-center items-center">
                <UsersIcon />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-white font-sf-pro-text font-semibold text-[16px]">
                  invite 1 friend
                </div>
                <div className="flex items-center text-white font-sf-pro-text font-semibold text-[16px]">
                  +10k
                  <AnomIcon />
                </div>
              </div>
            </div>
            <div className="h-full flex items-center">
              <div className="w-6 h-6 flex items-center justify-center bg-white rounded-[12px]">
                <RightAngleIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrensList />
      <div className="fixed bottom-16 mx-7 w-[calc(100vw_-_56px)] h-11">
        <InviteBtn />
      </div>
    </div>
  );
};

export default Frens;
