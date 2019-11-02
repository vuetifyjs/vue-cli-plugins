// Component
import Footer from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Bootstrap
const localVue = createLocalVue()

describe('Footer', () => {
  function mountFunction(options = {}) {
    return shallow(Footer, {
      localVue,
      ...options,
    })
  }

  it('should work', () => {
    const wrapper = mountFunction()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
