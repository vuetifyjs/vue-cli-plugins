module.exports = api => {
  api.extendPackage({
    scripts: {
      'make:component': 'vue-cli-service make:component',
      'make:directive': 'vue-cli-service make:directive',
      'make:mixin': 'vue-cli-service make:mixin',
      'make:view': 'vue-cli-service make:view',
    }
  })
}
