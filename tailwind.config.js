module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       'aquamarine': {
          DEFAULT: '#64FFDA',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#DEFFF7',
          '300': '#B6FFED',
          '400': '#8DFFE4',
          '500': '#64FFDA',
          '600': '#2CFFCD',
          '700': '#00F3B9',
          '800': '#00BB8E',
          '900': '#008363'
        },
        'midnight': {
          DEFAULT: '#011627',
          '50': '#067BDA',
          '100': '#0570C6',
          '200': '#04599E',
          '300': '#034377',
          '400': '#022C4F',
          '500': '#011627',
          '600': '#000000',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
