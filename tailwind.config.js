/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      jet:"#2C2D31",
      eerieBlack:"#161819",
      eerieBlackLight:"#1F2021",
      eerieBlackDark:"#1A1D1E",
      seaSalt:"#F7F9F9",
      celticBlue:"#4472CA"
    }
  },
  plugins: [],
}
