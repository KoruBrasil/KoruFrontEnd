/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card': "url('/card.jpeg')",
        'bg1':"url('/logo_whitebg.png')",
      },
      dropShadow: {
        dark1:'1px 1px 1px black',
        dark2:'1px 1px 1px #1A1A1A',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      colors: {
        'green1': '#52AAB1',
        'yellow1':'#353535',
      },
    },
    
  },
  plugins: [],
}
