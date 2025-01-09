import React from "react";
import "./loading.css";

const LoadingIcon = ({ width = 120, height = 120 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="44" r="4" fill="#2D2D2D" />
      <circle cx="64" cy="44" r="4" fill="#D9D9D9" />
      <circle cx="44" cy="24" r="4" fill="#D9D9D9" />
      <circle cx="44" cy="64" r="4" fill="#D9D9D9" />
      <circle
        cx="58.1421"
        cy="29.8578"
        r="4"
        transform="rotate(45 58.1421 29.8578)"
        fill="#D9D9D9"
      />
      <circle
        cx="29.8578"
        cy="58.1421"
        r="4"
        transform="rotate(45 29.8578 58.1421)"
        fill="#D9D9D9"
      />
      <circle
        cx="58.1421"
        cy="58.1421"
        r="4"
        transform="rotate(135 58.1421 58.1421)"
        fill="#D9D9D9"
      />
      <circle
        cx="29.8578"
        cy="29.8578"
        r="4"
        transform="rotate(135 29.8578 29.8578)"
        fill="#D9D9D9"
      />
    </svg>
  );
};

export default LoadingIcon;

export const LoadingDrop = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-screen h-screen flex justify-center items-center bg-twitter-btn opacity-95">
      <div className="loader-drop flex justify-center">
        <span className="box"></span>
        <span className="box"></span>
        <div className="code">
          <img src="/chest.png" width={80} />
        </div>
        <span className="txt font-bold">LOADING ...</span>
      </div>
    </div>
  );
};
