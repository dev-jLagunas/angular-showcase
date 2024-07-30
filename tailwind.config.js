/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
