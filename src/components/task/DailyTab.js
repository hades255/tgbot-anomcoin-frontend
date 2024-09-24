import React from "react";
import AnomIcon from "../../assets/icons/Anom";
import TwitterIcon from "../../assets/icons/task/Twitter";
import TelegramIcon from "../../assets/icons/task/Telegram";
import DiscordIcon from "../../assets/icons/task/Discord";
import RightArrowCircleGlowIcon from "../../assets/icons/task/RightArrowCircleGlow";
import RightArrowCircleIcon from "../../assets/icons/task/RightArrowCircle";

const DailyTab = () => {
  return (
    <>
      <div className="my-1 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-[12px] font-sf-pro-text">
            Complete ALl Daily Task:
          </span>
          <AnomIcon width={35} height={35} />
          <span className="text-white text-[12px] font-sf-pro-text">+50K</span>
        </div>
        <div className="text-white text-[12px] font-sf-pro-text">
          <button className="border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-[91px] h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF]">
            Claim
          </button>
        </div>
      </div>
      <div className="my-1 flex justify-between items-center">
        <span className="text-white text-[16px] font-sf-pro-text min-w-12">
          20%
        </span>
        <div className="w-[310px] h-[18px] rounded-[20px] bg-white flex justify-start items-center px-[2px]">
          <div
            className="bg-time-progress-bar h-[16px] rounded-[20px]"
            style={{ width: (20 / 100) * 306 }}
          ></div>
        </div>
      </div>
      <div className="text-white text-[10px] font-sf-pro-text py-1">
        Tips: Consistently completing daily task will trigger level-ups.
      </div>
      <div className="bg-[#28426C] rounded my-1 px-2 py-3 flex flex-col">
        <div className="text-white text-[16px] font-sf-pro-text">
          Yes Headlines
        </div>
        <div className="my-2 rounded px-5 pt-3 py-1 flex justify-between items-center bg-twitter-btn shadow-[0_6px_0px_#1D1D1D,0_12px_2px_#0000001A]">
          <div className="flex items-center">
            <div className="mr-5">
              <TwitterIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[16px] font-sf-pro-text">
                React 😘 on the post
              </span>
              <div className="flex items-center">
                <span className="text-white text-[16px] font-sf-pro-text">
                  +10K
                </span>
                <AnomIcon width={35} height={35} />
              </div>
            </div>
          </div>
          <div className="mr-[13px]">
            <RightArrowCircleIcon />
          </div>
        </div>
        <div className="my-2 rounded px-5 pt-3 py-1 flex justify-between items-center bg-telegram-btn shadow-[0_6px_0px_#0546BC,0_12px_2px_#0000001A]">
          <div className="flex items-center">
            <div className="mr-5">
              <TelegramIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[16px] font-sf-pro-text">
                React 😘 on the post
              </span>
              <div className="flex items-center">
                <span className="text-white text-[16px] font-sf-pro-text">
                  +10K
                </span>
                <AnomIcon width={35} height={35} />
              </div>
            </div>
          </div>
          <div>
            <RightArrowCircleGlowIcon />
          </div>
        </div>
        <div className="my-2 rounded px-5 pt-3 py-1 flex justify-between items-center bg-discord-btn shadow-[0_6px_0px_#291DCF,0_12px_2px_#0000001A]">
          <div className="flex items-center">
            <div className="mr-5">
              <DiscordIcon />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[16px] font-sf-pro-text">
                React 😘 on the post
              </span>
              <div className="flex items-center">
                <span className="text-white text-[16px] font-sf-pro-text">
                  +10K
                </span>
                <AnomIcon width={35} height={35} />
              </div>
            </div>
          </div>
          <div>
          <RightArrowCircleGlowIcon />
          </div>
        </div>
        <div className="text-white text-[16px] font-sf-pro-text pt-2">
          Yes Questing
        </div>
      </div>
    </>
  );
};

export default DailyTab;
