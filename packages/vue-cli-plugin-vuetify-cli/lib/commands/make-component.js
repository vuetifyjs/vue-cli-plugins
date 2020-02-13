// Imports
const camelCase = require('lodash/camelCase')
const fs = require('fs')
const inquire = require('inquirer')
const upperFirst = require('lodash/upperFirst')
const { writeFiles } = require('../../util/helpers.js')

// Variables
const views = getFolderContents('src/views')
const layouts = getFolderContents('src/layouts')
const types = [
  { name: 'Regular', value: '' },
  { name: 'Base', value: 'base/' },
]

if (views.length > 0) {
  types.push({
    name: 'View',
    value: 'view',
  })
}

if (layouts.length > 0) {
  types.push({
    name: 'Layout',
    value: 'layout',
  })
}

const questions = [
  {
    type: 'list',
    message: 'Component type:',
    name: 'type',
    choices: types,
  },
  {
    type: 'list',
    message: 'Select the view',
    name: 'view',
    choices: views,
    when: options => options.type === 'view',
  },
  {
    type: 'list',
    message: 'Select the layout',
    name: 'layout',
    choices: layouts,
    when: options => options.type === 'layout',
  },
  {
    type: 'input',
    message: 'Component name:',
    name: 'name',
    filter: val => upperFirst(camelCase(val)),
  },
]

// Functions
function getFolderContents (folder) {
  const files = []
  if (fs.existsSync(folder)) {
    fs.readdirSync(folder).forEach(dir => {
      files.push(`${dir}/`)
    })
  }
  return files
}

async function command (api) {
  const make = options => {
    if (options.view) {
      options.type = `../views/${options.view}/components/`
    }

    writeFiles('component', options, api)
  }

  inquire
    .prompt(questions)
    .then(make)
}

module.exports = api => {
  api.registerCommand('make:component', {
    description: 'scaffold a new vue component',
    usage: 'vue-cli-service make:component [options]',
    options: {
      '--name': 'specify component name',
      '--type': 'specify component type',
    },
  }, () => command(api))
}
