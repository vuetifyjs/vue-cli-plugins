const {
  addHtmlLink,
  generatePreset,
} = require('@vuetify/shared')

module.exports = api => {
  api.onCreateComplete(() => {
    addHtmlLink(api, 'Montserrat:100,300,400,500,700,900&Lekton:100,300,400,500,700,900')
  })

  generatePreset(api, 'basil')
}
