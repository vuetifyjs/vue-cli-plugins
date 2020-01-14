const {
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'fortnightly', () => {
    injectGoogleFontLink(api, [
      'Libre+Franklin:300,400,500,700',
      'Merriweather:400,400i,500,700,700i,900,900i',
    ])
  })
}
