import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Item, Picker, PickerProps, Text } from '../src';
import { Provider } from '../src';

const meta: Meta = {
  title: 'Picker',
  component: Picker,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
        default: 'Label',
      },
    },
  },
};

export default meta;

const Template: Story<PickerProps<string>> = args => (
  <Provider>
    <Picker {...args}>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
  </Provider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const Controlled: Story<PickerProps<string>> = args => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <Provider>
      <Picker
        {...args}
        selectedKey={frequency}
        onSelectionChange={selected => setFrequency(selected as string)}
      >
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Picker>
      <br />
      <Text>Selected Value: {frequency}</Text>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const controlled = Controlled.bind({});

const WithAddon: Story<PickerProps<string>> = args => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <Provider>
      <Picker
        addonBefore={'Frequency'}
        {...args}
        selectedKey={frequency}
        onSelectionChange={selected => setFrequency(selected as string)}
      >
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Picker>
      <br />
      <Text>Selected Value: {frequency}</Text>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const withAddon = WithAddon.bind({});
