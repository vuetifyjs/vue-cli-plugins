const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

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
      api.chainWebpack(config => {
        config.module
          .rule('js')
            .test(/\.m?jsx?$/)
            .include
            .add(resolve('vuetify'))
            .end()
      })
    }

    api.chainWebpack(config => {
      config.plugin('VuetifyLoaderPlugin')
        .use(VuetifyLoaderPlugin)
    })
  }

  // Resolve asset references from components
  api.chainWebpack(config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        transformAssetUrls: {
          // v-app-bar extends v-toolbar
          'v-app-bar': 'src',
          // v-carousel-item extends v-img
          'v-carousel-item': ['src', 'lazy-src'],
          'v-img': ['src', 'lazy-src'],
          'v-navigation-drawer': 'src',
          'v-parallax': 'src',
          'v-toolbar': 'src',
        },
      }))
  })
}
