/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "big-stone": {
          50: "#f3f7fc",
          100: "#e6eff8",
          200: "#c7ddf0",
          300: "#95c1e4",
          400: "#5c9fd4",
          500: "#3783c0",
          600: "#2768a2",
          700: "#215383",
          800: "#1f486d",
          900: "#112233",
        },
        "azure-radiance": {
          50: "#edfaff",
          100: "#d6f3ff",
          200: "#b5ecff",
          300: "#83e3ff",
          400: "#48d0ff",
          500: "#1eb3ff",
          600: "#0696ff",
          700: "#0082ff",
          800: "#0863c5",
          900: "#0d559b",
          950: "#0e345d",
        },

        "cus-white": {
          50: "#fefefe",
        },
        oasis: {
          50: "#fef7ee",
          100: "#fdebd2",
          200: "#fad8ae",
          300: "#f7bb7a",
          400: "#f39544",
          500: "#ef7720",
          600: "#e15d15",
          700: "#ba4614",
          800: "#943818",
          900: "#773017",
          950: "#40160a",
        },
        jaguar: {
          50: "#e6f0ff",
          100: "#d2e2ff",
          200: "#aec8ff",
          300: "#7da2ff",
          400: "#4b6bff",
          500: "#2236ff",
          600: "#0001ff",
          700: "#0006ff",
          800: "#0004d7",
          900: "#080ca7",
          950: "#010113",
        },
      },
    },
  },
  plugins: [],
};
