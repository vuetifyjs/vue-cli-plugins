const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'rally', () => {
    addFontLink(api, [
      'Roboto+Condensed:300,400,500,700',
      'Eczar:400',
    ])
  })
}
