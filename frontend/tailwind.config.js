const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        rubik: ['"Rubik"', 'sans-serif'], // Подключение кастомного шрифта
      },
      backgroundImage: {
        'gradient-s': 'linear-gradient(to top, #3D3E3D, #3D3E3D 20%, transparent)', // Плавный переход на половине
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Подключение плагина для обрезки текста
  ],
};
