import classNames from "classnames";
import React, { useCallback } from "react";

const Modal = ({ show, onClose, title, children, className, showClose }) => {
  const handleClickBlur = useCallback(() => onClose(false), [onClose]);

  const handleClickBody = useCallback((e) => e.stopPropagation(), []);

  return (
    show && (
      <div
        className={classNames(
          `fixed inset-0 flex justify-center items-end bg-[#0000005A] z-40 px-1`,
          {
            "animate-slideIn": show,
            "animate-slideOut": !show,
          }
        )}
        onClick={handleClickBlur}
      >
        <div
          className={classNames(
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
        {showClose && (
          <div className="flex justify-center items-cente h-20">
            <div className="w-12 h-12 rounded-[24px] bg-modal-close flex justify-center items-center text-white text-bold text-xl cursor-pointer">X</div>
          </div>
        )}
      </div>
    )
  );
};

export default Modal;
