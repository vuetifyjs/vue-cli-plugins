const { fileExists } = require('../../util/helpers')
const { updateFile } = require('./helpers')

function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
        '@vitejs/plugin-vue': '^2.0.0',
        'vite-plugin-vuetify': '^1.0.0-alpha.0',
        vite: '^2.0.0',
      },
    scripts: {
      serve: 'vite preview',
      build: 'vite build',
      dev: 'vite',
    },
  })
}

function renderFiles (api, opts) {
  const ext = opts.hasTS ? 'ts' : 'js'
  const viteConfigFile = `./vite.config.${ext}`
  const viteConfigPath = api.resolve(viteConfigFile)

  const files = {
    './index.html': '../templates/v3/vite/index.vite.html',
    './src/styles/_variables.scss': '../templates/v3/vite/styles/_variables.scss',
  }

  if (!fileExists(api, viteConfigPath)) {
    files[viteConfigFile] = `../templates/v3/vite/vite.config.${ext}`
    updateJsConfigTarget(api)
  }
  else updateViteConfig(api, viteConfigPath)

  api.render(files, opts)
}

function updateJsConfigTarget(api) {
  const jsConfigPath = api.resolve('./jsconfig.json')

  if (fileExists(api, jsConfigPath)) {
    updateFile(api, jsConfigPath, (lines) => {
      const targetIndex = lines.findIndex(line => line.match(/"target":/))

      if (targetIndex !== -1) {
        lines[targetIndex] = lines[targetIndex].replace('es5', 'esnext')
      }

      return lines
    })
  }
}

function updateViteConfig (api, viteConfigPath) {
  updateFile(api, viteConfigPath, (lines) => {
    const pluginsIndex = lines.findIndex(line => line.match(/plugins:/))
    const exportIndex = lines.findIndex(line => line.includes('export default'))

    const vuetifyPluginImport = `\n// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin\nimport vuetify from 'vite-plugin-vuetify'\n`
    const vuetifyPlugin = '\n\t\tvuetify({ autoImport: true }),\n'

    if (pluginsIndex !== -1) {
      lines[exportIndex - 2] = vuetifyPluginImport
      const matchedPlugins = lines[pluginsIndex].match(/(?<=\[).+?(?=\])/)

      if (matchedPlugins !== null) {
        const currentPluginsArr = matchedPlugins[0].split(',')
        const allPlugins = ''.concat(
          currentPluginsArr
            .map(plugin => `\n\t\t${plugin.trim()}`)
            .concat(vuetifyPlugin)
          )

        lines[pluginsIndex] = lines[pluginsIndex].replace(/(?<=\[).+?(?=\])/, allPlugins)

        return lines
      } else {
        lines[pluginsIndex] = lines[pluginsIndex].replace(/\[.*\]/, vuetifyPlugin)

        return lines
      }
    }
  })
}

module.exports = {
  addDependencies,
  renderFiles,
}
