module.exports = (api, opts) => {
  const alaCarte = require('./tools/alaCarte')
  const fonts = require('./tools/fonts')
  const polyfill = require('./tools/polyfill')
  const vuetify = require('./tools/vuetify')

  const fs = require("fs")

  if (opts.preset !== 'configure') {
    opts = require(`../presets/${opts.preset}`).plugins['vue-cli-plugin-vuetify']
  }

  // Add imports
  // Must be before dependencies because of weird bug
  if (!opts.useV3) vuetify.addImports(api)
  if (!opts.useAlaCarte && opts.usePolyfill) polyfill.addImports(api)
  if (opts.installFonts && !opts.useV3) fonts.addImports(api, opts.iconFont)

  // Add dependencies
  vuetify.addDependencies(api, opts.useV3)
  if (opts.useAlaCarte) alaCarte.addDependencies(api, opts.useV3)
  else if (opts.usePolyfill) polyfill.addDependencies(api)

  // Vite
  if (opts.useVite) {
    api.extendPackage({
      devDependencies: {
        '@vitejs/plugin-vue': '^1.1.5',
        'vite': '~2.0.5',
      },
      scripts: {
        'serve': 'vite preview',
        'build': 'vite build',
        'dev': 'vite',
      }
    })

    const viteFiles = {
      './vite.config.js': './templates/v3/src/vite.config.js',
      './index.html': './templates/v3/src/index.vite.html',
    }

    api.render(viteFiles, opts)
  }

  if (opts.installFonts) fonts.addDependencies(api, opts.iconFont)

  // Update vue.config.js for transpileDependency if AlaCarte
  if (opts.useAlaCarte) alaCarte.addVueConfigTranspileDependency(api)

  // Update templates
  vuetify.renderFiles(api, { opts })

  // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
  api.onCreateComplete(() => {
    if (!opts.useAlaCarte && opts.usePolyfill) {
      polyfill.updateBabelConfig(api)
      polyfill.updateBrowsersList(api)
    }
    if (!opts.installFonts) fonts.addLinks(api, opts.iconFont)
    vuetify.setHtmlLang(api, opts.locale)

    if (fs.existsSync('src/public/index.html')) {
      fs.unlinkSync(api.resolve('src/public/index.html'));
    }

    api.exitLog('Discord community: https://community.vuetifyjs.com')
    api.exitLog('Github: https://github.com/vuetifyjs/vuetify')
    api.exitLog('Support Vuetify: https://github.com/sponsors/johnleider')
  })
}
