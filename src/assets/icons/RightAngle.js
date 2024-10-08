import React from "react";

const RightAngleIcon = ({ width, height, color="#14A1FF" }) => {
  return (
    <svg
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.89814 0.756592L9.06298 7.89148L1.89814 15.0264L0.531494 13.6654L6.32969 7.89148L0.531494 2.11753L1.89814 0.756592Z"
        fill={color}
      />
    </svg>
  );
};

export default RightAngleIcon;
