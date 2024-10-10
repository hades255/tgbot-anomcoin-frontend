import React, { useCallback, useState } from "react";
import classNames from "classnames";
import Modal from "../common/Modal";
import GiftIcon from "../../assets/icons/invite/Gift";

const DailyBooster = () => {
  const [show, setShow] = useState(false);

  const handleClickDailyBooster = useCallback(() => setShow(true), []);

  const handleClose = useCallback(() => setShow(false), []);

  return (
    <>
      <div
        onClick={handleClickDailyBooster}
        className={classNames(
          "z-10 absolute bottom-0 right-0 w-6 h-6 rounded-[12px] bg-white hover:bg-blue-600 transition-all flex justify-center items-center cursor-pointer"
        )}
      >
        B
      </div>
      <BoosterModal onClose={handleClose} show={show} />
    </>
  );
};

export default DailyBooster;

const BoosterModal = ({ onClose, show }) => {
  return (
    <>
      <Modal
        show={show}
        onClose={onClose}
        title={
          <div className="flex justify-center my-6">
            <span className="font-sf-pro-text text-[28px] text-white">
              Daily Boosters
            </span>
          </div>
        }
        className={
          "mx-7 bg-telegram-btn rounded-[20px] shadow-xl w-full border-2"
        }
        showClose={true}
        blur={false}
      >
        {show && (
          <div className="p-2 flex flex-col">
            <div className="flex gap-2 my-4">
              <div className="h-[74px] bg-build-item shadow-[0px_12px_4px_0px_#00000040,0px_6px_0px_0px_#001233] rounded-[4px] w-full flex items-end relative pb-1">
                <div className="w-full flex flex-col">
                  <span className="text-center font-sf-pro-text text-[14px] text-white">
                    Chest
                  </span>
                  <span className="text-center font-sf-pro-text text-[12px] text-white">
                    3/3 Available
                  </span>
                </div>
              </div>
              <div className="h-[74px] bg-build-item shadow-[0px_12px_4px_0px_#00000040,0px_6px_0px_0px_#001233] rounded-[4px] w-full flex items-end relative pb-1">
                <div className="w-full flex flex-col">
                  <span className="text-center font-sf-pro-text text-[14px] text-white">
                    Full Recovery
                  </span>
                  <span className="text-center font-sf-pro-text text-[12px] text-white">
                    3/3 Available
                  </span>
                </div>
              </div>
            </div>
            <div className="mb-4 rounded-[4px] bg-medal-btn shadow-[0_6px_0px_#CB7C06,0_12px_4px_#00000040] p-4 flex flex-col">
              <div className="flex items-center">
                <div className="w-[66px] h-[66px] rounded-[4px] bg-task-item-icon-bg p-1 mr-6">
                  <div className="w-full h-full rounded-[4px] bg-task-item-jewel flex justify-center items-center pl-2">
                    <GiftIcon width={56} height={54} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-sf-pro-text text-[14px] text-white">
                    Claim Bonus Pack
                  </div>
                  <div className="flex items-center">
                    <div className="w-[30px] h-[30px] rounded-[4px] bg-task-item-icon-bg mr-2"></div>
                    <span className="font-sf-pro-text text-[14px] text-white mr-6">
                      +12
                    </span>
                    <div className="w-[30px] h-[30px] rounded-[4px] bg-task-item-icon-bg mr-2"></div>
                    <span className="font-sf-pro-text text-[14px] text-white">
                      +6
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-2 h-[29px] rounded-[4px] bg-black flex justify-center items-center">
                <img
                  src="/icons/star.png"
                  alt="star"
                  width={20}
                  className="mr-2"
                />
                <span className="text-center font-sf-pro-text text-[12px] text-white">
                  9 stars
                </span>
              </div>
              <div className="text-center font-sf-pro-text text-[12px] text-white">
                Limited to one claim per day
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
