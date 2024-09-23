import React from "react";

const RightArrowCircleIcon = ({ width = 32, height = 32 }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.0595 4.30115C9.32863 4.30115 3.87164 9.62544 3.87164 16.1926C3.87164 22.7598 9.32863 28.0841 16.0595 28.0841C22.7903 28.0841 28.2473 22.7598 28.2473 16.1926C28.2473 9.62544 22.7903 4.30115 16.0595 4.30115ZM13.7157 22.9748L12.3897 21.681L18.0148 16.1926L12.3897 10.7043L13.7157 9.41048L20.6668 16.1926L13.7157 22.9748Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7698 9.05774L20.9346 16.1926L13.7698 23.3275L12.4031 21.9666L18.2013 16.1926L12.4031 10.4187L13.7698 9.05774Z"
          fill="#14A1FF"
        />
      </svg>
    </>
  );
};

export default RightArrowCircleIcon;
