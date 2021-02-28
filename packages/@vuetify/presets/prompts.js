module.exports = [
  {
    type: 'list',
    name: 'configuration',
    message: 'Select from one of the following presets to scaffold your Vuetify project:',
    choices: [
      {
        name: 'Base (A basic Vuetify project)',
        value: 'base',
      },
      {
        name: 'Essential (Coming soon)',
        value: 'essential',
        disabled: true,
      },
    ],
    default: 'base',
  },
]
