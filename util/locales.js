const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

const LOCALE_MAP = {
  ca: 'Catalan',
  de: 'German',
  en: 'English (default)',
  fa: 'Farsi',
  gr: 'Greek',
  fr: 'French',
  hu: 'Hungary',
  it: 'Italy',
  nl: 'Dutch',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  'sr-Cyrl': 'Serbian (cyrillic)',
  uk: 'Ukrainian',
  'zh-Hans': 'Chinese (simplified)',
  'zh-Hant': 'Chinese (traditional)'
}

module.exports = fs.readdirSync(resolve('../node_modules/vuetify/src/locale')).map(locale => {
  const value = locale.split('.').shift()

  return { name: LOCALE_MAP[value], value }
}).sort()
