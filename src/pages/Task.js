import React, { useCallback, useState } from "react";
import TabBar from "../components/task/TabBar";
import DailyTab from "../components/task/DailyTab";
import TaskTab from "../components/task/TaskTab";
import SpecialTaskTab from "../components/task/SpecialTaskTab";
import AnomIcon from "../assets/icons/Anom";
import TaskProgressBar from "../components/task/TaskProgressBar";
import CompleteTaskClaimBtn from "../components/task/CompleteTaskClaimBtn";

const Task = () => {
  const [tab, setTab] = useState(0);

  const handleClickTab = useCallback((param) => setTab(param), []);

  return (
    <div className="flex flex-col font-sf-pro-text">
      <div className="flex justify-center">
        <span className="py-6 text-white font-sf-pro-text text-[24px] font-bold">
          EARN MORE ALPCOIN
        </span>
      </div>
      <div className="px-1 flex flex-col">
        <TabBar tab={tab} onClick={handleClickTab} />
        <div className="z-0 -mt-2 mb-8 bg-[#1A2B47] rounded-xl p-3 flex flex-col min-h-[calc(100vh_-_188px)] border border-[#10B3E8] shadow-[0_4px_5.8px_#235ECA,0_8px_0px_#14A1FF]">
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
            <CompleteTaskClaimBtn tab={tab} />
          </div>
          <TaskProgressBar tab={tab} />
          <div className="text-white text-[10px] font-sf-pro-text py-1">
            Tips: Consistently completing daily task will trigger level-ups.
          </div>
          {tab === 0 && <DailyTab />}
          {tab === 1 && <TaskTab />}
          {tab === 2 && <SpecialTaskTab />}
        </div>
      </div>
    </div>
  );
};

export default Task;
