// Component
import PageJumbotron from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Bootstrap
const localVue = createLocalVue()

describe('PageJumbotron', () => {
  function mountFunction (options = {}) {
    return shallow(PageJumbotron, {
      localVue,
      ...options,
    })
  }

  it('should work', () => {
    const wrapper = mountFunction()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
