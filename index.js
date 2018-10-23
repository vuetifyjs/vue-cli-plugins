module.exports = (api) => {
  const hasVuetifyLoader = Boolean(
    api.service.pkg.devDependencies['vuetify-loader'] ||
    api.service.pkg.dependencies['vuetify-loader']
  )

  if (hasVuetifyLoader) {
    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

    api.chainWebpack(config => {
      config.module
        .rule('js')
        .include
          .add(api.resolve('node_modules/vuetify'))
      
      config.plugin('VuetifyLoaderPlugin')
        .use(VuetifyLoaderPlugin)
    })
  }
}
