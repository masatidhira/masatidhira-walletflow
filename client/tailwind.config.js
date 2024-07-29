/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      darkest: "#222831",
      darker: "#323c48",
      dark: "#405064",
      lightest: "#f6f7f9",
      lighter: "#eceff2",
      light: "#d4dbe3",
      blue: "#0369a1",
      red: "#be185d",
    },
    fontFamily: {
      monospace: `"IBM Plex Mono", monospace`,
    },
    extend: {},
  },
  plugins: [],
};
