import React, { useCallback, useState } from "react";
import TabBar from "../components/task/TabBar";
import DailyTab from "../components/task/DailyTab";

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
        <div className="z-0 -mt-2 bg-[#1A2B47] rounded-xl p-3 flex flex-col min-h-[500px] border border-[#10B3E8]">
          {tab === 0 && <DailyTab />}
        </div>
      </div>
    </div>
  );
};

export default Task;
