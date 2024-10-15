import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TASKS } from "../../constants/constants";
import classNames from "classnames";
import { useAuth } from "../../contexts/AuthContext";
import { BACKEND_PATH } from "../../constants/config";
import axios from "axios";
import { setScore } from "../../redux/coinSlice";
import { updateBoost } from "../../redux/taskSlice";

const CompleteTaskClaimBtn = ({ tab }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  const { userId } = useAuth();

  const taskClaim = useMemo(
    () => ["dailyClaim", "taskClaim", "specialClaim"][tab],
    [tab]
  );

  const percent = useMemo(() => {
    let ct = 0;
    const all = TASKS[["daily", "ot", "special"][tab]].length || 0;
    TASKS[["daily", "ot", "special"][tab]].forEach((item) => {
      if (tasks[item].claim) ct++;
    });
    return all === 0 ? 0 : ct / all;
  }, [tasks, tab]);

  const serverurl = useMemo(
    () =>
      `${BACKEND_PATH}/task/${
        ["daily", "ot", "special"][tab]
      }task?userId=${userId}`,
    [userId, tab]
  );

  const handleClick = useCallback(() => {
    if (percent === 1) {
      console.log(serverurl);
      (async () => {
        try {
          const response = await axios.post(serverurl, {
            task: { [taskClaim]: true },
            point: 50000,
          });
          if (response.data && response.data.data)
            dispatch(setScore(response.data.data));
          dispatch(updateBoost({ key: taskClaim, value: true }));
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [percent, serverurl, dispatch, taskClaim]);

  return (
    <>
      <button
        disabled={percent !== 1 || tasks[taskClaim]}
        onClick={handleClick}
        className={classNames(
          "border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-[91px] h-[29px] bg-task-claim shadow-[0_2px_0px_#0090FF] text-[12px] font-sf-pro-text",
          {
            "text-white": percent === 1 && !tasks[taskClaim],
            "text-[#4b6c96]": percent !== 1,
            "text-[#4b6c96]": tasks[taskClaim],
          }
        )}
      >
        Claim
      </button>
    </>
  );
};

export default CompleteTaskClaimBtn;
