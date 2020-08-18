const {
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'rally', () => {
    injectGoogleFontLink(api, [
      'Roboto+Condensed:300,400,500,700',
      'Eczar:400',
    ])
  })
}
