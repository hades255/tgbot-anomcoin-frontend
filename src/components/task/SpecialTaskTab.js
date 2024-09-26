import React from "react";
import AnomIcon from "../../assets/icons/Anom";
import { dailyTasks } from "../../constants/constants";
import DailyTaskItem from "./DailyTaskItem";
import TaskProgressBar from "./TaskProgressBar";

const SpecialTaskTab = () => {
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
      <TaskProgressBar category="special" />
      <div className="text-white text-[10px] font-sf-pro-text py-1">
        Tips: Consistently completing daily task will trigger level-ups.
      </div>
      <div className="bg-[#28426C] rounded my-1 px-2 py-3 flex flex-col min-h-[calc(100vh_-_320px)]">
        <div className="text-white text-[16px] font-sf-pro-text">
          Yes Headlines
        </div>
        {dailyTasks.map((item) => (
          <DailyTaskItem key={item.id} task={item} />
        ))}
        <div className="text-white text-[16px] font-sf-pro-text pt-2">
          Yes Questing
        </div>
      </div>
    </>
  );
};

export default SpecialTaskTab;
