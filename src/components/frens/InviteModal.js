import React, { useMemo } from "react";
import { useAuth } from "@contexts/AuthContext";
import { APP_URL } from "@constants/config";
import Modal from "@common/Modal";
import GiftIcon from "@icons/invite/Gift";

const InviteModal = ({ onClose, show }) => {
  return (
    <>
      <Modal
        show={show}
        onClose={onClose}
        title={
          <div className="mt-4 flex flex-col">
            <div className="flex justify-center">
              <GiftIcon width={80} height={100} />
            </div>
            <span className="text-center">Share</span>
          </div>
        }
        className={`bg-telegram-btn rounded-t-[20px] shadow-xl w-full border-2 border-b-0`}
      >
        {show && (
          <div className="mt-1 mb-8 flex flex-col gap-2">
            <div className="rounded-lg border-2 border-[#00040Cb0] bg-discord-btn p-2 flex flex-col items-center justify-center">
              <div className="text-white">Secret code to invite</div>
              <div className="flex text-white">nXfZGv</div>
              <div className="text-white text-xs">
                Recommended if you share to groups that block links
              </div>
            </div>
            <div className="text-center text-white">Or</div>
            <ShareInviteBtn />
          </div>
        )}
      </Modal>
    </>
  );
};

const ShareInviteBtn = () => {
  const { userId } = useAuth();

  const message = useMemo(
    () => `${APP_URL}?startapp=linkCode_${userId}`,
    [userId]
  );
  const encodedMessage = useMemo(() => encodeURIComponent(message), [message]);

  return (
    <a
      className="w-full h-11 rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[20px] font-sf-pro-text font-bold flex items-center justify-center"
      href={`https://telegram.me/share/url?url=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Share invite link
    </a>
  );
};

export default InviteModal;
