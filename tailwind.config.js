/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '660px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'red-500': '#dd444c',

      'purple-600': '#633BBC',
      'purple-500': '#8257e5',
      'purple-300': '#8F67F1',
      
      'gray-900': '#121214',
      'gray-700': '#1F1F23',
      'gray-500': '#29292E',
      'gray-200': '#585A60',
      'gray-100': '#c4c4cc',

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
