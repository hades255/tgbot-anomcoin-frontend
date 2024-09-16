import React from "react";
import UserIcon from "../../assets/icons/User";
import AnomIcon from "../../assets/icons/Anom";
import { useAuth } from "../../contexts/AuthContext";
import UserAvatar from "./UserAvatar";
import { useSelector } from "react-redux";

const Profile = () => {
  const { username, avatar } = useAuth();
  const { point } = useSelector((state) => state.coin);

  return (
    <div className="bg-home-profile w-full h-20 rounded flex justify-center items-center">
      <div className="w-[calc(100%_-_6px)] h-[calc(100%_-_6px)] bg-[#000000EF] px-2 py-[11px]">
        <div className="flex justify-between">
          <div className="flex">
            <div className="bg-profile-image-border min-w-[50px] w-[50px] h-[50px] flex justify-center items-center rounded-lg mr-3">
              <div className="bg-profile-image w-12 h-12 flex justify-center items-center rounded-[7px] overflow-hidden">
                {avatar ? (
                  <UserAvatar avatar={avatar} />
                ) : (
                  <UserIcon width={56} height={49} color={"custom"} />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] text-white font-comicneue-bold">
                LVL 1 - 10X BOOST
              </span>
              <button className="text-[16px] text-white font-comicneue-bold bg-[#14A1FF] w-full max-w-[104px] h-7 rounded">
                {username}
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <AnomIcon width={56} height={56} />
            <span className="text-[23px] text-white font-bold font-comic-sans-ms spaced-text-1 min-w-20">
              {point.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
