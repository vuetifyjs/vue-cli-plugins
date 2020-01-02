require('./overrides.sass')

const preset = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#FEDBD0',
        secondary: '#FEEAE6',
        accent: '#442C2E',
      },
    },
  },
}

module.exports = { preset }
