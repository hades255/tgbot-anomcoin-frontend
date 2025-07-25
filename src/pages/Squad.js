import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import clsx from "clsx";
import { BACKEND_PATH } from "@constants/config";
import { useAuth } from "@contexts/AuthContext";
import { updateUser } from "@redux/authSlice";
import Modal from "@common/Modal";
import SquadModal from "@squad/SquadModal";
import AnomIcon from "@icons/Anom";
import UsersIcon from "@icons/invite/Users";
import RightArrowCircleIcon from "@icons/task/RightArrowCircle";

const Squad = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const { userId } = useAuth();
  const [showSquadCreate, setShowSquadCreate] = useState(false);
  const [showSquad, setShowSquad] = useState("");
  const [squad, setSquad] = useState([]);

  const handleOpenCreateSquad = useCallback(() => {
    setShowSquadCreate(true);
  }, []);

  const getSquads = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_PATH}/squad/`);
      setSquad(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const joinSquad = useCallback(
    async (squad) => {
      try {
        if (squad) {
          await axios.post(`${BACKEND_PATH}/squad/${squad}`, { userId });
          dispatch(updateUser([{ key: "squad", value: squad }]));
          router("/squadhome");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [userId, router, dispatch]
  );

  const handleCloseCreateSquad = useCallback(
    async (url) => {
      try {
        if (url) {
          const response = await axios.post(`${BACKEND_PATH}/squad/`, {
            userId,
            url,
          });
          setShowSquadCreate(false);
          joinSquad(response.data._id);
        } else setShowSquadCreate(false);
      } catch (error) {
        console.log(error);
      }
    },
    [userId, joinSquad]
  );

  const handleClickSquad = useCallback((id) => {
    setShowSquad(id);
  }, []);

  const handleCloseSquadModal = useCallback(
    (id) => {
      joinSquad(id);
      setShowSquad("");
    },
    [joinSquad]
  );

  useEffect(() => {
    getSquads();
  }, [getSquads]);

  return (
    <>
      <div className="flex flex-col mb-28">
        <div className="mt-12 flex justify-center">
          <UsersIcon width={60} height={60} />
        </div>
        <div className="mt-5 flex justify-center">
          <span className="text-white font-sf-pro-text text-[20px]">
            Join Squad
          </span>
        </div>
        <div className="flex flex-col">
          <div className="text-white font-sf-pro-text text-sm text-center">
            Yes! Join a squad to swipe and earn together.
          </div>
          <div className="text-white font-sf-pro-text text-sm text-center">
            Maximize profits and climb the rankings
          </div>
        </div>
        <div className="flex mx-8 mt-8">
          <div className="w-full h-full border-2 border-white rounded-[20px] flex flex-col bg-telegram-btn shadow-[0_6px_0px_#0090FF] p-3">
            <div className="flex justify-center">
              <span className="text-white text-sm text-center font-sf-pro-text flex pt-[1px]">
                Create a squad and invite all members or join a custom squad.
              </span>
            </div>
            <div className="flex justify-center">
              <span className="text-white text-sm text-center font-sf-pro-text flex pt-[1px]">
                Manage the Treasury now!
              </span>
            </div>
            <div
              className="my-3 w-full h-full rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[16px] font-sf-pro-text font-bold flex items-center justify-center p-3"
              onClick={handleOpenCreateSquad}
            >
              Create or Join a custom squad
            </div>
          </div>
        </div>
        {squad && squad.length && (
          <div className=" mt-9 flex justify-center">
            <div className="  text-white font-sf-pro-text text-sm text-center">
              Recommended Squad
            </div>
          </div>
        )}
        {squad && squad.length && (
          <>
            <div className="flex mx-8 mt-3">
              <div className="w-full h-full border-2 border-white rounded-[20px] flex flex-col bg-telegram-btn shadow-[0_6px_0px_#0090FF]">
                {squad.map((item, index) => (
                  <SquadItem
                    key={index}
                    squad={item}
                    onClick={handleClickSquad}
                  />
                ))}
              </div>
            </div>
            {showSquad !== "" && (
              <SquadModal
                show={showSquad !== ""}
                onClose={handleCloseSquadModal}
                squadid={showSquad}
              />
            )}
          </>
        )}
      </div>
      <CreateSquadModal
        show={showSquadCreate}
        onClose={handleCloseCreateSquad}
      />
    </>
  );
};

export default Squad;

const SquadItem = ({ squad, onClick }) => {
  const handleClick = useCallback(() => onClick(squad._id), [squad, onClick]);

  return (
    <div
      className={clsx(
        "my-2 rounded pl-5 pr-2 flex justify-between items-center cursor-pointer"
      )}
      onClick={handleClick}
    >
      <div className="flex items-center">
        <div className="flex flex-col">
          <div className="flex items-center">
            <AnomIcon width={35} height={35} />
            <span className="text-white text-[16px] font-sf-pro-text">
              {squad.name}
            </span>
          </div>
        </div>
      </div>
      <div className="w-16 h-[30px] flex justify-center items-center">
        <RightArrowCircleIcon />
      </div>
    </div>
  );
};

const CreateSquadModal = ({ show, onClose }) => {
  const [newsquad, setNewsquad] = useState("");

  const handleChange = ({ target: { value } }) => {
    setNewsquad(value);
  };

  const handleJoin = useCallback(
    (e) => {
      e.preventDefault();
      onClose(newsquad);
    },
    [newsquad, onClose]
  );

  return (
    <Modal
      show={show}
      onClose={onClose}
      title={
        show && (
          <div className="mt-4 mx-8 flex justify-center">
            <AnomIcon width={80} height={80} />
          </div>
        )
      }
      className={`mx-4 h-1/2 bg-telegram-btn rounded-t-[20px] shadow-xl w-full border-2 border-b-0`}
    >
      {show && (
        <form method="POST" onSubmit={handleJoin}>
          <div className="mb-1 flex flex-col text-white">
            <div className="mb-4 flex flex-col justify-center items-center">
              <div className="flex flex-col mx-3 text-center justify-center items-center text-lg font-bold font-sf-pro-text">
                Create or join squad
              </div>
              <div className="flex flex-col mx-3 text-center justify-center items-center text-sm font-sf-pro-text">
                Just enter the public group or channel link below and click join
                to automatically join or create a squad
              </div>
            </div>
            <div className="my-4 px-7 flex flex-row justify-center items-center">
              <input
                className="w-full px-2 py-1 rounded text-xs text-black"
                placeholder="eg. t.me/theYescoin or @theYescoin"
                type="text"
                value={newsquad}
                onChange={handleChange}
              />
            </div>
            <div className="px-6">
              <button
                className="mt-3 mb-5 w-full h-10 rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF,0_8px_4px_#00000040] text-white text-[16px] font-sf-pro-text font-bold flex items-center justify-center p-3"
                type="submit"
              >
                Join
              </button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
};
