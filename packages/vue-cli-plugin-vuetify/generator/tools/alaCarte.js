function addDependencies (api, useV3) {
  let deps = {
    devDependencies: {
      sass: '^1.32.0',
      'sass-loader': '^10.0.0',
    },
  }

  if (!useV3) deps.devDependencies['vuetify-loader'] = '^1.7.0'

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
