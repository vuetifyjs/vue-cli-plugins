const fs = require('fs')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function mergeRules (opt, sass = true, type) {
  const end = sass ? "'" : "';"

  opt.data = `@import '~vuetify/src/styles/styles.sass${end}`
  opt.data += `\n@import '@/sass/variables.${type}${end}`

  return opt
}

module.exports = (api) => {
  const hasVuetifyLoader = Boolean(
    api.service.pkg.devDependencies['vuetify-loader'] ||
    api.service.pkg.dependencies['vuetify-loader']
  )

  if (hasVuetifyLoader) {
    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

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

  // Avoid loading styles in testing
  if (process.env.NODE_ENV === 'test') {
    api.chainWebpack(config => {
      const sassRule = config.module.rule('sass')
      sassRule.uses.clear()
      sassRule.use('null-loader').loader('null-loader')

      const scssRule = config.module.rule('scss')
      scssRule.uses.clear()
      scssRule.use('null-loader').loader('null-loader')
    })

    return
  }

  // Bootstrap SASS Variables
  let type
  const hasSassVariables = fs.existsSync(api.resolve('src/sass/variables.sass'))
  const hasScssVariables = fs.existsSync(api.resolve('src/sass/variables.scss'))

  if (!hasSassVariables && !hasScssVariables) return

  type = hasSassVariables ? 'sass' : 'scss'

  api.chainWebpack(config => {
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach(match => {
      for (let i = 0; i < 2; i++) {
        const boolean = Boolean(i)

        config.module
          .rule(boolean ? 'sass' : 'scss')
          .oneOf(match)
          .use('sass-loader')
          .tap(opt => mergeRules(opt, boolean, type))
      }
    })
  })
}
