import React from "react";
import AnomIcon from "../assets/icons/Anom";
import RightArrowCircleIcon from "../assets/icons/task/RightArrowCircle";
import TwitterIcon from "../assets/icons/task/Twitter";
import TelegramIcon from "../assets/icons/task/Telegram";
import DiscordIcon from "../assets/icons/task/Discord";
import RightArrowCircleGlowIcon from "../assets/icons/task/RightArrowCircleGlow";

const Task = () => {
  return (
    <div className="flex flex-col font-sf-pro-text">
      <div className="flex justify-center">
        <span className="py-6 text-white font-sf-pro-text text-[24px] font-bold">
          EARN MORE ALPCOIN
        </span>
      </div>
      <div className="px-1 flex flex-col">
        <div className="h-20 flex items-end">
          <div className="w-full flex gap-1 items-end">
            <div className="w-1/3 flex justify-center">
              <div className="h-16 w-full rounded-t-xl bg-task-active-tab flex justify-center items-center">
                <div>
                  <p className="text-white text-[16px] font-sf-pro-text">
                    Daily Task
                  </p>
                  <p className="text-white text-[12px] font-sf-pro-text">
                    08:05:05
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex justify-center">
              <div className="h-14 w-full rounded-t-xl text-white text-[16px] font-sf-pro-text bg-[#1A2B47] flex justify-center items-center">
                Task
              </div>
            </div>
            <div className="w-1/3 flex justify-center">
              <div className="h-14 w-full rounded-t-xl text-white text-[16px] font-sf-pro-text bg-[#1A2B47] flex justify-center items-center">
                Special
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-2 bg-[#1A2B47] rounded-xl p-2 flex flex-col min-h-[500px] border border-[#10B3E8]">
          <div className="my-1 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-white text-[12px] font-sf-pro-text">
                Complete ALl Daily Task:
              </span>
              <AnomIcon width={35} height={35} />
              <span className="text-white text-[12px] font-sf-pro-text">
                +50K
              </span>
            </div>
            <div className="text-white text-[12px] font-sf-pro-text">Claim</div>
          </div>
          <div className="flex justify-between">
            <span className="text-white text-[16px] font-sf-pro-text">20%</span>
            <div className="w-[360px] h-[18px] rounded-[20px] bg-white flex justify-start items-center px-[2px]">
              <div
                className="bg-time-progress-bar h-[16px] rounded-[20px]"
                style={{ width: (20 / 100) * 356 }}
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
        </div>
      </div>
    </div>
  );
};

export default Task;
