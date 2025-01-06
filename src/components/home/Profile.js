import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatNumber } from "@helper/func";
import { useAuth } from "@contexts/AuthContext";
import AnomIcon from "@icons/Anom";
import UserAvatar from "./UserAvatar";

const Profile = () => {
  const router = useNavigate();
  const { username, avatar } = useAuth();
  const { point } = useSelector((state) => state.coin);

  const handleClickProfile = useCallback(() => router("/profile"), [router]);

  return (
    <div className="bg-home-profile w-full min-h-20 rounded flex justify-center items-center p-[3px]">
      <div className="w-full h-full bg-[#000000EF] px-2 py-[11px]">
        <div className="flex justify-between" onClick={handleClickProfile}>
          <div className="flex">
            <div className="bg-profile-image-border min-w-[50px] w-[50px] h-[50px] flex justify-center items-center rounded-lg mr-3">
              <div className="bg-profile-image w-12 h-12 flex justify-center items-center rounded-[7px] overflow-hidden">
                <UserAvatar avatar={avatar} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] text-white font-comicneue-bold overflow-hidden text-nowrap">
                LVL 1
              </span>
              <button className="text-[16px] text-white font-comicneue-bold bg-[#14A1FF] w-full max-w-[104px] h-7 rounded overflow-hidden px-[2px]">
                {username}
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <AnomIcon width={56} height={56} />
            <span className="text-[23px] text-white font-bold font-comic-sans-ms spaced-text-1 min-w-20 whitespace-normal break-words">
              {point > 999999 ? formatNumber(point, 2) : point.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
