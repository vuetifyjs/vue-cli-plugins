const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'fortnightly', () => {
    addFontLink(api, ['Libre+Franklin', 'Merriweather'])
  })
}
