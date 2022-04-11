module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cartoon: ["CARTOON", "cursive"],
      },
      backgroundRepeat: {
        'space': '500px'
      },
    },
  },
  plugins: [],
}