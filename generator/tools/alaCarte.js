function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
      "vuetify-loader": "^1.2.2",
      "sass": "^1.17.4",
      "sass-loader": "^7.1.0",
    }
  })
}

module.exports = {
  addDependencies,
}
