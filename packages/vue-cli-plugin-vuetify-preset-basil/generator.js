const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'basil', () => {
    addFontLink(api, ['Montserrat', 'Lekton'])
  })
}
