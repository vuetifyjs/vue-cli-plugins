const fs = require('fs')
const { tsquery } = require('@phenomnomnominal/tsquery')

module.exports = function (api) {
  return {
    updateBabelConfig (callback) {
      let config, configPath

      const rcPath = api.resolve('./babel.config.js')
      const pkgPath = api.resolve('./package.json')
      if (fs.existsSync(rcPath)) {
        configPath = rcPath
        config = callback(require(rcPath))
      } else if (fs.existsSync(pkgPath)) {
        configPath = pkgPath
        config = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf8' }))

        if (config.babel) {
          config.babel = callback(config.babel)
        } else {
          // TODO: error handling here?
        }
      }

      if (configPath) {
        const moduleExports = configPath !== pkgPath ? 'module.exports = ' : ''

        fs.writeFileSync(
          configPath,
          `${moduleExports}${JSON.stringify(config, null, 2)}`,
          { encoding: 'utf8' }
        )
      } else {
        // TODO: handle if babel config doesn't exist
      }
    },

    updateMain (callback) {
      const tsPath = api.resolve('./src/main.ts')
      const jsPath = api.resolve('./src/main.js')

      const mainPath = fs.existsSync(tsPath) ? tsPath : jsPath
      let content = fs.readFileSync(mainPath, { encoding: 'utf8' })

      let lines = content.split(/\r?\n/g)

      lines = callback(lines)

      content = lines.join('\n')
      fs.writeFileSync(mainPath, content, { encoding: 'utf8' })
    },

    // tsconfig.json isn't strict JSON, so we need to parse it like a javascript file
    // TODO: actually use this (a-la-carte only)
    updateTsConfig () {
      const configPath = api.resolve('./tsconfig.json')
      let content = fs.readFileSync(configPath, { encoding: 'utf8' })

      content = replaceSyntheticDefaultImports(content)
      content = replaceTypes(content)

      fs.writeFileSync(configPath, content, { encoding: 'utf8' })

      function replaceSyntheticDefaultImports (code) {
        code = 'v =' + code
        const ast = tsquery.ast(code)
        const nodes = tsquery(ast, 'PropertyAssignment[name.text="compilerOptions"] > ObjectLiteralExpression > PropertyAssignment[name.text="allowSyntheticDefaultImports"]')

        const intializer = nodes[0].initializer

        return (
          code.slice(3, intializer.pos) +
          ' false, // Has to be disabled for Vuetify exports to work' +
          code.slice(intializer.end + 1)
        )
      }

      function replaceTypes (code) {
        code = 'v =' + code
        const ast = tsquery.ast(code)
        const node = tsquery(ast, 'PropertyAssignment[name.text="compilerOptions"] > ObjectLiteralExpression > PropertyAssignment[name.text="types"] > ArrayLiteralExpression')[0]

        const elements = node.elements.map(e => e.value)

        if (!elements.includes('vuetify')) {
          const arrayEnd = node.elements[node.elements.length - 1].end
          const newElement = ',' + (node.multiLine ? '\n      ' : ' ') + '"vuetify"'

          code = (
            code.slice(0, arrayEnd) +
            newElement +
            code.slice(arrayEnd)
          )
        }

        return code.slice(3)
      }
    }
  }
}
