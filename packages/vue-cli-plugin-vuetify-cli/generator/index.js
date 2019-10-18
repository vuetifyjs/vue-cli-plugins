module.exports = api => {
  api.extendPackage({
    // TODO: figure out why peer dependency isn't working
    devDependencies: {
      'pluralize': '^8.0.0'
    },
    scripts: {
      'make:component': 'vue-cli-service make:component',
      'make:directive': 'vue-cli-service make:directive',
      'make:mixin': 'vue-cli-service make:mixin',
      'make:view': 'vue-cli-service make:view',
    }
  })
}
