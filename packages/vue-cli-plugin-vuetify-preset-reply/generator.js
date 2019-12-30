const {
  addFontLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'reply', () => {
    addFontLink(api, 'Work+Sans:300,400,500,600,700')
  })
}
