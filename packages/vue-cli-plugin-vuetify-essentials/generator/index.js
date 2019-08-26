const fs = require('fs')

module.exports = api => {
  api.render('./template')

  api.extendPackage({
    devDependencies: {
      '@mdi/js': '*',
      'axios': '*',
      'webfontloader': '*',
      'vue-analytics': '*',
      'vue-meta': '*',
      'vuex-pathify': '*',
      'vuex-router-sync': '*'
    }
  })

  api.injectImports(api.entryFile, `import './plugins'`)

  api.onCreateComplete(() => {
    const packagePath = api.resolve('package.json')
    const package = require(packagePath)

    package.scripts.serve = 'vue-cli-service serve --open'
    package.scripts.deploy = 'yarn build && now'

    fs.writeFileSync(packagePath, JSON.stringify(package, null, 2))
    fs.unlinkSync(api.resolve('src/views/About.vue'))
    fs.unlinkSync(api.resolve('src/views/Home.vue'))

    const indexPath = api.resolve('public/index.html')
    let index = fs.readFileSync(indexPath, 'utf8')

    index = index.replace('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">', '')
    index = index.replace('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">', '')
    index = index.replace(/^\s*\n/gm, '')

    fs.writeFileSync(indexPath, index)
  })
}
