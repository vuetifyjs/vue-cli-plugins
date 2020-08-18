require('./overrides.sass')

const preset = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1EB980',
        secondary: '#045D56',
        tertiary: '#FF6859',
        quaternary: '#FFCF44',
        quinary: '#B15DFF',
        senary: '#72DEFF',
      },
    },
  },
}

module.exports = { preset }
