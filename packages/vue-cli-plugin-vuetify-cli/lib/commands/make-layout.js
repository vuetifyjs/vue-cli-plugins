// Imports
const inquire = require('inquirer')
const kebabCase = require('lodash/kebabCase')
const { writeFiles } = require('../../util/helpers.js')

// Variables
const questions = [
  {
    type: 'input',
    message: 'Layout name:',
    name: 'name',
    filter: kebabCase,
  },
]

async function command (api) {
  const make = options => writeFiles('layout', options, api)

  inquire
    .prompt(questions)
    .then(make)
}

module.exports = api => {
  api.registerCommand('make:layout', {
    description: 'scaffold a new vue layout',
    usage: 'vue-cli-service make:layout [options]',
    options: {
      '--name': 'specify view layout',
    },
  }, () => command(api))
}
