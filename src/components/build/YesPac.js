import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BACKEND_PATH } from "@constants/config";
import { useAuth } from "@contexts/AuthContext";
import { formatNumber, yespacCoin } from "@helper/func";
import { setScore, upgradeBooster } from "@redux/coinSlice";
import Modal from "@common/Modal";
import AnomIcon from "@icons/Anom";
import Doll3Icon from "@icons/task/Doll3";
import BoosterModal from "./BoosterModal";

const YesPac = () => {
  const level = useSelector((state) => state.coin.yesPac);
  const booster = useMemo(
    () => ({
      id: "yesPac",
      title: "YesPac",
      icon: () => <Doll3Icon />,
      coin: yespacCoin,
      subcontent: `upgrade to lvl${
        level + 1
      }-extend offline reward duration to ${
        level + 1
      } hours Auto collect if don't play for ${
        level + 1
      }0 min, max work duration is ${level + 1} hours`,
    }),
    [level]
  );

  const [show, setShow] = useState(false);

  const handleClick = useCallback(() => setShow(true), []);

  const handleClose = useCallback(() => setShow(false), []);

  return (
    <>
      <div
        className="rounded-[4px] flex justify-between bg-build-item shadow-[0_6px_0px_#001233,0_12px_4px_#00000040] px-4 py-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center">
          <div className="w-10 min-w-10 h-10 min-h-10 bg-white rounded mr-3 flex justify-center items-center">
            <Doll3Icon />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-white font-sf-pro-text text-[14px]">
              YesPac
            </div>
            <div className="flex items-center text-white font-sf-pro-text font-semibold text-[16px]">
              <AnomIcon />
              {formatNumber(yespacCoin(level))} / Lel {level + 1}
            </div>
          </div>
        </div>
        <div className="w-20 h-[60px] flex justify-center items-center">
          {level === 0 ? (
            <button className="w-20 h-7 bg-task-claim rounded-lg text-white text-xs font-sf-pro-text font-semibold border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] shadow-[0_4px_0px_#0090FF]">
              Buy
            </button>
          ) : (
            <div className="flex flex-col">
              <div className="flex justify-center mb-2">
                <button className="w-12 h-5 bg-task-claim rounded-lg text-white text-xs font-sf-pro-text font-semibold border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] shadow-[0_4px_0px_#0090FF]">
                  On
                </button>
              </div>
              <div className="flex justify-center text-black text-xs font-sf-pro-text font-semibold border px-2 bg-[#FFFF00]">
                Level Up
              </div>
            </div>
          )}
        </div>
      </div>
      {show &&
        (level === 0 ? (
          <YesPacModal
            show={show}
            booster={booster}
            onClose={handleClose}
            level={level}
          />
        ) : (
          <BoosterModal
            show={show}
            booster={booster}
            onClose={handleClose}
            level={level}
          />
        ))}
    </>
  );
};

export default YesPac;

const YesPacModal = ({ booster, level, onClose, show }) => {
  const { userId } = useAuth();
  const { point } = useSelector((state) => state.coin);
  const dispatch = useDispatch();

  const handleClickStart = useCallback(() => {
    (async () => {
      try {
        const response = await axios.post(
          `${BACKEND_PATH}/user/build?userId=${userId}`,
          { point: 10000, boosterKey: booster.id }
        );
        dispatch(
          upgradeBooster({
            boosterKey: response.data.boosterKey,
            boost: response.data.boost,
          })
        );
        dispatch(setScore(response.data.point));
        onClose();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [onClose, booster, userId, dispatch]);

  return (
    <>
      <Modal
        show={show}
        onClose={onClose}
        title={
          show ? (
            <div className="-mt-14 flex flex-col">
              <div className="flex justify-center">
                {booster.icon && booster.icon()}
              </div>
              <div className="flex justify-center">
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
          "mx-7 bg-telegram-btn rounded-[20px] shadow-xl w-full border-2"
        }
        showClose={level === 0}
        blur={false}
      >
        {show && (
          <div className="px-2 flex flex-col">
            <div className="mb-1 mx-4 flex justify-center font-sf-pro-text text-white text-[14px] text-center">
              Own a mining pet to help you get alpcoin automatically
            </div>
            <div className="border-2 rounded-xl px-4 py-1 bg-[#10B3E8] flex flex-col">
              <p className="text-[9px] text-white font-sf-pro-text text-center">
                lv1:
              </p>
              <p className="text-[9px] text-white font-sf-pro-text text-center">
                Your pet devours Alpcoin on the screen at 8px speed
              </p>
              <p className="mt-2 text-[9px] text-white font-sf-pro-text text-center">
                lv2:
              </p>
              <p className="text-[9px] text-white font-sf-pro-text text-center">
                Add offline reward mode that lasts for 2 hours
              </p>
              <p className="mt-2 text-[9px] text-white font-sf-pro-text text-center">
                lv3:
              </p>
              <p className="text-[9px] text-white font-sf-pro-text text-center">
                Extend offline reward duration to 12 hours
              </p>
              <p className="mt-2 text-[9px] text-white font-sf-pro-text text-center">
                lv4:
              </p>
              <p className="text-[9px] text-white font-sf-pro-text text-center">
                Offline mining mode lasts for 12 hours
              </p>
              <p className="text-[9px] text-white font-sf-pro-text text-center">
                Earn an extra 30% offline mining bonus * 7 days
              </p>
              <p className="mt-2 text-[9px] text-white font-sf-pro-text text-center">
                lv5:
              </p>
              <p className="text-[9px] text-white font-sf-pro-text text-center">
                Offline mining mode lasts for 12 hours
              </p>
              <p className="text-[9px] text-white font-sf-pro-text text-center">
                Earn an extra 60% offline mining bonus * 7 days
              </p>
            </div>
            <div className="my-1 flex justify-center items-center">
              <AnomIcon width={48} height={48} />
              <span className="font-sf-pro-text text-white text-[24px] font-bold">
                {formatNumber(yespacCoin(level))} / Lel {level + 1}
              </span>
            </div>
            <div className="mx-2 mb-4 flex justify-center">
              <button
                disabled={point < yespacCoin(level)}
                onClick={handleClickStart}
                className="w-full border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] rounded-[22px] h-[44px] bg-task-claim  shadow-[0_4px_2px_#0000001A,0_4px_2px_#0090FF,0_8px_4px_#00000040] font-sf-pro-text text-white text-[20px] font-bold"
              >
                Buy
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
