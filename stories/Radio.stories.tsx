import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioGroup, RadioGroupProps } from '../src/radio';
import { Card, Text, ActionButton } from '../src';
const meta: Meta = {
  title: 'Radio',
  component: RadioGroup,
  parameters: {
    controls: {
      expanded: true,
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/Gs8BthCViFvipFh0gknwgg/Drift-Monitors?node-id=90%3A44',
    },
  },
};

export default meta;
const DefaultChildren = (
  <>
    <Radio value="dogs" label="Dogs" />
    <Radio value="cats" label="Cats" isDisabled />
  </>
);
const Template: Story<RadioGroupProps> = args => (
  <Card title="Radio Info" style={{ width: 300 }}>
    <RadioGroup
      {...args}
      onChange={value => alert('clicked radio option ' + value)}
    >
      {args.children || DefaultChildren}
    </RadioGroup>
  </Card>
);

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

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
