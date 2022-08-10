/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'primary':'#FD3D57',
        'primary-transparent':'#f2377f',
        'purple': '#3f3cbb',
        'blue-transparent': '#0f3460',
      },
      border: {
        "border": '2px solid rgba(0, 0, 0, 0.1)'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
      fontFamily: {
        play: ['Play', 'sans-serif'], 
        sans: ['Graphik', 'sans-serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [

  ],
}