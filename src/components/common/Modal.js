import classNames from "classnames";
import React, { useCallback } from "react";

const Modal = ({ show, onClose, title, children, className }) => {
  const handleClickBlur = useCallback(() => onClose(false), [onClose]);

  const handleClickBody = useCallback((e) => e.stopPropagation(), []);

  return (
    show && (
      <div
        className={classNames(
          `fixed inset-0 flex justify-center bg-[#0000005A] z-40 px-1 items-end`,
          {
            "animate-slideIn": show,
            "animate-slideOut": !show,
          }
        )}
        onClick={handleClickBlur}
      >
        <div
          className={classNames(
            "rounded-t-[20px] shadow-xl w-full border-2 border-b-0",
            {
              "animate-slideUpIn": show,
              "animate-slideUpOut": !show,
            },
            className
          )}
          onClick={handleClickBody}
        >
          <div className="flex justify-center items-center">
            <div className="text-[20px] font-medium text-white text-center">
              {title}
            </div>
          </div>
          <div className="px-4">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
