// Imports
const inquire = require('inquirer')
const kebabCase = require('lodash/kebabCase')
const { writeFiles } = require('../../util/helpers.js')

// Variables
const questions = [
  {
    type: 'input',
    message: 'Directive name:',
    name: 'name',
    filter: kebabCase
  }
]

async function command (api) {
  const make = options => writeFiles('directive', options, api)

  inquire
    .prompt(questions)
    .then(make)
}

module.exports = api => {
  api.registerCommand('make:directive', {
    description: 'scaffold a new vue directive',
    usage: 'vue-cli-service make:directive [options]',
    options: {
      '--name': 'specify directive name'
    }
  }, () => command(api))
}
