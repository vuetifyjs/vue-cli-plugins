/**
 * plugins/app.js
 *
 * Automatically loads and bootstraps files
 * in the `./src/components/` folder.
 *
 * https://webpack.js.org/guides/dependency-management/#requirecontext
 */

export function registerComponents (app) {
  const requireComponent = require.context('@/components', true, /\.vue$/)

  for (const file of requireComponent.keys()) {
    const componentConfig = requireComponent(file)

    app.component(
      componentConfig.default.name,
      componentConfig.default || componentConfig,
    )
  }
}
