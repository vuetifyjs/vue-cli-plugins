// Imports
const inquire = require('inquirer')
const kebabcase = require('lodash/kebabcase')
const { writeFiles } = require('../../util/helpers.js')

// Variables
const questions = [
  {
    type: 'input',
    message: 'View name:',
    name: 'name',
    filter: kebabcase
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
