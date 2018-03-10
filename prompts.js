module.exports = [{
  type: 'confirm',
  name: 'replaceComponents',
  message: 'Allow Vuetify to replace App.vue and HelloWorld.vue?',
  default: true,
}, {
  type: 'confirm',
  name: 'useTheme',
  message: 'Use custom theme?',
  default: false,
  when: answers => answers.replaceComponents,
}, {
  type: 'confirm',
  name: 'useAlaCarte',
  message: 'Use a-la-carte components?',
  default: false,
  when: answers => answers.replaceComponents,
}]
