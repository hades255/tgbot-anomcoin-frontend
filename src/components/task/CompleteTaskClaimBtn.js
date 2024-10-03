import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { TASKS } from "../../constants/constants";
import classNames from "classnames";

const CompleteTaskClaimBtn = ({ tab }) => {
  const tasks = useSelector((state) => state.task);
  const percent = useMemo(() => {
    let ct = 0;
    let all = 0;
    TASKS[["daily", "ot", "special"][tab]].forEach((item) => {
      all++;
      if (tasks[item].claim) ct++;
    });
    return all === 0 ? 0 : ct / all;
  }, [tasks, tab]);

  return (
    <>
      <button
        disabled={percent !== 1}
        className={classNames(
          "border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-[91px] h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF] text-[12px] font-sf-pro-text",
          {
            "text-white": percent === 1,
            "text-[#4b6c96]": percent !== 1,
          }
        )}
      >
        Claim
      </button>
    </>
  );
};

export default CompleteTaskClaimBtn;
