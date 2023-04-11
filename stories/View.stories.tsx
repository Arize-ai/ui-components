import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Text,
  Button,
  View,
  ViewProps,
  Picker,
  Item,
  Provider,
  ButtonGroup,
  Card,
} from '../src';
import { Icon, PlusCircleOutline, MinusCircleOutline } from '../src/icon';
import { withDesign } from 'storybook-addon-designs';
import { css } from '@emotion/react';

const plusIcon = <Icon svg={<PlusCircleOutline />} />;
const minusIcon = <Icon svg={<MinusCircleOutline />} />;

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

const viewStyle = { width: 800, height: 200, margin: '10px' };

export const Gallery = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
      `}
    >
      <View>View</View>
    </div>
  );
};

const Template: Story<ViewProps> = args => <View {...args} />;

export const Default = Template.bind({});
