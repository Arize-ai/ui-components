import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from '../src/Card';
import Button from '../src/Button';

const meta: Meta = {
  title: 'Card',
  component: Card,
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

const Template: Story<CardProps> = args => (
  <Card title="Title goes here" style={{ width: 500, height: 500 }} {...args}>
    Content goes here
  </Card>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

export const WithExtra = Template.bind({});

WithExtra.args = { extra: <Button type="primary">Extra</Button> };
