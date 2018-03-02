module.exports = (api, opts, rootOpts) => {
  api.extendPackage({
    dependencies: {
      vuetify: "^1.0.4"
    }
  })

  if (opts.replaceComponents) {
    api.render('./templates/default', { ...opts })
  }

  // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
  api.onCreateComplete(() => {
    const fs = require('fs')

    let vuetifyLines = ''
    {
      vuetifyLines += "\nimport Vuetify from 'vuetify'"
      vuetifyLines += "\nimport 'vuetify/dist/vuetify.min.css'\n\n"
      vuetifyLines += "Vue.use(Vuetify)"
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

    // Add Material Icons
    {
      const indexPath = api.resolve('./index.html')

      let content = fs.readFileSync(indexPath, { encoding: 'utf8' })

      const lines = content.split(/\r?\n/g).reverse()

      const lastLink = lines.findIndex(line => line.match(/^\s*<link/))
      lines[lastLink] += '<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet">'

      content = lines.reverse().join('\n')
      fs.writeFileSync(indexPath, content, { encoding: 'utf8' })
    }
  })
}
