import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Form, TextField, TextFieldProps } from '../src';
import InfoTip from './components/InfoTip';

const meta: Meta = {
  title: 'TextField',
  component: TextField,
  decorators: [withDesign],
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=76%3A505',
    },
  },
};

export default meta;

/**
 * A gallery of all the variants
 */
export const Gallery = () => (
  <Form>
    <TextField label="Name" placeholder="enter your name" />
    <TextField
      label="Name"
      placeholder="enter your name"
      defaultValue="Michael King"
    />
    <TextField label="Name" placeholder="enter your name" isRequired />
    <TextField
      label="Name"
      placeholder="enter your name"
      isRequired
      validationState={'invalid'}
    />
    <TextField
      label="Name"
      placeholder="enter your name"
      isRequired
      validationState={'invalid'}
      errorMessage="This field is required"
    />
    <TextField
      label="Charge"
      labelExtra={
        <InfoTip postfix={false}>The amount you will be charged</InfoTip>
      }
      placeholder="enter your amount"
      isRequired
      validationState={'invalid'}
      addonBefore="$"
      errorMessage="This field is required"
    />
    <TextField
      label="Disabled"
      labelExtra={
        <InfoTip postfix={false}>The amount you will be charged</InfoTip>
      }
      placeholder="enter your amount"
      isDisabled
      addonBefore="$"
      value="100"
    />
    <TextField
      label="Read Only"
      labelExtra={
        <InfoTip postfix={false}>The amount you will be charged</InfoTip>
      }
      placeholder="enter your amount"
      isReadOnly
      addonBefore="$"
      value="100"
    />
  </Form>
);

const Template: Story<TextFieldProps> = args => (
  <Form>
    <TextField {...args}>Label Text</TextField>
  </Form>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
