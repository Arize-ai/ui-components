module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].options.presets.push(
      require.resolve('@emotion/babel-preset-css-prop')
    );
    // Need to remove the use of the root babelrc
    // @src https://github.com/storybookjs/storybook/issues/7540#issuecomment-544311843
    config.module.rules[0].use[0].options.babelrc = false;
    return config;
  },
};
