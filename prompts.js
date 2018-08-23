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
    type: 'rawlist',
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
    name: 'installFonts',
    type: 'confirm',
    message: 'Use fonts as a dependency (for Electron or offline)?',
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
  },
  {
    name: 'locale',
    type: 'rawlist',
    message: 'Select locale',
    choices: [
      'English (default)',
      'German',
      'Farsi',
      'French',
      'Greek',
      'Dutch',
      'Polish',
      'Portuguese',
      'Russian',
      'Ukrainian',
      'Chinese (simplified)',
      'Chinese (traditional)'
    ],
    default: 0,
    filter: function (val) {
      return {
        'English (default)': 'en',
        'German': 'de',
        'Farsi': 'fa',
        'French': 'fr',
        'Greek': 'gr',
        'Dutch': 'nl',
        'Polish': 'pl',
        'Portuguese': 'pt',
        'Russian': 'ru',
        'Ukrainian': 'uk',
        'Chinese (simplified)': 'zh-Hans',
        'Chinese (traditional)': 'zh-Hant'
      }[val]
    }
  }
];
