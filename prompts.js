module.exports = [
  {
    name: 'replaceComponents',
    type: 'confirm',
    message: 'Use a pre-made template? (will replace App.vue and HelloWorld.vue)',
    default: true,
  },
  {
    name: 'useTheme',
    type: 'confirm',
    message: 'Use custom theme?',
    default: false,
  },
  {
    name: 'useCustomProperties',
    type: 'confirm',
    message: 'Use custom properties (CSS variables)?',
    default: false,
  },
  {
    name: 'iconFont',
    type: 'list',
    message: 'Select icon font',
    choices: [
      'Material Icons (default)',
      'Material Design Icons',
      'Font Awesome 5',
      'Font Awesome 4',
    ],
    default: 0,
    filter: function (val) {
      return {
        'Material Icons (default)': 'md',
        'Material Design Icons': 'mdi',
        'Font Awesome 5': 'fa',
        'Font Awesome 4': 'fa4',
      }[val]
    }
  },
  {
    name: 'installFontIcon',
    type: 'confirm',
    message: 'Use font-icon as a dependency?',
    default: false,
  },
  {
    name: 'useAlaCarte',
    type: 'confirm',
    message: 'Use a-la-carte components?',
    default: false,
  },
  {
    name: 'usePolyfill',
    type: 'confirm',
    message: 'Use babel/polyfill?',
    default: true
  }
]
