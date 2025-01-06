import React from "react";
import clsx from "clsx";
import { useAuth } from "@contexts/AuthContext";
import UserAvatar from "@home/UserAvatar";
import AnomIcon from "@icons/Anom";
import AnomGoldIcon from "@icons/AnomGold";
import AnomGreyIcon from "@icons/AnomGrey";
import AnomPurpleIcon from "@icons/AnomPurple";

const UserItem = ({ user, daily = true, index = null }) => {
  const { userId } = useAuth();

  return (
    <div
      className={clsx("flex items-center my-1", {
        "bg-discord-btn rounded-lg": userId.toString() === user.chatId,
      })}
    >
      <div className="mr-4 w-10 flex justify-center">
        {(index === null || index >= 2) && (
          <AnomGreyIcon width={37} height={37} />
        )}
        {index !== null && index === 0 && (
          <AnomPurpleIcon width={48} height={48} />
        )}
        {index !== null && index === 1 && (
          <AnomGoldIcon width={48} height={48} />
        )}
      </div>
      <div className="w-[56px] h-[54px] bg-profile-image-border rounded-lg flex justify-center items-center mr-4 p-[1px]">
        <div className="bg-profile-item w-full h-full rounded-lg flex justify-center items-center">
          <UserAvatar avatar={user.avatar} className="rounded-lg" />
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
