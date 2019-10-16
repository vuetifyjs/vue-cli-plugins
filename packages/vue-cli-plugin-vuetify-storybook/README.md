# vue-cli-plugin-vuetify-storybook
> A Vuetify Storybook Plugin for [vue-cli@3.0](https://github.com/vuejs/vue-cli)

### Install

```bash
vue add vuetify-storybook
```

Once installed, you can run:

```bash
yarn serve:storybook
# OR
npm run serve:storybook
```

### Usage
To add new stories, simply create a new file that contains `.stories.js`. An example exists in `.storybook/stories/example.stories.js` of your project.

#### Creating stories
If you are using [vue-cli-plugin-vuetify-cli](https://github.com/vuetifyjs/vue-cli-plugin-vuetify-cli), stories will be automatically generated when you create new components.

```js
// A helper function to faciliate the generation of stories
import { storyFactory } from '../util/helpers'

// Components
import { AnotherComponent } from 'path/to/component'

// Generate a factory function
// Will automatically bootstrap the story components
const story = storyFactory({
  // Can pass in an import function
  MyComponent: () => import('path/to/component'),
  // Or explicitly import and use
  AnotherComponent,
})

export const asDefault = () => story({
  template: `<my-component></my-component>`,
})

export const withAnotherComponent = () => story({
  template: `
    <my-component>
      <another-component></another-component>
    </my-component>
  `,
})
```

### Supporting Vuetify
<p>Vuetify is an open source MIT project that has been made possible due to the generous contributions by <a href="https://github.com/vuetifyjs/vuetify/blob/dev/BACKERS.md">community backers</a>. If you are interested in supporting this project, please consider:</p>

<ul>
  <li>
    <a href="https://github.com/users/johnleider/sponsorship">Becoming a sponsor on Github</a>
    <strong><small>(supports John)</small></strong>
  </li>
  <li>
    <a href="https://opencollective.com/vuetify">Becoming a backer on OpenCollective</a>
    <strong><small>(supports the Dev team)</small></strong>
  </li>
  <li>
    <a href="https://tidelift.com/subscription/npm/vuetify?utm_source=vuetify&utm_medium=referral&utm_campaign=readme">Become a subscriber on Tidelift</a>
  </li>
  <li>
    <a href="https://paypal.me/vuetify">Make a one-time payment with Paypal</a>
  </li>
  <li>
    <a href="https://vuetifyjs.com/getting-started/consulting-and-support?ref=github">Book time with John</a>
  </li>
</ul>

### License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present John Leider
