/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xl': '1440px',
      'md': '1024px'
    },
    extend: {
      colors:{
        'boneless': 'hsl(0,0%,98%)',
        'lightgray': 'hsl(0,0%,41%)',
        'black': 'hsl(0,0%,8%)',
      },
    },
  },
  plugins: [],
}

