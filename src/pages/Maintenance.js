import React from "react";

const Maintenance = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center px-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <img
              src="Alpcoin.png"
              alt=""
              className={`top-0 w-full max-w-[200px]`}
            />
          </div>
          <div className="text-white text-2xl text-wrap break-words">
            <b>ANOM INVADOR</b> is in maintenance
          </div>
          <div className="flex justify-center text-[#79DEFE]">
            Contact to
            <a className="ml-2 text-[#1ffff4]" href="https://t.me/z_sm_0001">
              @z_sm_0001
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
