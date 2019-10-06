// Imports
const camelCase = require('lodash/camelCase')
const fs = require('fs')
const inquire = require('inquirer')
const upperFirst = require('lodash/upperFirst')
const { writeFiles } = require('../../util/helpers.js')

// Variables
const views = []
const types = [
  { name: 'Regular', value: '' },
  { name: 'Base', value: 'base/' },
  { name: 'Core', value: 'core/' },
]

if (fs.existsSync('src/views')) {
  fs.readdirSync('src/views').forEach(dir => {
    views.push(`${dir}/`)
  })
}

if (views.length > 0) {
  types.push({
    name: 'View',
    value: 'view'
  })
}

const questions = [
  {
    type: 'list',
    message: 'Component type:',
    name: 'type',
    choices: types
  },
  {
    type: 'list',
    message: 'Select the view',
    name: 'view',
    choices: views,
    when: options => options.type === 'view',
  },
  {
    type: 'input',
    message: 'Component name:',
    name: 'name',
    filter: val => upperFirst(camelCase(val))
  }
]

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
    }
  }, () => command(api))
}
