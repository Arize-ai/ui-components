import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ListBox, Item, ListBoxProps, Section, Provider } from '../src';
import { ThemeToggleWrap } from './components/ThemeToggleWrap';
const meta: Meta = {
  title: 'ListBox',
  component: ListBox,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ListBoxProps<string>> = args => (
  <ThemeToggleWrap>
    <ListBox style={{ width: 200 }} aria-label="Alignment" {...args}>
      <Item>Left</Item>
      <Item>Middle</Item>
      <Item>Right</Item>
    </ListBox>
  </ThemeToggleWrap>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

function SelectableListBox() {
  let options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' },
  ];
  let [animalId, setAnimalId] = React.useState<any>();

  return (
    <ThemeToggleWrap>
      <ListBox
        style={{ width: 200 }}
        aria-label="Animals"
        items={options}
        selectionMode="single"
        onSelectionChange={id => setAnimalId(id)}
      >
        {item => <Item>{item.name}</Item>}
      </ListBox>
      <p>Animal id: {animalId}</p>
    </ThemeToggleWrap>
  );
}
const ListOptions: Story<ListBoxProps<string>> = args => {
  return <SelectableListBox />;
};

export const listOptions = ListOptions.bind({});

const ListBoxWithSections: Story<ListBoxProps<string>> = args => {
  return (
    <Provider>
      <ListBox
        style={{ width: 200 }}
        aria-label="Pick your favorite"
        selectionMode="single"
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
      </ListBox>
    </Provider>
  );
};

export const ListBoxWithTransitions: Story<ListBoxProps<string>> = args => {
  const [items, setItems] = React.useState<string[]>([
    'Danni',
    'Devon',
    'Ross',
  ]);
  return (
    <Provider>
      <ListBox
        style={{ width: 200 }}
        aria-label="Pick your favorite"
        selectionMode="single"
        onSelectionChange={item => {
          setItems(['foo', 'bar', 'baz']);
        }}
      >
        <Section title="Animals">
          <Item key="Aardvark">Aardvark</Item>
          <Item key="Kangaroo">Kangaroo</Item>
          <Item key="Snake">Snake</Item>
        </Section>
        <Section title="People">
          {items.map(item => (
            <Item key={item}>{item}</Item>
          ))}
        </Section>
      </ListBox>
    </Provider>
  );
};

export const listBoxWithSections = ListBoxWithSections.bind({});

const ListBoxMultiSelect: Story<ListBoxProps<string>> = args => {
  return (
    <ThemeToggleWrap>
      <ListBox
        style={{ width: 200 }}
        aria-label="Pick your favorite"
        selectionMode="multiple"
        {...args}
      >
        <Item key="Aardvark">Aardvark</Item>
        <Item key="Kangaroo">Kangaroo</Item>
        <Item key="Snake">Snake</Item>
        <Item key="Danni">Danni</Item>
        <Item key="Devon">Devon</Item>
        <Item key="Ross">Ross</Item>
      </ListBox>
    </ThemeToggleWrap>
  );
};

export const listBoxMultiSelect = ListBoxMultiSelect.bind({});
