module.exports = (api, opts) => {
  const alaCarte = require('./tools/alaCarte')
  const fonts = require('./tools/fonts')
  const polyfill = require('./tools/polyfill')
  const vuetify = require('./tools/vuetify')

  if (opts.preset !== 'configure') {
    opts = require(`../presets/${opts.preset}`).plugins['vue-cli-plugin-vuetify']
  }

  vuetify.addDependencies(api)

  if (opts.useAlaCarte) {
    alaCarte.addDependencies(api)
  } else if (opts.usePolyfill) {
    polyfill.addDependencies(api)
  }

  if (opts.installFonts) {
    fonts.addDependencies(api, opts.iconFont)
    fonts.addImports(api, opts.iconFont)
  }

  vuetify.renderFiles(api, opts)

  // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
  api.onCreateComplete(() => {
    vuetify.addImports(api)
    if (!opts.useAlaCarte && opts.usePolyfill) {
      polyfill.updateBabelConfig(api)
      polyfill.updateBrowsersList(api)
      polyfill.addImports(api)
    }
    !opts.installFonts && fonts.addLinks(api, opts.iconFont)
    vuetify.setHtmlLang(api, opts.locale)
  })
}
