module.exports = (api, opts, rootOpts) => {
  const helpers = require('./helpers')(api)

  api.extendPackage({
    dependencies: {
      vuetify: "^1.2.0-beta.1"
    }
  })

  if (opts.useAlaCarte) {
    api.extendPackage({
      devDependencies: {
        "babel-plugin-transform-imports": "^1.4.1",
        "stylus": "^0.54.5",
        "stylus-loader": "^3.0.1",
      }
    })
  }

  if (opts.usePolyfill) {
    api.extendPackage({
      devDependencies: {
        "@babel/polyfill": "^7.0.0-beta.49",
      }
    })
  }

  if (opts.installFontIcon) {
    const iconFonts = {
      md: {
        'package': {
          'material-design-icons-iconfont': '^3.0.3',
        },
        'import': 'material-design-icons-iconfont/dist/material-design-icons.css',
      },
      mdi: {
        'package': {
          '@mdi/font': '^2.6.95',
        },
        'import': '@mdi/font/css/materialdesignicons.css',
      },
      fa: {
        'package': {
          '@fortawesome/fontawesome-free': '^5.2.0',
        },
        'import': '@fortawesome/fontawesome-free/css/all.css',
      },
      fa4: {
        'package': {
          'font-awesome': '^4.7.0',
        },
        'import': 'font-awesome/css/font-awesome.css',
      },
    }

    api.extendPackage({
      devDependencies: iconFonts[opts.iconFont]['package'],
    })

    try {
      api.injectImports(helpers.getMain(),
        `import '${iconFonts[opts.iconFont]['import']}'`,
      )
    } catch(e) {
      console.error(e)
    }
  }


  // Render vuetify plugin file
  api.render(api.hasPlugin('typescript') ? {
    './src/plugins/vuetify.ts': './templates/default/src/plugins/vuetify.ts'
  } : {
    './src/plugins/vuetify.js': './templates/default/src/plugins/vuetify.js'
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
    helpers.updateFile(helpers.getMain(), lines => {
      const vueImportIndex = lines.findIndex(line => line.match(/^import Vue/))

      lines.splice(vueImportIndex + 1, 0, 'import \'./plugins/vuetify\'')

      return lines
    })

    // Add polyfill
    if (opts.usePolyfill) {
      helpers.updateBabelConfig(cfg => {
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

      helpers.updateFile(helpers.getMain(), lines => {
        if (!lines.find(l => l.match(/^(import|require).*@babel\/polyfill.*$/))) {
          lines.unshift('import \'@babel/polyfill\'')
        }

        return lines
      })
    }

    // If a-la-carte, update babel
    if (opts.useAlaCarte) {
      helpers.updateBabelConfig(cfg => {
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
    }

    // Add Material Icons (unless electron)
    if (!opts.installFontIcon) {
      const links = {
        md: "<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Material+Icons\">",
        mdi: "<link rel=\"stylesheet\" href=\"https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css\">",
        fa: "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.min.css\" integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">",
        fa4: "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css\">",
      }
      const indexPath = api.resolve('./public/index.html')

      let content = fs.readFileSync(indexPath, { encoding: 'utf8' })

      const lines = content.split(/\r?\n/g).reverse()

      const lastLink = lines.findIndex(line => line.match(/^\s*<link/))
      lines[lastLink] += "\n    <link href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900\" rel=\"stylesheet\">"
      lines[lastLink] += "\n    " + links[opts.iconFont]

      content = lines.reverse().join('\n')
      fs.writeFileSync(indexPath, content, { encoding: 'utf8' })
    }
  })
}
