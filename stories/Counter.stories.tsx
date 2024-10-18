import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';

import { LabelGroup, Label, LabelProps } from '../src/label';
import { Counter, Provider } from '../src';

const meta: Meta = {
  title: 'Counter',
  component: Counter,

  argTypes: {
    children: {
      control: {
        type: 'text',
        default: 'Label',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

/**
 * A gallery of all the variants
 */
export const Gallery = () => (
  <Provider>
    <div
      css={css`
        display: flex;
        gap: 4px;
      `}
    >
      <Counter>12</Counter>
      <Counter variant="danger">12</Counter>
    </div>
  </Provider>
);

const Template: Story<LabelProps> = args => <Label {...args}>Label Text</Label>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
