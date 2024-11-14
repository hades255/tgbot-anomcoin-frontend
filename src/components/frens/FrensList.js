import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import clsx from "clsx";
import { BACKEND_PATH } from "@constants/config";
import { useAuth } from "@contexts/AuthContext";
import FrenItem from "./FrenItem";

const FrensList = () => {
  const { userId } = useAuth();
  const [tab, setTab] = useState(0);
  const [frens, setFrens] = useState([]);

  const getUsers = useCallback(() => {
    if (userId)
      (async () => {
        try {
          const response = await axios.get(
            `${BACKEND_PATH}/referral/frens?userId=${userId}`
          );
          setFrens(response.data.frens || []);
        } catch (error) {
          console.log(error);
        }
      })();
  }, [userId]);

  const handleClickTab = useCallback((param) => setTab(param), []);

  useEffect(() => {
    getUsers(tab);
  }, [getUsers, tab]);

  return (
    <div className="mx-8 my-2 flex flex-col">
      <div className="flex justify-between">
        <div className="bg-[#1A2B47] rounded-[18px] h-9 flex items-center p-[3px]">
          <TabItem
            active={tab === 0}
            tab={0}
            onClick={handleClickTab}
            title="All Frens"
          />
          <TabItem
            active={tab === 1}
            tab={1}
            onClick={handleClickTab}
            title="Frens with wallet"
          />
        </div>
        <div className="text-white font-sf-pro-text font-bold flex items-center">
          Total: {frens.length}
        </div>
      </div>
      <div className="flex flex-col">
        {frens.map((item, index) => (
          <FrenItem key={index} refer={item} />
        ))}
        <div className="mt-4 flex justify-center font-sf-pro-text text-[#5D5D5D]">
          no more
        </div>
      </div>
    </div>
  );
};

export default FrensList;

export const TabItem = ({ tab, active, title, onClick, className = "" }) => {
  const handleClickTab = useCallback(() => onClick(tab), [onClick, tab]);

  return (
    <div
      className={clsx(
        "h-full rounded-[15px] font-sf-pro-text text-xs flex items-center cursor-pointer px-3 transition-all",
        {
          "text-white bg-frens-all-toggle": active,
          "text-[#A8ADB7] bg-transparent": !active,
        },
        className
      )}
      onClick={handleClickTab}
    >
      {title}
    </div>
  );
};
