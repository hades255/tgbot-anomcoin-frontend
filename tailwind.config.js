/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-item": "linear-gradient(to right, #04C3FF, #79DEFE, #79DEFF)",
        "home-profile":
          "linear-gradient(to right bottom, #9AC4F4, #3A81D4, #1A73A4)",
        "profile-image-border":
          "linear-gradient(to bottom, #1D85FF26, #66666600)",
        "profile-image": "linear-gradient(to bottom, #080808, #9CCAFF26)",
        "time-progress-bar": "linear-gradient(to right, #6EDBFF, #095DFF)",
        "twitter-btn": "linear-gradient(to top, #111111, #050505)",
        "telegram-btn": "linear-gradient(to bottom, #0099FF, #235ECA)",
        "discord-btn": "linear-gradient(to bottom, #5361F8, #2436FD)",
        "medal-btn": "linear-gradient(to bottom, #FFD390, #FFA722)",
        "seal-btn": "linear-gradient(to bottom, #8FE407, #599000)",
        "utv-btn": "linear-gradient(to bottom, #F93C3C, #A10000)",
        "jewel-btn": "linear-gradient(to bottom, #87E1FF, #00A193)",
        "task-active-tab": "linear-gradient(to bottom, #9AC9FF, #0072F8)",
        "task-item-icon-bg": "linear-gradient(to bottom right, #FBFBFC, #DBDDE8)",
        "task-item-medal": "linear-gradient(to bottom right, #6D4200, #573400)",
        "task-item-jewel": "linear-gradient(to bottom right, #000000, #003FC6)",
        "task-claim": "radial-gradient(farthest-corner at 95px -10px, #99D6FF 0%, #14A1FF 100%)",
      },
      boxShadow: {
        "navbar-item": "inset 0 0 12px 0 #003B8F",
      },
      fontFamily: {
        comicneue: ["comicneue-light"],
        "comicneue-bold": ["comicneue-bold"],
        "comic-sans-ms": ["comic-sans-ms"],
        "sf-pro-text": ["sf-pro-text"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".spaced-text-1": {
          "letter-spacing": "1px",
        },
        ".spaced-text-2": {
          "letter-spacing": "2px",
        },
        ".spaced-text-3": {
          "letter-spacing": "3px",
        },
        ".spaced-text-4": {
          "letter-spacing": "4px",
        },
        ".text-shadow-expire-item": {
          textShadow: "1px 2px 6px rgba(0,0,255,1)",
        },
      });
    },
  ],
};
