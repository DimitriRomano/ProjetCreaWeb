module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cycleGreen': '#A1CE97',
        'cycleRed': '#E69292',
        'cycleGrey': '#74747429'
      },
      fontSize: {
        'cycle-xs': ['20px', '24px'],
        'cycle-sm': ['30px', '36px'],
        'cycle-ld': ['37px', '43px'],
        'cycle-xl': ['40px', '49px'],
      }
    },
  },
  plugins: [],
}
