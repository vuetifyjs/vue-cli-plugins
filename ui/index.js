const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const locales = require(resolve('../util/locales.js'))
const iconfonts = require(resolve('../util/iconfonts.js'))

module.exports = api => {
  api.describeConfig({
    id: 'com.vuetify',
    name: 'Vuetify configuration (in dev)',
    description: 'Application setup',
    link: 'https://vuetifyjs.com',
    icon: '/_plugin/vue-cli-plugin-vuetify/logo.png',
    onRead: ({ data, cwd }) => ({
      prompts: [
        {
          name: 'locale',
          message: 'Locale',
          description: 'Default application language',
          default: 'en',
          link: 'https://vuetifyjs.com/framework/internationalization#getting-started',
          type: 'list',
          choices: locales
        },
        {
          name: 'theme',
          message: 'Custom Theme',
          description: 'Specify custom theme values',
          default: false,
          link: 'https://vuetifyjs.com/style/theme',
          type: 'confirm'
        },
        {
          name: 'theme-primary',
          message: 'Primary color',
          default: '#1976D2',
          type: 'input',
          when: answers => answers.theme
        },
        {
          name: 'theme-secondary',
          message: 'Secondary color',
          default: '#424242',
          type: 'input',
          when: answers => answers.theme
        },
        {
          name: 'theme-accent',
          message: 'Accent color',
          default: '#82B1FF',
          type: 'input',
          when: answers => answers.theme
        },
        {
          name: 'theme-success',
          message: 'Success color',
          default: '#4CAF50',
          type: 'input',
          when: answers => answers.theme
        },
        {
          name: 'theme-info',
          message: 'Info color',
          default: '#2196F3',
          type: 'input',
          when: answers => answers.theme
        },
        {
          name: 'theme-warning',
          message: 'Warning color',
          default: '#FFC107',
          type: 'input',
          when: answers => answers.theme
        },
        {
          name: 'theme-error',
          message: 'Error color',
          default: '#FF5252',
          type: 'input',
          when: answers => answers.theme
        },
        {
          name: 'custom-properties',
          message: 'CSS Variables',
          description: 'Create css variables from defined theme',
          default: false,
          link: 'https://vuetifyjs.com/style/theme#options',
          type: 'confirm'
        },
        {
          name: 'icons',
          message: 'Icon font',
          description: 'Application icon defaults',
          default: 'md',
          link: 'https://vuetifyjs.com/framework/icons#using-custom-icons',
          type: 'list',
          choices: iconfonts
        },
        {
          name: 'rtl',
          message: 'RTL',
          description: 'Enable Right to Left support',
          default: false,
          link: 'https://vuetifyjs.com/framework/internationalization#rtl',
          type: 'confirm'
        }
      ]
    }),
    onWrite: ({
      prompts,
      answers,
      data,
      files,
      cwd,
      api
    }) => {
      //
    }
  })
}
