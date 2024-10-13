import React, { useCallback, useMemo, useState } from "react";
import InviteBtn from "../components/frens/InviteBtn";
import FrensList from "../components/frens/FrensList";
import Info from "../components/frens/Info";
import classNames from "classnames";
import AnomIcon from "../assets/icons/Anom";
import RightArrowCircleIcon from "../assets/icons/task/RightArrowCircle";
import Modal from "../components/common/Modal";
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
          <div className=" w-16 bg-blue-500 h-16"> </div>
        </div>
        <div className="mt-5 flex justify-center  ">
          <span className="  text-white font-sf-pro-text text-[20px] ">
            Join Squad
          </span>
        </div>
        <div className="  flex justify-center  flex-col">
          <div className="  text-white font-sf-pro-text text-sm text-center">
            Yes! Join a squad to swipe and earn together.
          </div>
          <div className="  text-white font-sf-pro-text text-sm text-center">
            Maximize profits and climb the rankings
          </div>
        </div>
        <div className="flex mx-8 mt-9">
          <div className="w-full h-full border-2 border-white rounded-[20px] flex flex-col bg-telegram-btn shadow-[0_6px_0px_#0090FF] p-3">
            <div className="flex justify-center">
              <span className="text-white text-sm text-center font-sf-pro-text flex pt-[1px]">
                Create a squad and invite all members or join a custom squad.
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-white text-sm text-center font-sf-pro-text flex pt-[1px]">
                Manage the Treasury now!
              </span>
            </div>

            <div
              className="my-3 w-full h-full rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[16px] font-sf-pro-text font-bold flex items-center justify-center p-3"
              onClick={handleClickSquad}
            >
              Create or Join a custom squad
            </div>
          </div>
        </div>
        <div className=" mt-9 flex justify-center  ">
          <div className="  text-white font-sf-pro-text text-sm text-center">
            Recommended Squad
          </div>
        </div>
        <div className="flex mx-8 mt-3">
          <div className="w-full h-full border-2 border-white rounded-[20px] flex flex-col bg-telegram-btn shadow-[0_6px_0px_#0090FF]  ">
            <div
              className={classNames(
                "my-2 rounded pl-5 pr-2   flex justify-between items-center cursor-pointer"
              )}
              onClick={handleClick}
            >
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <AnomIcon width={35} height={35} />
                    <span className="text-white text-[16px] font-sf-pro-text">
                      Yescoin
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-16 h-[30px] flex justify-center items-center">
                <RightArrowCircleIcon />
              </div>
            </div>
            <div
              className={classNames(
                "my-2 rounded pl-5 pr-2   flex justify-between items-center cursor-pointer"
              )}
            >
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <AnomIcon width={35} height={35} />
                    <span className="text-white text-[16px] font-sf-pro-text">
                      Yescoin
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-16 h-[30px] flex justify-center items-center">
                <RightArrowCircleIcon />
              </div>
            </div>
          </div>
        </div>
        <Modal
          show={show}
          onClose={handleClose}
          title={
            show && (
              <div className="mt-10 mx-8 flex flex-col">
                <div className="flex justify-center">
                  <AnomIcon width={35} height={35} />
                </div>
                <div className="mt-6 flex justify-center">
                  <span className="font-sf-pro-text text-white text-sm">
                    Yescoin
                  </span>
                </div>
              </div>
            )
          }
          className={` mx-7 h-1/2  bg-telegram-btn rounded-t-[20px] shadow-xl w-full border-2 border-b-0`}
        >
          {show && (
            <div className="my-1 flex flex-col text-white">
              <div className=" my-4 flex flex-row justify-center items-center">
                <div className="flex flex-col mx-3 justify-center items-center">
                  <AnomIcon width={35} height={35} />
                  <span className="font-sf-pro-text text-white text-sm">
                    Diamond
                  </span>
                </div>
                <div className="flex flex-col mx-3 justify-center items-center">
                  <AnomIcon width={35} height={35} />
                  <span className="font-sf-pro-text text-white text-sm">
                    Calculating
                  </span>
                </div>
              </div>
              <div className=" my-4 flex flex-row justify-center items-center">
                <div className="flex flex-col mx-3 justify-center items-center">
                  <AnomIcon width={35} height={35} />
                  <span className="font-sf-pro-text text-white text-sm">
                    Diamond
                  </span>
                </div>
                <div className="flex flex-col mx-3 justify-center items-center">
                  <AnomIcon width={35} height={35} />
                  <span className="font-sf-pro-text text-white text-sm">
                    Calculating
                  </span>
                </div>
              </div>
              <div className="px-6">
                <div className="my-3 w-full h-full rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[16px] font-sf-pro-text font-bold flex items-center justify-center p-3">
                  Join
                </div>
              </div>
            </div>
          )}
        </Modal>

        <Modal
          show={showSquad}
          onClose={handleCloseSquad}
          title={
            showSquad && (
              <div className="mt-10 mx-8 flex flex-col">
                <div className="flex justify-center">
                  <AnomIcon width={35} height={35} />
                </div>
              </div>
            )
          }
          className={` mx-7 h-1/2  bg-telegram-btn rounded-t-[20px] shadow-xl w-full border-2 border-b-0`}
        >
          {showSquad && (
            <div className="my-1 flex flex-col text-white">
              <div className=" my-4 flex flex-col justify-center items-center">
                <div className="flex flex-col mx-3 text-center justify-center items-center text-lg font-bold">
                  Create or join squad
                </div>
                <div className="flex flex-col mx-3 text-center justify-center items-center text-sm">
                  Just enter the public group or channel link below and click
                  join to automatically join or create a squad
                </div>
              </div>
              <div className=" my-4 px-5 flex flex-row justify-center items-center">
                <input
                  className="w-full"
                  placeholder="eg. t.me/theYescoin or @theYescoin"
                />
              </div>
              <div className="px-6">
                <div className="my-3 w-full h-full rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[16px] font-sf-pro-text font-bold flex items-center justify-center p-3">
                  Join
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
};

export default Squad;
