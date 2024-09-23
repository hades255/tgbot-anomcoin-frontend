import React from "react";

const TwitterIcon = ({ width=40, height=41 }) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="39.1445"
          height="38.1926"
          rx="4"
          fill="url(#paint0_linear_1_1041)"
        />
        <g opacity="0.25" filter="url(#filter0_f_1_1041)">
          <rect
            x="5.89731"
            y="19.0963"
            width="26.6661"
            height="16.2611"
            rx="4"
            fill="url(#paint1_linear_1_1041)"
          />
        </g>
        <rect
          x="2.34866"
          y="2.29156"
          width="34.4471"
          height="33.6095"
          rx="4"
          fill="url(#paint2_linear_1_1041)"
        />
        <g clipPath="url(#clip0_1_1041)" filter="url(#filter1_i_1_1041)">
          <path
            d="M9.8202 9.56558L18.2476 20.8362L9.7677 30H11.6767L19.1016 21.9774L25.1002 30H31.5956L22.6944 18.0954L30.5879 9.56558H28.6789L21.8416 16.9542L16.3168 9.56558H9.82147H9.8202ZM12.6268 10.9718H15.6101L28.7864 28.5937H25.8031L12.6268 10.9718Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_1_1041"
            x="0.437308"
            y="13.6363"
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
              result="effect1_foregroundBlur_1_1041"
            />
          </filter>
          <filter
            id="filter1_i_1_1041"
            x="9.49567"
            y="9.16025"
            width="21"
            height="21.5"
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
              result="effect1_innerShadow_1_1041"
            />
          </filter>
          <linearGradient
            id="paint0_linear_1_1041"
            x1="3.29053"
            y1="2.5017"
            x2="31.4776"
            y2="38.8686"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FBFBFC" />
            <stop offset="1" stopColor="#DBDDE8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_1041"
            x1="6.43931"
            y1="19.0963"
            x2="17.7351"
            y2="42.2874"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00A2F4" />
            <stop offset="1" stopColor="#05ABFF" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_1041"
            x1="3.04882"
            y1="2.29157"
            x2="31.8028"
            y2="39.1878"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#333333" />
            <stop offset="1" />
          </linearGradient>
          <clipPath id="clip0_1_1041">
            <rect
              width="21"
              height="21"
              fill="white"
              transform="translate(9.49567 9.16025)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default TwitterIcon;
