const fs = require('fs');

function addDependencies(api) {
  api.extendPackage({
    devDependencies: {
      '@vitejs/plugin-vue': '^1.1.5',
      '@vitejs/plugin-vue': '^1.1.5',
    },
    scripts: {
     'serve': 'vite preview',
     'build': 'vite build',
     'dev': 'vite',
    }
  })
}

function renderFiles(api, opts) {
  fs.unlinkSync('./src/')
}