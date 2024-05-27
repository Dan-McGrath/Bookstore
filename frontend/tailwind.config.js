/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBrown: '#593325',
        beige: '#F2D7B6',
        white: 'F2F2F2',
        tan: '#A65729',
        lightTan: '#D98B48',
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
