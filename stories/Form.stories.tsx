import React from 'react';
import { Meta, Story } from '@storybook/react';
import Form, { FormProps } from '../src/Form';

const meta: Meta = {
  title: 'Form',
  component: Form,
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

const Template: Story<FormProps> = args => (
  <Form {...args}>
    <Form.RequiredFieldsDisclosure />
    <Form.FormLabel text="Label Text" required>
      <input type="text" />
    </Form.FormLabel>
    <Form.FormLabel text="Label Text" helperText="Limit 10">
      <input type="text" />
    </Form.FormLabel>
    <Form.FormLabel text="Label Text" required helperText="Limit 10">
      <input type="text" />
    </Form.FormLabel>
  </Form>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = { type: 'primary', children: 'Button' };
