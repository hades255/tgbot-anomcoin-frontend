import React, { useCallback } from "react";
import classNames from "classnames";
import DollIcon from "../../assets/icons/task/Doll";

const TabBar = ({ tab, onClick }) => {
  const handleClickDailyTab = useCallback(() => onClick(0), [onClick]);

  const handleClickTaskTab = useCallback(() => onClick(1), [onClick]);

  const handleClickSpecialTab = useCallback(() => onClick(2), [onClick]);

  return (
    <div className="h-20 flex items-end">
      <div className="w-full flex gap-1 items-end">
        <div className="w-1/3 flex justify-center relative">
          {tab === 0 && (
            <div className="absolute -z-0 bottom-[42px] left-6">
              <DollIcon />
            </div>
          )}
          <div
            onClick={handleClickDailyTab}
            className={classNames(
              "w-full rounded-t-xl flex justify-center items-center z-0 pb-1",
              {
                "h-[60px] bg-task-active-tab": tab === 0,
                "h-[52px] bg-[#28426C]": tab !== 0,
              }
            )}
          >
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
        <div className="w-1/3 flex justify-center relative">
          {tab === 1 && (
            <div className="absolute -z-0 bottom-[42px] left-6">
              <DollIcon />
            </div>
          )}
          <div
            onClick={handleClickTaskTab}
            className={classNames(
              "w-full rounded-t-xl flex justify-center items-center z-0 pb-1",
              {
                "h-[60px] bg-task-active-tab": tab === 1,
                "h-[52px] bg-[#28426C]": tab !== 1,
              }
            )}
          >
            <p className="text-white text-[16px] font-sf-pro-text">Task</p>
          </div>
        </div>
        <div className="w-1/3 flex justify-center relative">
          {tab === 2 && (
            <div className="absolute -z-0 bottom-[42px] left-6">
              <DollIcon />
            </div>
          )}
          <div
            onClick={handleClickSpecialTab}
            className={classNames(
              "w-full rounded-t-xl flex justify-center items-center z-0 pb-1",
              {
                "h-[60px] bg-task-active-tab": tab === 2,
                "h-[52px] bg-[#28426C]": tab !== 2,
              }
            )}
          >
            <p className="text-white text-[16px] font-sf-pro-text">Special</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
