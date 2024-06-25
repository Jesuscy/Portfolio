module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], 
  theme: {
    extend: {
      screens:{
        'xs': '375px',
      },
      textShadow: {
        '3d': '1px 1px 0 #000, 2px 2px 0 #000, 3px 3px 0 #000, 4px 4px 0 #000, 5px 5px 0 #000',
      },
    },
  },
  variants: {
    textShadow: ['responsive'],
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-3d': {
          textShadow: '1px 1px 0 #000, 2px 2px 0 #000, 3px 3px 0 #000, 4px 4px 0 #000, 5px 5px 0 #000',
        },
        '.text-3d-lg': {
          textShadow: '1px 1px 0 #000, 2px 2px 0 #000, 3px 3px 0 #000, 4px 4px 0 #000, 5px 5px 0 #000, 6px 6px 0 #000, 7px 7px 0 #000, 8px 8px 0 #000, 9px 9px 0 #000, 10px 10px 0 #000',
        },
        '.text-3d-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}