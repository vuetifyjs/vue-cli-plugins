module.exports = (api, opts) => {
  const hasVuetifyLoader = Boolean(
    api.service.pkg.devDependencies['vuetify-loader'] ||
    api.service.pkg.dependencies['vuetify-loader']
  )

  if (hasVuetifyLoader) {
    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

    // As the vuetify-loader automatically imports the necessary Vuetify components they are not found and
    // transpiled by Babel. Add Vuetify explicitly as a module to be transpiled.
    if (opts.transpileDependencies.indexOf('vuetify') === -1) {
      opts.transpileDependencies.push('vuetify')
    }

    api.chainWebpack(config => {
      config.plugin('VuetifyLoaderPlugin')
        .use(VuetifyLoaderPlugin)
    })
  }
}
