/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customMauve: "#d3b1c2",
        customLavendar: "#c197d2",
        customBlack: "#211522",
        customOrchid: "#613659",
      },
    },
  },
  plugins: [],
}

