require('./overrides.sass')

const preset = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#344955',
        secondary: '#F9AA33',
        tertiary: '#232F34',
        quaternary: '#4A6572',
      },
    },
  },
}

module.exports = { preset }
