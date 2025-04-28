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
      colors: {
        primary: '#757575',
        secondary: '#3BB9E3',
        info: '#A19E9E',
      },
      textColor: {
        primary: '#757575',
      },
    },
  },
  plugins: [],
};
