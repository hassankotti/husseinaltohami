/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        shark: {
          50: "#f4f4f4",
          100: "#eaeaea",
          200: "#cacaca",
          300: "#a9a9a9",
          400: "#696969",
          500: "#292929",
          600: "#252525",
          700: "#1f1f1f",
          800: "#191919",
          900: "#141414",
        },
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
        13: "13",
        14: "14",
        15: "15",
        16: "16",
      },
      backgroundImage: {
        bgGridSlate : `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        bgGrid : `url("https://raw.githubusercontent.com/hassankotti/husseinaltohami/main/src/assets/grid.svg")`,
      }
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
