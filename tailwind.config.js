/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F4F6FA',
          100: '#E8ECF5',
          200: '#D1DAEB',
          300: '#B9C7E1',
          400: '#A2B5D7',
          500: '#8AA2CD',
          600: '#7390C3',
          700: '#5B7DB9',
          800: '#436BAF',
          900: '#2C58A5',
        },
        secondary: {
          50: '#FDF6F3',
          100: '#FBEEE7',
          200: '#F7DDCF',
          300: '#F3CCB7',
          400: '#EFBB9F',
          500: '#EBAA87',
          600: '#E7996F',
          700: '#E38857',
          800: '#DF773F',
          900: '#DB6627',
        },
        accent: {
          50: '#F5F9FF',
          100: '#EBF3FF',
          200: '#D6E7FF',
          300: '#C2DBFF',
          400: '#ADCFFF',
          500: '#99C3FF',
          600: '#85B7FF',
          700: '#70ABFF',
          800: '#5C9FFF',
          900: '#4793FF',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        artistic: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'artistic': '2rem 0.5rem 2rem 0.5rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'paint': 'paint 8s ease-in-out infinite',
        'reveal': 'reveal 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        paint: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        reveal: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      backgroundImage: {
        'artistic-gradient': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'artistic': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 0 15px -3px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};