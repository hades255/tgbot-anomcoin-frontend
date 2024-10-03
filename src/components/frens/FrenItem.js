import React from "react";
import UserAvatar from "../home/UserAvatar";

const FrenItem = ({ refer }) => {
  return (
    <div className="mt-4 bg-telegram-btn shadow-[0_4px_0px_#0090FF] border-2 rounded-[20px] px-4 py-[6px] flex justify-between items-center">
      <div className="flex">
        <div className="w-8 min-w-8 h-8 min-h-8 bg-[#D9D9D9] rounded-[16px] mr-3 flex justify-center items-center">
          <UserAvatar
            avatar={refer.receiver.avatar}
            className="w-full h-full rounded-[16px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center text-white text-xs font-sf-pro-text">
            {refer.receiver.name}
          </div>
          <div className="flex items-center text-xs font-sf-pro-text text-[#FFE484]">
            {refer.receiver.point.toLocaleString()}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-end text-white text-xs font-sf-pro-text">
          09-14 23:24:22
        </div>
        <div className="flex items-center justify-end text-xs font-sf-pro-text text-[#FFE484]">
          Reward +{refer.bonus.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default FrenItem;
