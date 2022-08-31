import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Form, TextArea, TextAreaProps } from '../src';
import InfoTip from './components/InfoTip';

const meta: Meta = {
  title: 'TextArea',
  component: TextArea,
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
    <TextArea
      label="Default height textarea"
      placeholder="Enter your description"
      defaultValue="Description"
      isRequired
    />
    <TextArea
      label="Tall description so you have to scroll"
      placeholder="Enter your description"
      defaultValue="Blah blah blah. Blah blah blaBlah blah blaBlah blah blaBlah blah blaBlah blah blaBlah blah blaBlah blah blaBlah blah blaBlah blah blaBlah blah blaBlah blah bla Blah blah blaBlah blah blaBlah blah bla"
      height={100}
    />
    <TextArea
      label="Name"
      placeholder="Enter your description"
      isRequired
      validationState={'invalid'}
    />
    <TextArea
      label="Name"
      placeholder="Enter your description"
      isRequired
      validationState={'invalid'}
      errorMessage="This field is required"
      height={100}
    />
    <TextArea
      label="Charge"
      labelExtra={
        <InfoTip postfix={false}>The amount you will be charged</InfoTip>
      }
      placeholder="Enter your amount"
      isRequired
      validationState={'invalid'}
      errorMessage="This field is required"
    />
    <TextArea
      label="Disabled"
      labelExtra={
        <InfoTip postfix={false}>The amount you will be charged</InfoTip>
      }
      placeholder="Enter your amount"
      isDisabled
      value="100"
    />
    <TextArea
      label="Read Only"
      labelExtra={
        <InfoTip postfix={false}>The amount you will be charged</InfoTip>
      }
      placeholder="Enter your amount"
      isReadOnly
      value="100"
    />
  </Form>
);

const Template: Story<TextAreaProps> = args => (
  <Form>
    <TextArea {...args}>Label Text</TextArea>
  </Form>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
