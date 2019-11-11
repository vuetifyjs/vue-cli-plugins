const fs = require('fs')
const path = require('path')
const kebabCase = require('lodash/kebabCase')

module.exports = api => {
  return
  if (!api.hasPlugin('vuetify-cli')) return

  const component = api.service.commands['make:component']

  // If user removed or modified
  // the script to a new name.
  if (!component) return

  const serveFn = component.fn

  component.fn = async (...args) => {
    const { name, rootDir, type } = await serveFn(...args)
    let file

    if (type.indexOf('../') === 0) {
      const split = type.split('/')

      split.shift()

      file = `${split.join('/')}${name}`
    } else {
      file = `components/${type ? `${type}/` : ''}${name}/${name}`
    }

    const template =
      fs.readFileSync(path.resolve(__dirname, './generator/template/template.stories.js'), 'utf-8')
        .replace(/ComponentName/g, name)
        .replace(/ComponentPath/g, file)
        .replace(/component-template/g, kebabCase(name))

    const dirName = kebabCase(name)

    fs.writeFileSync(`${rootDir}/.storybook/stories/${dirName}.stories.js`, template, 'utf-8')
  }
}
