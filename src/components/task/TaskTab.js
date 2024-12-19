import React from "react";
import { normalTasks } from "@constants/constants";
import DailyTaskItem from "./DailyTaskItem";

const TaskTab = () => {
  return (
    <>
      <div className="bg-[#28426C] rounded my-1 px-2 py-3 flex flex-col min-h-[calc(100vh_-_320px)]">
        <div className="text-white text-[16px] font-sf-pro-text">
          Yes Headlines
        </div>
        {normalTasks.map((item) => (
          <DailyTaskItem key={item.id} task={item} category="ot" />
        ))}
      </div>
    </>
  );
};

export default TaskTab;
