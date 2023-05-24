/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik Dirt', 'cursive']
      },
      backgroundImage: {
        'cupcakes' : 'url("./assets/cupcakes_landscape.jpeg")'
      },
      
    },
  },
  plugins: [],
};
