const path = require('path');
module.exports = (api, opts) => {
  const hasVuetifyLoader = Boolean(
    api.service.pkg.devDependencies['vuetify-loader'] ||
    api.service.pkg.dependencies['vuetify-loader']
  )

  if (hasVuetifyLoader) {
    const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

    // As the vuetify-loader automatically imports the necessary Vuetify components they are not found and
    // transpiled by Babel. Add Vuetify explicitly as a module to be transpiled.
    // Warn we have "vuetify" as a string we show a warning message
    if (opts.transpileDependencies.includes("vuetify")) {
      console.warn("WARN: The string 'vuetify' shoud not be used as an option for 'transpileDependencies' in 'vue.config.js'. Visit https://github.com/vuetifyjs/vue-cli-plugin-vuetify/issues/55 to learn more.")
    } else {
      if (!opts.transpileDependencies.some(td => td.toString().includes('vuetify'))) {
        opts.transpileDependencies.push(path.resolve(__dirname, '../vuetify/'))
      }
    }

    api.chainWebpack(config => {
    config.plugin('VuetifyLoaderPlugin')
      .use(VuetifyLoaderPlugin)
    })
  }
}
