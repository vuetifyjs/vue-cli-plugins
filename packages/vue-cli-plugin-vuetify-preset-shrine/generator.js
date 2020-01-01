const {
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'shrine', () => {
    injectGoogleFontLink(api, 'Rubik:300,400,500')
  })
}
