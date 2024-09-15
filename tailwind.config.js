/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-item": "linear-gradient(to right, #04C3FF, #79DEFE, #79DEFF)",
        "home-profile":
          "linear-gradient(to right bottom, #9AC4F4, #3A81D4, #737373)",
        "profile-image-border":
          "linear-gradient(to bottom, #1D85FF26, #66666600)",
        "profile-image": "linear-gradient(to bottom, #111, #9CCAFF26)",
        "time-progress-bar": "linear-gradient(to right, #6EDBFF, #095DFF)",
      },
      boxShadow: {
        "navbar-item": "inset 0 0 12px 0 #003B8F",
      },
      fontFamily: {
        comicneue: ["comicneue-light"],
        "comicneue-bold": ["comicneue-bold"],
        "comic-sans-ms": ["comic-sans-ms"],
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
      });
    },
  ],
};
