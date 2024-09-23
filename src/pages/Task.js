import React from "react";
import AnomIcon from "../assets/icons/Anom";

const Task = () => {
  return (
    <div className="flex flex-col font-sf-pro-text">
      <div className="flex justify-center">
        <span className="py-6 text-white font-sf-pro-text text-[24px] font-bold">
          EARN MORE ALPCOIN
        </span>
      </div>
      <div className="px-1 flex flex-col">
        <div className="flex">
          <div className="w-1/3 flex justify-center">
            <div className="text-white text-[16px] font-sf-pro-text">
              Daily Task
            </div>
          </div>
          <div className="w-1/3 flex justify-center">
            <div className="text-white text-[16px] font-sf-pro-text">Task</div>
          </div>
          <div className="w-1/3 flex justify-center">
            <div className="text-white text-[16px] font-sf-pro-text">
              Special
            </div>
          </div>
        </div>
        <div className="border rounded-xl p-2 flex flex-col min-h-[500px]">
          <div className="flex justify-between items-center">
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
          <div className="border rounded px-2 py-3 flex flex-col">
            <div className="text-white text-[16px] font-sf-pro-text">
              Yes Headlines
            </div>
            <div className="border rounded px-5 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <div>X</div>
                <div className="flex flex-col">
                  <span className="text-white text-[16px] font-sf-pro-text">
                    React on the post
                  </span>
                  <div className="flex items-center">
                    <span className="text-white text-[16px] font-sf-pro-text">
                      +10K
                    </span>
                    <AnomIcon width={35} height={35} />
                  </div>
                </div>
              </div>
              <div>icon</div>
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
