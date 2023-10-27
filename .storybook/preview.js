// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  // https://storybook.js.org/docs/react/essentials/backgrounds
  backgrounds: {
    default: 'arize',
    values: [
      {
        name: 'arize',
        value: '#14171b',
      },
      {
        name: 'arize light',
        value: '#ffffff',
      },
    ],
  },
};
