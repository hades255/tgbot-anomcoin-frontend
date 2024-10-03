import React from "react";
import AnomGreyIcon from "../assets/icons/AnomGrey";
import InviteBtn from "../components/frens/InviteBtn";
import FrensList from "../components/frens/FrensList";

const Frens = () => {
  return (
    <div className="flex flex-col mb-28">
      <div className="flex justify-center">
        <span className="pt-9 text-white font-sf-pro-text text-lg">
          Total rewards
        </span>
      </div>
      <div className="flex justify-center">
        <span className="pt-2 text-white font-sf-pro-text text-[32px] font-bold">
          0
        </span>
      </div>
      <div className="flex justify-center">
        <AnomGreyIcon />
      </div>
      <div className="flex justify-center">
        <span className="pb-9 text-white font-sf-pro-text text-lg font-bold">
          Yes Friends
        </span>
      </div>
      <div className="px-8 flex flex-col">
        <p className="mb-2 pl-1 text-white font-sf-pro-text text-lg font-bold">
          Invite frens to get bonus
        </p>
        <div className="w-full border-2 border-white rounded-[20px] flex flex-col bg-telegram-btn shadow-[0_6px_0px_#0090FF] py-3">
          <div className="flex justify-end">
            <div className="bg-[#00000080] flex items-center pl-[6px] pr-3 rounded-s-[14px]">
              <span className="text-black bg-white rounded-[10px] pl-[1px] font-sf-pro-text w-[19px] h-[19px] flex justify-center items-center text-xs mr-1">
                ?
              </span>
              <span className="text-white font-sf-pro-text flex pt-[1px]">
                Rules
              </span>
            </div>
          </div>
          <div className="px-4 flex flex-col">
            <div className="mb-4 flex">
              <div className="w-12 min-w-12 h-12 min-h-12 bg-[#D9D9D9] rounded mr-3"></div>
              <div className="flex items-center text-white font-sf-pro-text">
                Send gift to invite friend
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-12 min-w-12 h-12 min-h-12 bg-[#D9D9D9] rounded mr-3"></div>
              <div className="flex items-center text-white font-sf-pro-text">
                You and your invite both get 100L and random bonus.
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-12 min-w-12 h-12 min-h-12 bg-[#D9D9D9] rounded mr-3"></div>
              <div className="flex items-center text-white font-sf-pro-text">
                Send gift to invite friend
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 flex flex-col">
        <p className="mb-2 mx-8 pl-1 text-white font-sf-pro-text text-lg font-bold">
          Extra bonus
        </p>
        <div className="px-8 pb-2 flex overflow-x-visible overflow-y-hidden gap-3">
          <div className="w-[calc(100vw_-_64px)] min-w-[calc(100vw_-_64px)] border-2 border-white rounded-[20px] flex justify-between bg-telegram-btn shadow-[0_4px_0px_#0090FF] p-4">
            <div className="flex items-center">
              <div className="w-12 min-w-12 h-12 min-h-12 bg-[#D9D9D9] rounded mr-3"></div>
              <div className="flex flex-col">
                <div className="flex items-center text-white font-sf-pro-text font-bold text-lg">
                  invite 1 friend
                </div>
                <div className="flex items-center text-[#FFE484] font-sf-pro-text font-bold text-lg">
                  + 50,000
                </div>
              </div>
            </div>
            <div className="flex items-center text-[#FFE484] font-sf-pro-text font-bold text-lg">
              {">"}
            </div>
          </div>
          <div className="w-[calc(100vw_-_64px)] min-w-[calc(100vw_-_64px)] border-2 border-white rounded-[20px] flex justify-between bg-telegram-btn shadow-[0_4px_0px_#0090FF] p-4">
            <div className="flex items-center">
              <div className="w-12 min-w-12 h-12 min-h-12 bg-[#D9D9D9] rounded mr-3"></div>
              <div className="flex flex-col">
                <div className="flex items-center text-white font-sf-pro-text font-bold text-lg">
                  invite 1 friend
                </div>
                <div className="flex items-center text-[#FFE484] font-sf-pro-text font-bold text-lg">
                  + 50,000
                </div>
              </div>
            </div>
            <div className="flex items-center text-[#FFE484] font-sf-pro-text font-bold text-lg">
              {">"}
            </div>
          </div>
        </div>
      </div>
      <FrensList />
      <div className="fixed bottom-16 mx-7 w-[calc(100vw_-_56px)] h-11">
        <InviteBtn />
      </div>
    </div>
  );
};

export default Frens;
