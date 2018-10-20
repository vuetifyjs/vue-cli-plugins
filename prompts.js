function isCustom (answers) {
  return answers.preset === 'configure'
}

module.exports = [
  {
    name: 'preset',
    type: 'list',
    choices: [
      { name: 'default (recommended)', value: 'default' },
      { name: 'configure', value: 'configure' }
    ],
    default: 'default'
  },
  {
    name: 'replaceComponents',
    type: 'confirm',
    message: 'Use a pre-made template? (will replace App.vue and HelloWorld.vue)',
    default: true,
    when: isCustom
  },
  {
    name: 'useTheme',
    type: 'confirm',
    message: 'Use custom theme?',
    default: false,
    when: isCustom
  },
  {
    name: 'useCustomProperties',
    type: 'confirm',
    message: 'Use custom properties (CSS variables)?',
    default: false,
    when: isCustom
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
    },
    when: isCustom
  },
  {
    name: 'installFonts',
    type: 'confirm',
    message: 'Use fonts as a dependency (for Electron or offline)?',
    default: false,
    when: isCustom
  },
  {
    name: 'useAlaCarte',
    type: 'confirm',
    message: 'Use a-la-carte components?',
    default: true,
    when: isCustom
  },
  {
    name: 'usePolyfill',
    type: 'confirm',
    message: 'Use babel/polyfill?',
    default: true,
    when: isCustom
  },
  {
    name: 'locale',
    type: 'rawlist',
    message: 'Select locale',
    choices: [
      'English (default)',
      'Catalan',
      'Chinese (simplified)',
      'Chinese (traditional)',
      'Dutch',
      'Farsi',
      'French',
      'German',
      'Greek',
      'Polish',
      'Portuguese',
      'Russian',
      'Ukrainian',
      'Serbian (cyrillic)',
    ],
    default: 0,
    filter: function (val) {
      return {
        'English (default)': 'en',
        'Catalan': 'ca',
        'Chinese (simplified)': 'zh-Hans',
        'Chinese (traditional)': 'zh-Hant',
        'Dutch': 'nl',
        'Farsi': 'fa',
        'French': 'fr',
        'German': 'de',
        'Greek': 'gr',
        'Polish': 'pl',
        'Portuguese': 'pt',
        'Russian': 'ru',
        'Ukrainian': 'uk',
        'Serbian (cyrillic)': 'sr-Cyrl',
      }[val]
    },
    when: isCustom
  }
]
