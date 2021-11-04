module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        height: '397px'
      },

      colors: {
        black: '#16202A',
        blue: '#4D7BF3',
        lightBlue: '#EAEDF2',
        gray: '#969696',
        lightGray: '#D8DBE4',
        white: '#FEFFFF',
      },

      fontFamily: {
        primary: ['Libre Franklin', 'sans-serif']
      },

      dropShadow: {
        button: '1px 8px 5px #DCE7FD'
      },

      borderWidth: {
        '0': '1px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
