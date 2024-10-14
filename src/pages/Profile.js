import React, { useCallback, useEffect, useState } from "react";
import { TabItem } from "../components/frens/FrensList";
import AnomGreyIcon from "../assets/icons/AnomGrey";
import AnomIcon from "../assets/icons/Anom";
import LeftArrowCircleFillIcon from "../assets/icons/task/LeftArrowCircleFill";
import RightArrowCircleFillIcon from "../assets/icons/task/RightArrowCircleFill";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { BACKEND_PATH } from "../constants/config";
import UserAvatar from "../components/home/UserAvatar";

const Profile = () => {
  const [tab, setTab] = useState(0);
  const [rank, setRank] = useState(0);

  const handleClickTab = useCallback((param) => setTab(param), []);

  const handleClickPrev = useCallback(() => {
    if (rank > 0) setRank(rank - 1);
  }, [rank]);

  const handleClickNext = useCallback(() => {
    if (rank < 4) setRank(rank + 1);
  }, [rank]);

  return (
    <>
      <div className="flex flex-col mb-28">
        <div className="mt-10 my-4 flex justify-center">
          <div className="bg-[#1A2B47] rounded-[18px] h-9 flex items-center p-[3px]">
            <TabItem
              active={tab === 0}
              tab={0}
              onClick={handleClickTab}
              title="Miners"
            />
            <TabItem
              active={tab === 1}
              tab={1}
              onClick={handleClickTab}
              title="Squad"
            />
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div onClick={handleClickPrev} className="cursor-pointer">
            <LeftArrowCircleFillIcon opacity={rank === 0 ? 0.5 : 1} />
          </div>
          <div>
            <AnomGreyIcon />
          </div>
          <div onClick={handleClickNext} className="cursor-pointer">
            <RightArrowCircleFillIcon opacity={rank === 4 ? 0.5 : 1} />
          </div>
        </div>
        <div className="flex justify-center px-8">
          <ProfilePad miner={tab} rank={rank} />
        </div>
      </div>
    </>
  );
};

export default Profile;

const ProfilePad = ({ miner, rank }) => {
  const { userId } = useAuth();
  const [tab, setTab] = useState(0);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const handleClickTab = useCallback((param) => setTab(param), []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${BACKEND_PATH}/user/profile?userId=${userId}&miner=${miner}&rank=${rank}&tab=${tab}`
        );
        setUsers(response.data.users);
        setUser(response.data.user);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userId, miner, rank, tab]);

  return (
    <div className="w-full relative">
      <div className="bg-build-item rounded-[20px] shadow-xl border-2 p-6">
        <div className="w-full bg-[#1A2B47] rounded-[18px] h-9 flex items-center p-[3px]">
          <TabItem
            active={tab === 0}
            tab={0}
            onClick={handleClickTab}
            title="Day"
            className="w-full flex justify-center"
          />
          <TabItem
            active={tab === 1}
            tab={1}
            onClick={handleClickTab}
            title="Week"
            className="w-full flex justify-center"
          />
        </div>
        <div className="flex flex-col h-[calc(100vh_-_340px)] overflow-scroll">
          {users.map((user) => (
            <UserItem key={user._id} user={user} />
          ))}
        </div>
      </div>
      {/* {user && ( */}
      <div className="absolute w-full left-0 -bottom-2">
        <div className="flex items-center justify-between my-1 bg-discord-btn shadow-[inset_0_-2px_2px_#0000001A,0_4px_2px_#2436FD] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-[20px] h-[66px] px-[26px]">
          <div className="flex items-center">
            <div className="mr-4 w-10 flex justify-center font-sf-pro-text text-white text-[14px]">
              23293
            </div>
            <div className="w-[56px] h-[52px] bg-profile-image-border rounded-lg flex justify-center items-center mr-4 p-[1px]">
              <div className="bg-profile-item w-full h-full rounded-lg flex justify-center items-center">
                <AnomIcon width={48} height={48} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-sf-pro-text text-white text-[14px]">
                Dany_Riley
              </div>
              <div className="flex items-center">
                <AnomIcon />
                <span className="font-sf-pro-text text-white text-[14px]">
                  213123
                </span>
              </div>
            </div>
          </div>
          <div className="font-sf-pro-text text-white text-[14px]">You</div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export const UserItem = ({ user }) => {
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
            {user.point}
          </span>
        </div>
      </div>
    </div>
  );
};
