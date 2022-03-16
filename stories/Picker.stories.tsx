import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Item, Picker, PickerProps, Text, Field } from '../src';
import { Provider } from '../src';
import { css } from '@emotion/core';

const itemWithDescriptionCSS = css`
  display: flex;
  flex-direction: column;
`;

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

const Gallery: Story<void> = () => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <Provider>
      <div
        css={css`
          & > * + * {
            margin-top: 16px;
          }
        `}
      >
        <Field label="With Addon">
          <Picker
            addonBefore={'Frequency'}
            selectedKey={frequency}
            onSelectionChange={selected => setFrequency(selected as string)}
          >
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Picker>
        </Field>
        <Field label="Simple">
          <Picker
            selectedKey={frequency}
            onSelectionChange={selected => setFrequency(selected as string)}
          >
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Picker>
        </Field>
        <Field label="isQuiet">
          <Picker
            isQuiet
            selectedKey={frequency}
            onSelectionChange={selected => setFrequency(selected as string)}
            className="picker-quiet"
          >
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Picker>
        </Field>
        <div
          css={css`
            .ac-dropdown--picker,
            .ac-dropdown--picker .ac-dropdown-button {
              width: 250px;
            }
          `}
        >
          <Picker
            selectedKey={frequency}
            onSelectionChange={selected => setFrequency(selected as string)}
          >
            <Item key="rarely" textValue="Rarely">
              <div css={itemWithDescriptionCSS}>
                <Text>Rarely</Text>
                <Text color="white70" textSize="small">
                  Only run on occasion
                </Text>
              </div>
            </Item>
            <Item key="sometimes" textValue="Sometimes">
              <div css={itemWithDescriptionCSS}>
                <Text>Sometimes</Text>
                <Text color="white70" textSize="small">
                  Run once a day so that things are synchronized on the daily
                </Text>
              </div>
            </Item>
            <Item key="always" textValue="Always">
              <div css={itemWithDescriptionCSS}>
                <Text>Always</Text>
                <Text color="white70" textSize="small">
                  Run continuously so that everything stays up to date
                </Text>
              </div>
            </Item>
          </Picker>
        </div>
      </div>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const gallery = Gallery.bind({});

const ItemsViaProps: Story<PickerProps<string>> = args => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <Provider>
      <Picker
        addonBefore={'Frequency'}
        {...args}
        selectedKey={frequency}
        onSelectionChange={selected => setFrequency(selected as string)}
        items={[
          { id: 1, name: 'Aardvark' },
          { id: 2, name: 'Cat' },
          { id: 3, name: 'Dog' },
          { id: 4, name: 'Kangaroo' },
          { id: 5, name: 'Koala' },
          { id: 6, name: 'Penguin' },
          { id: 7, name: 'Snake' },
          { id: 8, name: 'Turtle' },
          { id: 9, name: 'Wombat' },
        ]}
      >
        {item => <Item>{item.name}</Item>}
      </Picker>
      <br />
      <Text>Selected Value: {frequency}</Text>
    </Provider>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const itemsViaProps = ItemsViaProps.bind({});
