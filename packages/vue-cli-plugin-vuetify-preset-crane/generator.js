const {
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'crane', () => {
    injectGoogleFontLink(api, 'Raleway')
  })
}
