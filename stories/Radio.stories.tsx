import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioGroup, RadioGroupProps } from '../src/radio';
import { Card, Text, ActionButton } from '../src';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';
const meta: Meta = {
  title: 'Radio',
  component: RadioGroup,
  parameters: {
    controls: {
      expanded: true,
    },
  },
};

export default meta;
const DefaultChildren = [
  <Radio key="dogs" value="dogs" label="Dogs" />,
  <Radio key="horses" value="horses" label="Horses" />,
  <Radio key="cats" value="cats" label="Cats" isDisabled />,
];
const Template: Story<RadioGroupProps> = args => {
  return (
    <ThemeToggleWrap>
      <Card title="Radio Info" style={{ width: 300 }}>
        <RadioGroup
          {...args}
          onChange={value => alert('clicked radio option ' + value)}
        >
          {args.children || DefaultChildren}
        </RadioGroup>
      </Card>
    </ThemeToggleWrap>
  );
};

const SelectorExample: Story<RadioGroupProps> = args => (
  <Card title="Radio Info" style={{ width: 500 }}>
    <RadioGroup
      {...args}
      onChange={value => alert('clicked radio option ' + value)}
    >
      <Radio value="dogs" label="Dogs">
        <Text>Dogs</Text>
      </Radio>
      <Radio value="cats" label="Cats">
        <Text>Cats</Text>
      </Radio>
      <Radio value="parrot" label="Parrot">
        <Text>Parrot</Text>
      </Radio>
      <Radio isDisabled value="frog" label="Frog">
        <Text>Frog (isDisabled)</Text>
      </Radio>
    </RadioGroup>
  </Card>
);

export const DefaultWithLabel = Template.bind({});

export const DefaultNoLabel = Template.bind({});

export const WithMoreChildren = Template.bind({});

export const Disabled = Template.bind({});

export const Selector = SelectorExample.bind({});

export const InlineButton = Template.bind({});

const SomeChildren = () => (
  <>
    <Radio value="dogs" label="Dogs" />
    <Radio value="cats" label="Cats" />
    <Radio value="cow" label="Cow">
      <Text textSize="small" weight="heavy">
        Text Child of Radio Component
      </Text>
      <ActionButton>Example Button</ActionButton>
    </Radio>
    <Radio value="parrot" label="Parrot" />
  </>
);

export const Gallery: Story<RadioGroupProps> = args => {
  return (
    <ThemeToggleWrap>
      <Card title="Radio Info" style={{ width: 300 }}>
        <RadioGroup {...args} variant="inline-button">
          {args.children || DefaultChildren}
        </RadioGroup>
        <br />
        <br />
        <RadioGroup {...args} variant="inline-button" size="compact">
          {args.children || DefaultChildren}
        </RadioGroup>
      </Card>
    </ThemeToggleWrap>
  );
};

/**
 * Controlled Radio Group
 * Use this to control the selected value of the radio group via props
 */
export const Controlled: Story<RadioGroupProps> = args => {
  const [value, setValue] = useState<string | null>('cats');
  return (
    <ThemeToggleWrap>
      <Text>Controlled Radio Group</Text>
      <Card title="Radio Info">
        <RadioGroup
          {...args}
          value={value}
          onChange={setValue}
          variant="inline-button"
        >
          {args.children || DefaultChildren}
        </RadioGroup>
        <br />
        <br />
        <RadioGroup {...args} variant="inline-button" size="compact">
          {args.children || DefaultChildren}
        </RadioGroup>
      </Card>
    </ThemeToggleWrap>
  );
};

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
  defaultValue: 'parrot',
  children: SomeChildren(),
};

DefaultWithLabel.args = {
  defaultValue: 'dogs',
  label: 'Here are some animals',
};

Selector.args = {
  defaultValue: 'dogs',
  variant: 'selector',
};

InlineButton.args = {
  defaultValue: 'dogs',
  variant: 'inline-button',
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
