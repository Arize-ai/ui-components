import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioGroup, RadioGroupProps } from '../src/radio';
import { ActionButton } from '../src/ActionButton';
const meta: Meta = {
  title: 'Radio',
  component: RadioGroup,
};

export default meta;
const DefaultChildren = (
  <>
    <Radio value="dogs" label="Dogs" />
    <Radio value="cats" label="Cats" />
  </>
);
const Template: Story<RadioGroupProps> = args => (
  <RadioGroup {...args}>{args.children || DefaultChildren}</RadioGroup>
);

export const DefaultWithLabel = Template.bind({});

export const DefaultNoLabel = Template.bind({});

export const WithMoreChildren = Template.bind({});

export const Disabled = Template.bind({});

const SomeChildren = () => (
  <>
    <Radio value="dogs" label="Dogs" />
    <Radio value="cats" label="Cats" />
    <Radio
      value="cow"
      label="Cow"
      onClick={e => {
        console.log('clicked radio option', e.target.value);
      }}
    >
      <ActionButton>Click Me</ActionButton>
    </Radio>
    <Radio value="parrot" label="Parrot" />
  </>
);

WithMoreChildren.args = {
  children: SomeChildren(),
  defaultValue: 'cats',
};

DefaultNoLabel.args = {
  defaultValue: 'parrot',
  children: SomeChildren(),
};

Disabled.args = {
  isDisabled: true,
  defaultValue: 'cats',
  children: SomeChildren(),
};

DefaultWithLabel.args = {
  defaultValue: 'parrot',
  children: SomeChildren(),
  label: 'Here are some animals',
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
