const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'shrine', () => {
    addFontLink(api, 'Rubik:300,400,500')
  })
}
