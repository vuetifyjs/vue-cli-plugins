module.exports = (api, opts) => {
  const hasVuetifyLoader = Boolean(
    api.service.pkg.devDependencies['vuetify-loader'] ||
    api.service.pkg.dependencies['vuetify-loader']
  )

  if (hasVuetifyLoader) {
    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
    api.configureWebpack(webpackConfig => {
      webpackConfig.plugins.push(new VuetifyLoaderPlugin())
    })
  }
}
