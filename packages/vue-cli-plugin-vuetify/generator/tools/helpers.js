const fs = require('fs')

function updateBabelConfig (api, callback) {
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
      { encoding: 'utf8' },
    )
  } else {
    // TODO: handle if babel config doesn't exist
  }
}

module.exports = {
  updateBabelConfig,
}
