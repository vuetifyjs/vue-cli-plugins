// Component
import Card from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Bootstrap
const localVue = createLocalVue()

describe('Card', () => {
  function mountFunction (options = {}) {
    return shallow(Card, {
      localVue,
      ...options,
    })
  }

  it('should work', () => {
    const wrapper = mountFunction()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
