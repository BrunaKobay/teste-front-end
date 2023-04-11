/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkBlue: "#263252",
        LightBlue: "#0165DB",
      },
      fontFamily: {
        dyna: ["raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
