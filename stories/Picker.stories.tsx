import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  Item,
  Picker,
  PickerProps,
  Text,
  Button,
  ContextualHelp,
  Section,
} from '../src';
import { Provider } from '../src';
import { css } from '@emotion/react';
import InfoTip from './components/InfoTip';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';

const itemWithDescriptionCSS = css`
  display: flex;
  flex-direction: column;
`;

const meta: Meta = {
  title: 'Picker',
  component: Picker,
  argTypes: {
    children: {
      control: {
        type: 'text',
        default: 'Label',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=3084%3A9231&t=7kKAE3O8yOxScyZ3-1',
    },
  },
};

export default meta;

const Template: Story<PickerProps<string>> = args => (
  <ThemeToggleWrap>
    <Picker {...args}>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Picker>
  </ThemeToggleWrap>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const Controlled: Story<PickerProps<string>> = args => {
  const [frequency, setFrequency] = React.useState<string | undefined>(
    'rarely'
  );
  return (
    <ThemeToggleWrap>
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
      <Button variant="default" onClick={() => setFrequency(undefined)}>
        Reset
      </Button>
    </ThemeToggleWrap>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const controlled = Controlled.bind({});

const WithAddon: Story<PickerProps<string>> = args => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <ThemeToggleWrap>
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
    </ThemeToggleWrap>
  );
};

export const WithSections: Story<PickerProps<string>> = args => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <ThemeToggleWrap>
      <Picker
        isOpen
        {...args}
        selectedKey={frequency}
        onSelectionChange={selected => setFrequency(selected as string)}
      >
        <Section title="Animals">
          <Item key="Aardvark">Aardvark</Item>
          <Item key="Kangaroo">Kangaroo</Item>
          <Item key="Snake">Snake</Item>
        </Section>
        <Section title="People">
          <Item key="Danni">Danni</Item>
          <Item key="Devon">Devon</Item>
          <Item key="Ross">Ross</Item>
        </Section>
      </Picker>
      <br />
      <Text>Selected Value: {frequency}</Text>
    </ThemeToggleWrap>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const withAddon = WithAddon.bind({});

const Gallery: Story<void> = () => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <ThemeToggleWrap>
      <div
        css={css`
          & > * + * {
            margin-top: 16px;
          }
        `}
      >
        <Picker
          label="With Addon"
          addonBefore={'Frequency'}
          selectedKey={frequency}
          onSelectionChange={selected => setFrequency(selected as string)}
        >
          <Item key="rarely">Rarely</Item>
          <Item key="sometimes">Sometimes</Item>
          <Item key="always">Always</Item>
        </Picker>
        <Picker
          label="Simple"
          selectedKey={frequency}
          onSelectionChange={selected => setFrequency(selected as string)}
        >
          <Item key="rarely">Rarely</Item>
          <Item key="sometimes">Sometimes</Item>
          <Item key="always">Always</Item>
        </Picker>
        <Picker
          label="isQuiet"
          isQuiet
          selectedKey={frequency}
          onSelectionChange={selected => setFrequency(selected as string)}
          className="picker-quiet"
        >
          <Item key="rarely">Rarely</Item>
          <Item key="sometimes">Sometimes</Item>
          <Item key="always">Always</Item>
          <Item key="something">Something weirdly really long</Item>
        </Picker>
        <Picker
          label="disabled"
          isDisabled
          selectedKey={frequency}
          onSelectionChange={selected => setFrequency(selected as string)}
          className="picker-quiet"
        >
          <Item key="rarely">Rarely</Item>
          <Item key="sometimes">Sometimes</Item>
          <Item key="always">Always</Item>
        </Picker>
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
                <Text color="text-700" textSize="small">
                  Only run on occasion
                </Text>
              </div>
            </Item>
            <Item key="sometimes" textValue="Sometimes">
              <div css={itemWithDescriptionCSS}>
                <Text>Sometimes</Text>
                <Text color="text-700" textSize="small">
                  Run once a day so that things are synchronized on the daily
                </Text>
              </div>
            </Item>
            <Item key="always" textValue="Always">
              <div css={itemWithDescriptionCSS}>
                <Text>Always</Text>
                <Text color="text-700" textSize="small">
                  Run continuously so that everything stays up to date
                </Text>
              </div>
            </Item>
          </Picker>
          <Picker
            label="With label extra"
            labelExtra={<ContextualHelp>This is info</ContextualHelp>}
            selectedKey={frequency}
            onSelectionChange={selected => setFrequency(selected as string)}
          >
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Picker>
        </div>
      </div>
    </ThemeToggleWrap>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const gallery = Gallery.bind({});

const ItemsViaProps: Story<PickerProps<string>> = args => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <ThemeToggleWrap>
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
    </ThemeToggleWrap>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const itemsViaProps = ItemsViaProps.bind({});

let longList: Array<{ id: number; name: string }> = [];

for (var i = 0; i < 100; i++) {
  longList.push({ id: i, name: `Item ${i}` });
}

const Long: Story<PickerProps<string>> = args => {
  const [frequency, setFrequency] = React.useState<string>('rarely');
  return (
    <ThemeToggleWrap>
      <Picker
        addonBefore={'Frequency'}
        {...args}
        selectedKey={frequency}
        onSelectionChange={selected => setFrequency(selected as string)}
        items={longList}
        isOpen
      >
        {item => <Item>{item.name}</Item>}
      </Picker>
      <br />
      <Text>Selected Value: {frequency}</Text>
    </ThemeToggleWrap>
  );
};

export const Inline: Story<PickerProps<string>> = args => {
  const [subject, setSubject] = React.useState<string>('boy');
  const [food, setFood] = React.useState<string>('cake');
  return (
    <ThemeToggleWrap>
      <p
        css={css`
          display: flex;
          flex-direction: row;
          align-items: baseline;
          gap: 4px;
        `}
      >
        <Text>Once Upon a time there was a little</Text>
        <Picker
          {...args}
          selectedKey={subject}
          onSelectionChange={selected => setSubject(selected as string)}
          items={[
            { id: 'boy', name: 'body' },
            { id: 'dog', name: 'dog' },
          ]}
          isQuiet
        >
          {item => <Item key={item.id}>{item.name}</Item>}
        </Picker>
        <Text>Who liked</Text>
        <Picker
          {...args}
          selectedKey={food}
          onSelectionChange={selected => setFood(selected as string)}
          items={[
            { id: 'cake', name: 'cake' },
            { id: 'chips', name: 'chips' },
          ]}
          isQuiet
        >
          {item => <Item key={item.id}>{item.name}</Item>}
        </Picker>
      </p>
    </ThemeToggleWrap>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const long = Long.bind({});
