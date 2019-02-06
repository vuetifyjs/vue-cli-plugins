const LOCALE_MAP = {
  af: 'Afrikaans',
  ar: 'Arabic',
  ca: 'Catalan',
  de: 'German',
  es: 'Spanish',
  en: 'English',
  et: 'Estonian',
  fa: 'Farsi',
  gr: 'Greek',
  fr: 'French',
  hr: 'Croatian',
  hu: 'Hungary',
  it: 'Italy',
  id: "Indonesian",
  ja: 'Japanese',
  nl: 'Dutch',
  pl: 'Polish',
  pt: 'Portuguese',
  ru: 'Russian',
  ro: 'Romanian',
  sl: 'Slovenian',
  'sr-Cyrl': 'Serbian (cyrillic)',
  th: 'Thai',
  tr: 'Turkish',
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
