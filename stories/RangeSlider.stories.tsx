import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { Provider, RangeSlider } from '../src';
import { withDesign } from 'storybook-addon-designs';

const meta: Meta = {
  title: 'RangeSlider',
  component: RangeSlider,
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
      url: '',
    },
  },
};

export default meta;

export const Gallery = () => {
  return (
    <Provider>
      <RangeSlider label="Range" defaultValue={{ start: 12, end: 36 }} />
    </Provider>
  );
};
