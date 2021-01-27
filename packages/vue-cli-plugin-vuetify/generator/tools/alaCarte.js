function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
      'vuetify-loader': '^1.7.0',
      sass: '^1.32.0',
      'sass-loader': '^10.0.0',
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

module.exports = {
  addDependencies,
  addVueConfigTranspileDependency,
}
