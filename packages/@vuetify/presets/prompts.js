module.exports = [
  {
    type: 'list',
    name: 'preset',
    message: 'Select from one of the following presets to scaffold your Vue project:',
    choices: [
      {
        name: 'Base (A basic Vuetify project)',
        value: 'base'
      },
      {
        name: 'Essential (Coming soon)',
        value: 'essential',
        disabled: true,
      },
      {
        name: 'Recommended (Coming soon)',
        value: 'recommended',
        disabled: true,
      },
    ],
    default: 'base',
  }
]
