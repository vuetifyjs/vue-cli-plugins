module.exports = (api, opts) => {
  const { fileExists } = require('../util/helpers')
  const alaCarte = require('./tools/alaCarte')
  const fonts = require('./tools/fonts')
  const polyfill = require('./tools/polyfill')
  const vite = require('./tools/vite')
  const vuetify = require('./tools/vuetify')

  const fs = require('fs')

  if (opts.preset !== 'configure') {
    opts = {
      hasTS: api.hasPlugin('typescript') || Object.keys(api.generator.pkg.devDependencies).includes('typescript'),
      ...opts,
      ...require(`../presets/${opts.preset}`).plugins['vue-cli-plugin-vuetify'],
    }
  }

  // Add imports
  // Must be before dependencies because of weird bug
  if (!opts.useV3) vuetify.addImports(api)
  if (!opts.useAlaCarte && opts.usePolyfill) polyfill.addImports(api)
  if (opts.installFonts) opts.useV3 ? fonts.addPlugin(api, opts) : fonts.addImports(api, opts.iconFont)

  // Add dependencies
  vuetify.addDependencies(api, opts)
  if (opts.useAlaCarte && !opts.useVite) alaCarte.addDependencies(api, opts.useV3)
  else if (opts.usePolyfill) polyfill.addDependencies(api)

  // Vite
  if (opts.useVite) {
    vite.addDependencies(api)
  }

  if (opts.installFonts) fonts.addDependencies(api, opts.iconFont)

  // Update vue.config.js for transpileDependency if AlaCarte
  if (opts.useAlaCarte && !opts.useVite) alaCarte.addVueConfigVuetify(api, opts.useV3)

  // Update templates
  vuetify.renderFiles(api, { opts })

  // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
  api.onCreateComplete(() => {
    // Vite
    if (opts.useVite) {
      vite.renderFiles(api, opts)
    }

    if (!opts.useAlaCarte && opts.usePolyfill) {
      polyfill.updateBabelConfig(api)
      polyfill.updateBrowsersList(api)
    }

    if (!opts.installFonts) fonts.addLinks(api, opts.iconFont)
    vuetify.setHtmlLang(api, opts.locale)

    if (fileExists(api, './src/public/index.html')) {
      fs.unlinkSync(api.resolve('./src/public/index.html'))
    }

    const configFile = api.resolve('./vue.config.js')

    if (fileExists(api, configFile)) {
      if (opts.useVite) {
        fs.unlinkSync(configFile)
      } else {
        vuetify.addVuetifyLoaderDocsLink(configFile)
      }
    }

    api.exitLog('Discord community: https://community.vuetifyjs.com')
    api.exitLog('Github: https://github.com/vuetifyjs/vuetify')
    api.exitLog('Support Vuetify: https://github.com/sponsors/johnleider')
  })
}
