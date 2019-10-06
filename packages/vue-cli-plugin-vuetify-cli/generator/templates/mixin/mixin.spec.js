// Mixin
import { mixin } from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Variables
const Mock = {
  mixins: [mixin],
  render: h => h('div'),
}

// Bootstrap
function mountFunction(options = {}) {
  return shallow(Mock, {
    localVue,
    ...options,
  })
}

const localVue = createLocalVue()

describe('mixin', () => {
  it('should work', () => {
    const wrapper = mountFunction()
  })
})
