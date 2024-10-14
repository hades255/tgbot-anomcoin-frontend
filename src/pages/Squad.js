import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import axios from "axios";
import AnomIcon from "../assets/icons/Anom";
import RightArrowCircleIcon from "../assets/icons/task/RightArrowCircle";
import Modal from "../components/common/Modal";
import UsersIcon from "../assets/icons/invite/Users";
import { BACKEND_PATH } from "../constants/config";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/authSlice";

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

  const getSquads = useCallback(() => {
    (async () => {
      try {
        const response = await axios.get(`${BACKEND_PATH}/squad/`);
        setSquad(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const joinSquad = useCallback(
    (squad) => {
      if (squad) {
        (async () => {
          try {
            await axios.post(`${BACKEND_PATH}/squad/${squad}`, { userId });
            dispatch(updateUser([{ key: "squad", value: squad }]));
            router("/squadhome");
          } catch (error) {
            console.log(error);
          }
        })();
      }
    },
    [userId, router, dispatch]
  );

  const handleCloseCreateSquad = useCallback(
    (url) => {
      if (url) {
        (async () => {
          try {
            const response = await axios.post(`${BACKEND_PATH}/squad/`, {
              userId,
              url,
            });
            setShowSquadCreate(false);
            joinSquad(response.data._id);
          } catch (error) {
            console.log(error);
          }
        })();
      } else setShowSquadCreate(false);
    },
    [userId, joinSquad]
  );

  const handleClickSquad = useCallback((id) => {
    setShowSquad(id);
  }, []);

  const handleCloseSquadModal = useCallback(
    (id) => {
      setShowSquad("");
      joinSquad(id);
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
            <SquadModal
              show={showSquad !== ""}
              onClose={handleCloseSquadModal}
              squadid={showSquad}
            />
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
      className={classNames(
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

  const handleJoin = useCallback(() => {
    onClose(newsquad);
  }, [newsquad, onClose]);

  return (
    <Modal
      show={show}
      onClose={onClose}
      title={
        show && (
          <div className="mt-10 mx-8 flex flex-col">
            <div className="flex justify-center">
              <AnomIcon width={35} height={35} />
            </div>
          </div>
        )
      }
      className={`mx-7 h-1/2 bg-telegram-btn rounded-t-[20px] shadow-xl w-full border-2 border-b-0`}
    >
      {show && (
        <div className="my-1 flex flex-col text-white">
          <div className="my-4 flex flex-col justify-center items-center">
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
            <div
              className="mt-3 mb-5 w-full h-10 rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF,0_8px_4px_#00000040] text-white text-[16px] font-sf-pro-text font-bold flex items-center justify-center p-3"
              onClick={handleJoin}
            >
              Join
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

const SquadModal = ({ show, onClose, squadid }) => {
  const [squad, setSquad] = useState(null);

  const handleClose = useCallback(() => onClose(), [onClose]);

  const handleJoin = useCallback(() => {
    onClose(squadid);
  }, [squadid, onClose]);

  useEffect(() => {
    if (squadid) {
      (async () => {
        try {
          const response = await axios.get(`${BACKEND_PATH}/squad/${squadid}`);
          console.log(response);
          setSquad(response.data);
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
          <div className="mt-10 mx-8 flex flex-col">
            <div className="flex justify-center">
              <AnomIcon width={35} height={35} />
            </div>
            <div className="mt-6 flex justify-center">
              <span className="font-sf-pro-text text-white text-sm">
                Yescoin
              </span>
            </div>
          </div>
        )
      }
      className={`mx-7 h-1/2  bg-telegram-btn rounded-t-[20px] shadow-xl w-full border-2 border-b-0`}
    >
      {show && (
        <div className="my-1 flex flex-col text-white">
          <div className=" my-4 flex flex-row justify-center items-center">
            <div className="w-1/2 flex flex-col mx-3 justify-center items-center">
              <AnomIcon width={35} height={35} />
              <span className="font-sf-pro-text text-white text-sm">
                Diamond
              </span>
            </div>
            <div className="w-1/2 flex flex-col mx-3 justify-center items-center">
              <AnomIcon width={35} height={35} />
              <span className="font-sf-pro-text text-white text-sm">
                Calculating
              </span>
            </div>
          </div>
          <div className=" my-4 flex flex-row justify-center items-center">
            <div className="flex w-1/2 flex-col mx-3 justify-center items-center">
              <AnomIcon width={35} height={35} />
              <span className="font-sf-pro-text text-white text-sm">Users</span>
            </div>
            <div className="flex w-1/2 flex-col mx-3 justify-center items-center">
              <AnomIcon width={35} height={35} />
              <span className="font-sf-pro-text text-white text-sm">
                Community
              </span>
            </div>
          </div>
          <div className="px-6">
            <div
              onClick={handleJoin}
              className="my-3 w-full h-full rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[16px] font-sf-pro-text font-bold flex items-center justify-center p-3"
            >
              Join
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
