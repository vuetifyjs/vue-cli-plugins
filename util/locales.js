const LOCALE_MAP = {
  ca: 'Catalan',
  de: 'German',
  en: 'English',
  et: 'Estonian',
  fa: 'Farsi',
  gr: 'Greek',
  fr: 'French',
  hu: 'Hungary',
  it: 'Italy',
  id: "Indonesian",
  nl: 'Dutch',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  'sr-Cyrl': 'Serbian (cyrillic)',
  uk: 'Ukrainian',
  'zh-Hans': 'Chinese (simplified)',
  'zh-Hant': 'Chinese (traditional)'
}

module.exports = Object.keys(LOCALE_MAP).map(key => {
  return {
    name: LOCALE_MAP[key],
    value: key
  }
}).sort()
