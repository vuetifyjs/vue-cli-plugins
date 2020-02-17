// Imports
const fs = require('fs')
const inquire = require('inquirer')
const path = require('path')
const pluralize = require('pluralize')
const shell = require('shelljs')
const { upperFirst, camelCase } = require('lodash')

function getFile (file, template) {
  return {
    name: file,
    data: fs.readFileSync(resolve(`${template}/${file}`), 'utf8'),
  }
}

function * getFiles (template) {
  for (const file of fs.readdirSync(template)) {
    yield getFile(file, template)
  }
}

// update/write component index
async function generateIndex (dir, options, api) {
  const { name, type = '' } = options
  const filename = 'index.js'
  const directory = api.resolve(`src/${pluralize(dir)}/${type}`)
  const file = `${directory}/${filename}`
  const compName = upperFirst(camelCase(name))
  const importText = `import ${compName} from './${compName}'`
  const exportText = `export default {\r\n  ${compName},\r\n}\r\n`

  if (fs.existsSync(file)) {
    const { data } = getFile(filename, directory)

    if (data.search(importText) === -1) {
      writeFile(
        directory,
        filename,
        data
          .replace(/(?=[^']*$)/, `\r\n${importText}`)
          .replace(/(?=[^,]*$)/, `\r\n  ${compName},`),
      )
    }
  } else {
    writeFile(
      directory,
      filename,
      `${importText}\r\n\r\n${exportText}`,
    )
  }
}

function resolve (file) {
  return path.resolve(__dirname, file)
}

async function writeFile (directory, name, content) {
  try {
    await overwrite(directory, name)
    fs.writeFileSync(`${directory}/${name}`, content, 'utf8')
  } catch (e) {
    console.log(e)
  }
}

async function * parseDir (dir, options, api) {
  const { name: oname, type = '' } = options
  const template = resolve(`../generator/templates/${dir}`)
  const directory = ['mixin', 'directive', 'component'].includes(dir)
    ? api.resolve(`src/${pluralize(dir)}/${type}`)
    : api.resolve(`src/${pluralize(dir)}/${type}${oname}`)

  if (['layout', 'view'].includes(dir)) {
    await overwrite(directory)
  }

  for (const { name, data } of getFiles(template)) {
    const fileDir = name === `${dir}.spec.js`
      ? dir === 'component' && ['base/', 'regular/'].includes(type)
        ? path.join(directory, '..', type, 'tests')
        : path.join(directory, 'tests')
      : directory
    yield {
      directory: fileDir,
      name,
      data,
      oname,
    }
  }
}

async function overwrite (directory, file = '') {
  const filepath = path.join(directory, file)
  const message = file
    ? `${file} - File already exists, overwrite?`
    : `${directory} - Directory already exists, overwrite?`
  if (fs.existsSync(filepath)) {
    await inquire
      .prompt([{
        default: false,
        type: 'confirm',
        message,
        name: 'overwrite',
      }])
      .then(answers => {
        if (!answers.overwrite) process.exit(0)

        shell.rm('-rf', filepath)
      })
      .catch(err => console.log(err))
  }

  shell.mkdir('-p', directory)

  return Promise.resolve()
}

async function writeFiles (name, options, api) {
  const files = parseDir(name, options, api)
  const nameRe = new RegExp(`\\b${name.replace('/', '\\/')}\\b`, 'g')
  const nameCompRe = new RegExp(`\\b${upperFirst(name).replace('/', '\\/')}\\b`, 'g')

  for await (const file of files) {
    const {
      data,
      directory,
      name,
      oname,
    } = file
    const compName = upperFirst(camelCase(oname))

    await writeFile(
      directory,
      name.replace(nameRe, oname).replace(nameCompRe, compName),
      data.replace(nameRe, oname).replace(nameCompRe, compName),
    )
  }

  if (name === 'component') {
    generateIndex(name, options, api)
  }
}

module.exports = {
  parseDir,
  generateIndex,
  getFile,
  getFiles,
  overwrite,
  resolve,
  writeFile,
  writeFiles,
}
