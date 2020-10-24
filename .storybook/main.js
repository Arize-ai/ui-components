module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async config => {
    config.module.rules[0].use[0].options.presets.push(
      require.resolve('@emotion/babel-preset-css-prop')
    );
    return config;
  },
};
