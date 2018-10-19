function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
      "stylus": "^0.54.5",
      "stylus-loader": "^3.0.1",
    }
  })
}

module.exports = {
  addDependencies,
}
