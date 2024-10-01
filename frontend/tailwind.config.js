/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#f5f5f0",
          white: "#FFFFFF",
          black: "#000000",
          cyan: "#2389da",
          grey: "#A5ABAF",
        },
        secondary: {
          100: "#f0f7f0",
        },
        tertiary: {
          100: "#f0f0f7",
        },
      },
      fontFamily: {
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      fontSize: {
        "header-1": ["3.5rem", { lineHeight: "4rem" }],
        "header-2": ["2.5rem", { lineHeight: "3rem" }],
        "header-3": ["2rem", { lineHeight: "2.5rem" }],
        "header-4": ["1.5rem", { lineHeight: "2rem" }],
      },
      borderRadius: {
        sm: "0.25rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};
