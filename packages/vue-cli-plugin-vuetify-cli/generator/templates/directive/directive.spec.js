// Directive
import { directive } from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Variables
const Mock = {
  directives: { directive },

  render (h) {
    return h('div', {
      directives: [{
        name: 'directive',
        value: false,
      }],
    })
  },
}

// Bootstrap
function mountFunction(options = {}) {
  return shallow(Mock, {
    localVue,
    ...options,
  })
}

const localVue = createLocalVue()

describe('directive', () => {
  it('should work', () => {
    const wrapper = mountFunction()
  })
})
