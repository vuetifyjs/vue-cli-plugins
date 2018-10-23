function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
      "vuetify-loader": "^1.0.5",
      "stylus": "^0.54.5",
      "stylus-loader": "^3.0.1",
    }
  })
}

module.exports = {
  addDependencies,
}
