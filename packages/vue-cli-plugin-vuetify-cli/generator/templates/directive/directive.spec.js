// Directive
import { Directive } from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Variables
const Mock = {
  directives: { Directive },

  render (h) {
    return h('div', {
      directives: [{
        name: 'Directive',
        value: false,
      }],
    })
  },
}

// Bootstrap
function mountFunction (options = {}) {
  return shallow(Mock, {
    localVue,
    ...options,
  })
}

const localVue = createLocalVue()

describe('Directive', () => {
  it('should work', () => {
    const wrapper = mountFunction()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
