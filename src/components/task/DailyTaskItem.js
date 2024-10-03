import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import classNames from "classnames";
import { updateTask } from "../../redux/taskSlice";
import { useAuth } from "../../contexts/AuthContext";
import { formatNumber } from "../../helper/func";
import { BACKEND_PATH } from "../../constants/config";
import AnomIcon from "../../assets/icons/Anom";
import RightArrowCircleIcon from "../../assets/icons/task/RightArrowCircle";
import RightArrowCircleGlowIcon from "../../assets/icons/task/RightArrowCircleGlow";
import { setScore } from "../../redux/coinSlice";
import TaskModal from "./TaskModal";

const DailyTaskItem = ({ task, category = "daily" }) => {
  const dispatch = useDispatch();
  const { userId } = useAuth();
  const taskStatus = useSelector((state) => state.task[task.id]);

  const [show, setShow] = useState(false);

  const serverurl = useMemo(
    () => `${BACKEND_PATH}/task/${category}task?userId=${userId}`,
    [userId, category]
  );

  const handleClick = useCallback(() => {
    if (taskStatus.claim) return;
    setShow(true);
  }, [taskStatus]);

  const handleClose = useCallback(
    (param) => {
      if (param) {
        (async () => {
          try {
            const response = await axios.post(serverurl, {
              [param]: true,
            });
            if (response.data && response.data.data)
              dispatch(setScore(response.data.data));
            dispatch(updateTask({ key: param, subkey: "claim", value: true }));
          } catch (error) {
            console.log(error);
          }
        })();
      }
      setShow(false);
    },
    [dispatch, serverurl]
  );

  return (
    <>
      <div
        className={classNames(
          "my-2 rounded pl-5 pr-2 pt-3 pb-1 flex justify-between items-center cursor-pointer",
          task.bgColor,
          task.shadow
        )}
        onClick={handleClick}
      >
        <div className="flex items-center">
          <div className="w-10 mr-4">{task.icon()}</div>
          <div className="flex flex-col">
            <span className="text-white text-[14px] font-sf-pro-text">
              {task.title}
            </span>
            <div className="flex items-center">
              <span className="text-white text-[16px] font-sf-pro-text">
                +{formatNumber(task.bonus)}
              </span>
              <AnomIcon width={35} height={35} />
            </div>
          </div>
        </div>
        <div className="w-16 h-[60px] flex justify-center items-center">
          {taskStatus.claim ? (
            <RightArrowCircleIcon />
          ) : (
            <RightArrowCircleGlowIcon />
          )}
        </div>
      </div>
      <TaskModal
        task={task}
        status={taskStatus}
        show={show}
        onClose={handleClose}
      />
    </>
  );
};

export default DailyTaskItem;
