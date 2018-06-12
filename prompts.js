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
