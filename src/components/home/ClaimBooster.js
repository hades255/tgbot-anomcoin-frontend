import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import clsx from "clsx";
import { BACKEND_PATH } from "@constants/config";
import { useAuth } from "@contexts/AuthContext";
import { updateBoost } from "@redux/taskSlice";
import { appearChestBox, fullRecovery } from "@redux/coinSlice";
import FullRecovery from "@icons/FullRecovery";
import ChestIcon from "@icons/Chest";
import { Horizontal3DotsLoading } from "@icons/loader";

const ClaimBooster = ({ title, icon, remain, onClose, taskKey }) => {
  const dispatch = useDispatch();
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    if (remain) {
      setLoading(true);
      (async () => {
        try {
          const response = await axios.post(
            `${BACKEND_PATH}/task/boost?userId=${userId}`,
            {
              taskKey,
            }
          );
          dispatch(updateBoost({ key: taskKey, value: response.data.count }));
          if (taskKey === "boostRecovery") dispatch(fullRecovery());
          else if (taskKey === "boostChest") {
            dispatch(appearChestBox());
          }
          onClose();
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [onClose, remain, dispatch, taskKey, userId]);

  return (
    <>
      <button
        className={clsx("h-24 w-full flex items-end relative", {
          "opacity-50": remain === 0,
        })}
        disabled={loading}
        onClick={handleClick}
      >
        <div className="h-[74px] w-full bg-build-item shadow-[0px_12px_4px_0px_#00000040,0px_6px_0px_0px_#001233] rounded flex items-end pb-1 relative">
          <div className={clsx("w-full flex flex-col", { "blur-sm": loading })}>
            <span className="text-center font-sf-pro-text text-[14px] text-white">
              {title}
            </span>
            <span className="text-center font-sf-pro-text text-[12px] text-white">
              {remain}/3 Available
            </span>
          </div>
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <Horizontal3DotsLoading width={80} height={20} color="#ccc" />
            </div>
          )}
        </div>
        <div className="absolute top-0 w-full flex justify-center">{icon}</div>
      </button>
    </>
  );
};

const ClaimBoosterPanel = ({ onClose }) => {
  const { boostChest, boostRecovery } = useSelector((state) => state.task);

  return (
    <div className="flex gap-2 mb-4">
      <ClaimBooster
        title={"Chest"}
        icon={<ChestIcon />}
        remain={boostChest}
        onClose={onClose}
        taskKey={"boostChest"}
      />
      <ClaimBooster
        title={"Full Recovery"}
        icon={<FullRecovery />}
        remain={boostRecovery}
        onClose={onClose}
        taskKey={"boostRecovery"}
      />
    </div>
  );
};

export default ClaimBoosterPanel;
