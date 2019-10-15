// Utilities
import { storyFactory } from '../util/helpers'

export default { title: 'ComponentName' }

const story = storyFactory({
  ComponentName: () => import('../../src/ComponentPath')
})

export const asDefault = () => story({
  template: `<component-template></component-template>`
})
