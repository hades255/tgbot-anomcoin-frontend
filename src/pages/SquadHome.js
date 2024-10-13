import React, { useCallback, useMemo, useState } from "react";
import InviteBtn from "../components/frens/InviteBtn";
import FrensList from "../components/frens/FrensList";
import Info from "../components/frens/Info";
import classNames from "classnames";
import { TabItem } from "../components/frens/FrensList";
import AnomIcon from "../assets/icons/Anom";
import RightArrowCircleIcon from "../assets/icons/task/RightArrowCircle";
import Modal from "../components/common/Modal";
import AnomGreyIcon from "../assets/icons/AnomGrey";
const Squad = () => {
  const handleClick = useCallback(() => {
    setShow(true);
  }, []);
  const handleClickSquad = useCallback(() => {
    setShowSquad(true);
  }, []);
  const handleCloseSquad = useCallback(() => {
    setShowSquad(false);
  }, []);
  const handleClose = useCallback(() => {
    setShow(false);
  }, []);
  const [show, setShow] = useState(false);
  const [showSquad, setShowSquad] = useState(false);

  return (
    <>
      <div className="flex flex-col mb-28">
        <div className="mt-12 flex justify-center  ">
          <div className=" w-10 bg-blue-500 h-10"> </div>
        </div>
        <div className="mt-3 flex justify-center  ">
          <span className="  text-white font-sf-pro-text text-sm ">
            Yescoin
          </span>
        </div>
        <div className=" mx-8  mt-3 flex justify-center  flex-col text-white">
          <div className="mt-3  flex justify-center items-center  flex-row">
            <div className="mx-3 w-full  flex justify-center items-center  flex-col bg-blue-200">
              <div className=" w-8 bg-blue-500 h-8"> </div>

              <div className="  flex justify-center  flex-col text-lg ">
                Diamond
              </div>
            </div>
            <div className="mx-3 w-full  flex justify-center items-center  flex-col bg-blue-200">
              <div className=" w-8 bg-blue-500 h-8"> </div>

              <div className="  flex justify-center  flex-col text-lg ">
                Diamond
              </div>
            </div>
          </div>
          <div className="mt-6  flex justify-center items-center  flex-row">
            <div className="mx-3 w-full  flex justify-center items-center  flex-col bg-blue-200">
              <div className=" w-8 bg-blue-500 h-8"> </div>

              <div className="  flex justify-center  flex-col text-lg ">
                Diamond
              </div>
            </div>
            <div className="mx-3 w-full  flex justify-center items-center  flex-col bg-blue-200">
              <div className=" w-8 bg-blue-500 h-8"> </div>

              <div className="  flex justify-center  flex-col text-lg ">
                Diamond
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-8  mt-3 flex justify-around  flex-row text-white">
          <button
            className={classNames(
              "border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-[91px] h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF] text-[12px] font-sf-pro-text"
            )}
          >
            Invite friend
          </button>
          <button
            className={classNames(
              "border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-[91px] h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF] text-[12px] font-sf-pro-text"
            )}
          >
            Leave Squad
          </button>
          <button
            className={classNames(
              "border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-[91px] h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF] text-[12px] font-sf-pro-text"
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

const UserItem = () => {
  return (
    <div className="flex items-center my-1">
      <div className="mr-4 w-10 flex justify-center">
        <AnomGreyIcon width={37} height={37} />
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
  );
};

const ProfilePad = () => {
  const [tab, setTab] = useState(0);

  const handleClickTab = useCallback((param) => setTab(param), []);

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
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </div>
      </div>
    </div>
  );
};
