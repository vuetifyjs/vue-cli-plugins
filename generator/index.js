module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      vuetify: "^1.0.6"
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

  // Handle if router exists
  {
    const fs = require('fs')
    const routerPath = api.resolve('./src/router.js')
    opts.router = fs.existsSync(routerPath)

    if (opts.replaceComponents) {
      api.render('./templates/default', { ...opts })
    }
  }

  // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
  api.onCreateComplete(() => {
    const fs = require('fs')

    // Setup Vuetify import for main.js
    let vuetifyLines = ''
    if (opts.useAlaCarte) {
      vuetifyLines += "\nimport {"
      vuetifyLines += "\n  Vuetify,"
      vuetifyLines += "\n  VApp,"
      vuetifyLines += "\n  VNavigationDrawer,"
      vuetifyLines += "\n  VFooter,"
      vuetifyLines += "\n  VList,"
      vuetifyLines += "\n  VBtn,"
      vuetifyLines += "\n  VIcon,"
      vuetifyLines += "\n  VGrid,"
      vuetifyLines += "\n  VToolbar,"
      vuetifyLines += "\n  transitions"
      vuetifyLines += "\n} from 'vuetify'"
      vuetifyLines += "\nimport '../node_modules/vuetify/src/stylus/app.styl'\n"
    } else {
      vuetifyLines += "\nimport Vuetify from 'vuetify'"
      vuetifyLines += "\nimport 'vuetify/dist/vuetify.min.css'\n"
    }

    if (opts.useAlaCarte || opts.useTheme) {
      vuetifyLines += "\nVue.use(Vuetify, {"

      if (opts.useAlaCarte) {
        vuetifyLines += "\n  components: {"
        vuetifyLines += "\n    VApp,"
        vuetifyLines += "\n    VNavigationDrawer,"
        vuetifyLines += "\n    VFooter,"
        vuetifyLines += "\n    VList,"
        vuetifyLines += "\n    VBtn,"
        vuetifyLines += "\n    VIcon,"
        vuetifyLines += "\n    VGrid,"
        vuetifyLines += "\n    VToolbar,"
        vuetifyLines += "\n    transitions"
        vuetifyLines += "\n  },"
      }

      if (opts.useTheme) {
        vuetifyLines += "\n  theme: {"
        vuetifyLines += "\n    primary: '#ee44aa',"
        vuetifyLines += "\n    secondary: '#424242',"
        vuetifyLines += "\n    accent: '#82B1FF',"
        vuetifyLines += "\n    error: '#FF5252',"
        vuetifyLines += "\n    info: '#2196F3',"
        vuetifyLines += "\n    success: '#4CAF50',"
        vuetifyLines += "\n    warning: '#FFC107'"
        vuetifyLines += "\n  },"
      }

      vuetifyLines += "\n})"
    } else {
      vuetifyLines += "\nVue.use(Vuetify)"
    }

    // Modify main.js
    {
      const tsPath = api.resolve('./src/main.ts')
      const jsPath = api.resolve('./src/main.js')

      const mainPath = fs.existsSync(tsPath) ? tsPath : jsPath
      let content = fs.readFileSync(mainPath, { encoding: 'utf8' })

      const lines = content.split(/\r?\n/g).reverse()

      // Inject import
      const lastImportIndex = lines.findIndex(line => line.match(/^import/))
      lines[lastImportIndex] += vuetifyLines
      // Modify app
      content = lines.reverse().join('\n')
      fs.writeFileSync(mainPath, content, { encoding: 'utf8' })
    }

    // If a-la-carte, update babel
    if (opts.useAlaCarte) {
      let config
      let configPath
      function addBabelPlugin(cfg) {
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
      }

      const rcPath = api.resolve('./.babelrc')
      if (fs.existsSync(rcPath)) {
        configPath = rcPath
        config = JSON.parse( fs.readFileSync(rcPath, { encoding: 'utf8' }) )
        config = addBabelPlugin(config)
      } else {
        const pkgPath = api.resolve('./package.json')
        config = JSON.parse( fs.readFileSync(pkgPath, { encoding: 'utf8' }) )

        if (config.babel) {
          configPath = pkgPath
          config.babel = addBabelPlugin(config.babel)
        }
      }

      if (configPath) {
        fs.writeFileSync(
          configPath,
          JSON.stringify(config, null, 2),
          { encoding: 'utf8' }
        )
      } else {
        // TODO handle if babel config doesn't exist
      }
    }

    // Add Material Icons
    {
      const indexPath = api.resolve('./public/index.html')

      let content = fs.readFileSync(indexPath, { encoding: 'utf8' })

      const lines = content.split(/\r?\n/g).reverse()

      const lastLink = lines.findIndex(line => line.match(/^\s*<link/))
      lines[lastLink] += '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet">'

      content = lines.reverse().join('\n')
      fs.writeFileSync(indexPath, content, { encoding: 'utf8' })
    }

    // Based on router option, remove unneccessary vue components
    const rimraf = require('rimraf')
    if (opts.router) {
      rimraf( api.resolve('./src/components'), () => {})
    } else {
      rimraf( api.resolve('./src/views'), () => {})
    }
  })
}
