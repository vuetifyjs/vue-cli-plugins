// Mixin
import { Mixin } from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Variables
const Mock = {
  mixins: [Mixin],
  render: h => h('div'),
}

// Bootstrap
function mountFunction (options = {}) {
  return shallow(Mock, {
    localVue,
    ...options,
  })
}

const localVue = createLocalVue()

describe('Mixin', () => {
  it('should work', () => {
    const wrapper = mountFunction()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
