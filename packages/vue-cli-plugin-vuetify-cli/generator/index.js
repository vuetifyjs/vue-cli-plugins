module.exports = api => {
  api.extendPackage({
    scripts: {
      'create:component': 'node ./node_modules/vue-cli-plugin-vuetify-cli'
    }
  })
}
