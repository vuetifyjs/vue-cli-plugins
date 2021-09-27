function addDependencies (api, useV3) {
  const deps = {
    devDependencies: {
      sass: useV3 ? '^1.38.0' : '~1.32.0',
      'sass-loader': '^10.0.0',
      'vuetify-loader': useV3 ? '^2.0.0-alpha.0' : '^1.7.0',
    },
  }

  if (useV3) deps.devDependencies['@vue/cli-service'] = '~5.0.0-beta.3'

  api.extendPackage(deps)
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

module.exports = {
  addDependencies,
  addVueConfigTranspileDependency,
}
