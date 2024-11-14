import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import clsx from "clsx";
import { TabItem } from "@frens/FrensList";
import { useAuth } from "@contexts/AuthContext";
import { BACKEND_PATH } from "@constants/config";
import AnomGreyIcon from "@icons/AnomGrey";
import UsersIcon from "@icons/invite/Users";
import AnomIcon from "@icons/Anom";
import { UserItem } from "./Profile";

const Squad = () => {
  const navigate = useNavigate();
  const { squad } = useAuth();

  const [squad_, setSquad_] = useState(null);

  const handleClickAllSquad = useCallback(() => navigate("/squad"), [navigate]);

  useEffect(() => {
    if (squad) {
      (async () => {
        try {
          const response = await axios.get(`${BACKEND_PATH}/squad/${squad}`);
          console.log(response);
          setSquad_(response.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [squad]);

  return (
    <>
      <div className="flex flex-col mb-8">
        <div className="mt-6 flex justify-center">
          <AnomIcon width={60} height={60} />
        </div>
        <div className="my-3 flex justify-center">
          <span className="text-white font-sf-pro-text text-sm ">
            {squad_ && squad_.squad.name}
          </span>
        </div>
        <div className="mx-8 my-2 flex justify-center flex-col text-white gap-2">
          <div className="flex justify-center items-center flex-row gap-2">
            <div className="w-full flex justify-center items-center flex-col border">
              <div className="h-16 flex items-center justify-center">
                <AnomGreyIcon width={60} height={60} />
              </div>
              <div className="flex justify-center flex-col text-lg ">
                Diamond
              </div>
            </div>
            <div className="w-full flex justify-center items-center flex-col border">
              <div className="h-16 flex items-center justify-center">
                <AnomIcon width={60} height={60} />
              </div>
              <div className="flex justify-center  flex-col text-lg ">
                {squad_ && squad_.totalPoint
                  ? squad_.totalPoint
                  : "Calculating..."}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-row gap-2">
            <div className="w-full flex justify-center items-center flex-col border">
              <div className="h-16 flex items-center justify-center">
                <UsersIcon width={40} height={40} />
              </div>
              <div className="flex justify-center flex-col text-lg">
                {squad_ && squad_.count ? squad_.count : "Calculating..."}
              </div>
            </div>
            <div className="w-full flex justify-center items-center flex-col border">
              <div className="h-16 flex items-center justify-center">
                <AnomGreyIcon width={60} height={60} />
              </div>
              <div className="flex justify-center flex-col text-lg">
                Community
              </div>
            </div>
          </div>
        </div>
        <div className="mx-8 my-2 flex justify-around flex-row text-white gap-2">
          <button
            className={clsx(
              "border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-1/3 h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF] text-[12px] font-sf-pro-text"
            )}
          >
            Invite friend
          </button>
          <button
            className={clsx(
              "border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-1/3 h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF] text-[12px] font-sf-pro-text"
            )}
          >
            Leave Squad
          </button>
          <button
            onClick={handleClickAllSquad}
            className={clsx(
              "border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-1/3 h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF] text-[12px] font-sf-pro-text"
            )}
          >
            All Squad
          </button>
        </div>
        <div className="flex justify-center px-8 mt-3">
          <ProfilePad />
        </div>
      </div>
    </>
  );
};

export default Squad;

const ProfilePad = () => {
  const { squad } = useAuth();

  const [tab, setTab] = useState(0);
  const [users, setUsers] = useState([]);

  const handleClickTab = useCallback((param) => setTab(param), []);

  useEffect(() => {
    if (squad) {
      (async () => {
        try {
          const response = await axios.get(
            `${BACKEND_PATH}/squad/${squad}/users?period=${tab}`
          );
          setUsers(response.data.users);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [squad, tab]);

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
            <UserItem user={user} key={user._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
