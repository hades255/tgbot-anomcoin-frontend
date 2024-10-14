import React from "react";

const LeftArrowCircleFillIcon = ({
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
          d="M20.8441 34.4273C29.3166 34.4273 36.1855 27.7254 36.1855 19.4589C36.1855 11.1925 29.3166 4.49052 20.8441 4.49052C12.3716 4.49052 5.50265 11.1925 5.50265 19.4589C5.50265 27.7254 12.3716 34.4273 20.8441 34.4273ZM23.7944 10.9219L25.4635 12.5504L18.3828 19.4589L25.4635 26.3674L23.7944 27.996L15.0446 19.4589L23.7944 10.9219Z"
          fill="white"
          fillOpacity={opacity}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.7263 28.44L14.7075 19.4589L23.7263 10.4779L25.4465 12.191L18.1481 19.4589L25.4465 26.7269L23.7263 28.44Z"
          fill="black"
        />
      </svg>
    </>
  );
};

export default LeftArrowCircleFillIcon;
