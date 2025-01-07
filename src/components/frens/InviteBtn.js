import React, { useCallback, useState } from "react";
import InviteModal from "./InviteModal";

const InviteBtn = () => {
  const [show, setShow] = useState(false);

  const handleClick = useCallback(() => {
    setShow(true);
  }, []);

  const handleClose = useCallback(() => {
    setShow(false);
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        className="w-full h-full rounded-[40px] border border-[#FFFFFF0A_#FFF0_#FFFFFF14_#FFF0] bg-task-claim shadow-[0_4px_0px_#0090FF] text-white text-[20px] font-sf-pro-text font-bold flex items-center justify-center"
      >
        Send to invite
      </button>
      <InviteModal show={show} onClose={handleClose} />
    </>
  );
};

export default InviteBtn;
