/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter' :  ['Inter', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'gloria' : ['Gloria Hallelujah', 'cursive']
      },
      backgroundImage: {
        'paper': "url('bg-paper.jpg')"
      }
    },
  },
  plugins: [],
}

