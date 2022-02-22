module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-tailwind-dark-mode",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
        implementation: require('postcss'),
        },
      },
    },
  ],
  "framework": "@storybook/react"
}