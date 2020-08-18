const {
  injectGoogleFontLink,
  VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  VuetifyPresetGenerator(api, 'reply', () => {
    injectGoogleFontLink(api, 'Work+Sans:300,400,500,600,700')
  })
}
