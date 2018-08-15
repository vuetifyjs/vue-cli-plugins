module.exports = (api, opts, rootOpts) => {
  const helpers = require('./helpers')(api)
  const fonts = require('./fonts')

  api.extendPackage({
    dependencies: {
      vuetify: "^1.2.0-beta.1"
    }
  })

  // Add alacarte dependencies
  opts.useAlaCarte && api.extendPackage({
    devDependencies: {
      "babel-plugin-transform-imports": "^1.5.0",
      "stylus": "^0.54.5",
      "stylus-loader": "^3.0.1",
    }
  })

  // Add polyfill dependencies
  opts.usePolyfill && api.extendPackage({
    devDependencies: {
        "@babel/polyfill": "^7.0.0-rc.1",
    }
  })

  // Add font dependencies
  if (opts.installFonts) {
    api.extendPackage({
      devDependencies: {
        'roboto-fontface': '*',
        ...fonts[opts.iconFont]['package'],
      }
    })

    try {
      api.injectImports(api.entryFile, `import '${fonts['roboto']['import']}'`)
      api.injectImports(api.entryFile, `import '${fonts[opts.iconFont]['import']}'`)
    } catch(e) {
      console.error(e)
    }
  }

  // Render vuetify plugin file
  const pluginFilename = api.hasPlugin('typescript') ? 'vuetify.ts' : 'vuetify.js'
  api.render({
    [`./src/plugins/${pluginFilename}`]: `./templates/default/src/plugins/${pluginFilename}`
  }, opts)

  // Render files if we're replacing
  const fs = require('fs')
  const routerPath = api.resolve('./src/router.js')
  opts.router = fs.existsSync(routerPath)

  if (opts.replaceComponents) {
    const files = {
      './src/App.vue': './templates/default/src/App.vue',
      './src/assets/logo.png': './templates/default/src/assets/logo.png'
    }

    if (opts.router) {
      files['./src/views/Home.vue'] = './templates/default/src/views/Home.vue'
    } else {
      api.render('./templates/hw')
    }

    api.render(files, opts)
  }

  // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
  api.onCreateComplete(() => {
    // Modify main.js
    helpers.updateFile(api.entryFile, lines => {
      const vueImportIndex = lines.findIndex(line => line.match(/^import Vue/))

      lines.splice(vueImportIndex + 1, 0, 'import \'./plugins/vuetify\'')

      return lines
    })

    // Add polyfill
    opts.usePolyfill && helpers.updateBabelConfig(cfg => {
      if (!cfg.presets) return cfg

      const vuePresetIndex = cfg.presets.findIndex(p => Array.isArray(p) ? p[0] === '@vue/app' : p === '@vue/app')
      const isArray = Array.isArray(cfg.presets[vuePresetIndex])

      if (vuePresetIndex < 0) return cfg

      if (isArray) {
        cfg.presets[vuePresetIndex][1]['useBuiltIns'] = 'entry'
      } else {
        cfg.presets[vuePresetIndex] = [
          '@vue/app',
          {
            useBuiltIns: 'entry'
          }
        ]
      }

      return cfg
    })

    // Add polyfill imports
    opts.usePolyfill && helpers.updateFile(api.entryFile, lines => {
      if (!lines.find(l => l.match(/^(import|require).*@babel\/polyfill.*$/))) {
        lines.unshift('import \'@babel/polyfill\'')
      }

      return lines
    })

    // If a-la-carte, update babel
    opts.useAlaCarte && helpers.updateBabelConfig(cfg => {
      if (cfg.plugins === undefined) {
        cfg.plugins = []
      }

      cfg.plugins.push([
        'transform-imports',
        {
          vuetify: {
            transform: 'vuetify/es5/components/${member}',
            preventFullImport: true
          }
        }
      ])

      return cfg
    })

    // Add font links
    opts.installFonts || helpers.updateFile('./public/index.html', lines => {
      const lastLink = lines.reverse().lastIndexOf(line => line.match(/^\s*<link/))
      lines[lastLink] += "\n    " + fonts['roboto'].link
      lines[lastLink] += "\n    " + fonts[opts.iconFont].link

      return lines.reverse()
    })
  })
}
