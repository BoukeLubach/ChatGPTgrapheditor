/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'darkblue': '#003844',
      'offwhite': '#F0EFE3', 
      'orange': '#FF8811', 
      'darkred': '#A31621',
      'red': '#A31621',
      'blue': '#01A7C2',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'main-color' : '#003844',
      'fill-color': '#F0EFE3',
      "white": "#ffffff",
      'secondary-fill-color': '#DBDBDB',
      'accent-color': '#FF8811',
      'secondary-accent-color': '#A31621',

    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['ui-serif', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    
  ],
}
