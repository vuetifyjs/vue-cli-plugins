const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'basil', () => {
    addFontLink(api, [
      'Montserrat:400,500,600,700',
      'Lekton:700',
    ])
  })
}
