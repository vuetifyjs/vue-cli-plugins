function addDependencies (api, useV3) {
  const deps = {
    devDependencies: useV3 ? {
      'webpack-plugin-vuetify': '^2.0.0-alpha.0',
    } : {
      sass: '~1.32.0',
      'sass-loader': '^10.0.0',
      'vuetify-loader': '^1.7.0',
    },
  }

  api.extendPackage(deps)
}

function addVueConfigPluginOptions (api) {
  api.extendPackage({
    vue: {
      pluginOptions: {
        vuetify: {},
      },
    },
  })
}

function addVueConfigTranspileDependency (api) {
  api.extendPackage({
    vue: {
      transpileDependencies: [
        'vuetify',
      ],
    },
  })
}

function addVueConfigVuetify (api, useV3) {
  useV3 ? addVueConfigPluginOptions(api) : addVueConfigTranspileDependency(api)
}

module.exports = {
  addDependencies,
  addVueConfigVuetify,
}
