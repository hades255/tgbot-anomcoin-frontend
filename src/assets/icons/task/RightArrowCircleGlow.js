import React from "react";

const RightArrowCircleGlowIcon = ({ width = 32, height = 32 }) => {
  return (
    <>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_1_1094)">
          <path
            d="M30.0595 14.3003C21.3094 14.3003 14.2153 21.2219 14.2153 29.7592C14.2153 38.2966 21.3094 45.2181 30.0595 45.2181C38.8096 45.2181 45.9037 38.2966 45.9037 29.7592C45.9037 21.2219 38.8096 14.3003 30.0595 14.3003ZM27.0125 38.576L25.2887 36.8941L32.6014 29.7592L25.2887 22.6243L27.0125 20.9424L36.049 29.7592L27.0125 38.576Z"
            fill="white"
          />
        </g>
        <path
          d="M30.0595 17.8677C23.3286 17.8677 17.8716 23.192 17.8716 29.7592C17.8716 36.3264 23.3286 41.6507 30.0595 41.6507C36.7903 41.6507 42.2473 36.3264 42.2473 29.7592C42.2473 23.192 36.7903 17.8677 30.0595 17.8677ZM27.7157 36.5414L26.3897 35.2476L32.0148 29.7592L26.3897 24.2708L27.7157 22.9771L34.6668 29.7592L27.7157 36.5414Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.7698 22.6243L34.9346 29.7592L27.7698 36.8941L26.4031 35.5332L32.2013 29.7592L26.4031 23.9853L27.7698 22.6243Z"
          fill="#14A1FF"
        />
        <defs>
          <filter
            id="filter0_f_1_1094"
            x="0.415271"
            y="0.500293"
            width="59.2884"
            height="58.5178"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="6.9"
              result="effect1_foregroundBlur_1_1094"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default RightArrowCircleGlowIcon;
