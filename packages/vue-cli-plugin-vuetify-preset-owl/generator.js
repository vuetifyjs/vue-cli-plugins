const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'owl', () => {
    addFontLink(api, 'Rubik')
  })
}
