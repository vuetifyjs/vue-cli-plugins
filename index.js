module.exports = (api) => {
  const hasVuetifyLoader = Boolean(
    api.service.pkg.devDependencies['vuetify-loader'] ||
    api.service.pkg.dependencies['vuetify-loader']
  )

  if (hasVuetifyLoader) {
    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

    api.chainWebpack(config => {
      config.plugin('VuetifyLoaderPlugin')
        .use(VuetifyLoaderPlugin)
    })
  }
  
  // Resolve asset references from v-img
  api.chainWebpack(config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        transformAssetUrls: {
          'v-img': 'src',
        },
      }))
  })
}
