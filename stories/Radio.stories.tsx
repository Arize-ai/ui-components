import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps, RadioGroup, RadioGroupProps } from '../src/radio';

const meta: Meta = {
  title: 'RadioGroup',
  component: RadioGroup,
};

export default meta;
const DefaultChildren = (
  <>
    <Radio value="dogs">Dogs</Radio>
    <Radio value="cats">Cats</Radio>
  </>
);
const Template: Story<RadioGroupProps> = (args) => (
  <RadioGroup {...args}>{args.children || DefaultChildren}</RadioGroup>
);

export const DefaultNoLabel = Template.bind({});

export const WithMoreChildren = Template.bind({});
const SomeChildren = () => (
  <>
    <Radio value="cats">Cats</Radio>
    <Radio value="cow">Cow</Radio>
    <Radio value="dog">Dog</Radio>
    <Radio value="parrot">Parrot</Radio>
  </>
);
WithMoreChildren.args = {
  children: SomeChildren(),
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
