// Imports
const fs = require('fs')

module.exports = (api, options) => {
  if (!api.hasPlugin('vuetify')) {
    console.log('`@vuetify/presets` requires the `vue-cli-plugin-vuetify` package.')

    return
  }

  const configuration = options.configuration

  try {
    api.render(`./templates/${configuration}`)
  } catch (e) {
    console.log(e, options)
  }

  api.extendPackage({
    devDependencies: {
      lodash: '^4.17.21',
      webfontloader: '^1.6.28',
      'vuex-pathify': '^1.4.5',
    },
  })

  api.injectImports(api.entryFile, 'import \'./plugins\'')

  api.onCreateComplete(() => {
    const presetName = `Vuetify ${configuration} preset`
    const projectName = api.rootOptions.projectName

    const home = api.resolve('src/views/Home.vue')
    const about = api.resolve('src/views/About.vue')

    if (fs.existsSync(home)) fs.unlinkSync(home)
    if (fs.existsSync(about)) fs.unlinkSync(about)

    api.exitLog(`🍣  Successfully generated ${projectName} from the ${presetName}.\n`)
  })
}
