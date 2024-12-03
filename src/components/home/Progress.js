import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "@contexts/AuthContext";
import LeafIcon from "@icons/Leaf";
import AnomGreyIcon from "@icons/AnomGrey";
import GreenEnergyIcon from "@icons/GreenEnergy";

const Progress = () => {
  const navigate = useNavigate();

  const { squad } = useAuth();
  const { progress, totalprogress } = useSelector((state) => state.coin);

  const handleClickSquad = useCallback(() => {
    navigate(squad ? "/squadhome" : "/squad");
  }, [navigate, squad]);

  const handleClickTask = useCallback(() => {
    navigate("/tasks");
  }, [navigate]);

  return (
    <div className="flex items-center justify-between mt-1">
      <div className="flex items-center">
        <div className="w-[154px] h-[18px] rounded-s-[20px] bg-white flex justify-start items-center px-[2px]">
          <div
            className="bg-time-progress-bar h-[16px] rounded-[20px]"
            style={{ width: (progress / totalprogress) * 148 }}
          ></div>
          <div
            className="flex justify-center"
            style={{
              width: ((totalprogress - progress) / totalprogress) * 148,
            }}
          >
            {progress}
          </div>
        </div>
        <div className="-ml-9">
          <AnomGreyIcon width={66} height={72} />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex justify-center items-center h-[59px] w-[59px] hover:cursor-pointer bg-navbar-item rounded shadow-navbar-item">
          <div
            className="flex justify-center items-center h-[55px] w-[55px] bg-[#00040C] rounded"
            onClick={handleClickTask}
          >
            <GreenEnergyIcon width={39} height={45} />
          </div>
        </div>
        <div className="flex justify-center items-center h-[59px] w-[59px] hover:cursor-pointer bg-navbar-item rounded shadow-navbar-item">
          <div
            className="flex justify-center items-center h-[55px] w-[55px] bg-[#00040C] rounded"
            onClick={handleClickSquad}
          >
            <LeafIcon width={39} height={45} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
