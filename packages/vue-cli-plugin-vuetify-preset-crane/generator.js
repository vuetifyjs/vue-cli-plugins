const {
  addHtmlLink,
  generatePreset,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  generatePreset(api, 'crane', () => {
    addHtmlLink(api, 'Raleway:100,300,400,500,700,900')
  })
}
