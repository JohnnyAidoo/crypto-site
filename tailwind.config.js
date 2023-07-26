/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#030627",
        ctrColor1: "#0013FF",
        ctrColor2: "#8A0063",
        secondaryColor: "#111760",
      },
    },
  },
  plugins: [],
};
