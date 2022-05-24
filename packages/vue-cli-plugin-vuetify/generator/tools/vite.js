const helpers = require('./helpers')

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
  const files = {
    './index.html': '../templates/v3/vite/index.vite.html',
    // @TODO Remove
    // [`./vite.config.${ext}`]: `../templates/v3/vite/vite.config.${ext}`,
    './src/styles/_variables.scss': '../templates/v3/vite/styles/_variables.scss',
  }

  api.render(files, opts)
}

function updateViteConfig (api, opts) {
  const ext = opts.hasTs ? 'ts' : 'js'
  const viteConfigPath = api.resolve(`./vite.config.${ext}`)
  
  helpers.updateFile(api, viteConfigPath, (lines) => {
    const pluginsIndex = lines.findIndex(line => line.match(/plugins:/))
    const importsIndex = lines.lastIndexOf("\nimport ")

    const vuetifyPluginImport = `import vuetify from 'vite-plugin-vuetify\t'`
    const vuetifyPlugin = '\n\t\tvuetify({ autoImport: true }),\n\t'

    if (pluginsIndex !== -1) {
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
  updateViteConfig,
}
