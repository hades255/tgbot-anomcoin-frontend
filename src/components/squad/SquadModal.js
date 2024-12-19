import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "@contexts/AuthContext";
import { BACKEND_PATH } from "@constants/config";
import Modal from "@common/Modal";
import AnomIcon from "@icons/Anom";
import AnomGreyIcon from "@icons/AnomGrey";
import UsersIcon from "@icons/invite/Users";

const SquadModal = ({ show, onClose, squadid }) => {
  const navigate = useNavigate();
  const { squad: mySquadId } = useAuth();
  const [squad, setSquad] = useState(null);
  const [count, setCount] = useState(null);
  const [totalPoint, setTotalPoint] = useState(null);

  const handleClose = useCallback(() => onClose(), [onClose]);

  const handleJoin = useCallback(() => {
    if (mySquadId === squadid) navigate("/squadhome");
    else onClose(squadid);
  }, [squadid, onClose, mySquadId, navigate]);

  useEffect(() => {
    if (squadid) {
      (async () => {
        try {
          const response = await axios.get(`${BACKEND_PATH}/squad/${squadid}`);
          setSquad(response.data.squad);
          setCount(response.data.count);
          setTotalPoint(response.data.totalPoint);
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [squadid]);

  return (
    <Modal
      show={show}
      onClose={handleClose}
      title={
        show && (
          <div className="mt-2 mx-8 flex flex-col">
            <div className="flex justify-center">
              <AnomIcon width={100} height={100} />
            </div>
            <div className="flex justify-center">
              <span className="font-sf-pro-text text-white text-sm">
                {squad?.name}
              </span>
            </div>
          </div>
        )
      }
      className={`mx-4 pb-8 h-1/2  bg-telegram-btn rounded-t-[20px] shadow-xl w-full border-2 border-b-0`}
    >
      {show && (
        <div className="mt-2 flex flex-col gap-4 text-white">
          <div className="flex flex-row justify-center items-center gap-2">
            <IntroItem>
              <div className="w-full flex flex-col justify-center items-center bg-[#235ECA80] rounded-lg py-2">
                <AnomGreyIcon width={35} height={35} />
                <span className="font-sf-pro-text text-white text-sm">
                  Diamond
                </span>
              </div>
            </IntroItem>
            <IntroItem>
              <div className="w-full flex flex-col justify-center items-center bg-[#235ECA80] rounded-lg py-2">
                <AnomIcon width={35} height={35} />
                <span className="font-sf-pro-text text-white text-sm">
                  {totalPoint ? totalPoint : "Calculating"}
                </span>
              </div>
            </IntroItem>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <IntroItem>
              <div className="w-full flex flex-col justify-center items-center bg-[#235ECA80] rounded-lg py-2">
                <UsersIcon width={35} height={35} />
                <span className="font-sf-pro-text text-white text-sm">
                  {count ? count : "Calculating"}
                </span>
              </div>
            </IntroItem>
            <IntroItem>
              <div className="w-full flex flex-col justify-center items-center bg-[#235ECA80] rounded-lg py-2">
                <AnomGreyIcon width={35} height={35} />
                <span className="font-sf-pro-text text-white text-sm">
                  Community
                </span>
              </div>
            </IntroItem>
          </div>
          <div className="px-6">
            <button
              onClick={handleJoin}
              className="w-full h-full rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[16px] font-sf-pro-text font-bold flex items-center justify-center p-3"
            >
              {mySquadId === squadid ? "View" : "Join"}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default SquadModal;

export const IntroItem = ({ children }) => {
  return (
    <div className="w-full flex justify-center items-center rounded-lg bg-squad-intro-border p-1">
      {children}
    </div>
  );
};
