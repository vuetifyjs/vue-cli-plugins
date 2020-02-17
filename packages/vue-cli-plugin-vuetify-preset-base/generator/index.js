const fs = require('fs')
const { updateFile } = require('@vuetify/cli-plugin-utils')

module.exports = api => {
  if (!api.hasPlugin('vuetify')) {
    console.log('`vue-cli-plugin-vuetify-preset-base` requires the `vue-cli-plugin-vuetify` package.')

    return
  }

  api.render('./template')

  api.extendPackage({
    devDependencies: {
      '@mdi/font': '^4.8.95',
      'eslint-config-vuetify': '^0.4.1',
      'eslint-plugin-vuetify': '^1.0.0-beta.6',
      'eslint-plugin-vue': '^6.1.2',
      lodash: '^4.17.14',
      webfontloader: '^1.6.28',
    },
  })

  api.injectImports(api.entryFile, 'import \'./plugins\'')

  api.onCreateComplete(() => {
    const eslintPath = api.resolve('.eslintrc.js')
    const eslint = require(eslintPath)

    eslint.extends = 'vuetify'

    fs.writeFileSync(eslintPath, api.genJSConfig(eslint), { utf: 8 })

    const about = api.resolve('src/views/About.vue')
    const home = api.resolve('src/views/Home.vue')

    if (fs.existsSync(about)) fs.unlinkSync(about)
    if (fs.existsSync(home)) fs.unlinkSync(home)
  })
}
