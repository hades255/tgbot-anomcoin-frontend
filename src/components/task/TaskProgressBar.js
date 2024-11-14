import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { TASKS } from "@constants/constants";

const TaskProgressBar = ({ tab }) => {
  const tasks = useSelector((state) => state.task);
  const percent = useMemo(() => {
    let ct = 0;
    const all = TASKS[["daily", "ot", "special"][tab]].length || 0;
    TASKS[["daily", "ot", "special"][tab]].forEach((item) => {
      if (tasks[item].claim) ct++;
    });
    return all === 0 ? 0 : ct / all;
  }, [tasks, tab]);

  return (
    <div className="my-1 flex justify-between items-center">
      <span className="text-white text-[16px] font-sf-pro-text min-w-12">
        {Math.round(percent * 100)}%
      </span>
      <div className="w-[294px] h-[18px] rounded-[20px] bg-white flex justify-start items-center px-[2px]">
        <div
          className="bg-time-progress-bar h-[16px] rounded-[20px] transition-all"
          style={{ width: percent * 290 }}
        ></div>
      </div>
    </div>
  );
};

export default TaskProgressBar;
