const {
  addHtmlLink,
  generatePreset,
} = require('@vuetify/shared')

module.exports = api => {
  api.onCreateComplete(() => {
    addHtmlLink(api, 'Raleway:100,300,400,500,700,900')
  })

  generatePreset(api, 'crane')
}
