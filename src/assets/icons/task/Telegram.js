import React from "react";

const TelegramIcon = ({ width = 40, height = 42 }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.504303"
          y="0.273193"
          width="39.1445"
          height="38.1926"
          rx="4"
          fill="url(#paint0_linear_0_1)"
        />
        <g opacity="0.25" filter="url(#filter0_f_0_1)">
          <rect
            x="6.40161"
            y="19.3695"
            width="26.6661"
            height="16.2611"
            rx="4"
            fill="url(#paint1_linear_0_1)"
          />
        </g>
        <rect
          x="2.85297"
          y="2.56476"
          width="34.4471"
          height="33.6095"
          rx="4"
          fill="url(#paint2_linear_0_1)"
        />
        <g filter="url(#filter1_i_0_1)">
          <path
            d="M10.6656 18.0541C10.6656 18.0541 19.3145 14.2184 22.3141 12.8678C23.464 12.3275 27.3635 10.5987 27.3635 10.5987C27.3635 10.5987 29.1634 9.8424 29.0133 11.6792C28.9633 12.4356 28.5634 15.0828 28.1635 17.9461C27.5635 21.998 26.9136 26.4279 26.9136 26.4279C26.9136 26.4279 26.8136 27.6706 25.9637 27.8866C25.1138 28.1027 23.714 27.1303 23.464 26.9142C23.264 26.7521 19.7145 24.321 18.4146 23.1324C18.0647 22.8083 17.6647 22.1601 18.4646 21.4037C20.2644 19.6209 22.4141 17.4059 23.714 16.0012C24.3139 15.3529 24.9138 13.8402 22.4141 15.677C18.8646 18.3243 15.365 20.8094 15.365 20.8094C15.365 20.8094 14.5651 21.3496 13.0653 20.8634C11.5654 20.3772 9.81564 19.7289 9.81564 19.7289C9.81564 19.7289 8.61586 18.9185 10.6656 18.0541Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_0_1"
            x="0.941611"
            y="13.9095"
            width="37.5861"
            height="27.181"
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
              stdDeviation="2.73"
              result="effect1_foregroundBlur_0_1"
            />
          </filter>
          <filter
            id="filter1_i_0_1"
            x="8"
            y="8"
            width="22"
            height="22.5"
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
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="1.25" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
          <linearGradient
            id="paint0_linear_0_1"
            x1="3.79483"
            y1="2.77489"
            x2="31.9819"
            y2="39.1418"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBFBFC" />
            <stop offset="1" stopColor="#DBDDE8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_0_1"
            x1="6.94361"
            y1="19.3695"
            x2="18.2394"
            y2="42.5606"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A2F4" />
            <stop offset="1" stopColor="#05ABFF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_0_1"
            x1="3.55312"
            y1="2.56476"
            x2="32.3071"
            y2="39.461"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0CA8F7" />
            <stop offset="1" stopColor="#0096E1" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default TelegramIcon;
