module.exports = {
  stories: ['./stories/**/*.stories.js'],
  addons: [
  '@storybook/addon-a11y/register',
  '@storybook/addon-actions/register',
  '@storybook/addon-docs/register',
  '@storybook/addon-viewport/register',
  '@storybook/addon-knobs/register',
  './addon-show-vue-markup/register',
  ],
}
