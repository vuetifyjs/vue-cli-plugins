// Imports
const fs = require('fs')

// Check for existence of file and add import
function addImport (api, file, data, folder, end) {
  // sass & scss file types
  for (const ext of ['sass', 'scss']) {
    const path = `${folder}/${file}.${ext}`

    // If file doesn't exist in user
    // project, continue to next
    if (!fileExists(api, `src/${path}`)) continue

    // If file exists, push it into
    // the import statement
    data.push(`@import '@/${path}${end}`)
  }
}

// Go through each folder and add available imports
function addImports (api, file, data, end) {
  // supported folders that can contain
  // a variables or lists file
  for (const folder of ['sass', 'scss', 'styles']) {
    addImport(api, file, data, folder, end)
  }
}

// Check if file exists in user project
function fileExists (api, file) {
  return fs.existsSync(api.resolve(file))
}

// Create an import statement
// to bootstrap a users variables
function mergeRules (api, opt, ext) {
  const data = []
  const end = ext === 'sass' ? "'" : "';"

  addImports(api, 'variables', data, end)

  // Vuetify styles must go between variables and lists
  // since variables must be defined at the top level
  // and lists require existing variables to merge
  data.push(`@import '~vuetify/src/styles/styles.sass${end}`)

  addImports(api, 'lists', data, end)

  opt.data = data.join('\n')

  return opt
}

module.exports = {
  addImport,
  addImports,
  fileExists,
  mergeRules,
}
