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
        "task-active-tab": "linear-gradient(to bottom, #9AC9FF, #0072F8)",
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
