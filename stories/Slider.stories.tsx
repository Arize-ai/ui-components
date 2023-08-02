import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Flex, Provider, Slider, Switch } from '../src';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'Slider',
  component: Slider,
  decorators: [withDesign],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?type=design&node-id=3235%3A9316&mode=dev',
    },
  },
};

export default meta;

export const Gallery = () => {
  const [value, setValue] = React.useState(1);
  return (
    <Provider>
      <Flex direction="column">
        <Slider label="Cost" defaultValue={12} />
        <Slider
          label="Cost"
          defaultValue={0.5}
          minValue={0}
          maxValue={0.99}
          step={0.01}
        />
        <Slider
          label="Controlled"
          value={value}
          onChange={setValue}
          minValue={0}
          maxValue={2}
          step={0.01}
        />
        <Slider label="Cost" value={1} minValue={0} maxValue={2} step={0.01} />
        <Switch>Send Emails</Switch>
      </Flex>
    </Provider>
  );
};
