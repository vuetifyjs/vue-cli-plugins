const fs = require('fs')

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
    eslintConfig: { extends: 'vuetify' },
  })

  api.injectImports(api.entryFile, 'import \'./plugins\'')

  api.onCreateComplete(() => {
    const packagePath = api.resolve('package.json')
    const projectPackage = require(packagePath)

    projectPackage.scripts.deploy = 'yarn build && now'

    fs.writeFileSync(packagePath, JSON.stringify(projectPackage, null, 2))

    const about = api.resolve('src/views/About.vue')
    const home = api.resolve('src/views/Home.vue')

    if (fs.existsSync(about)) fs.unlinkSync(about)
    if (fs.existsSync(home)) fs.unlinkSync(home)
  })
}
