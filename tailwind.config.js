/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "Arial", "sans-serif"],
        inter: ["inter", "Arial"],
      },
      colors: {
        blue: "#06b6d4",
        white: "#fafafa",
        whiteDeep: "#f4f4f4",
        blue: "#00BCE1",
        grey: "#111111",
        greylight: "#1D1D1D",
        greylighten: "#323232",
        dark: "#060606",
      },
    },
  },
  plugins: [],
};
