import React from 'react';
import { Meta } from '@storybook/react';

import { Flex, RangeSlider, Switch } from '../src';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const meta: Meta = {
  title: 'RangeSlider',
  component: RangeSlider,

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
  return (
    <ThemeToggleWrap>
      <Flex direction="column">
        <RangeSlider label="Range" defaultValue={{ start: 12, end: 36 }} />
        <Switch>Send Emails</Switch>
      </Flex>
    </ThemeToggleWrap>
  );
};
