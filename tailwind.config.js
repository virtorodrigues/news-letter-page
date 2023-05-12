/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '280px',
      sm: '550px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
    colors: {
      'red-500': '#f75a68',
      
      'pink-500': '#c22665',
      'pink-300': '#E44063',
      
      'gray-900': '#121214',
      'gray-700': '#1F1F23',
      'gray-500': '#29292E',
      'gray-200': '#585A60',
      'gray-100': '#c4c4cc',

      'green-200': '#07bc0c',

      'white': '#FFF',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
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
  plugins: [],
}
