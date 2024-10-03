import React, { useMemo } from "react";
import { useAuth } from "../../contexts/AuthContext";

const InviteBtn = () => {
  const { userId } = useAuth();

  const message = useMemo(
    () =>
      `https://t.me/anom_invaders_bot/ANOM_Invaders?startapp=linkCode_${userId}\nLet's race! Predict Ethereum's price and rack up points`,
    [userId]
  );
  const encodedMessage = useMemo(() => encodeURIComponent(message), [message]);

  return (
    <a
      className="w-full h-full rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[20px] font-sf-pro-text font-bold flex items-center justify-center"
      href={`https://telegram.me/share/url?url=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Send to invite
    </a>
  );
};

export default InviteBtn;
