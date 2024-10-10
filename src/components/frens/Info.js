import React from "react";
import GiftIcon from "../../assets/icons/invite/Gift";

const Info = () => {
  return (
    <>
      <div className="flex justify-center pl-6">
        <GiftIcon />
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
            <a
              className="cursor-pointer bg-[#00000080] flex items-center pl-[6px] pr-3 rounded-s-[14px]"
              target="_blank"
              href="/"
            >
              <span className="text-black bg-white rounded-[10px] pl-[1px] font-sf-pro-text w-[19px] h-[19px] flex justify-center items-center text-xs mr-1">
                ?
              </span>
              <span className="text-white font-sf-pro-text flex pt-[1px]">
                Rules
              </span>
            </a>
          </div>
          <div className="px-4 flex flex-col">
            <div className="mb-4 flex">
              <div className="w-12 min-w-12 h-12 min-h-12 bg-white rounded mr-3 flex justify-center items-center">
                <img src="/icons/gift.png" alt="gift" />
              </div>
              <div className="flex items-center text-white font-sf-pro-text">
                Send gift to invite friend
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-12 min-w-12 h-12 min-h-12 bg-white rounded mr-3 flex justify-center items-center">
                <img src="/icons/dice.png" alt="dice" />
              </div>
              <div className="flex items-center text-white font-sf-pro-text">
                You and your invite both get 100L and random bonus.
              </div>
            </div>
            <div className="mb-4 flex">
              <div className="w-12 min-w-12 h-12 min-h-12 bg-white rounded mr-3 flex justify-center items-center">
                <img src="/icons/star.png" alt="star" />
              </div>
              <div className="flex items-center text-white font-sf-pro-text">
                Send gift to invite friend
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
