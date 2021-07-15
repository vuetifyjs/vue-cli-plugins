module.exports = {
  parser: 'vue-eslint-parser',
  ignorePatterns: ['**/templates/**'],
  env: {
    'jest/globals': true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:vue/recommended',
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': 'off',
    indent: 'off',
    // Workaround for ESLint failing to parse files with template literals
    // with this error: "TypeError: Cannot read property 'range' of null"
    'template-curly-spacing': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1,
      ignores: [],
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: false,
      },
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
  },
}
