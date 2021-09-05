const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const PRESET_MAP = {
  default: 'Default (recommended)',
  preview: 'Vite Preview (Vuetify 3 + Vite)',
  prototype: 'Prototype (rapid development)',
  v3: 'Vuetify 3 Preview (Vuetify 3)',
}

module.exports = fs.readdirSync(resolve('../presets')).map(preset => {
  const value = preset.split('.').shift()

  return { name: PRESET_MAP[value], value }
})
