import React from "react";

const RightArrowCircleFillIcon = ({
  width = 41,
  height = 39,
  opacity = 0.5,
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 41 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.8442 4.49052C12.3717 4.49052 5.50272 11.1925 5.50272 19.4589C5.50272 27.7254 12.3717 34.4273 20.8442 34.4273C29.3166 34.4273 36.1856 27.7254 36.1856 19.4589C36.1856 11.1925 29.3166 4.49052 20.8442 4.49052ZM17.8939 27.9959L16.2248 26.3674L23.3054 19.4589L16.2248 12.5504L17.8939 10.9219L26.6437 19.4589L17.8939 27.9959Z"
          fill="white"
          fillOpacity={opacity}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.962 10.4779L26.9808 19.4589L17.962 28.44L16.2418 26.7269L23.5402 19.4589L16.2418 12.191L17.962 10.4779Z"
          fill="black"
        />
      </svg>
    </>
  );
};

export default RightArrowCircleFillIcon;
