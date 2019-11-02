// Component
import Heading from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Bootstrap
const localVue = createLocalVue()

describe('Heading', () => {
  function mountFunction(options = {}) {
    return shallow(Heading, {
      localVue,
      ...options,
    })
  }

  it('should work', () => {
    const wrapper = mountFunction()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
