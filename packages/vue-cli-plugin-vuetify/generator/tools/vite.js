function addDependencies (api) {
  api.extendPackage({
    devDependencies: {
        '@vitejs/plugin-vue': '^1.2.4',
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
  opts.hasTS = api.hasPlugin('typescript')

  api.render({
    './vite.config.js': '../templates/v3/src/vite.config.js',
    './index.html': '../templates/v3/src/index.vite.html',
  }, opts)
}

module.exports = {
  addDependencies,
  renderFiles,
}
