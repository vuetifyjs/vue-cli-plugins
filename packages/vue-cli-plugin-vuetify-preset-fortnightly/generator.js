const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'fortnightly', () => {
    addFontLink(api, [
      'Libre+Franklin:300,400,500,700',
      'Merriweather:400,400i,500,700,700i,900,900i'
    ])
  })
}
