const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'crane', () => {
    addFontLink(api, 'Raleway')
  })
}
