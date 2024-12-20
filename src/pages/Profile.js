import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { useAuth } from "@contexts/AuthContext";
import { BACKEND_PATH } from "@constants/config";
import { min_maxByPoint } from "@constants/constants";
import { formatNumber } from "@helper/func";
import UserAvatar from "@home/UserAvatar";
import { TabItem } from "@frens/FrensList";
import UserItem from "@profile/UserItem";
import AnomGreyIcon from "@icons/AnomGrey";
import AnomIcon from "@icons/Anom";
import LeftArrowCircleFillIcon from "@icons/task/LeftArrowCircleFill";
import RightArrowCircleFillIcon from "@icons/task/RightArrowCircleFill";
import AnomGoldIcon from "@icons/AnomGold";
import AnomPurpleIcon from "@icons/AnomPurple";
import SquadItem from "@profile/SquadItem";

const rankCount = 2;

const Profile = () => {
  const [tab, setTab] = useState(0);
  const [rank, setRank] = useState(0);

  const handleClickTab = useCallback((param) => setTab(param), []);

  const handleClickPrev = useCallback(() => {
    if (rank > 0) setRank(rank - 1);
  }, [rank]);

  const handleClickNext = useCallback(() => {
    if (rank < rankCount) setRank(rank + 1);
  }, [rank]);

  return (
    <>
      <div className="flex flex-col">
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
        <div className="flex justify-around items-center h-28">
          <div
            onClick={handleClickPrev}
            className={clsx("cursor-pointer", { invisible: rank === 0 })}
          >
            <LeftArrowCircleFillIcon opacity={0.8} />
          </div>
          <div>
            {rank === 0 && <AnomGreyIcon />}
            {rank === 1 && <AnomGoldIcon width={116} height={128} />}
            {rank === 2 && <AnomPurpleIcon width={116} height={128} />}
          </div>
          <div
            onClick={handleClickNext}
            className={clsx("cursor-pointer", {
              invisible: rank === rankCount,
            })}
          >
            <RightArrowCircleFillIcon opacity={0.8} />
          </div>
        </div>
        <div
          className={clsx("h-8 flex justify-center text-white font-bold", {
            invisible: rank === 0,
          })}
        >
          <span>{formatNumber(min_maxByPoint(tab, rank)[0])}</span>
          <span className="mx-1">/</span>
          <span>{formatNumber(min_maxByPoint(tab, rank)[1])}</span>
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
    setUsers([]);
    setUser(null);
    (async () => {
      try {
        const response = await axios.get(
          `${BACKEND_PATH}/${
            miner === 0 ? "user" : "squad"
          }/profile?userId=${userId}&miner=${miner}&rank=${rank}&tab=${tab}`
        );
        setUsers(response.data.items);
        setUser(response.data.mine);
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
        <div className="flex flex-col h-[calc(100vh_-_360px)] overflow-scroll">
          {users.map((user, index) =>
            miner === 0 ? (
              <UserItem
                key={user._id}
                index={index}
                user={user}
                daily={tab === 0}
              />
            ) : (
              <SquadItem
                key={user._id}
                index={index}
                squad={user}
                daily={tab === 0}
              />
            )
          )}
        </div>
      </div>
      {user && !users.find((item) => item._id === user._id) && (
        <div className="absolute w-full left-0 -bottom-2">
          <div className="flex items-center justify-between my-1 bg-discord-btn shadow-[inset_0_-2px_2px_#0000001A,0_4px_2px_#2436FD] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-[20px] h-[66px] px-[26px]">
            <div className="flex items-center">
              <div className="mr-4 w-10 flex justify-center font-sf-pro-text text-white text-[14px]">
                100+
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
                    {tab === 0 ? user.dailyPoint : user.weeklyPoint}
                  </span>
                </div>
              </div>
            </div>
            <div className="font-sf-pro-text text-white text-[14px]">You</div>
          </div>
        </div>
      )}
    </div>
  );
};
