const fs = require('fs')

module.exports = api => {
  api.render('./template')

  api.extendPackage({
    devDependencies: {
      'vuex-pathify': '*'
    }
  })

  api.onCreateComplete(() => {
    const packagePath = api.resolve('package.json')
    const package = require(packagePath)

    package.scripts.serve = 'vue-cli-service serve --open'
    package.scripts.deploy = 'yarn build && now'

    fs.writeFileSync(packagePath, JSON.stringify(package, null, 2))
  })
}
