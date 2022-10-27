/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary': '#E09600', // orange muda
        'Primary2': '#FA2409', // orange tua
        'Grayscale': '#0D0D0D', // background hitam
        'Secondary': '#949494', // abu abu
        'RedPantone': '#fb1351', // merah icon youtube
        'Coral': '#FF4242', // merah icon group
        'Lavender': '#9459E9', // lavender icon group
      },
    },
  },
  plugins: [],
}
