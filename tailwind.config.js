/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik Dirt", "cursive"],
        shadows: ["Shadows Into Light Two", "cursive"],
        thasadith: ["Thasadith", "sans-serif"],
      },
      backgroundImage: {
        cupcakes: 'url("./assets/img8.jpeg")',
      },
    },
  },
  plugins: [],
};
