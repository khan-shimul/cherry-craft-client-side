/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
      fontFamily: {
        playFair: ['Playfair Display', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
    
    extend: {},
  },
  plugins: [require('daisyui'),],
}

