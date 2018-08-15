const fs = require('fs')

module.exports = function (api) {
  return {
    getMain() {
      return api.hasPlugin('typescript')
        ? api.resolve('src/main.ts')
        : api.resolve('src/main.js')
    },

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

    updateFile (file, callback) {
      let content = fs.existsSync(file)
        ? fs.readFileSync(file, { encoding: 'utf8' })
        : ''

      content = callback(content.split(/\r?\n/g)).join('\n')

      fs.writeFileSync(file, content, { encoding: 'utf8' })
    }
  }
}
