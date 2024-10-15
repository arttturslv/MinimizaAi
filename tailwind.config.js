/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        's-button': '4px 4px 10px 0px rgba(0, 0, 0, 0.4), inset -4px -4px 10px 0px rgba(255, 255, 255, 0.08)',
        's-input-box': '4px 4px 10px 0px rgba(0, 0, 0, 0.5), -4px -4px 5px 0px rgba(255, 255, 255, 0.08)',
        's-input': 'inset 4px 4px 10px 0px rgba(0, 0, 0, 0.4), inset -4px -4px 10px 0px rgba(255, 255, 255, 0.08)',
      },
    },
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
