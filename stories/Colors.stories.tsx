import React, { CSSProperties } from 'react';
import { theme, Text, Heading } from '../src';
import { Meta, Story } from '@storybook/react';
// @ts-ignore
import { withDesign } from 'storybook-addon-designs';

const listStyle: CSSProperties = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  color: 'rgb(153,153,153)',
  display: 'flex',
  width: 1000,
  flexWrap: 'wrap',
  gap: '8px',
};
function Color({ color, name }) {
  return (
    <div
      style={{
        marginBottom: '5px',
        marginTop: '5px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          backgroundColor: color,
          width: '100px',
          height: '100px',
          marginRight: '10px',
          borderRadius: 3,
        }}
      />
      <Text style={{ userSelect: 'none' }}>{color}</Text>
      <Text>{name}</Text>
    </div>
  );
}
function Colors() {
  const colors = theme.colors;
  const colorsArray: JSX.Element[] = [];

  Object.keys(theme.colors).forEach(name => {
    if (theme.colors[name]) {
      colorsArray.push(<Color color={theme.colors[name]} name={name} />);
    }
  });

  const components = Object.keys(theme.components).map(key => {
    const colors = Object.keys(theme.components[key]);
    return (
      <section>
        <Heading>{key}</Heading>
        <ul style={listStyle}>
          {colors.map((c, i) => (
            <li key={i}>
              <Color color={theme.components[key][c]} name={c} />
            </li>
          ))}
        </ul>
      </section>
    );
  });

  return (
    <main>
      <ul style={listStyle}>
        {colorsArray.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
      <br />
      {components}
    </main>
  );
}

const meta: Meta = {
  title: 'Colors',
  component: Colors,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5mMInYH9JdJY389s8iBVQm/Component-Library?node-id=2%3A1499',
    },
  },
};

export default meta;

const Template: Story = args => <Colors />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
