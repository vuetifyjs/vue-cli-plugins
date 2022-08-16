const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const PRESET_MAP = {
  default: 'Vuetify 2 - Vue CLI (recommended)',
  prototype: 'Vuetify 2 - Prototype (rapid development)',
  v3vite: 'Vuetify 3 - Vite (preview)',
  v3vuecli: 'Vuetify 3 - Vue CLI (preview)',
}

module.exports = fs.readdirSync(resolve('../presets')).map(preset => {
  const value = preset.split('.').shift()

  return { name: PRESET_MAP[value], value }
})
