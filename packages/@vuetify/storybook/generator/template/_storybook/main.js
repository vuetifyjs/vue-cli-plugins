module.exports = {
  stories: ['./stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs/register',
    './addon-show-vue-markup/register',
  ],
}