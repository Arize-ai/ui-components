import React from 'react';
import { Meta } from '@storybook/react';

import { Flex, Slider, Switch } from '../src';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const meta: Meta = {
  title: 'Slider',
  component: Slider,

  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Gallery = () => {
  const [value, setValue] = React.useState(1);
  return (
    <ThemeToggleWrap>
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
    </ThemeToggleWrap>
  );
};
