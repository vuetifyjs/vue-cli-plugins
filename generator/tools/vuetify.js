const helpers = require('./helpers')

function addDependencies (api) {
  api.extendPackage({
    dependencies: {
      vuetify: "^1.2.0-beta.1"
    }
  })
}

function renderFiles (api, opts) {
  const pluginFilename = api.hasPlugin('typescript') ? 'vuetify.ts' : 'vuetify.js'
  api.render({
    [`./src/plugins/${pluginFilename}`]: `../templates/default/src/plugins/${pluginFilename}`
  }, opts)

  // Render files if we're replacing
  const fs = require('fs')
  const routerPath = api.resolve('./src/router.js')
  opts.router = fs.existsSync(routerPath)

  if (opts.replaceComponents) {
    const files = {
      './src/App.vue': '../templates/default/src/App.vue',
      './src/assets/logo.png': '../templates/default/src/assets/logo.png'
    }

    if (opts.router) {
      files['./src/views/Home.vue'] = '../templates/default/src/views/Home.vue'
    } else {
      api.render('../templates/hw')
    }

    api.render(files, opts)
  }
}

function addImports (api) {
  helpers.updateFile(api, api.entryFile, lines => {
    const vueImportIndex = lines.findIndex(line => line.match(/^import Vue/))

    lines.splice(vueImportIndex + 1, 0, `import './plugins/vuetify'`)

    return lines
  })
}

module.exports = {
  addDependencies,
  renderFiles,
  addImports,
}
