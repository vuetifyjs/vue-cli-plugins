const defaults = {
  preset: 'configure',
  replaceComponents: true,
  useTheme: false,
  useCustomProperties: false,
  iconFont: 'md',
  installFonts: false,
  useAlaCarte: true,
  usePolyfill: true,
  locale: 'en'
}

module.exports = (api, opts, rootOpts) => {
  const alaCarte = require('./tools/alaCarte')
  const fonts = require('./tools/fonts')
  const polyfill = require('./tools/polyfill')
  const vuetify = require('./tools/vuetify')

  opts = opts.preset === 'default'
    ? defaults
    : opts

  vuetify.addDependencies(api)
  opts.useAlaCarte && alaCarte.addDependencies(api)
  opts.usePolyfill && polyfill.addDependencies(api)
  opts.installFonts && fonts.addDependencies(api, opts.iconFont)
  opts.installFonts && fonts.addImports(api, opts.iconFont)
  vuetify.renderFiles(api, opts)

  // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
  api.onCreateComplete(() => {
    vuetify.addImports(api)
    opts.usePolyfill && polyfill.updateBabelConfig(api)
    opts.usePolyfill && polyfill.updateBrowsersList(api)
    opts.usePolyfill && polyfill.addImports(api)
    !opts.installFonts && fonts.addLinks(api, opts.iconFont)
    vuetify.setHtmlLang(api, opts.locale)
  })
}
