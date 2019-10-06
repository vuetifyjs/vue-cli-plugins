const fs = require('fs')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = api => {
  const commands = resolve('./lib/commands')

  // Import and register all commands
  fs.readdirSync(commands).forEach(command => {
    require(`${commands}/${command}`)(api)
  })
}
