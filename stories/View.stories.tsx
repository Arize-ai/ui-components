import React from 'react';
import { Meta, Story } from '@storybook/react';
import { View, ViewProps } from '../src';
import { Icon, PlusCircleOutline, MinusCircleOutline } from '../src/icon';
import { withDesign } from 'storybook-addon-designs';
import { css } from '@emotion/react';

const meta: Meta = {
  title: 'View',
  component: View,
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
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      <View>This is a View</View>
    </div>
  );
};

const Template: Story<ViewProps> = args => <View {...args} />;

export const Default = Template.bind({});
