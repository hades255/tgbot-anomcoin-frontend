import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { TASKS, taskTabItems } from "../../constants/constants";

const TabBar = ({ tab, onClick }) => {
  const handleClick = useCallback((param) => onClick(param), [onClick]);

  return (
    <div className="h-20 flex items-end">
      <div className="w-full flex gap-1 items-end">
        {taskTabItems.map((item) => (
          <TabBarItem
            key={item.tab}
            tab={tab}
            item={item}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

const TabBarItem = ({ tab, item, onClick }) => {
  const tasks = useSelector((state) => state.task);
  const count = useMemo(() => {
    let ct = 0;
    TASKS[["daily", "ot", "special"][item.tab]].forEach((task) => {
      if (!tasks[task]) ct++;
    });
    return ct;
  }, [tasks, item]);

  const handleClick = useCallback(() => onClick(item.tab), [item, onClick]);

  return (
    <div className="w-1/3 flex justify-center relative">
      {tab === item.tab && (
        <div className="absolute -z-0 bottom-[38px] w-full flex justify-center">
          {item.icon}
        </div>
      )}
      {count && (
        <div className="absolute z-[1] -top-3 right-0 w-6 h-6 flex justify-center items-center font-sf-pro-text text-white rounded-xl bg-[#F00]">
          {count}
        </div>
      )}
      <div
        onClick={handleClick}
        className={classNames(
          "cursor-pointer w-full rounded-t-xl flex justify-center items-center z-0 pb-1",
          {
            "h-[60px] bg-task-active-tab": tab === item.tab,
            "h-[52px] bg-[#28426C]": tab !== item.tab,
          }
        )}
      >
        {item.content}
      </div>
    </div>
  );
};

export default TabBar;
