import React, { useCallback, useState } from "react";
import AnomIcon from "../../assets/icons/Anom";
import RightArrowCircleGlowIcon from "../../assets/icons/task/RightArrowCircleGlow";
import { BOOSTERS } from "../../constants/constants";
import BoosterModal from "./BoosterModal";
import YesPac from "./YesPac";
import { useSelector } from "react-redux";

const Boosters = () => {
  return (
    <>
      <div className="px-8 flex flex-col gap-3">
        {BOOSTERS.map((item) => (
          <BoosterItem key={item.id} booster={item} />
        ))}
        <YesPac />
      </div>
    </>
  );
};

export default Boosters;

const BoosterItem = ({ booster }) => {
  const [show, setShow] = useState(false);
  const level = useSelector((state) => state.coin[booster.id]);
  console.log(level)

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
            {booster.icon && booster.icon()}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center text-white font-sf-pro-text text-[14px]">
              {booster.title}
            </div>
            <div className="flex items-center text-white font-sf-pro-text font-semibold text-[16px]">
              <AnomIcon />
              {booster.coin} / Lel {level + 1}
            </div>
          </div>
        </div>
        <div className="w-20 h-[60px] flex justify-center items-center">
          <RightArrowCircleGlowIcon />
        </div>
      </div>
      {show && (
        <BoosterModal
          show={show}
          booster={booster}
          onClose={handleClose}
          level={level}
        />
      )}
    </>
  );
};
