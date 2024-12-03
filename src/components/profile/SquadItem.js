import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import clsx from "clsx";
import { useAuth } from "@contexts/AuthContext";
import { BACKEND_PATH } from "@constants/config";
import { updateUser } from "@redux/authSlice";
import UserAvatar from "@home/UserAvatar";
import SquadModal from "@squad/SquadModal";
import AnomIcon from "@icons/Anom";
import AnomGoldIcon from "@icons/AnomGold";
import AnomGreyIcon from "@icons/AnomGrey";
import AnomPurpleIcon from "@icons/AnomPurple";
import { useNavigate } from "react-router-dom";

const SquadItem = ({ squad, daily = true, index = null }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { squad: squadId, userId } = useAuth();
  const [showSquad, setShowSquad] = useState(false);

  const joinSquad = useCallback(
    async (id) => {
      try {
        if (id) {
          await axios.post(`${BACKEND_PATH}/squad/${id}`, { userId });
          dispatch(updateUser([{ key: "squad", value: id }]));
          navigate("/squadhome");
        }
      } catch (error) {
        console.log(error);
      }
    },
    [userId, dispatch, navigate]
  );

  const handleCloseSquadModal = useCallback(
    (id) => {
      joinSquad(id);
      setShowSquad(false);
    },
    [joinSquad]
  );

  const handleClick = useCallback(() => setShowSquad(squad._id), [squad]);

  return (
    <>
      <div
        className={clsx("flex items-center my-1 cursor-pointer", {
          "bg-discord-btn rounded-lg":
            squadId.toString() === squad._id.toString(),
        })}
        onClick={handleClick}
      >
        <div className="mr-4 w-10 flex justify-center">
          {(index === null || index >= 2) && (
            <AnomGreyIcon width={37} height={37} />
          )}
          {index !== null && index === 0 && (
            <AnomPurpleIcon width={48} height={48} />
          )}
          {index !== null && index === 1 && (
            <AnomGoldIcon width={48} height={48} />
          )}
        </div>
        <div className="w-[56px] h-[52px] bg-profile-image-border rounded-lg flex justify-center items-center mr-4 p-[1px]">
          <div className="bg-profile-item w-full h-full rounded-lg flex justify-center items-center">
            <UserAvatar avatar={squad.avatar} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="font-sf-pro-text text-white text-[14px]">
            {squad.name}
          </div>
          <div className="flex items-center">
            <AnomIcon />
            <span className="font-sf-pro-text text-white text-[14px]">
              {daily ? squad.dailyPoint : squad.weeklyPoint}
            </span>
          </div>
        </div>
      </div>
      {showSquad && (
        <SquadModal
          show={showSquad}
          onClose={handleCloseSquadModal}
          squadid={squad._id}
        />
      )}
    </>
  );
};

export default SquadItem;
