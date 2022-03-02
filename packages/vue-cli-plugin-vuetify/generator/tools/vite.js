function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
        '@vitejs/plugin-vue': '^2.0.0',
        '@vuetify/vite-plugin': '^1.0.0-alpha.0',
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
    [`./vite.config.${ext}`]: `../templates/v3/vite/vite.config.${ext}`,
    './src/styles/_variables.scss': '../templates/v3/vite/styles/_variables.scss',
  }

  api.render(files, opts)
}

module.exports = {
  addDependencies,
  renderFiles,
}
