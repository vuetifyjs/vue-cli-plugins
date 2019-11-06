// Imports
const inquire = require('inquirer')
const kebabCase = require('lodash/kebabCase')
const { writeFiles } = require('../../util/helpers.js')

// Variables
const questions = [
  {
    type: 'input',
    message: 'View name:',
    name: 'name',
    filter: kebabCase
  }
]

async function command (api) {
  const make = options => writeFiles('view', options, api)

  inquire
    .prompt(questions)
    .then(make)
}

module.exports = api => {
  api.registerCommand('make:view', {
    description: 'scaffold a new vue view',
    usage: 'vue-cli-service make:view [options]',
    options: {
      '--name': 'specify view name'
    }
  }, () => command(api))
}
