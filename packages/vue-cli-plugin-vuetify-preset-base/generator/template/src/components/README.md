# Components
> Create your regular and base components here

This folder is for organizing your project's components. It is structured to support the official Vue [**style-guide**](https://vuejs.org/v2/style-guide/#Component-files-strongly-recommended).
Below are _examples_ of varoius project structures for **components**.

### Custom
A custom component is one that is used in more than one place but is not generic enough to used as a _base_ component.

```bash
.
└── components
    ├── CustomComponent.vue
    └── CustomComponentTwo.vue
```

### Base
[**Base components**](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) are global components that should always be in the root of the `/base` folder. These components will be automatically bootstrapped into Vue via the **base.js** plugin.

```bash
.
└── src
    ├── components
    │   ├── CustomComponent.vue
    │   └── base
    │       └── Btn.vue
    └── plugins
        ├── base.js # Bootstraps *.vue in `src/components/base`
        ├── index.js
        └── vuetify.js
```

**Example usage**
This is an example of how to use **base components**; global components that can be used in any other component.

```vue
<!-- In Template -->

<template>
  <div>
    <base-btn>...</base-btn>
  </div>
</template>
```

```vue
<!-- src/components/base/Btn.vue -->

<template>
  <v-btn
    :color="color"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />>
  </v-btn>
</template>

<script>
  export default {
    name: 'Btn',

    props: {
      color: {
        type: String,
        default: 'primary',
      },
    },
  }
</script>
```

> The component name is automatically prefixed with `Base`. `Btn` would yield `BaseBtn` and `MyComponent` would yield `BaseMyComponent`

### Views
Views that utilize proprietary components—ones that only exist within or for that page—should keep them _scoped_ to the container view.

```bash
.
└── views
    └── home
        ├── Index.vue
        ├── Section.vue
        └── components
            ├── CustomComponent.vue
            └── CustomComponentTwo.vue
```

**Example usage**
This is an example of what importing a custom component for a **View** might look like.
```vue
<!-- src/views/home/Index.vue -->

<script>
  export default {
    components: {
      CustomComponent: () => import('./components/CustomComponent'),
      CustomComponentTwo: () => import('./components/CustomComponentTwo'),
    }
  }
</script>
```
