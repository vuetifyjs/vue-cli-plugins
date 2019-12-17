const {
  addHtmlLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(
    api,
    'basil',
    () => {
      addHtmlLink(api, 'Montserrat:100,300,400,500,700,900&Lekton:100,300,400,500,700,900')
    }
  )
}
