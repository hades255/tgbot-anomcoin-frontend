import React, { useCallback, useState } from "react";
import TabBar from "../components/task/TabBar";
import DailyTab from "../components/task/DailyTab";
import TaskTab from "../components/task/TaskTab";
import SpecialTaskTab from "../components/task/SpecialTaskTab";

const Task = () => {
  const [tab, setTab] = useState(1);

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
          {tab === 0 && <DailyTab />}
          {tab === 1 && <TaskTab />}
          {tab === 2 && <SpecialTaskTab />}
        </div>
      </div>
    </div>
  );
};

export default Task;
