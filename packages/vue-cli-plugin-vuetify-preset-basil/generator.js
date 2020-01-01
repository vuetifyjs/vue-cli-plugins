const {
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'basil', () => {
    injectGoogleFontLink(api, [
      'Montserrat:400,500,600,700',
      'Lekton:700',
    ])
  })
}
