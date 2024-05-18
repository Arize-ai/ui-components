import React from 'react';
import { css } from '@emotion/react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Counter, Provider } from '../src';
import {
  ComboBoxProps,
  ComboBox,
  ComboBoxItem,
} from '../src/combobox/ComboBox';
import { ThemeSplitView } from './components/ThemeSplitView';

const meta: Meta = {
  title: 'ComboBox',
  component: ComboBox,
  decorators: [withDesign],
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

export const Example = (args: any) => (
  <ThemeSplitView>
    <ComboBox {...args}>
      <ComboBoxItem>Chocolate</ComboBoxItem>
      <ComboBoxItem>Mint</ComboBoxItem>
      <ComboBoxItem>Strawberry</ComboBoxItem>
      <ComboBoxItem>Vanilla</ComboBoxItem>
    </ComboBox>
  </ThemeSplitView>
);

Example.args = {
  label: 'Ice cream flavor',
};
