/**
 * plugins/vuex-pathify.js
 *
 * vuex-pathify documentation: https://davestewart.github.io/vuex-pathify/#/setup/config
 */

// Imports
import pathify from 'vuex-pathify'

// Custom mapping style
// https://davestewart.github.io/vuex-pathify/#/setup/mapping
pathify.options.mapping = 'simple'
pathify.options.strict = true

export default pathify
