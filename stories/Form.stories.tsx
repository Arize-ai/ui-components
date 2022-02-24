import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps, TextField } from '../src';
import InfoTip from './components/InfoTip';

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

const Template: Story<FormProps> = args => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <Form {...args}>
      <TextField
        label="Name"
        placeholder="enter your name"
        isRequired
        errorMessage={!name ? 'This field is required' : null}
        value={name}
        validationState={!name ? 'invalid' : null}
        onChange={v => setName(v)}
      />
      <TextField
        label="Email"
        placeholder="enter your email address"
        isRequired
        errorMessage={!email ? 'This field is required' : null}
        value={email}
        onChange={v => setEmail(v)}
      />
      <TextField
        label="Charge"
        labelExtra={<InfoTip>The amount you will be charged</InfoTip>}
        placeholder="enter your amount"
        isRequired
        validationState={'invalid'}
        addonBefore="$"
        errorMessage="This field is required"
      />
    </Form>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = { type: 'primary', children: 'Button' };
