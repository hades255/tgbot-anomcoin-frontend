import React, { useCallback } from "react";
import { formatNumber } from "../../helper/func";
import Modal from "../common/Modal";
import AnomIcon from "../../assets/icons/Anom";

const BoosterModal = ({ booster, level, onClose, show }) => {

  const handleClickStart = useCallback(() => {}, [booster]);

  return (
    <>
      <Modal
        show={show}
        onClose={onClose}
        title={
          show ? (
            <div className="mt-10 flex flex-col">
              <div className="flex justify-center">
                {booster.icon && booster.icon(120, 120)}
              </div>
              <div className="mt-6 flex justify-center">
                <span className="font-sf-pro-text text-[28px] text-white">
                  {booster.title}
                </span>
              </div>
            </div>
          ) : (
            ""
          )
        }
        className={
          "mx-7 mb-20 bg-telegram-btn rounded-[20px] shadow-xl w-full border-2"
        }
      >
        {show && (
          <div className="px-2 flex flex-col">
            {booster.subcontent && (
              <div className="flex justify-center font-sf-pro-text text-white text-[14px] my-3 text-center">
                {booster.subcontent}
              </div>
            )}
            {booster.coin && (
              <div className="my-1 flex justify-center items-center">
                <AnomIcon width={48} height={48} />
                <span className="font-sf-pro-text text-white text-[24px] font-bold">
                  {formatNumber(booster.coin)} / Lel {level}
                </span>
              </div>
            )}
            <div className="mx-2 mt-4 my-10 flex justify-center">
              <button
                onClick={handleClickStart}
                className="w-full border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-[22px] h-[44px] bg-task-claim  shadow-[0_4px_2px_#0000001A,0_4px_2px_#0090FF,0_8px_4px_#00000040] font-sf-pro-text text-white text-[20px] font-bold"
              >
                Level Up
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default BoosterModal;
