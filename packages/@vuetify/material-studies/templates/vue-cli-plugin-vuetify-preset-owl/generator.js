const {
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'owl', () => {
    injectGoogleFontLink(api, 'Rubik:400,500,700')
  })
}
