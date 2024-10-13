/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable 'class' strategy for dark mode
  theme: {
    
      fontFamily: {
        playFair: ['Playfair Display', 'serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        'orange': '#E09654'
      },
    extend: {
      textColor: {
        primary: '#E09654',
        white: '#fff',
      }
    },
  },
  plugins: [require('daisyui'),],
}

