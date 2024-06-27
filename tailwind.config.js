module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-3d': {
          textShadow: '3px 3px 0px #d4d4d4, 6px 6px 0px #b3b3b3, 9px 9px 0px #929292',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};