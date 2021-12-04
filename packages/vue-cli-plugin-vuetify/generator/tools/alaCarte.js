function addDependencies (api, useV3) {
  const deps = {
    devDependencies: {
      sass: useV3 ? '^1.38.0' : '~1.32.0',
      'sass-loader': '^10.0.0',
      'vuetify-loader': useV3 ? '^2.0.0-alpha.0' : '^1.7.0',
    },
  }

  // @TODO temporary fix for Vuetify 3 only
  if (useV3) {
    deps.devDependencies['@vue/cli-service'] = '5.0.0-beta.7'
    deps.devDependencies['@vue/cli-plugin-babel'] = '5.0.0-beta.7'
  }

  api.extendPackage(deps)
}

function addVueConfigPluginOptions(api) {
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

function addVueConfigVuetify(api, useV3) {
  useV3 ? addVueConfigPluginOptions(api) : addVueConfigTranspileDependency(api)
}

module.exports = {
  addDependencies,
  addVueConfigVuetify,
}
