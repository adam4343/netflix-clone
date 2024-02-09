/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        main: "#E50914",
      },
      fontFamily: {
        netflix: ["Bebas Neue", "sans-serif"],
      },
      colors: {
        custom: "#131313",
      },
    },
  },
  plugins: [],
};
