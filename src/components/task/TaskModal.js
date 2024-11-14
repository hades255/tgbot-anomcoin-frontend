import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { formatNumber } from "@helper/func";
import { updateTask } from "@redux/taskSlice";
import Modal from "@common/Modal";
import AnomIcon from "@icons/Anom";

const TaskModal = ({ task, status, onClose, show }) => {
  const dispatch = useDispatch();

  const handleClickStart = useCallback(() => {
    dispatch(updateTask({ key: task.id, subkey: "start", value: true }));
  }, [dispatch, task]);

  const handleClickCheck = useCallback(() => {
    if (status.check) {
      onClose(task.id);
      return;
    }
    dispatch(
      updateTask({
        key: task.id,
        subkey: "check",
        value: true,
      })
    );
  }, [dispatch, task, status, onClose]);

  return (
    <>
      <Modal
        show={show}
        onClose={onClose}
        title={
          show ? (
            <div className="mt-10 flex flex-col">
              <div className="flex justify-center">
                {task.icon && task.icon(64, 64)}
              </div>
              <div className="mt-6 flex justify-center">
                <span className="font-sf-pro-text text-white">
                  {task.title}
                </span>
              </div>
            </div>
          ) : (
            ""
          )
        }
        className={`${task.bgColor} rounded-t-[20px] shadow-xl w-full border-2 border-b-0`}
      >
        {show && (
          <div className="my-1 flex flex-col">
            {task.subcontent && (
              <div className="flex justify-center font-sf-pro-text text-white">
                {task.subcontent}
              </div>
            )}
            {task.bonus && (
              <div className="mt-9 flex justify-center items-center">
                <span className="font-sf-pro-text text-white text-[28px] font-bold">
                  +{formatNumber(task.bonus)}
                </span>
                <AnomIcon width={62} height={62} />
              </div>
            )}
            <div className="h-28 my-4 flex justify-center items-center">
              <div className="flex flex-col">
                <button
                  onClick={handleClickStart}
                  className="m-2 border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-[125px] h-[34px] bg-task-claim shadow-[0_3px_0px_#0090FF,0_5px_2px_#0000001A,0_7px_4px_#00000040] font-sf-pro-text text-white text-[20px] font-bold"
                >
                  Start
                </button>
                {status.start && (
                  <button
                    onClick={handleClickCheck}
                    className="m-2 border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-lg w-[125px] h-[34px] bg-task-claim shadow-[0_3px_0px_#0090FF,0_5px_2px_#0000001A,0_7px_4px_#00000040] font-sf-pro-text text-white text-[20px] font-bold"
                  >
                    {status.check ? "Claim" : "Check"}
                  </button>
                )}
              </div>
              {task.redirect ? <></> : <></>}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default TaskModal;
