const fs = require('fs')

module.exports = function (api) {
  return {
    updateBabelConfig (callback) {
      let config, configPath

      const rcPath = api.resolve('./.babelrc')
      const pkgPath = api.resolve('./package.json')
      if (fs.existsSync(rcPath)) {
        configPath = rcPath
        config = JSON.parse(fs.readFileSync(rcPath, { encoding: 'utf8' }))
        config = callback(config)
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
        fs.writeFileSync(
          configPath,
          JSON.stringify(config, null, 2),
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
    }
  }
}
