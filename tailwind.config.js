/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amritaRed: "#AF0C3E",
        amritaYellow: "#FFD92A",
        amritaBlue: "#1446A0",
        amritaGreen: "#256D1B",
        amritaOrange: "#FF570A",
        amritaPalePink: "rgb(238,44,130, 0.6)",
      },
      screens: {
        md: { max: "800px" },
        sm: { max: "639px" },
      },
      boxShadow: {
        shadow1: "0px 30px 40px 0px rgba(1, 11, 60, 0.1)",
        shadow2: "0px 30px 60px 0px rgba(0, 4, 48, 0.3)",
      },
    },
  },
  plugins: [],
};
