const helpers = require('./helpers')

function addDependencies (api) {
  api.extendPackage({
    dependencies: {
      "@babel/polyfill": "^7.0.0-rc.1",
    }
  })
}

function updateBabelConfig (api) {
  helpers.updateBabelConfig(api, cfg => {
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
}

function addImports (api) {
  helpers.updateFile(api, api.entryFile, lines => {
    if (!lines.find(l => l.match(/^(import|require).*@babel\/polyfill.*$/))) {
      lines.unshift('import \'@babel/polyfill\'')
    }

    return lines
  })
}

module.exports = {
  addDependencies,
  updateBabelConfig,
  addImports,
}
