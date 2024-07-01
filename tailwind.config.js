/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/**/*.{jsx,js}'],
  theme: {
    screens: {
      xs: '530px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    fontFamily: {
      Gellix: ['Gellix', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          100: '#FFFFFF',
          200: '#D0DFFA',
          300: '#B38AFF',
          400: '#384860',
          500: '#752BFF',
          DEFAULT: '#0451FF',
          700: '#f1f6fa',
          800: '#001736',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          200: '#D8D8E0',
          300: '#BBBBC7',
          400: '#A0A0AD',
          500: '#858594',
          600: '#6C6C7B',
          700: '#535361',
          800: '#3C3C48',
          900: '#27272E'
        },
        redGemma: {
          100: '#FFEBEF',
          200: '#FFAEC0',
          300: '#FF7290',
          DEFAULT: '#EC325A',
          500: '#C31D40',
          600: '#9A0C2B',
          700: '#72021A',
          800: '#490010',
        },
        greenGemma: {
          100: '#EFFFFA',
          200: '#C1FFEA',
          300: '#93FFDB',
          400: '#65FFCC',
          DEFAULT: '#4BDCAC',
          600: '#33B389',
          700: '#208A67',
          800: '#116247',
        },
        yellowGemma: {
          100: '#FFF9EC',
          200: '#FFE9B3',
          300: '#FFD87A',
          DEFAULT: '#FFC841',
          500: '#D6A42A',
          600: '#AD8218',
          700: '#85610A',
          800: '#5C4202',
        },
      },
      fontSize: {
        '3xl-c': '2rem',
        '4xl-c': '2.625rem',
        '5xl-c': '3.375rem'
      }
    },
  },
  plugins: [],
}
