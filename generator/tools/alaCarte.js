const helpers = require('./helpers')

function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
      "babel-plugin-transform-imports": "^1.5.0",
      "stylus": "^0.54.5",
      "stylus-loader": "^3.0.1",
    }
  })
}

function updateBabelConfig (api) {
  helpers.updateBabelConfig(api, cfg => {
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


  helpers.updateFile(api, './babel.config.js', lines => {
    const index = lines.findIndex(line => line.indexOf('vuetify/es5/components/${member}') !== -1)
    index && (lines[index] += ' // eslint-disable-line no-template-curly-in-string')
    return lines
  })
}

module.exports = {
  addDependencies,
  updateBabelConfig,
}
