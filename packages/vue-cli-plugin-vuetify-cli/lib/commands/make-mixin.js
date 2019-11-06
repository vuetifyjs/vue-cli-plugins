// Imports
const inquire = require('inquirer')
const kebabCase = require('lodash/kebabCase')
const { writeFiles } = require('../../util/helpers.js')

// Variables
const questions = [
  {
    type: 'input',
    message: 'Mixin name:',
    name: 'name',
    filter: kebabCase
  }
]

async function command (api) {
  const make = options => writeFiles('mixin', options, api)

  inquire
    .prompt(questions)
    .then(make)
}

module.exports = api => {
  api.registerCommand('make:mixin', {
    description: 'scaffold a new vue mixin',
    usage: 'vue-cli-service make:mixin [options]',
    options: {
      '--name': 'specify mixin name'
    }
  }, () => command(api))
}
