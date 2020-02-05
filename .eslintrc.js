module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    'jest/globals': true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['vuetify'],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    'template-curly-spacing' : 'off',
    'vue/require-default-prop': 'off',
    indent : 'off'
  }
}
