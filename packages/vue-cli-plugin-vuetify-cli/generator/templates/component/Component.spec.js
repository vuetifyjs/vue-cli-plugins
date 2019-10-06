// Component
import { Component } from './index'

// Utilities
import { shallow, createLocalVue } from '@vue/test-utils'

// Bootstrap
const localVue = createLocalVue()

describe('Component', () => {
  function mountFunction(options = {}) {
    return shallow(Component, {
      localVue,
      ...options,
    })
  }

  it('should work', () => {
    const wrapper = mountFunction()
  })
})
