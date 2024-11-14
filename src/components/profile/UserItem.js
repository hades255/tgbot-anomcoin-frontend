import UserAvatar from "@home/UserAvatar";
import AnomIcon from "@icons/Anom";
import AnomGreyIcon from "@icons/AnomGrey";
import React from "react";

const UserItem = ({ user, daily = true }) => {
  return (
    <div className="flex items-center my-1">
      <div className="mr-4 w-10 flex justify-center">
        <AnomGreyIcon width={37} height={37} />
      </div>
      <div className="w-[56px] h-[52px] bg-profile-image-border rounded-lg flex justify-center items-center mr-4 p-[1px]">
        <div className="bg-profile-item w-full h-full rounded-lg flex justify-center items-center">
          <UserAvatar avatar={user.avatar} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-sf-pro-text text-white text-[14px]">
          {user.name}
        </div>
        <div className="flex items-center">
          <AnomIcon />
          <span className="font-sf-pro-text text-white text-[14px]">
            {daily ? user.dailyPoint : user.weeklyPoint}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
