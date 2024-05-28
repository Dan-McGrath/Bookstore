/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBrown: '#A65437',
        beige: '#F2D7B6',
        white: '#F2F2F2',
        tan: '#F29544',
        red: '#D94436',
        darkGreen: '#012626',
        darkBrown: '#593325',
      },
      fontFamily: {
        primaryRegular: 'Regular',
        primaryBold: 'Bold',
        primarySemiBold: 'SemiBold',
        primarySemiBoldItalic: 'SemiBoldItalics',
      },
    },
  },
  plugins: [],
};
