import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import {
  Form,
  TextField,
  TextFieldProps,
  ContextualHelp,
  Heading,
  Section,
  Text,
  Content,
  theme,
} from '../src';
import InfoTip from './components/InfoTip';
import { css } from '@emotion/react';

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

const contextualHelp = (
  <ContextualHelp>
    <Heading level={3} weight="heavy">
      Need help?
    </Heading>
    <Content>
      <Text elementType="p" textSize="small">
        If you're having issues accessing your account, contact our customer
        support team for help.
      </Text>
    </Content>
    <footer
      css={css`
        .ac-text {
          text-decoration: underline;
          color: ${theme.colors.arizeLightBlue};
        }
      `}
    >
      <Text textSize="small">Learn more about accounts</Text>
    </footer>
  </ContextualHelp>
);
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
      labelExtra={contextualHelp}
      placeholder="enter your amount"
      isRequired
      validationState={'invalid'}
      addonBefore="$"
      errorMessage="This field is required"
    />
    <TextField
      label="Disabled"
      labelExtra={contextualHelp}
      placeholder="enter your amount"
      isDisabled
      addonBefore="$"
      value="100"
    />
    <TextField
      label="Read Only"
      labelExtra={contextualHelp}
      placeholder="enter your amount"
      isReadOnly
      addonBefore="$"
      value="100"
      width={800}
    />
    <TextField
      label="With Description"
      description="This is the description"
      labelExtra={contextualHelp}
      placeholder="enter your amount"
      isReadOnly
      addonBefore="$"
      value="100"
      width={800}
    />
  </Form>
);

const Template: Story<TextFieldProps> = args => (
  <Form>
    <TextField {...args}>Label Text</TextField>
  </Form>
);

export function WithValidation() {
  const [val, setVal] = useState<string>('');
  const isValid = val.length > 10 && val.length < 15;
  return (
    <Form>
      <TextField label="Field" value={val} onChange={setVal} />
      <TextField
        label="Field"
        validationState={isValid ? 'valid' : 'invalid'}
        value={val}
        errorMessage={
          isValid ? null : 'Value must be between 10 and 15 characters'
        }
        addonBefore="Name"
        isRequired
        onChange={setVal}
      />
      <TextField
        validationState={isValid ? 'valid' : 'invalid'}
        value={val}
        errorMessage={
          isValid ? null : 'Value must be between 10 and 15 characters'
        }
        onChange={setVal}
      />
    </Form>
  );
}
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
