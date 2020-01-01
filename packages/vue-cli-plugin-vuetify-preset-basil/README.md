# `vue-cli-plugin-vuetify-preset-basil`

> A Vuetify Preset for the [Basil Material Study](https://material.io/design/material-studies/basil.html)

### 🚀 Usage

```
vue add vuetify-preset-basil
```

### 🕶 Preview
![image](https://user-images.githubusercontent.com/9064066/71647028-2387e500-2cb6-11ea-8863-75c5e2effb9a.png)

### ⚡ Features
This is an overview of the changes that were made to support the Basil study and may not include details about every modification made; e.g. custom fonts and colors, removed border radius, etc. For a detailed outline of the specification, visit the [Basil study page](https://material.io/design/material-studies/basil.html#) .

* `v-btn`
  * increased font-weight
  * increased icon sizes
  * thicker border when using the **outlined** prop
* `v-tabs`
  * removes `v-tab` padding
  * reduces `v-tab-bar` height to 20px
  
  **Considerations:**
  The study outlines 2 variations of [tabs](https://material.io/design/material-studies/basil.html#components). We opt to use the first one as the second is the default tabs style. To revert to this style, use the **height** prop on the `v-tabs` component and the **px-4** class on the `v-tab`s.

* v-tabs w/ **vertical** prop
  * converts v-tab-slider into a circle
  * reduces v-tab height

### 📑 License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present Vuetify, LLC
