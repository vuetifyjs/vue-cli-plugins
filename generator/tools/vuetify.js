const helpers = require('./helpers')

function addDependencies (api) {
  api.extendPackage({
    dependencies: {
      vuetify: "^1.3.0"
    }
  })
}

function renderFiles (api, opts) {
  const pluginFilename = api.hasPlugin('typescript') ? 'vuetify.ts' : 'vuetify.js'
  const pluginSourceFilename = 'vuetify.js'
  api.render({
    [`./src/plugins/${pluginFilename}`]: `../templates/default/src/plugins/${pluginSourceFilename}`
  }, {
    ...opts,
    typescript: api.hasPlugin('typescript')
  })

  // Render files if we're replacing
  const fs = require('fs')
  const routerPath = api.resolve('./src/router.js')
  opts.router = fs.existsSync(routerPath)

  if (opts.replaceComponents) {
    const files = {
      './src/App.vue': '../templates/default/src/App.vue',
      './src/assets/logo.svg': '../templates/default/src/assets/logo.svg',
      './src/components/HelloWorld.vue': '../templates/default/src/components/HelloWorld.vue'
    }

    if (opts.router) {
      files['./src/views/Home.vue'] = '../templates/default/src/views/Home.vue'
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

function setHtmlLang (api, locale) {
  helpers.updateFile(api, './public/index.html', lines => {
    const htmlIndex = lines.findIndex(line => line.match(/<html\s+(.+\s+)?lang=[^\s>]+(\s|>)/))

    if (htmlIndex !== -1) {
      lines[htmlIndex] = lines[htmlIndex].replace(/(<html\s+(.+\s+)?)(lang=)([^\s>]+)(\s|>)/, `$1$3"${locale}"$5`)
    }

    return lines
  })
}

module.exports = {
  addDependencies,
  addImports,
  renderFiles,
  setHtmlLang,
}
