const semver = require('semver')

function addVariables (api, file) {
  api.chainWebpack(config => {
    const modules = ['vue-modules', 'vue', 'normal-modules', 'normal']

    modules.forEach(match => {
      for (let i = 0; i < 2; i++) {
        const boolean = Boolean(i)
        const rule = boolean ? 'sass' : 'scss'
        const end = boolean ? "'" : "';"

        config.module
          .rule(rule)
          .oneOf(match)
          .use('sass-loader')
          .tap(opt => setVariables(opt, `'${file}${end}`))
      }
    })
  })
}

// Check for existence of file and add import
function genVariableImport (file) {
  return `@import ${file}`
}

// Create an import statement
// to bootstrap a users variables
function setVariables (opt, file) {
  const variables = genVariableImport(file)

  let sassLoaderVersion
  try {
    sassLoaderVersion = semver.major(require('sass-loader/package.json').version)
  } catch (e) {}

  // Merge with user-defined loader data config
  if (sassLoaderVersion < 8) opt.data = variables
  else opt.prependData = variables

  return opt
}

module.exports = {
  addVariables,
  genVariableImport,
  setVariables,
}
