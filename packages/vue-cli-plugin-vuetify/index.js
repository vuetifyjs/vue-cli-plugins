// Imports
const { mergeRules } = require('./util/helpers')

const semver = require('semver')

module.exports = (api) => {
  const dependencies = api.service.pkg.dependencies || {}
  const devDependencies = api.service.pkg.devDependencies || {}

  const hasVuetifyLoader = Boolean(
    devDependencies['vuetify-loader'] ||
    dependencies['vuetify-loader'],
  )

  if (hasVuetifyLoader) {
    const vueVersion = semver.major(require('vue/package.json').version)
    const VuetifyLoaderPlugin = vueVersion === 3 ? require('vuetify-loader').VuetifyLoaderPlugin : require('vuetify-loader/lib/plugin')

    api.chainWebpack(config => {
      config
        .plugin('VuetifyLoaderPlugin')
        .use(VuetifyLoaderPlugin)
    })
  }

  // Resolve asset references from components
  api.chainWebpack(config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        const transformAssetUrls = options.transformAssetUrls || {}

        return ({
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
            ...transformAssetUrls,
          },
        })
      })
  })

  // Avoid loading styles in testing
  if (process.env.NODE_ENV === 'test') {
    api.chainWebpack(config => {
      const sassRule = config.module.rule('sass')
      sassRule.uses.clear()
      sassRule.use('null-loader').loader(require.resolve('null-loader'))

      const scssRule = config.module.rule('scss')
      scssRule.uses.clear()
      scssRule.use('null-loader').loader(require.resolve('null-loader'))
    })

    return
  }

  // Bootstrap SASS Variables
  api.chainWebpack(config => {
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(match => {
      for (let i = 0; i < 2; i++) {
        const boolean = Boolean(i)
        const rule = boolean ? 'sass' : 'scss'

        config.module
          .rule(rule)
          .oneOf(match)
          .use('sass-loader')
          .tap(opt => mergeRules(api, opt, rule))
      }
    })
  })
}
