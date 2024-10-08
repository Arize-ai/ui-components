import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { css } from '@emotion/react';
import {
  Form,
  TextField,
  TextFieldProps,
  ContextualHelp,
  Heading,
  Text,
  Content,
  Provider,
} from '../src';
import { ThemeSplitView } from './components/ThemeSplitView';

const meta: Meta = {
  title: 'TextField',
  component: TextField,

  parameters: {
    controls: { expanded: true },
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
          color: var(--global-primary-color);
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
  <ThemeSplitView>
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
  </ThemeSplitView>
);

const Template: Story<TextFieldProps> = args => (
  <Provider>
    <Form>
      <TextField {...args}>Label Text</TextField>
    </Form>
  </Provider>
);

export function WithValidation() {
  const [val, setVal] = useState<string>('');
  const isValid = val.length > 10 && val.length < 15;
  return (
    <Provider>
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
    </Provider>
  );
}
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
