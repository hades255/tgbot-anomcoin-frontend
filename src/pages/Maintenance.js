import React, { useCallback, useState } from "react";

const Maintenance = () => {
  const [show, setShow] = useState(true);

  const handleSetShow = useCallback(() => setShow(!show), [show]);

  return (
    show && (
      <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#0008] z-50 flex justify-center items-center px-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <img
                src="Alpcoin.png"
                alt=""
                className={`top-0 w-full max-w-[200px]`}
              />
            </div>
            <div className="text-white text-2xl text-wrap break-words">
              <b>ALPCOIN</b> is in maintenance
            </div>
            <div className="flex justify-center text-[#79DEFE]">
              Contact to
              <a
                className="ml-2 text-[#9ffffa] font-bold"
                href="https://t.me/z_sm_0001"
              >
                @z_sm_0001
              </a>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSetShow}
                className="bg-task-claim px-2 py-1 rounded-full text-white font-bold"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default Maintenance;
