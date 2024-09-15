/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-item": "linear-gradient(to right, #04C3FF, #79DEFE, #79DEFF)",
      },
      boxShadow: {
        "navbar-item": "inset 0 0 12px 0 #003B8F",
      },
    },
  },
  plugins: [],
};
