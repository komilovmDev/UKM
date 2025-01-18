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
        'gradient-s': 'linear-gradient(to top, #3D3E3D 50%, transparent 50%)', // Градиент снизу вверх
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'), // Подключение плагина для обрезки текста
  ],
};
