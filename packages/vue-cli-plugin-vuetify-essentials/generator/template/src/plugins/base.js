// Automatically loads and bootstraps files
// in the "./src/components/base" folder.

// Imports
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context('@/components/base', true, /\.js$/)

for (const file of requireComponent.keys()) {
  if (file.indexOf('index.js') < 0) continue

  const componentConfig = requireComponent(file)
  const name = file
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(name))

  Vue.component(`Base${componentName}`, componentConfig.default || componentConfig)
}
